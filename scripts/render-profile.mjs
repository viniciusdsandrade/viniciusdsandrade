#!/usr/bin/env node
/**
 * Gera os cartões dos repositórios fixados e a grade de contribuições do
 * perfil como SVGs (tema claro e escuro) e, com --readme, reescreve o bloco
 * do README entre <!-- perfil:inicio --> e <!-- perfil:fim -->.
 *
 * O GitHub sempre mostra o README acima dos blocos nativos de fixados e de
 * contribuições, sem opção de reordenar. Trazer os dois para dentro do README
 * é o que permite apresentá-los antes do texto de apresentação.
 *
 * Fonte dos fixados: os fixados nativos do perfil. Se não houver nenhum (por
 * exemplo, depois de desafixar tudo para não duplicar na página), vale a lista
 * que já está no bloco do README, com os metadados atualizados.
 *
 * Uso:
 *   GITHUB_TOKEN=... node scripts/render-profile.mjs --out dist --readme README.md
 *
 * Os SVGs vão para a branch `output` (workflow perfil.yml); o README aponta
 * para eles pela URL raw dessa branch, então a main só muda quando os
 * fixados mudam.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const opts = parseArgs(process.argv.slice(2));
const login = process.env.PROFILE_LOGIN || process.env.GITHUB_REPOSITORY_OWNER || "viniciusdsandrade";
const repository = process.env.GITHUB_REPOSITORY || `${login}/${login}`;
const outDir = opts.out || "dist";
const branch = opts.branch || "output";
const rawBase = `https://raw.githubusercontent.com/${repository}/${branch}`;
// PROFILE_TOKEN (opcional): token do próprio dono do perfil, para ler o calendário mesmo com o
// perfil privado; sem ele vale o GITHUB_TOKEN do workflow.
const token = process.env.PROFILE_TOKEN || process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

const MARK_START = "<!-- perfil:inicio -->";
const MARK_END = "<!-- perfil:fim -->";

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif";

// Cores do Primer (GitHub) em cada tema.
const THEMES = {
  light: {
    fg: "#1f2328",
    muted: "#59636e",
    link: "#0969da",
    border: "#d1d9e0",
    cellStroke: "rgba(31,35,40,0.06)",
    levels: ["#eff2f5", "#aceebb", "#4ac26b", "#2da44e", "#116329"],
  },
  dark: {
    fg: "#f0f6fc",
    muted: "#9198a1",
    link: "#4493f8",
    border: "#3d444d",
    cellStroke: "rgba(240,246,252,0.05)",
    levels: ["#151b23", "#033a16", "#196c2e", "#2ea043", "#56d364"],
  },
};

const LEVEL_INDEX = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
const MONTHS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

// Octicons 16px.
const ICON_REPO =
  "M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z";
const ICON_STAR =
  "M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z";
const ICON_FORK =
  "M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z";

const REPO_FIELDS = `
  fragment Repo on Repository {
    name nameWithOwner url description isFork isPrivate
    owner { login }
    parent { nameWithOwner url }
    stargazerCount forkCount
    primaryLanguage { name color }
  }`;

const MAIN_QUERY = `
  query($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) { nodes { ...Repo } }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount contributionLevel weekday } }
        }
      }
    }
  }
  ${REPO_FIELDS}`;

const CARD_W = 400;
const PAD = 16;

await main();

async function main() {
  if (!token) fail("Defina GITHUB_TOKEN (ou GH_TOKEN) para consultar a API do GitHub.");

  const readmeText = opts.readme ? readFileSync(opts.readme, "utf8") : null;
  const data = await graphql(MAIN_QUERY, { login });
  if (!data.user) fail(`Usuário ${login} não encontrado.`);

  let repos = data.user.pinnedItems.nodes.filter((r) => r && !r.isPrivate);
  let source = "fixados do perfil";
  if (repos.length === 0 && readmeText) {
    repos = await fetchRepos(parseReadmeRefs(readmeText));
    source = "lista do README";
  }
  if (repos.length === 0) fail("Nenhum repositório fixado no perfil nem listado no README.");

  // Calendário zerado indica que a API não mostrou as contribuições (por exemplo, perfil privado
  // lido sem PROFILE_TOKEN); falhar mantém publicada a última grade boa em vez de uma grade vazia.
  if (data.user.contributionsCollection.contributionCalendar.totalContributions === 0) {
    fail("Calendário de contribuições zerado; com o perfil privado, configure o segredo PROFILE_TOKEN.");
  }

  const cards = repos.map((repo) => ({ repo, slug: slugOf(repo), layout: layoutCard(repo) }));
  const cardHeight = Math.max(...cards.map((c) => c.layout.minHeight));

  mkdirSync(join(outDir, "fixados"), { recursive: true });
  for (const theme of Object.keys(THEMES)) {
    for (const card of cards) {
      writeFileSync(join(outDir, "fixados", `${card.slug}-${theme}.svg`), renderCard(card, cardHeight, theme));
    }
    writeFileSync(join(outDir, `contribuicoes-${theme}.svg`), renderCalendar(data.user.contributionsCollection.contributionCalendar, theme));
  }
  writeFileSync(
    join(outDir, "README.md"),
    `Branch gerada por \`scripts/render-profile.mjs\` (workflow \`perfil.yml\`) na main. Não edite à mão.\n`,
  );

  const total = data.user.contributionsCollection.contributionCalendar.totalContributions;
  console.log(`[perfil] ${cards.length} fixados (${source}): ${cards.map((c) => c.repo.nameWithOwner).join(", ")}`);
  console.log(`[perfil] ${total} contribuições no último ano; SVGs em ${outDir}/`);

  if (opts.readme) {
    const next = replaceBlock(readmeText, renderBlock(cards));
    if (next !== readmeText) {
      writeFileSync(opts.readme, next);
      console.log(`[perfil] Bloco do ${opts.readme} atualizado.`);
    } else {
      console.log(`[perfil] Bloco do ${opts.readme} já estava em dia.`);
    }
  }
}

// ---------------------------------------------------------------- README

function renderBlock(cards) {
  const picture = (base, alt, width) =>
    `<picture><source media="(prefers-color-scheme: dark)" srcset="${rawBase}/${base}-dark.svg">` +
    `<img alt="${escapeXml(alt)}" src="${rawBase}/${base}-light.svg" width="${width}"></picture>`;

  const rows = [];
  for (let i = 0; i < cards.length; i += 2) {
    rows.push(
      cards
        .slice(i, i + 2)
        .map((c) => `<a href="${c.repo.url}">${picture(`fixados/${c.slug}`, c.repo.name, "49%")}</a>`)
        .join("\n"),
    );
  }

  return [
    MARK_START,
    "<!-- Gerado por scripts/render-profile.mjs (workflow perfil.yml). Com repositórios fixados no perfil, eles valem; sem nenhum fixado, valem os links abaixo (edite-os para trocar os cartões). -->",
    "",
    "Fixados",
    "",
    rows.join("\n\n"),
    "",
    picture("contribuicoes", "Contribuições no último ano", "100%"),
    "",
    MARK_END,
  ].join("\n");
}

function replaceBlock(text, block) {
  const start = text.indexOf(MARK_START);
  const end = text.indexOf(MARK_END);
  if (start === -1 || end === -1 || end < start) {
    fail(`README sem os marcadores ${MARK_START} e ${MARK_END}.`);
  }
  return text.slice(0, start) + block + text.slice(end + MARK_END.length);
}

function parseReadmeRefs(text) {
  const start = text.indexOf(MARK_START);
  const end = text.indexOf(MARK_END);
  if (start === -1 || end === -1) return [];
  const block = text.slice(start, end);
  const refs = [];
  for (const m of block.matchAll(/<a href="https:\/\/github\.com\/([^/"]+)\/([^/"]+)"><picture>/g)) {
    refs.push({ owner: m[1], name: m[2] });
  }
  return refs;
}

async function fetchRepos(refs) {
  if (refs.length === 0) return [];
  const fields = refs
    .map((r, i) => `r${i}: repository(owner: ${JSON.stringify(r.owner)}, name: ${JSON.stringify(r.name)}) { ...Repo }`)
    .join("\n");
  const data = await graphql(`query { ${fields} } ${REPO_FIELDS}`, {});
  return refs.map((_, i) => data[`r${i}`]).filter((r) => r && !r.isPrivate);
}

// ---------------------------------------------------------------- Cartões

function layoutCard(repo) {
  const nameX = PAD + 16 + 8;
  const pill = "Público";
  const pillW = Math.ceil(textWidth(pill, 12)) + 14;
  const ownName = repo.owner.login.toLowerCase() === login.toLowerCase();
  const name = truncate(ownName ? repo.name : repo.nameWithOwner, 14, CARD_W - PAD - nameX - pillW - 8, true);
  const pillX = nameX + Math.ceil(textWidth(name, 14, true)) + 8;

  let y = PAD + 20;
  let fork = null;
  if (repo.isFork && repo.parent) {
    fork = { text: truncate(`Fork de ${repo.parent.nameWithOwner}`, 12, CARD_W - 2 * PAD), baseline: y + 15 };
    y += 20;
  }

  const descTop = y + 8;
  const desc = repo.description ? wrap(repo.description.trim(), 12, CARD_W - 2 * PAD, 3) : [];
  y = descTop + desc.length * 18;

  return { name, nameX, pill, pillX, pillW, fork, desc, descTop, minHeight: y + 12 + 18 + PAD };
}

function renderCard(card, height, themeName) {
  const t = THEMES[themeName];
  const { repo, layout: l } = card;
  const parts = [];

  parts.push(`<rect x="0.5" y="0.5" width="${CARD_W - 1}" height="${height - 1}" rx="6" fill="none" stroke="${t.border}"/>`);
  parts.push(icon(ICON_REPO, PAD, PAD + 2, t.muted));
  parts.push(`<text x="${l.nameX}" y="${PAD + 15}" font-size="14" font-weight="600" fill="${t.link}">${escapeXml(l.name)}</text>`);
  parts.push(
    `<rect x="${l.pillX + 0.5}" y="${PAD + 1.5}" width="${l.pillW - 1}" height="19" rx="9.5" fill="none" stroke="${t.border}"/>`,
    `<text x="${l.pillX + l.pillW / 2}" y="${PAD + 15}" font-size="12" font-weight="500" fill="${t.muted}" text-anchor="middle">${l.pill}</text>`,
  );
  if (l.fork) {
    parts.push(`<text x="${PAD}" y="${l.fork.baseline}" font-size="12" fill="${t.muted}">${escapeXml(l.fork.text)}</text>`);
  }
  l.desc.forEach((line, i) => {
    parts.push(`<text x="${PAD}" y="${l.descTop + 13 + i * 18}" font-size="12" fill="${t.muted}">${escapeXml(line)}</text>`);
  });

  const footTop = height - PAD - 18;
  let x = PAD;
  if (repo.primaryLanguage) {
    const lang = repo.primaryLanguage;
    parts.push(
      `<circle cx="${x + 6}" cy="${footTop + 9}" r="6" fill="${lang.color || t.muted}"/>`,
      `<text x="${x + 16}" y="${footTop + 13}" font-size="12" fill="${t.muted}">${escapeXml(lang.name)}</text>`,
    );
    x += 16 + Math.ceil(textWidth(lang.name, 12)) + 16;
  }
  for (const [count, path] of [
    [repo.stargazerCount, ICON_STAR],
    [repo.forkCount, ICON_FORK],
  ]) {
    if (!count) continue;
    const label = formatNumber(count);
    parts.push(icon(path, x, footTop + 1, t.muted), `<text x="${x + 20}" y="${footTop + 13}" font-size="12" fill="${t.muted}">${label}</text>`);
    x += 20 + Math.ceil(textWidth(label, 12)) + 16;
  }

  return svg(CARD_W, height, `${repo.nameWithOwner}`, parts);
}

// ---------------------------------------------------------------- Contribuições

function renderCalendar(calendar, themeName) {
  const t = THEMES[themeName];
  const STEP = 13;
  const CELL = 10;
  const weeks = calendar.weeks;

  const boxY = 30;
  const gridX = PAD + 28;
  const monthBaseline = boxY + PAD + 9;
  const gridY = boxY + PAD + 18;
  const width = gridX + weeks.length * STEP - 3 + PAD;
  const legendTop = gridY + 7 * STEP - 3 + 12;
  const height = legendTop + CELL + PAD + 1;

  const parts = [
    `<style>.c{stroke:${t.cellStroke};stroke-width:1}${t.levels.map((c, i) => `.l${i}{fill:${c}}`).join("")}</style>`,
    `<text x="0" y="18" font-size="16" fill="${t.fg}">${formatNumber(calendar.totalContributions)} contribuições no último ano</text>`,
    `<rect x="0.5" y="${boxY + 0.5}" width="${width - 1}" height="${height - boxY - 1}" rx="6" fill="none" stroke="${t.border}"/>`,
  ];

  // Rótulo do mês na primeira semana em que ele aparece; descarta o primeiro se colar no
  // seguinte e o último se não couber antes do fim da grade.
  const labels = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const month = Number(week.contributionDays[0].date.slice(5, 7)) - 1;
    if (month !== lastMonth) labels.push({ i, month });
    lastMonth = month;
  });
  if (labels.length > 1 && labels[1].i - labels[0].i < 3) labels.shift();
  if (labels.length > 1 && weeks.length - labels[labels.length - 1].i < 3) labels.pop();
  for (const { i, month } of labels) {
    parts.push(`<text x="${gridX + i * STEP}" y="${monthBaseline}" font-size="12" fill="${t.fg}">${MONTHS[month]}</text>`);
  }

  for (const [row, label] of [
    [1, "Seg"],
    [3, "Qua"],
    [5, "Sex"],
  ]) {
    parts.push(`<text x="${PAD}" y="${gridY + row * STEP + 9}" font-size="12" fill="${t.fg}">${label}</text>`);
  }

  weeks.forEach((week, i) => {
    for (const day of week.contributionDays) {
      const level = LEVEL_INDEX[day.contributionLevel] ?? 0;
      parts.push(`<rect class="c l${level}" x="${gridX + i * STEP + 0.5}" y="${gridY + day.weekday * STEP + 0.5}" width="${CELL - 1}" height="${CELL - 1}" rx="2"/>`);
    }
  });

  const moreX = width - PAD;
  const cellsEnd = moreX - Math.ceil(textWidth("Mais", 12)) - 6;
  const cellsStart = cellsEnd - 5 * STEP + 3;
  parts.push(`<text x="${moreX}" y="${legendTop + 9}" font-size="12" fill="${t.muted}" text-anchor="end">Mais</text>`);
  t.levels.forEach((_, i) => {
    parts.push(`<rect class="c l${i}" x="${cellsStart + i * STEP + 0.5}" y="${legendTop + 0.5}" width="${CELL - 1}" height="${CELL - 1}" rx="2"/>`);
  });
  parts.push(`<text x="${cellsStart - 6}" y="${legendTop + 9}" font-size="12" fill="${t.muted}" text-anchor="end">Menos</text>`);

  return svg(width, height, `${formatNumber(calendar.totalContributions)} contribuições no último ano`, parts);
}

// ---------------------------------------------------------------- Utilitários

function svg(width, height, title, parts) {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="${FONT}" role="img">`,
    `<title>${escapeXml(title)}</title>`,
    ...parts,
    "</svg>",
    "",
  ].join("\n");
}

function icon(path, x, y, color) {
  return `<path transform="translate(${x} ${y})" fill="${color}" d="${path}"/>`;
}

// Largura aproximada (em em) da fonte do sistema; serve para quebrar linhas e posicionar rótulos.
function charWidth(ch) {
  if (/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(ch)) return 1.25;
  if (" .,:;'|!iljI".includes(ch)) return 0.28;
  if ("ftr()[]/-".includes(ch)) return 0.36;
  if ("mw".includes(ch)) return 0.84;
  if ("MW".includes(ch)) return 0.92;
  if (/[A-Z]/.test(ch)) return 0.68;
  if (/[0-9]/.test(ch)) return 0.56;
  return 0.55;
}

function textWidth(text, size, bold = false) {
  let em = 0;
  for (const ch of text) em += charWidth(ch);
  return em * size * (bold ? 1.06 : 1);
}

function truncate(text, size, max, bold = false) {
  if (textWidth(text, size, bold) <= max) return text;
  let out = text;
  while (out.length > 1 && textWidth(`${out}…`, size, bold) > max) out = out.slice(0, -1);
  return `${out.trimEnd()}…`;
}

function wrap(text, size, max, maxLines) {
  const lines = [];
  let current = "";
  for (const word of text.split(/\s+/)) {
    const candidate = current ? `${current} ${word}` : word;
    if (textWidth(candidate, size) <= max || !current) {
      current = candidate;
      continue;
    }
    lines.push(current);
    current = word;
  }
  if (current) lines.push(current);
  if (lines.length <= maxLines) return lines.map((l) => truncate(l, size, max));
  const kept = lines.slice(0, maxLines);
  kept[maxLines - 1] = truncate(`${kept[maxLines - 1]} ${lines[maxLines]}`, size, max);
  if (!kept[maxLines - 1].endsWith("…")) kept[maxLines - 1] = truncate(`${kept[maxLines - 1]}…`, size, max);
  return kept;
}

function slugOf(repo) {
  const own = repo.owner.login.toLowerCase() === login.toLowerCase();
  return (own ? repo.name : `${repo.owner.login}-${repo.name}`).replace(/[^A-Za-z0-9._-]/g, "-");
}

function formatNumber(n) {
  return n.toLocaleString("pt-BR");
}

function escapeXml(text) {
  return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

async function graphql(query, variables) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json", "User-Agent": `${login}-profile` },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) fail(`GraphQL HTTP ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors?.length) fail(`GraphQL: ${json.errors.map((e) => e.message).join("; ")}`);
  return json.data;
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) out[argv[i].slice(2)] = argv[i + 1]?.startsWith("--") ? true : argv[++i];
  }
  return out;
}

function fail(message) {
  console.error(`[perfil] ${message}`);
  process.exit(1);
}
