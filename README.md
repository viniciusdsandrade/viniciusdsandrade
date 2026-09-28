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

Desenvolvo e sustento backends em Java e Kotlin que movimentam dinheiro e pedidos em volume: liquidação de pagamentos, crédito, benefícios e uma plataforma de consumo com milhões de pedidos por dia. Trabalho com Spring, mensageria (Kafka, IBM MQ, SNS/SQS), bancos relacionais e observabilidade, e deixo teste, runbook e decisão registrada para quem vem depois.

Atendo pela [DEVANDRADE TECH](https://devandrade.tech): diagnóstico de sistemas críticos, execução no time do cliente e segunda opinião de arquitetura.

**Idiomas:** PT-BR nativo · EN B2 · ES A2

---

## Resultados

| Problema | Resultado |
|---|---|
| Consulta crítica de conciliação num sistema de liquidação financeira | De **14 min para 7 s**: reescrita de SQL, decomposição em fases e índice composto validado no plano de execução |
| Padrão N+1 numa consulta de alto volume, no mesmo sistema | Abaixo de **3 s**, sem índice novo |
| Deploys falhando em sequência em produção | Causa raiz evidenciada (pool de conexões de mensageria saturado), o que destravou a correção |
| Eventos do ciclo de vida do pedido numa plataforma com milhões de pedidos por dia | Rastreamento ponta a ponta, fanout SNS→SQS multirregião com retries e circuit breaker, golden signals no Datadog e ~95% de cobertura de branches nos módulos críticos |
| Revisão documental manual num SaaS de auditoria ISO 9001 (produto próprio, sócio e responsável técnico) | De **8 h para 30–90 min** com IA multimodal e OCR; segurança fail-closed (OAuth2/JWT, MFA, RBAC, AES-GCM, antivírus no upload); outbox transacional; 95% de cobertura de testes, com teste de mutação |

---

## Trajetória

- `2026–atual` **K2 Partnering Solutions / Pluxee** e **NTConsult / Agibank** — benefícios e crédito consignado (Java 21, Kafka, Camunda, FICO Blaze)
- `2026` **Code Group / Núclea**
- `2025` **iFood**
- `2023–2025` **Kepha Venture Builder**
- `2023` **Compass UOL** (estágio)

---

## Stack

| Grupo | Ferramentas |
|-------|-------------|
| Backend | Java · Kotlin · Spring Boot · Spring Security · WebFlux · Spring AI · Camunda · FICO Blaze Advisor |
| Dados e mensageria | Kafka · IBM MQ · AWS SNS/SQS · RabbitMQ · DB2 · PostgreSQL · MySQL · Redis · Flyway · Liquibase |
| Infra e qualidade | Docker · Kubernetes (AWS EKS) · GitLab CI · GitHub Actions · Consul · Vault · Nginx · Cloudflare Pages · Datadog · OpenSearch · Logz.io · SonarQube · Trivy · Pitest · JMeter |
| Frontend, quando precisa | TypeScript · Angular |

---

## Projeto em destaque

**Alfha Prime Gestão ECV** ([produção](https://iso9001vistoriaveicular.com.br/)): SaaS de gestão documental e auditoria ISO 9001 em Kotlin/Spring Boot e Angular, com criptografia, IA multimodal, outbox transacional, WhatsApp/e-mail e PIX. Sou sócio e responsável técnico; o código é privado.

---

## Formação

- **ADS** - FATEC Campinas, conclusão dez/2025
- **Técnico em Desenvolvimento de Sistemas** - COTUCA/UNICAMP, dez/2024
- AlgaWorks Microsserviços · FullCycle 4.0 · DevSuperior Spring Boot REST API
