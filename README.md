<div align="center">

# Vinicius dos Santos Andrade

**Full Stack Java Developer | Java, Kotlin & TypeScript | +4 years**

Building resilient financial, document-management, and high-scale backend systems.

Campinas, SP, Brazil - Remote worldwide · Hybrid in Sao Paulo

Open to Junior/Mid-level backend and full-stack roles.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/viniciusdsandrade/)
[![Email](https://img.shields.io/badge/Email-%23EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vinicius.andrade.tech@gmail.com)
[![LeetCode](https://img.shields.io/badge/LeetCode-%23FFA116.svg?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/vinidsandrade/)
[![Profile Views](https://komarev.com/ghpvc/?username=viniciusdsandrade&color=blueviolet&style=for-the-badge)](https://github.com/viniciusdsandrade)

</div>

---

## About

Software developer with a strong backend foundation in **Java**, **Kotlin**, **Spring**, REST APIs, microservices, and distributed systems. I work across the stack when needed, especially with **Angular**, and I like systems that are observable, testable, secure, and reliable in production.

Currently working at **Code Group / Nuclea**, evolving mission-critical financial infrastructure around card clearing, settlement, reconciliation, billing, IBM MQ integrations, DB2 performance, and production diagnostics.

Previously at **iFood Tech**, supporting order lifecycle services in an operation of roughly **160M orders/month**, and at **Kepha Venture Builder** and **Compass UOL**, where I worked on Java systems, parameterized business flows, CQRS, WebFlux, and the Sicredi X BFF.

**Languages**: Portuguese (native) · English (B2) · Spanish (A2)

---

## Impact Snapshot

| Area | Evidence |
|------|----------|
| Financial systems | Maintained SLC card clearing and settlement flows under SPB protocol with Java, DB2, IBM WebSphere, and IBM MQ |
| Performance | Reduced a critical DB2 reconciliation query from **14 minutes to 7 seconds** through access-plan analysis and SQL rewrite |
| Scale | Worked on iFood order lifecycle services in a **~160M orders/month** operation |
| Product ownership | Architected and built Alpha Prime Gestao ECV, a production SaaS for ISO 9001 document management and audit preparation |
| Quality | Built systems with strong test discipline: JUnit 5, Mockito, REST Assured, Testcontainers, JaCoCo, Pitest, Vitest, and CI security gates |

---

## Career

| Period | Company | Role | Highlights |
|:------:|---------|------|------------|
| 2026 - now | **Code Group / Nuclea** | Mid-Level Full Stack Java Developer | SLC card clearing/settlement, DB2 tuning, IBM MQ, WebSphere, billing, production diagnostics |
| 2025 | **iFood Tech** | Junior Java/Kotlin Software Developer | Order lifecycle events, AWS SNS/SQS fanout, Logz.io, Datadog, p95/p99 observability, 95% branch coverage |
| 2023 - 2025 | **Kepha Venture Builder** | Junior Java Software Developer | Java 17 advertising layout platform, generic templates, JSON-driven configuration, faster campaign generation |
| 2023 | **Compass UOL** | Java Software Development Intern | Sicredi X BFF, CQRS, Spring WebFlux, PagBank/PagSeguro payment support, integration tests |

<details>
<summary><b>Full professional details</b></summary>
<br/>

### Code Group / Nuclea - Mid-Level Full Stack Java Developer
`Jan 2026 - Present` · Java, Apache Wicket, DB2, IBM WebSphere, IBM MQ · Remote

- Developed and maintained **SLC**, a mission-critical interbank card clearing and settlement platform under the Brazilian SPB protocol.
- Worked with Java 8, Apache Wicket, DB2, IBM WebSphere, IBM MQ, cryptography, digital certificates, and financial reconciliation flows.
- Investigated DB2 performance using catalog analysis, cardinality, access plans, and SQL rewrites, reducing a critical file query from **14 minutes to 7 seconds**.
- Corrected the Base Centralizada query by replacing an inadequate source with a production-validated operational mirror, eliminating an N+1 pattern and keeping final response time below **3 seconds** without adding a new index.
- Implemented the IAP card-brand billing module with progressive charging ranges, DB2 schema migration through Liquibase, and CSV/ZIP report generation.
- Diagnosed repeated production deploy failures caused by JMS pool saturation at **300/300 connections**, using Tivoli Performance Viewer to document root cause, impact, and remediation.

### iFood Tech - Junior Java/Kotlin Software Developer
`Jan 2025 - Dec 2025` · Java, Kotlin, AWS SNS/SQS, Datadog, Logz.io · Remote

- Implemented new order lifecycle events with end-to-end traceability and centralized logs over Logz.io, OpenSearch, and Kibana.
- Modeled asynchronous AWS SNS to SQS fanout integrations with timeout, retries, circuit breaker, and multi-region resilience patterns.
- Built 10 Datadog dashboards correlating APM traces, p95/p99 latency, traffic, throughput, 4xx/5xx error rates, and saturation metrics.
- Added unit and integration tests with JUnit 5, Mockito, REST Assured, and JaCoCo, raising critical-module branch coverage to around **95%**.

### Kepha Venture Builder - Junior Java Software Developer
`Jul 2023 - Jan 2025` · Java 17 · Remote

- Maintained production systems for advertising layout processing across multiple client campaigns.
- Transformed fixed layout models into generic, parameterizable templates with JSON-driven configuration.
- Reduced manual effort in the creation of new ad variants and helped remove bottlenecks between design and operations.

### Compass UOL - Java Software Development Intern
`Jan 2023 - Jul 2023` · Java, Spring WebFlux · Remote

- Supported a CQRS architecture processing thousands of requests per minute.
- Helped cover central APIs with unit and integration tests, contributing to more than 80% coverage.
- Participated in the development and maintenance of the **Sicredi X** Backend-for-Frontend, serving around **1M daily active users**.

</details>

---

## Tech Stack

#### Languages & Application Development

![Java](https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-%236DB33F.svg?style=for-the-badge&logo=springsecurity&logoColor=white)
![Spring WebFlux](https://img.shields.io/badge/Spring%20WebFlux-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Spring AI](https://img.shields.io/badge/Spring%20AI-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Apache Wicket](https://img.shields.io/badge/Apache%20Wicket-%23D22128.svg?style=for-the-badge&logo=apache&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

#### Data, Messaging & Infrastructure

![DB2](https://img.shields.io/badge/IBM%20DB2-%23052FAD.svg?style=for-the-badge&logo=ibm&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-%23DC382D.svg?style=for-the-badge&logo=redis&logoColor=white)
![Flyway](https://img.shields.io/badge/Flyway-%23CC0200.svg?style=for-the-badge&logo=flyway&logoColor=white)
![Liquibase](https://img.shields.io/badge/Liquibase-%232962FF.svg?style=for-the-badge&logo=liquibase&logoColor=white)
![IBM MQ](https://img.shields.io/badge/IBM%20MQ-%23052FAD.svg?style=for-the-badge&logo=ibm&logoColor=white)
![AWS SNS/SQS](https://img.shields.io/badge/AWS%20SNS%2FSQS-%23FF9900.svg?style=for-the-badge&logo=amazonsqs&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-%23FF6600.svg?style=for-the-badge&logo=rabbitmq&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![AWS Lightsail](https://img.shields.io/badge/AWS%20Lightsail-%23FF9900.svg?style=for-the-badge&logo=amazonaws&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-%23F38020.svg?style=for-the-badge&logo=cloudflarepages&logoColor=white)

#### Quality, Delivery & Observability

![JUnit 5](https://img.shields.io/badge/JUnit%205-%2325A162.svg?style=for-the-badge&logo=junit5&logoColor=white)
![Mockito](https://img.shields.io/badge/Mockito-%2378A641.svg?style=for-the-badge)
![Testcontainers](https://img.shields.io/badge/Testcontainers-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white)
![REST Assured](https://img.shields.io/badge/REST%20Assured-%2343B02A.svg?style=for-the-badge)
![JaCoCo](https://img.shields.io/badge/JaCoCo-%23E3242B.svg?style=for-the-badge)
![Pitest](https://img.shields.io/badge/Pitest-%23E34F26.svg?style=for-the-badge)
![Vitest](https://img.shields.io/badge/Vitest-%236E9F18.svg?style=for-the-badge&logo=vitest&logoColor=white)
![SonarQube](https://img.shields.io/badge/SonarQube-%234E9BCD.svg?style=for-the-badge&logo=sonarqube&logoColor=white)
![Trivy](https://img.shields.io/badge/Trivy-%231904DA.svg?style=for-the-badge&logo=aqua&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-%232088FF.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![GitLab CI](https://img.shields.io/badge/GitLab%20CI-%23FC6D26.svg?style=for-the-badge&logo=gitlab&logoColor=white)
![Datadog](https://img.shields.io/badge/Datadog-%23632CA6.svg?style=for-the-badge&logo=datadog&logoColor=white)
![Logz.io](https://img.shields.io/badge/Logz.io-%23005571.svg?style=for-the-badge)

---

## Featured Projects

| Project | Stack | Description |
|---------|-------|-------------|
| [**Alpha Prime Gestao ECV**](https://github.com/viniciusdsandrade/ecv-document-portal) · [Live](https://iso9001vistoriaveicular.com.br/) | Kotlin · Spring Boot 4 · Angular 21 · MySQL · AWS · Cloudflare | Production SaaS for ISO 9001 document management, audit preparation, AI-assisted validation, OAuth2/JWT, MFA, RBAC, encrypted uploads, Outbox messaging, WhatsApp/email automation, and PIX billing foundations |
| [**DSCommerce**](https://github.com/viniciusdsandrade/dscommerce-with-spring) | Java · Spring Boot | E-commerce backend with catalog, order, role-based access, and REST API patterns |
| [**Voll Med API**](https://github.com/viniciusdsandrade/voll-med-api-with-spring) | Java · Spring Boot · MySQL | REST API for medical clinic scheduling and patient records |
| [**Spring Security**](https://github.com/viniciusdsandrade/spring-security-with-java-and-kotlin) | Java · Kotlin · Spring Security | OAuth2/JWT authentication and authorization examples |
| [**DS&A Expert**](https://github.com/viniciusdsandrade/data-structures-and-algorithms-expert) | Java | Data structures and algorithms implemented from scratch |
| [**LeetCode Solutions**](https://github.com/viniciusdsandrade/leetcode-problems) | Java | Algorithm problem solutions and practice notes |

---

## GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=viniciusdsandrade&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true&show_icons=true" height="180"/>
  &nbsp;
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=viniciusdsandrade&theme=tokyonight&hide_border=true" height="180"/>
</div>

<br/>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=viniciusdsandrade&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true&layout=compact&langs_count=10" width="420"/>
</div>

<br/>

<div align="center">

![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username=viniciusdsandrade&theme=tokyo-night&hide_border=true)

</div>

---

## Education & Courses

**Systems Analysis and Development** - FATEC SP (expected Dec 2025) · **Systems Development Technician** - COTUCA/UNICAMP (completed Dec 2024)

**Courses**: Microservices Specialist - AlgaWorks (210h) · FullCycle 4.0 · Spring Boot & Spring Framework REST API - DevSuperior (320h)
