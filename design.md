# DESIGN - Hackthon

## VISÃO GERAL DO DESIGN

Projeto de jogo educacional inspirado no Duolingo, focado em educação financeira com interface intuitiva e gamificada.

---

## PRINCÍPIOS DE DESIGN

### 1. Usabilidade
- Interface clara e intuitiva
- Navegação simples e direta
- Feedback visual imediato
- Acessibilidade (WCAG 2.1 nível AA)

### 2. Gamificação
- Elementos visuais que motivem o aprendizado
- Progresso visual claro
- Recompensas e conquistas destacadas
- Sistema de níveis visualmente atraente

### 3. Consistência
- Design system unificado
- Paleta de cores consistente
- Tipografia padronizada
- Componentes reutilizáveis

### 4. Performance
- Carregamento rápido
- Animações suaves
- Otimização de imagens
- Lazy loading quando necessário

---

## PALETA DE CORES

### Cores Principais
- **Primária:** Verde (#4CAF50) - Representa crescimento financeiro e sucesso
- **Secundária:** Azul (#2196F3) - Representa confiança e conhecimento
- **Acento:** Laranja (#FF9800) - Representa energia e motivação

### Cores de Status
- **Sucesso:** Verde (#4CAF50)
- **Erro:** Vermelho (#F44336)
- **Aviso:** Amarelo (#FFC107)
- **Info:** Azul (#2196F3)

### Cores Neutras
- **Fundo:** Branco (#FFFFFF) / Cinza claro (#F5F5F5)
- **Texto Principal:** Preto (#212121)
- **Texto Secundário:** Cinza (#757575)
- **Bordas:** Cinza claro (#E0E0E0)

### Gradientes
- **Gradiente XP:** Verde (#4CAF50) → Azul (#2196F3)
- **Gradiente Nível:** Laranja (#FF9800) → Vermelho (#F44336)

---

## TIPOGRAFIA

### Família de Fontes
- **Principal:** Inter ou Roboto (sans-serif)
- **Títulos:** Montserrat ou Poppins (sans-serif)
- **Monospace:** Fira Code (para código/exemplos)

### Hierarquia Tipográfica
- **H1 (Títulos principais):** 32px, Bold
- **H2 (Subtítulos):** 24px, Semi-bold
- **H3 (Seções):** 20px, Medium
- **Body (Texto):** 16px, Regular
- **Small (Legendas):** 14px, Regular
- **Caption (Notas):** 12px, Regular

---

## COMPONENTES DE INTERFACE

### 1. Cards de Pergunta
- **Estilo:** Card elevado com sombra suave
- **Padding:** 24px
- **Border Radius:** 12px
- **Hover:** Elevação aumentada
- **Estados:** Normal, Hover, Selecionado, Correto, Incorreto

### 2. Botões
- **Primário:** Fundo verde, texto branco, padding 12px 24px
- **Secundário:** Borda verde, texto verde, fundo transparente
- **Desabilitado:** Opacidade 50%, cursor not-allowed
- **Estados:** Normal, Hover, Active, Disabled

### 3. Barra de Progresso
- **Estilo:** Barra linear com gradiente
- **Altura:** 8px
- **Border Radius:** 4px
- **Animação:** Transição suave ao atualizar

### 4. Badges e Conquistas
- **Tamanho:** 64px x 64px
- **Estilo:** Circular com ícone centralizado
- **Estados:** Bloqueado (cinza), Desbloqueado (colorido)
- **Animação:** Pulse ao desbloquear

### 5. Mapa de Níveis
- **Estilo:** Visualização em árvore ou linear
- **Nós:** Círculos conectados por linhas
- **Estados:** Bloqueado, Disponível, Completado, Atual
- **Cores:** Cinza (bloqueado), Verde (completado), Azul (atual)

### 6. Sistema de XP
- **Exibição:** Número grande e destacado
- **Animação:** Contador animado ao ganhar XP
- **Barra de XP:** Visualização do progresso para próximo nível

---

## LAYOUT E ESTRUTURA

### Página Principal (Dashboard)
```
┌─────────────────────────────────────────┐
│  Header (Logo, XP, Nível, Avatar)      │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────┐  ┌──────────┐            │
│  │  Mapa    │  │ Missões  │            │
│  │  Níveis  │  │ Diárias  │            │
│  └──────────┘  └──────────┘            │
│                                         │
│  ┌──────────────────────────┐         │
│  │   Conquistas Recentes     │         │
│  └──────────────────────────┘         │
│                                         │
│  ┌──────────────────────────┐         │
│  │   Estatísticas           │         │
│  └──────────────────────────┘         │
│                                         │
└─────────────────────────────────────────┘
```

### Página de Perguntas
```
┌─────────────────────────────────────────┐
│  Header (Progresso, Tempo, XP)          │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────────────────┐         │
│  │   Contexto da Pergunta   │         │
│  └──────────────────────────┘         │
│                                         │
│  ┌──────────────────────────┐         │
│  │   Pergunta Principal     │         │
│  └──────────────────────────┘         │
│                                         │
│  ┌──────────┐  ┌──────────┐            │
│  │ Opção 1  │  │ Opção 2  │            │
│  └──────────┘  └──────────┘            │
│                                         │
│  ┌──────────┐  ┌──────────┐            │
│  │ Opção 3  │  │ Opção 4  │            │
│  └──────────┘  └──────────┘            │
│                                         │
│  ┌──────────────────────────┐         │
│  │   Botão Confirmar         │         │
│  └──────────────────────────┘         │
│                                         │
└─────────────────────────────────────────┘
```

### Página de Resultado
```
┌─────────────────────────────────────────┐
│                                         │
│         ┌──────────────┐               │
│         │   Ícone      │               │
│         │  (✓ ou ✗)    │               │
│         └──────────────┘               │
│                                         │
│         Resposta Correta!               │
│                                         │
│  ┌──────────────────────────┐         │
│  │   Explicação             │         │
│  └──────────────────────────┘         │
│                                         │
│  ┌──────────┐  ┌──────────┐            │
│  │  +10 XP  │  │ Próxima  │            │
│  └──────────┘  └──────────┘            │
│                                         │
└─────────────────────────────────────────┘
```

---

## ANIMAÇÕES E TRANSIÇÕES

### Micro-interações
- **Hover em botões:** Escala 1.05, sombra aumentada
- **Clique em opções:** Feedback visual imediato
- **Ganho de XP:** Animação de contador + confetti
- **Desbloqueio de nível:** Animação de expansão
- **Transição de páginas:** Fade in/out suave

### Durações
- **Transições rápidas:** 200ms
- **Transições médias:** 300ms
- **Transições lentas:** 500ms
- **Animações especiais:** 800ms-1000ms

### Easing
- **Padrão:** ease-in-out
- **Entrada:** ease-out
- **Saída:** ease-in
- **Elástico:** Para conquistas e desbloqueios

---

## RESPONSIVIDADE

### Breakpoints
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+
- **Large Desktop:** 1440px+

### Adaptações Mobile
- Menu hambúrguer no header
- Cards em coluna única
- Botões full-width
- Tamanhos de fonte reduzidos
- Touch-friendly (área mínima 44x44px)

---

## ÍCONES E ILUSTRAÇÕES

### Biblioteca de Ícones
- **Fonte:** Material Icons ou Feather Icons
- **Tamanho padrão:** 24px
- **Tamanho grande:** 48px
- **Tamanho pequeno:** 16px

### Ícones Principais
- 🎯 Níveis
- 📚 Aprendizado
- 🏆 Conquistas
- ⭐ XP
- 📊 Estatísticas
- 🎁 Missões
- 💰 Financeiro
- 📈 Investimentos

### Ilustrações
- Estilo flat design ou line art
- Cores da paleta principal
- Uso em estados vazios e onboarding

---

## ESTADOS VISUAIS

### Estados de Pergunta
- **Normal:** Fundo branco, borda cinza
- **Hover:** Sombra aumentada, cursor pointer
- **Selecionada:** Borda azul, fundo azul claro
- **Correta:** Borda verde, fundo verde claro, ícone ✓
- **Incorreta:** Borda vermelha, fundo vermelho claro, ícone ✗

### Estados de Nível
- **Bloqueado:** Cinza, opacidade reduzida
- **Disponível:** Azul, cursor pointer
- **Completado:** Verde, ícone de check
- **Atual:** Destaque com animação pulse

### Estados de Loading
- **Spinner:** Circular, cor primária
- **Skeleton:** Placeholder com animação shimmer
- **Progress Bar:** Barra de progresso animada

---

## ACESSIBILIDADE

### Contraste
- **Texto normal:** Mínimo 4.5:1
- **Texto grande:** Mínimo 3:1
- **Elementos interativos:** Contraste suficiente

### Navegação por Teclado
- Tab order lógico
- Focus visível
- Atalhos de teclado para ações principais

### Screen Readers
- Labels descritivos
- ARIA labels quando necessário
- Textos alternativos para imagens

### Tamanhos de Fonte
- Opção de aumentar fonte
- Tamanho mínimo de 16px para texto

---

## PROTÓTIPOS E WIREFRAMES

### Ferramentas Recomendadas
- **Figma:** Para design de alta fidelidade
- **Adobe XD:** Alternativa
- **Sketch:** Para Mac

### Fidelidade dos Protótipos
- **Baixa:** Wireframes em papel ou digital
- **Média:** Mockups estáticos
- **Alta:** Protótipos interativos no Figma

### Entregáveis
- Design system completo
- Componentes reutilizáveis
- Guia de estilo
- Protótipos interativos
- Assets exportados

---

## EXPERIÊNCIA DO USUÁRIO (UX)

### Fluxo Principal
1. **Onboarding:** Introdução ao jogo e criação de conta
2. **Primeira Pergunta:** Tutorial interativo
3. **Progressão:** Navegação pelo mapa de níveis
4. **Feedback:** Visualização de resultados e explicações
5. **Motivação:** Missões e conquistas

### Pontos de Atenção
- **Primeira impressão:** Onboarding atrativo e rápido
- **Feedback imediato:** Respostas visuais claras
- **Progresso visível:** Sempre mostrar avanço do usuário
- **Motivação contínua:** Gamificação bem implementada
- **Aprendizado efetivo:** Explicações claras e didáticas

### Métricas de UX
- Tempo de resposta da interface
- Taxa de conclusão de níveis
- Engajamento diário
- Satisfação do usuário

---

## DESIGN SYSTEM

### Estrutura de Componentes
```
components/
  ├── buttons/
  │   ├── PrimaryButton
  │   ├── SecondaryButton
  │   └── IconButton
  ├── cards/
  │   ├── QuestionCard
  │   ├── LevelCard
  │   └── AchievementCard
  ├── progress/
  │   ├── XPBar
  │   ├── LevelProgress
  │   └── MissionProgress
  ├── feedback/
  │   ├── SuccessMessage
  │   ├── ErrorMessage
  │   └── Toast
  └── navigation/
      ├── Header
      ├── Sidebar
      └── Breadcrumb
```

### Tokens de Design
- Cores (hex, rgb, hsl)
- Espaçamentos (4px grid)
- Tipografia (font-family, sizes, weights)
- Sombras (elevation levels)
- Border radius
- Durações de animação

---

## GUIDELINES ESPECÍFICAS

### Educação Financeira
- **Tom:** Educativo mas não condescendente
- **Visual:** Profissional mas acessível
- **Cores:** Evitar vermelho para dinheiro (usar verde)
- **Ícones:** Claros e universais

### Gamificação
- **Feedback positivo:** Sempre destacar conquistas
- **Progresso visual:** Barras e indicadores claros
- **Recompensas:** Celebrações visuais para marcos
- **Competição saudável:** Ranking opcional, não obrigatório

---

## PRÓXIMOS PASSOS DE DESIGN

1. **Fase 1:** Wireframes e estrutura básica
2. **Fase 2:** Design system e componentes
3. **Fase 3:** Protótipos de alta fidelidade
4. **Fase 4:** Testes de usabilidade
5. **Fase 5:** Refinamentos e implementação

