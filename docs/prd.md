# Calculadora Olivia — Product Requirements Document (PRD)

**Versão:** 1.0  
**Data:** 2026-05-08  
**Autor:** Morgan (PM Agent) — Synkra AIOX  
**Status:** Aprovado

---

## Goals and Background Context

### Goals

- Entregar uma calculadora web funcional com identidade visual do galgo italiano — operações aritméticas completas (+, −, ×, ÷, %, ±, ⌫, C)
- Oferecer experiência visual memorável e afetiva para tutores de galgos italianos e comunidades pet
- Garantir zero dependências de runtime e deploy em qualquer hosting estático (GitHub Pages, Netlify, arquivo local)
- Ser responsiva e acessível em mobile e desktop (320px+), carregando em < 1s
- Servir como MVP lançável em uma única sessão de desenvolvimento, com código limpo e extensível para fases futuras

### Background Context

Calculadoras web são commodities visuais — genéricas, intercambiáveis, sem identidade. Tutores de raças específicas, como o galgo italiano, não encontram ferramentas digitais que reflitam sua paixão. A **Calculadora Olivia** resolve isso com uma calculadora HTML/CSS/JS pura, sem backend, centrada em um design tema galgo: paleta bege/marrom, silhueta SVG da raça, tipografia elegante (*Cormorant Garamond*) e botões estilizados.

O produto se posiciona no cruzamento entre utilidade funcional e objeto de identidade afetiva — algo que um tutor usa, compartilha e exibe. Com o mercado pet brasileiro crescendo 27% em 3 anos, há espaço real para produtos digitais de nicho como este.

### Change Log

| Data | Versão | Descrição | Autor |
|------|--------|-----------|-------|
| 2026-05-08 | 1.0 | Criação inicial do PRD | Morgan (PM Agent) |

---

## Requirements

### Functional Requirements

- **FR1:** A calculadora deve executar corretamente as operações aritméticas: adição (+), subtração (−), multiplicação (×) e divisão (÷)
- **FR2:** A calculadora deve suportar entrada de ponto decimal sem duplicação
- **FR3:** A calculadora deve suportar o operador de porcentagem (%)
- **FR4:** A calculadora deve suportar inversão de sinal (±)
- **FR5:** A calculadora deve ter função de limpar tudo (C) e apagar último dígito (⌫)
- **FR6:** O display deve exibir o operando anterior e o operador ativo acima do valor atual
- **FR7:** A calculadora deve suportar operações encadeadas — ao inserir novo operador com resultado pendente, calcula o resultado intermediário antes de aplicar o novo operador
- **FR8:** Em divisão por zero, o display deve exibir "Erro" e a calculadora deve se recuperar com C
- **FR9:** O operador ativo deve ser visualmente destacado nos botões enquanto aguarda o segundo operando
- **FR10:** A calculadora deve responder a entrada por teclado (0–9, operadores, Enter, Esc, Backspace, %)

### Non-Functional Requirements

- **NFR1:** A aplicação deve funcionar sem backend, servidor ou dependências de runtime JavaScript (Google Fonts é dependência de CDN opcional, com fallback para Georgia)
- **NFR2:** O tempo de carregamento deve ser inferior a 1 segundo em conexão 3G
- **NFR3:** A interface deve ser responsiva para viewports a partir de 320px de largura
- **NFR4:** O contraste de textos sobre fundos temáticos deve atender ao mínimo WCAG AA (4.5:1 para texto normal)
- **NFR5:** O código deve ser escrito em HTML5 + CSS3 + JavaScript ES6+ vanilla, sem frameworks ou bundlers
- **NFR6:** A aplicação deve funcionar nos browsers: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+, incluindo versões mobile (iOS Safari, Android Chrome)
- **NFR7:** O tamanho total dos arquivos (HTML + CSS + JS) deve ser inferior a 100KB

---

## User Interface Design Goals

### Overall UX Vision

