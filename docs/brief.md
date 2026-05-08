# Project Brief: Calculadora Olivia

**Versão:** 1.0  
**Data:** 2026-05-08  
**Autor:** Atlas (Analyst Agent)  
**Status:** Draft

---

## Executive Summary

A **Calculadora Galgo** é uma calculadora web estática desenvolvida em HTML/CSS/JavaScript puro, com tema visual inspirado no galgo italiano (*Italian Greyhound*). O produto combina funcionalidade matemática básica com uma identidade visual elegante e afetiva — paleta bege e marrom, ilustrações da raça e botões estilizados — entregando uma experiência encantadora para entusiastas da raça e usuários que apreciam design temático personalizado.

**Problema resolvido:** Calculadoras web genéricas são visualmente impessoais. Não há opções de calculadoras temáticas para comunidades de nicho (tutores de raças específicas, lojas pet, criadores).  
**Mercado-alvo:** Tutores de galgos italianos, comunidades caninas, entusiastas de design personalizado.  
**Proposta de valor:** Funcionalidade matemática completa embrulhada em uma identidade visual única e memorável.

---

## Problem Statement

### Situação atual
Calculadoras web são commodities visuais — todas seguem o mesmo padrão cinza/branco minimalista. Comunidades de nicho (tutores de raças, clubes caninos, pet shops especializados) não possuem ferramentas com identidade visual alinhada à sua paixão.

### Impacto
- Experiência genérica reduz engajamento e lembrança de marca
- Oportunidade inexplorada de criar produtos digitais temáticos para nichos caninos

### Por que agora
O mercado pet brasileiro cresceu 27% nos últimos 3 anos. Produtos digitais personalizados para tutores têm alta aceitação em comunidades de nicho. HTML/CSS puro garante entrega rápida sem dependências de infraestrutura.

---

## Proposed Solution

Uma **calculadora estática em HTML único** (ou conjunto HTML+CSS+JS) com:

- **Layout inspirado no galgo italiano:** silhueta elegante, linhas finas, estética sofisticada
- **Paleta bege e marrom:** tons terrosos que evocam a pelagem da raça
- **Ilustrações decorativas:** galgo(s) italiano(s) integrados ao design (SVG ou PNG)
- **Botões estilizados:** com textura/cor temática, hover states elegantes
- **Operações padrão:** +, −, ×, ÷, porcentagem, ponto decimal, C/CE, =

**Diferencial:** Identidade visual coesa e intencional, não apenas "pintada" com cores temáticas — o design conta a história do galgo.

---

## Target Users

### Segmento Primário: Tutores de Galgo Italiano
- **Perfil:** 25–45 anos, ativos em comunidades online (Instagram, grupos Facebook), alto envolvimento emocional com a raça
- **Comportamento:** Consomem e compartilham conteúdo temático; personalizam ambientes digitais e físicos com referências à raça
- **Necessidade:** Ferramentas com identidade visual alinhada à sua paixão
- **Objetivo:** Usar e compartilhar algo que represente seu estilo de vida com galgos

### Segmento Secundário: Pet Shops e Criadores Especializados
- **Perfil:** Negócios focados em galgos italianos que desejam presença digital com identidade da raça
- **Necessidade:** Ferramenta calculadora para uso interno (cálculo de rações, custos, etc.) com visual da marca
- **Objetivo:** Incorporar a calculadora em seu site ou usar como brinde digital

---

## Goals & Success Metrics

### Objetivos de Negócio
- Entregar MVP funcional em uma única sessão de desenvolvimento (1 dia)
- Arquivo HTML autocontido, deployável em qualquer hosting estático
- Zero dependências externas de runtime (sem frameworks JS)

### Métricas de Sucesso do Usuário
- Todas as operações aritméticas básicas funcionam corretamente
- Interface visualmente reconhecível como "tema galgo" ao primeiro contato
- Responsiva: funciona em mobile e desktop

### KPIs
- **Cobertura funcional:** 100% das operações padrão de calculadora implementadas
- **Performance:** Carrega em < 1s em conexão 3G
- **Acessibilidade:** Contraste mínimo WCAG AA para textos sobre fundos temáticos

---

## MVP Scope

### Core Features (Must Have)

- **Calculadora funcional:** Operações +, −, ×, ÷, %, =, C (limpar), ⌫ (backspace)
- **Display numérico:** Mostra entrada atual e resultado com formatação adequada
- **Paleta bege/marrom:** Cores primárias aplicadas a fundo, botões e display
- **Ilustração de galgo:** Mínimo 1 imagem/SVG decorativo integrado ao layout
- **Botões estilizados:** Estilo distinto dos padrões genéricos (bordas, sombras, tipografia temática)
- **Responsividade básica:** Funciona em viewport mobile (320px+) e desktop

### Out of Scope para MVP
- Histórico de cálculos persistente
- Modo científico / funções avançadas
- Temas alternáveis
- Backend ou armazenamento de dados
- Múltiplos idiomas
- PWA / instalação como app
- Animações complexas de galgo

