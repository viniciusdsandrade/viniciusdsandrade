<div align="center">

# Vinícius Andrade

**Backend Java e Kotlin para sistemas financeiros e de alto volume**

Campinas, SP · remoto ou híbrido em SP · [devandrade.tech](https://devandrade.tech)

[![Site](https://img.shields.io/badge/devandrade.tech-0b2344.svg?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://devandrade.tech)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/viniciusdsandrade/)
[![E-mail](https://img.shields.io/badge/E--mail-%23EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contato@devandrade.tech)
[![LeetCode](https://img.shields.io/badge/LeetCode-%23FFA116.svg?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/vinidsandrade/)

</div>

---

## O que eu faço

Desenvolvo e sustento backends em Java e Kotlin que movimentam dinheiro e pedidos em volume: crédito consignado CLT integrado à Dataprev, liquidação do arranjo de pagamento de benefícios, liquidação interbancária de cartões no SPB e eventos de pedido numa plataforma com ~160 milhões de pedidos por mês. Trabalho com Spring Boot, mensageria (Kafka, IBM MQ, SNS/SQS, Azure Service Bus), SQL e observabilidade, e deixo teste, runbook e decisão registrada para quem vem depois.

Sou fundador e sócio-administrador da [DEVANDRADE TECH](https://devandrade.tech), consultoria em engenharia de software. É por meio dela que presto serviços técnicos a clientes dos setores financeiro e de benefícios e conduzo o desenvolvimento do Alpha Prime, SaaS de gestão para empresas de vistoria veicular do qual sou cofundador.

**Idiomas:** PT-BR nativo · EN B2 · ES A2

---

## Resultados

| Contexto | Resultado |
|---|---|
| Consulta crítica de conciliação na liquidação interbancária de cartões (SPB) | De **14 min para 7 s** (120×) com reescrita de SQL, decomposição em fases e índice composto validado no plano de execução |
| N+1 numa consulta de alto volume no mesmo sistema | Resposta abaixo de **3 s**, sem índice novo nem DBA |
| Deploys falhando em sequência em produção | Causa raiz encontrada (pool JMS saturado, 300/300 conexões), o que destravou os rollouts |
| Erro de duplicidade da Dataprev na averbação do consignado | Tratamento automatizado (Strategy e testes de mutação) que **acabou com a aprovação manual** de contratos parados em erro |
| ~3% de HTTP 500 na averbação em teste de carga | Causa isolada: conflito de optimistic locking no MongoDB |
| Eventos do ciclo de vida do pedido (~160 milhões de pedidos/mês) | Tracing ponta a ponta, fanout SNS→SQS multirregião com retries e circuit breaker, golden signals no Datadog e ~95% de cobertura de branches |
| Auditoria documental manual num SaaS ISO 9001 (produto próprio) | De **8 h para 30–90 min** com OCR e IA multimodal; 95% de cobertura e testes de mutação |

---

## Código aberto

**136 PRs aceitos**, mais **15 em revisão** (472 commits, +19,1k / −2,0k linhas) em projetos com grandes comunidades no GitHub: infraestrutura em Rust para agentes de IA, engenharia reversa e ferramentas de sistema:

- **[ai-memory](https://github.com/akitaonrails/ai-memory)** ([meus PRs](https://github.com/akitaonrails/ai-memory/pulls?q=is%3Apr+author%3Aviniciusdsandrade) · [detalhes](https://devandrade.tech/opensource/ai-memory/)): memória de longo prazo e handoff entre CLIs de agentes de código, via MCP e HTTP (**58 PRs aceitos**). Implementei a listagem de bastões pendentes (`memory_handoff_list`), desligamento limpo em SIGINT/SIGTERM, scrub-before-cap de segredos antes de cortes de texto, isolamento por usuário na exclusão de páginas de contexto, restauração de backup com verificação sem perda de dados atuais e persistência com mais de 2 mil conversas.
- **[ai-usagebar](https://github.com/akitaonrails/ai-usagebar)** ([meus PRs](https://github.com/akitaonrails/ai-usagebar/pulls?q=is%3Apr+author%3Aviniciusdsandrade) · [detalhes](https://devandrade.tech/opensource/ai-usagebar/)): monitor de cotas, saldos e créditos de planos de IA para Linux, macOS e Windows (**63 PRs aceitos**). Implementei contas nomeadas por provedor com detecção no Keychain do macOS, expurgo e sanitização de segredos em subprocessos herdados e mensagens de erro, pacote AUR com verificação de integridade e correções de alertas críticos nos widgets do KDE Plasma e Windows.
- **[rea](https://github.com/morluto/rea)** ([meus PRs](https://github.com/morluto/rea/pulls?q=is%3Apr+author%3Aviniciusdsandrade) · [detalhes](https://devandrade.tech/opensource/rea/)): ferramenta de engenharia reversa para agentes de IA com 322k+ ⭐ (**7 PRs aceitos**, mais 3 em revisão). Implementei validação de entrada contra caminhos de arquivo inválidos na raiz de análise, suporte à leitura de módulos WebAssembly com caracteres nulos em seções, separação de fatias Intel em binários universais do macOS sem falsos alarmes de corrupção, e tolerância a arquivos vazios na configuração do Hermes.
- **[Mole](https://github.com/tw93/Mole)** ([meus PRs](https://github.com/tw93/Mole/pulls?q=is%3Apr+author%3Aviniciusdsandrade) · [detalhes](https://devandrade.tech/opensource/mole/)): utilitário de terminal para limpeza profunda, manutenção e monitoramento do macOS com 71k+ ⭐ (**8 PRs aceitos**, mais 7 em revisão). Implementei reparo das listas do Finder compatível com macOS 15+ (Sequoia), auditoria de integridade de LaunchDaemons e itens de inicialização em segundo plano, proteção contra travamento no monitoramento de bateria com timeout de 1 s, remoção de resíduos de depuração do visionOS no Xcode e resolução segura de plataforma no instalador.
- **[rtk](https://github.com/rtk-ai/rtk)** ([meus PRs](https://github.com/rtk-ai/rtk/pulls?q=is%3Apr+author%3Aviniciusdsandrade) · [detalhes](https://devandrade.tech/opensource/rtk/)): proxy CLI em Rust para redução de 60% a 90% no consumo de tokens de IA com 83k+ ⭐ (**5 PRs em revisão**). Implementei tratamento seguro de erros de escrita em stdout/stderr para evitar crashes por SIGABRT em compilações de release, resolução de shell e plataforma no task runner, bypass de telemetria no modo reescrita e leitor de binlogs MSBuild.

---

## Trajetória

- `ago/2026–atual` **DEVANDRADE TECH (PJ)** — Consultoria técnica backend e produto próprio:
  - **K2 Partnering Solutions / Pluxee** (`set/2026–atual`) · *Liquidação de benefícios*
    - Construção do serviço de liquidação (*settlement*) do arranjo de pagamento de benefícios sob regras e prazos regulatórios do PAT, em Java e Spring Boot com arquitetura hexagonal (verificada por ArchUnit).
    - Orquestração em Kubernetes na Azure com PostgreSQL e Azure Service Bus; integração da posição financeira do core e geração de arquivos de conciliação e liquidação definitiva para o credenciador em layout posicional (integração por blob, manifest e evento).
  - **NTConsult / Agibank** (`ago/2026–atual`) · *Crédito consignado CLT*
    - Desenvolvimento e evolução de microsserviços de averbação, refinanciamento e CCB integrados à Dataprev (Java 21, Spring Boot, Kafka, Camunda, MongoDB em AWS EKS).
    - Modelagem do refinanciamento N:1 com regras de elegibilidade e precificação no FICO Blaze Advisor (SRL) e tratamento de duplicidade via padrão Strategy com testes de mutação (Pitest), eliminando 100% da aprovação manual de contratos parados em erro.
    - Sustentação em produção dos fluxos orquestrados no Camunda via scripts sobre a REST API do engine com dry run; diagnóstico de concorrência (*optimistic locking*) no MongoDB sob carga.
  - **Alpha Prime Gestão ECV** (`jan/2026–atual`) · *Sócio e responsável técnico*
    - Concepção e liderança técnica de ponta a ponta do SaaS de gestão documental e auditoria ISO 9001 para empresas credenciadas de vistoria veicular ([produção](https://iso9001vistoriaveicular.com.br/)), com faturamento recorrente.
    - Monorepo com backend Kotlin e Spring Boot 4, frontend web em Angular 21, apps nativos iOS (SwiftUI) e Android (Jetpack Compose), esteira de validação com OCR e IA multimodal (Spring AI) e outbox transacional com 13 workers.

- `jan/2026–ago/2026` **Code Group / Núclea** · *Liquidação interbancária de cartões no SPB*
  - Desenvolvimento e sustentação do SLC, plataforma crítica de compensação e liquidação interbancária sob protocolo do Banco Central (Java 8, DB2, WebSphere, IBM MQ, Apache Wicket).
  - Otimização de consulta crítica de conciliação em DB2 de **14 min para 7 s** (120×) via reescrita SQL, decomposição em fases e índice composto validado no `db2exfmt`.
  - Eliminação de N+1 na Base Centralizada (resposta < 3 s sem novos índices nem DBA via espelho operacional e `ROW_NUMBER`), faturamento progressivo das bandeiras (IAP) com migrações Liquibase e diagnóstico de saturação do pool JMS (300/300 conexões), destravando rollouts em produção.

- `jan/2025–jan/2026` **iFood** · *Eventos do ciclo de vida do pedido*
  - Processamento e rastreamento de eventos em plataforma com escala de **~160 milhões de pedidos por mês** (Java e Kotlin), com distributed tracing ponta a ponta e logs centralizados no Logz.io (OpenSearch).
  - Modelagem de integrações assíncronas SNS→SQS em fanout multirregião na AWS com timeouts, circuit breakers e retries com backoff exponencial para absorver picos de tráfego.
  - Observabilidade pelos quatro Golden Signals no Datadog (latência p95/p99, tráfego, erros e saturação) e elevação da cobertura de branches para **~95%** com JUnit 5, Mockito e RestAssured.

- `jun/2023–jan/2025` **Kepha Venture Builder** · *Renderização de layouts publicitários*
  - Sustentação em produção do motor de processamento e renderização de layouts publicitários em Java 17, com foco em alta disponibilidade e resolução ágil de incidentes.
  - Refatoração de modelos fixos para templates parametrizáveis e reutilizáveis, acelerando o tempo de lançamento de campanhas e eliminando gargalos operacionais entre design e engenharia.

---

## Stack

| Grupo | Ferramentas |
|---|---|
| Linguagens | Java (8 a 25) · Kotlin · SQL · Rust · TypeScript |
| Backend | Spring Boot · Spring Security · Spring Data JPA · WebFlux · Spring AI · Camunda · FICO Blaze Advisor · arquitetura hexagonal · Outbox |
| Dados e mensageria | Kafka · IBM MQ · AWS SNS/SQS · Azure Service Bus · RabbitMQ · DB2 · PostgreSQL · MongoDB · MySQL · Redis · Flyway · Liquibase |
| Infra e observabilidade | Docker · Kubernetes (AWS EKS e Azure) · GitHub Actions · GitLab CI · Consul · Vault · Nginx · Cloudflare Pages · Datadog · Grafana · OpenSearch · Logz.io |
| Qualidade | JUnit 5 · Mockito · Testcontainers · ArchUnit · JaCoCo · Pitest · JMeter · SonarQube · Trivy |
| Frontend e mobile, quando precisa | Angular · SwiftUI · Jetpack Compose |

---

## Projeto em destaque

**Alpha Prime Gestão ECV** ([produção](https://iso9001vistoriaveicular.com.br/)): SaaS de gestão documental e auditoria ISO 9001 para empresas credenciadas de vistoria veicular, com faturamento recorrente. Backend em Kotlin e Spring Boot 4, web em Angular 21 e apps nativos iOS e Android; segurança fail-closed (OAuth2/JWT, MFA, RBAC, AES-GCM, antivírus no upload), IA multimodal com failover entre provedores e outbox transacional com 13 workers (WhatsApp, e-mail, PIX). Sou sócio e responsável técnico; o código é privado.

---

## Formação

- **Análise e Desenvolvimento de Sistemas**, FATEC Campinas, dez/2025
- **Técnico em Desenvolvimento de Sistemas**, COTUCA/UNICAMP, dez/2024
- AlgaWorks Especialista em Microsserviços (650 h) · FullCycle 4.0 (380 h) · DevSuperior Spring Boot (320 h)