Interface de calculadora elegante e afetiva, onde o tema do galgo italiano é protagonista sem comprometer a usabilidade. O usuário deve reconhecer a identidade visual ao primeiro contato e operar a calculadora de forma intuitiva sem curva de aprendizado. A estética é sofisticada e amorosa — não infantil ou genérica.

### Key Interaction Paradigms

- **Tap / Click direto:** cada botão responde imediatamente com feedback visual (scale 0.92 no active state)
- **Teclado:** suporte completo a input numérico e operadores via teclado físico
- **Estado visível:** operador ativo destacado; linha de contexto no display mostra o histórico imediato da operação em curso
- **Recuperação de erro:** display exibe "Erro" em casos inválidos; C restaura o estado limpo

### Core Screens and Views

Por ser uma SPA estática de página única, há apenas uma tela:

- **Tela principal:** cabeçalho com silhueta SVG do galgo + título *"Calculadora Olivia"*, display com linha de contexto e valor atual, grade 4×5 de botões, rodapé com tagline

### Accessibility: WCAG AA

Contraste mínimo 4.5:1 para texto sobre fundo temático. Markup semântico com `role`, `aria-label` e `aria-live` implementados. Suporte a navegação por teclado em todos os controles.

### Branding

- **Paleta:** `#F5E6D3` bege claro · `#EDD9BC` bege médio · `#D4B896` bege areia · `#8B5E3C` marrom · `#6B4226` marrom rico · `#4A2F1A` marrom escuro
- **Tipografia:** *Cormorant Garamond* (Google Fonts) com fallback *Georgia* — serif elegante com personalidade italiana
- **Ilustração:** silhueta SVG inline do galgo italiano no cabeçalho, em tons de marrom; sem dependências de imagem externa
- **Identidade:** nome *"Calculadora Olivia"* em itálico combinado com a silhueta SVG constituem a identidade visual

### Target Device and Platforms: Web Responsive

Funciona em qualquer browser moderno, tanto via URL hospedada (GitHub Pages, Netlify) quanto abertura direta de arquivo local (`file://`). Mobile-first com suporte a viewport a partir de 320px.

---

## Technical Assumptions

### Repository Structure: Monorepo simples

```
calculadora-galgo/
├── index.html
├── style.css
├── script.js
└── docs/
    ├── brief.md
    └── prd.md
```

### Service Architecture

**Aplicação estática client-side** — sem servidor, sem backend, sem API. Toda a lógica reside no browser. Deploy via CDN estático (GitHub Pages, Netlify) ou abertura direta de arquivo local.

### Testing Requirements

**Sem framework de testes no MVP.** Validação manual via browser. Dívida técnica consciente — testes unitários da classe `Calculadora` são o primeiro investimento recomendado para Phase 2.

### Additional Technical Assumptions

- **Sem build step:** nenhum bundler (Webpack, Vite, Rollup) — arquivos servidos diretamente
- **Sem TypeScript:** JavaScript ES6+ vanilla com `'use strict'`
- **Google Fonts como única dependência CDN:** Cormorant Garamond com fallback Georgia (funciona offline)
- **SVG inline:** ilustração do galgo embutida diretamente no HTML — zero requisições externas de imagem
- **Deploy target:** GitHub Pages (primário) ou Netlify
- **Sem variáveis de ambiente:** aplicação completamente pública e sem autenticação
- **Compatibilidade:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ — exclui IE11 intencionalmente

---

## Epic List

| # | Título | Objetivo |
|---|--------|---------|
| **1** | **MVP Foundation — Calculadora Olivia** | Calculadora funcional com tema galgo completo, deploy estático e código-base limpo. *(Status: CONCLUÍDO)* |
| **2** | **Experiência Viva** | Enriquecer com histórico (localStorage), animação do galgo, sons temáticos e modo escuro. |

> **Epic 3 — Suite de Ferramentas Pet** (opcional, requer PRD próprio): Expandir para conjunto de calculadoras temáticas (ração, custo veterinário, peso pet) com identidade visual galgo.

---

## Epic 1: MVP Foundation — Calculadora Olivia *(CONCLUÍDO)*