### MVP Success Criteria
Arquivo(s) HTML/CSS/JS abertos em browser executam todas as operações aritméticas corretamente, com layout visivelmente temático (galgo italiano, bege e marrom), funcionando em Chrome, Firefox e Safari mobile/desktop.

---

## Post-MVP Vision

### Phase 2 Features
- Histórico de cálculos na sessão (localStorage)
- Animação do galgo ao pressionar `=` (corrida ou abanada)
- Sons temáticos opcionais (latido suave no erro)
- Modo escuro com paleta alternativa (preto e dourado)

### Visão de Longo Prazo (6–12 meses)
Expandir para uma **suite de ferramentas pet temáticas**: calculadora de ração, calculadora de custo veterinário, conversor de peso pet — todas com o tema galgo. Potencial de white-label para criadores e pet shops.

### Expansion Opportunities
- Outros temas de raças (greyhound, whippet, borzoi — família sighthound)
- API de personalização para incorporação em sites de terceiros
- Versão impressa (PDF) como material de marca para criadores

---

## Technical Considerations

### Platform Requirements
- **Target Platforms:** Web (browser), arquivo local (file://)
- **Browser/OS Support:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+; iOS Safari, Android Chrome
- **Performance Requirements:** < 1s load time, < 100KB total (sem imagens externas pesadas)

### Technology Preferences
- **Frontend:** HTML5 semântico, CSS3 (variáveis CSS para paleta), JavaScript vanilla (ES6+)
- **Backend:** Nenhum — aplicação 100% client-side
- **Database:** Nenhum — sem persistência no MVP
- **Hosting/Infrastructure:** GitHub Pages, Netlify, ou qualquer CDN estático; ou arquivo local

### Architecture Considerations
- **Repository Structure:** Monorepo simples — `index.html`, `style.css`, `script.js` (ou arquivo único autocontido)
- **Service Architecture:** SPA estática, sem servidor
- **Integration Requirements:** Nenhuma integração externa
- **Security/Compliance:** Sem coleta de dados — zero preocupações de privacidade

---

## Constraints & Assumptions

### Constraints
- **Budget:** Zero — tecnologias gratuitas e open source
- **Timeline:** MVP em 1 sessão de desenvolvimento (~2–4 horas de implementação)
- **Resources:** 1 desenvolvedor (assistido por AI)
- **Technical:** Sem frameworks JS (React, Vue, etc.) — HTML/CSS/JS puro para máxima portabilidade

### Key Assumptions
- Usuário possui browser moderno — não há necessidade de suporte a IE11
- Imagens/ilustrações de galgo serão SVG inline ou PNG licenciado (não requer serviços de imagem externos)
- Projeto será hospedado estaticamente (GitHub Pages ou equivalente)
- Escopo não inclui internacionalização — produto em português

---

## Risks & Open Questions

### Key Risks
- **Ilustrações:** Encontrar ou criar SVG de galgo italiano de qualidade pode requerer tempo adicional — *Mitigação: usar SVG simples/estilizado ou placeholder no MVP, refinar na Phase 2*
- **Acessibilidade de cor:** Paleta bege/marrom pode ter baixo contraste em alguns elementos — *Mitigação: testar contraste com ferramenta WCAG durante implementação*
- **Scope creep visual:** Tendência de adicionar elementos decorativos que atrapalham usabilidade — *Mitigação: priorizar funcionalidade, decoração é complementar*

### Open Questions
- Qual ilustração de galgo usar? (SVG customizado, ícone estilizado, foto PNG com licença?)
- A calculadora será um arquivo único (`index.html` autocontido) ou múltiplos arquivos (`index.html` + `style.css` + `script.js`)?
- Há preferência por tipografia específica? (Google Fonts ou sistema?)
- O nome "Calculadora Galgo" é definitivo ou há um nome mais criativo desejado?

### Areas Needing Further Research
- Referências visuais de design com galgo italiano para guiar o estilo
- Paleta exata de bege/marrom (sugestão: `#F5E6D3`, `#8B5E3C`, `#4A2F1A`)
- Tipografia elegante que combine com a estética da raça (sugestão: Georgia, Cormorant Garamond)

---

## Next Steps

### Immediate Actions

1. **Validar escopo com usuário** — confirmar arquivo único vs. múltiplos arquivos
2. **Definir paleta de cores exata** — selecionar 5–6 tons de bege/marrom
3. **Escolher/criar ilustração de galgo** — SVG simples para MVP
4. **Ativar @architect** para decisão de estrutura de arquivos
5. **Ativar @sm** para criar story de desenvolvimento
6. **Ativar @dev** para implementação

### PM Handoff

Este Project Brief fornece contexto completo para a **Calculadora Galgo**. Recomenda-se iniciar em 'PRD Generation Mode' com `@pm`, revisar o brief e criar o PRD seção por seção, solicitando clarificações sobre ilustrações e paleta de cores antes de iniciar o desenvolvimento.

---

*Gerado por Atlas (Analyst Agent) — Synkra AIOX v2.0*  
*Data: 2026-05-08*
