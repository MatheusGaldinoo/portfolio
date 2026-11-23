# PORTFOLIO_SPEC.md — Diretrizes de Refatoração e Posicionamento

## 1. Objetivo e Públicos-Alvo
* **Meta Principal:** Conquistar vaga de **Estágio ou Desenvolvedor Júnior** como **AI Engineer / AI Builder** ou **Full Stack Engineer**.
* **Públicos do Site:**
  1. **Recrutadores (Triagem rápida — 15s):** Identificam rapidamente stack, experiência real (VIRTUS), formação (Ciência da Computação — UFCG), disponibilidade para estágio/júnior e contato/currículo.
  2. **Engenheiros & Tech Leads (Avaliação técnica):** Avaliam arquitetura, escolhas de stack, qualidade de código, resolução de problemas reais e acabamento de UI.
  3. **IA Analisadora (Avaliação automatizada / LLM / Triagem):** Extrai fatos, habilidades técnicas, experiência profissional, projetos e escopo real a partir de texto claro, explícito e estruturado no DOM.
* **Posicionamento da Hero Section:** Posicionamento direto como **Engenheiro de Software & IA** — foco em construir sistemas completos, pipelines de IA e produtos funcionais de ponta a ponta. Evitar títulos genéricos ou buzzwords vazias.
---

## 2. Internacionalização (i18n)
* **Idiomas:** Inglês (`en`) e Português (`pt-BR`).
* **Comportamento:** Detecção automática inicial pelo idioma do navegador (`navigator.language`), com um seletor discreto e acessível no cabeçalho para alternância manual a qualquer momento.
* **Tom de Voz (Anti-AI Slop):** Frases curtas, diretas, voz ativa e verbos de ação. Proibido uso de clichês de IA (*"apaixonado por tecnologia"*, *"soluções inovadoras"*, *"mergulhar fundo"*, *"elevar o nível"*).

---

## 3. Direção Visual & Design System (Estilo Apple)
* **Estética:** Minimalismo editorial inspirado na Apple — tipografia de alto contraste, respiro generoso (*whitespace*), bordas sutis (`1px solid`), superfícies limpas e zero poluição visual.
* **Regra de Cores 60 / 30 / 10:**
  * **60% (Base/Fundo):** Fundo neutro limpo (ex: `#FBFBFD` / `#FFFFFF` no light mode ou `#000000` / `#0A0A0A` no dark mode).
  * **30% (Superfícies/Secundária):** Cards, seções secundárias e tipografia de apoio (ex: `#F5F5F7` / `#1D1D1F` e cinzas neutros `#86868B` para textos secundários).
  * **10% (Destaque/Accent):** Cor única de ação para CTAs primários, links ativos e badges de status (ex: Azul Apple `#0071E3` ou variação sob medida), usada com parcimônia.
* **Polimento de Interface & Animações:**
  * Micro-interações rápidas (`150ms–250ms`, `cubic-bezier(0.16, 1, 0.3, 1)`), animando apenas `transform` e `opacity`.
  * Estados claros de `:hover`, `:focus-visible` e feedback tátil (`active:scale-[0.98]`).
  * Sem elementos decorativos gratuitos ou "easter eggs" complexos; o foco é clareza, velocidade de leitura e estrutura semântica.

---

## 4. Vitrine de Projetos (Ordem de Prioridade e Ângulo)
Sem diagramas de arquitetura por enquanto e sem inventar métricas inconclusivas. Cada card/case deve destacar o **problema resolvido, a engenharia aplicada e a stack**.

1. **TwinPulse** *(Ângulo: Profissionalismo & Engenharia de Sistemas)*
   * **Contexto:** Desenvolvido no VIRTUS. Plataforma de AutoML e gêmeos digitais.
   * **Destaque Técnico:** Execução isolada e segura em sandbox com Bubblewrap, pipelines automatizados de Machine Learning, backend em FastAPI e frontend em React + TypeScript.
   * **Status de Links:** Sem repo público ou deploy ativo no momento (marcar discretamente como *In Development / Proprietary* ou *Deploy em breve*).

2. **Crypto Trading Bot** *(Ângulo: Resultado & Automação Autônoma)*
   * **Contexto:** Bot automatizado de operações em criptomoedas rodando em produção na nuvem (Render Cloud).
   * **Destaque Técnico:** Execução contínua em Python, lógica de decisão automatizada, resiliência a falhas e operação real com foco em resultado.
   * **Status de Links:** Repositório privado (exibir badge *Private Repo* / *Production System*, sem botão quebrado de GitHub).

3. **WhatsApp AI Assistant** *(Ângulo: Engenharia de IA Aplicada)*
   * **Contexto:** Assistente inteligente integrado ao WhatsApp desenvolvido no VIRTUS.
   * **Destaque Técnico:** Orquestração de agentes com LangGraph, pipeline de RAG (Retrieval-Augmented Generation), FastAPI e modelos via OllamaLLM.
   * **Status de Links:** **Possui repositório público no GitHub** (destacar link direto para o código-fonte).

4. **BeeThere** *(Ângulo: Visão de Produto & Mobile-First)*
   * **Contexto:** Plataforma social de agendamento em grupo — projeto semifinalista (2x) no programa Campus Mobile (Instituto Claro / USP).
   * **Destaque Técnico:** Descoberta e validação de produto (identificação de conflitos de agenda como principal causa de abandono), design mobile-first e arquitetura full stack.
   * **Status de Links:** Deploy previsto para o futuro (indicar *Coming Soon* de forma limpa).

*(Nota sobre projetos secundários: Caso exista uma seção compacta de "Outros Projetos", pode listar o **Leal Car Stock** com link de deploy ativo , mantendo o protagonismo nos 4 projetos acima).*

---

## 5. Experiência, Formação e Credenciais (Seção Enxuta)
Manter o bloco objetivo e escaneável para não competir com os projetos:
* **Experiência:**
  * **VIRTUS** — Pesquisador & Desenvolvedor Full Stack (Mai 2025 – Atual): Desenvolvimento do TwinPulse (AutoML/Sandbox) e assistentes de IA com LangGraph/RAG.
  * **UFCG** — Monitor Inclusivo (Fev 2024 – Abr 2025) & Instrutor de Extensão na UATI (Abr 2025 – Set 2025).
* **Formação:**
  * **Bacharelado em Ciência da Computação** — Universidade Federal de Campina Grande (UFCG) (Previsão: Dez 2027).
* **Destaques Acadêmicos (1 linha ou badge discreto):**
  * 2x Semifinalista Campus Mobile | 5x Medalhista em Olimpíadas Científicas (Informática, Matemática, Ciências e Astronomia) | Scrum Fundamentals Certified.

---

## 6. Stack do Repositório e Restrições Técnicas
* **Stack Atual:** React, Vite, TypeScript, Tailwind CSS.
* **Diretrizes de Código:**
  * Manter a arquitetura limpa, modular e idiomática em TypeScript.
  * Remover código morto, comentários óbvios e abstrações desnecessárias (`unslop`).
  * Garantir responsividade impecável (mobile-first) e performance alta (Lighthouse 95+).