**Objetivo:** Construir a calculadora web estática completa — lógica aritmética, interface com tema galgo italiano e responsividade total — entregando um produto funcional e visualmente distinto, deployável sem servidor ou dependências de runtime. Este épico estabelece a base de código sobre a qual todas as features futuras serão construídas.

### Story 1.1 — Lógica e Estrutura da Calculadora *(Done)*

> Como tutora de galgo italiano,  
> eu quero uma calculadora que execute operações aritméticas básicas de forma confiável,  
> para que eu possa utilizá-la no dia a dia sem preocupações com erros de cálculo.

**Acceptance Criteria:**

1. A calculadora executa corretamente +, −, ×, ÷ entre dois operandos
2. Suporta ponto decimal sem duplicação
3. Suporta porcentagem (%) e inversão de sinal (±)
4. Operações encadeadas calculam o resultado intermediário antes de aplicar o novo operador
5. Divisão por zero exibe "Erro" e a calculadora se recupera com C
6. C limpa todo o estado; ⌫ apaga o último dígito
7. O display exibe o operando anterior + operador ativo acima do valor atual
8. O botão do operador ativo fica visualmente destacado enquanto aguarda o segundo operando

### Story 1.2 — Tema Visual Galgo e Responsividade *(Done)*

> Como tutora de galgo italiano,  
> eu quero que a calculadora tenha identidade visual da raça — silhueta, cores e tipografia elegante —  
> para que ela seja algo que eu queira exibir e compartilhar, não apenas usar.

**Acceptance Criteria:**

1. A paleta aplica tons bege e marrom em todo o layout (`#F5E6D3` a `#4A2F1A`)
2. Silhueta SVG do galgo italiano exibida no cabeçalho, sem dependência de imagem externa
3. Tipografia *Cormorant Garamond* aplicada com fallback *Georgia*
4. Botões têm hover states com feedback visual suave; active state com scale(0.92)
5. Display com fundo marrom escuro e texto bege, com linha de contexto em tom atenuado
6. Layout responsivo funciona em viewport a partir de 320px
7. Suporte a teclado completo (0–9, operadores, Enter, Esc, Backspace)
8. Markup semântico com `role`, `aria-label` e `aria-live` implementados

---

## Epic 2: Experiência Viva

**Objetivo:** Adicionar camadas de prazer e personalidade à calculadora já funcional — histórico persistente na sessão, animação do galgo, sons temáticos e modo escuro. Estas features transformam a Calculadora Olivia de ferramenta em objeto afetivo, aumentando o engajamento e a vontade de compartilhá-la.

### Story 2.1 — Histórico de Cálculos

> Como usuária frequente da calculadora,  
> eu quero ver um histórico das operações realizadas na sessão atual,  
> para que eu possa consultar cálculos anteriores sem precisar refazê-los.

**Acceptance Criteria:**

1. Histórico exibe as últimas 10 operações no formato `expressão = resultado`
2. Histórico persiste via `localStorage` — sobrevive a reload da página
3. Clicar em um item do histórico restaura o resultado como valor atual
4. Botão "Limpar histórico" remove todos os itens do `localStorage`
5. O histórico é exibido em painel colapsável com tema bege/marrom consistente
6. Histórico é acessível via teclado e tem `aria-label` adequado

### Story 2.2 — Animação do Galgo

> Como tutora de galgo italiano,  
> eu quero que o galgo faça uma animação ao pressionar `=`,  
> para que o momento do resultado seja divertido e reforce a identidade da calculadora.

**Acceptance Criteria:**

1. Ao pressionar `=` ou Enter, a silhueta SVG do galgo executa uma animação (corrida ou abanada de rabo)
2. Animação tem duração máxima de 800ms e não bloqueia o resultado no display
3. Animação implementada em CSS puro (keyframes) — sem bibliotecas JS de animação
4. Animação respeita `prefers-reduced-motion`: desativa se o usuário configurou redução de movimento no SO
5. A animação é esteticamente coerente com o tema (fluida, elegante, não "cartoon")

