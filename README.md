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

Atuo como PJ pela [DEVANDRADE TECH](https://devandrade.tech), atendendo clientes do setor financeiro e de benefícios, e conduzo o desenvolvimento do Alpha Prime, SaaS do qual sou sócio.

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

**68 PRs aceitos** em dois projetos em Rust de [Fabio Akita](https://github.com/akitaonrails):

- **[ai-memory](https://github.com/akitaonrails/ai-memory)** ([meus PRs](https://github.com/akitaonrails/ai-memory/pulls?q=is%3Apr+author%3Aviniciusdsandrade)): memória de longo prazo e handoff entre CLIs de agentes de código, via MCP e HTTP. Implementei o `memory_handoff_list`, o desligamento limpo em SIGINT/SIGTERM, o scrub-before-cap de segredos, o namespace por usuário na exclusão de páginas e a restauração de backup com verificação.
- **[ai-usagebar](https://github.com/akitaonrails/ai-usagebar)** ([meus PRs](https://github.com/akitaonrails/ai-usagebar/pulls?q=is%3Apr+author%3Aviniciusdsandrade)): monitor de cotas e créditos de planos de IA para Linux, macOS e Windows. Implementei contas nomeadas por provedor com detecção no Keychain do macOS, expurgo de segredos em subprocessos e mensagens de erro, e pacote AUR com verificação de assinatura PGP.

---

## Trajetória

- `ago/2026–atual` **DEVANDRADE TECH** (PJ): K2 Partnering Solutions / Pluxee, liquidação de benefícios · NTConsult / Agibank, crédito consignado CLT · Alpha Prime, sócio e responsável técnico
- `jan/2026–ago/2026` **Code Group / Núclea**: liquidação interbancária de cartões no SPB
- `jan/2025–jan/2026` **iFood**: eventos do ciclo de vida do pedido
- `jun/2023–jan/2025` **Kepha Venture Builder**: renderização de layouts publicitários

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

- **Análise e Desenvolvimento de Sistemas**, FATEC Campinas, conclusão prevista para dez/2026
- **Técnico em Desenvolvimento de Sistemas**, COTUCA/UNICAMP, dez/2024
- AlgaWorks Especialista em Microsserviços (650 h) · FullCycle 4.0 (380 h) · DevSuperior Spring Boot (320 h)