### Story 2.3 — Modo Escuro

> Como usuária que usa a calculadora à noite,  
> eu quero um modo escuro com paleta alternativa,  
> para que meus olhos não se cansem com o fundo bege claro em ambientes escuros.

**Acceptance Criteria:**

1. Modo escuro aplica paleta preta e dourada (`#1A1209`, `#2C1810`, `#C9A84C`, `#F0D080`)
2. Toggle de modo escuro/claro persistido via `localStorage`
3. Respeita `prefers-color-scheme: dark` do sistema operacional como estado inicial
4. Transição entre modos é suave (CSS `transition` de 200ms)
5. Todos os elementos (display, botões, SVG, texto) adaptam a paleta corretamente
6. Contraste mantém WCAG AA no modo escuro

### Story 2.4 — Sons Temáticos

> Como usuária que quer imersão total no tema galgo,  
> eu quero sons temáticos opcionais na calculadora,  
> para que a experiência seja ainda mais divertida e personalizada.

**Acceptance Criteria:**

1. Som de "clique suave" ao pressionar botões (Web Audio API — sem arquivo de áudio externo)
2. Som de "latido suave" ao exibir "Erro" (sintetizado via Web Audio API)
3. Sons desativados por padrão; toggle de ativação persistido via `localStorage`
4. Ícone de som (🔊/🔇) visível e acessível via teclado
5. Nenhum arquivo de áudio externo — sons 100% gerados por Web Audio API
6. Sons não reproduzem se tab estiver em background (Page Visibility API)

---

## Checklist Results Report

| Categoria | Status | Observações |
|-----------|--------|-------------|
| 1. Problem Definition & Context | **PASS** | Problema claro, personas definidas, diferenciação explícita |
| 2. MVP Scope Definition | **PASS** | Features vs. out-of-scope bem delimitados; critérios testáveis |
| 3. User Experience Requirements | **PARTIAL** | Fluxo implícito (SPA de tela única) — aceitável dado o escopo |
| 4. Functional Requirements | **PASS** | FR1–FR10 específicos, testáveis, sem detalhes de implementação |
| 5. Non-Functional Requirements | **PASS** | Performance, acessibilidade, compatibilidade e constraints cobertos |
| 6. Epic & Story Structure | **PARTIAL** | Setup de infra (git, CI/CD) não formalizado em story — ação pendente |
| 7. Technical Guidance | **PASS** | Arquitetura estática clara, decisões justificadas |
| 8. Cross-Functional Requirements | **PARTIAL** | Requisitos operacionais mínimos — adequado para produto estático |
| 9. Clarity & Communication | **PASS** | Documentação estruturada, versionada, linguagem consistente |

**Completude geral:** ~88%  
**MVP Scope:** Just Right  
**Verdict: ✅ READY FOR ARCHITECT**

**Ação pendente (HIGH):** Adicionar story de setup de infraestrutura ao Epic 1 — `git init`, GitHub remote, GitHub Pages deploy — ou executar `*environment-bootstrap` via `@devops`.

---

## Next Steps

### UX Expert Prompt

> `@ux-design-expert` — Revisar a Calculadora Olivia com base no PRD em `docs/prd.md`. O produto é uma SPA estática com tema galgo italiano (paleta bege/marrom, SVG inline, tipografia Cormorant Garamond). Foco: validar contraste WCAG AA na paleta atual, recomendar refinamentos de layout mobile e propor a animação do galgo (Story 2.2) de forma coerente com a estética definida.

### Architect Prompt

> `@architect` — Revisar o PRD em `docs/prd.md` para a Calculadora Olivia. Stack: HTML5 + CSS3 + JS ES6+ vanilla, sem framework, sem build step, deploy estático (GitHub Pages). Epic 2 adiciona localStorage, Web Audio API e CSS animations. Verificar se a arquitetura atual suporta o Epic 2 sem refatoração estrutural, e recomendar padrões de organização de código para a expansão. Avaliar viabilidade técnica do Epic 3 (suite de ferramentas) caso a usuária decida prosseguir.
