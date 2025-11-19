# Layouts - Hackthon Educação Financeira

Esta pasta contém os protótipos HTML, CSS e JavaScript baseados no design system documentado.

## 📁 Estrutura de Arquivos

```
layouts/
├── styles.css              # Design system completo com todas as variáveis CSS
├── dashboard.html          # Página principal (Dashboard) - Versão original
├── dashboard-v2.html       # Dashboard profissional com Sidebar + Mapa Duolingo ⭐ NOVO
├── question.html           # Página de perguntas - Versão original
├── question-v2.html        # Página de perguntas com suporte a objetivas e discursivas ⭐ NOVO
├── result.html             # Página de resultado
├── questions-dataset.json   # Dataset completo de perguntas (objetivas e discursivas) ⭐ NOVO
├── app.js                  # JavaScript com funções utilitárias
└── README.md               # Este arquivo
```

## 🎨 Arquivos

### `styles.css`
Design system completo incluindo:
- Variáveis CSS (cores, espaçamentos, tipografia)
- Componentes reutilizáveis (botões, cards, barras de progresso)
- Animações e transições
- Responsividade (mobile, tablet, desktop)
- Utilitários CSS

### `dashboard.html`
Página principal do dashboard (versão original) contendo:
- Header com XP e nível do usuário
- Barra de progresso XP
- Mapa de níveis interativo
- Missões diárias
- Conquistas recentes
- Estatísticas do usuário

### `dashboard-v2.html` ⭐ NOVO
Dashboard profissional com layout moderno:
- **Sidebar fixa** com:
  - Perfil do usuário (avatar, nome, email, nível)
  - XP e barra de progresso
  - Estatísticas rápidas (taxa de acerto, sequência, perguntas)
  - Missões diárias com progresso
  - Botões de ação (Configurações, Perfil, Conquistas)
- **Área central** com:
  - Mapa estilo Duolingo
  - **Sessões** (matérias): Introdução, Crédito, Investimentos, Financiamento
  - **Fases** (contextos) dentro de cada sessão
  - Estados visuais: Completado ✓, Atual (animado), Disponível, Bloqueado 🔒
  - Conectores entre fases mostrando progresso

### `question.html`
Página de perguntas (versão original) com:
- Header com timer
- Barra de progresso da questão
- Card de contexto
- Pergunta principal
- 4 opções de resposta (interativas)
- Botão de confirmação

### `question-v2.html` ⭐ NOVO
Página de perguntas atualizada com suporte completo:
- **Dois tipos de perguntas:**
  - **Objetivas (Múltipla Escolha):** 4 opções com seleção visual
  - **Discursivas:** Campo de texto com validação por palavras-chave
- **Sistema de seleção aleatória:**
  - Carrega perguntas do `questions-dataset.json`
  - Seleciona aleatoriamente por sessão e fase
  - Evita repetição usando localStorage
- **Validação inteligente:**
  - Objetivas: Verifica resposta correta
  - Discursivas: Valida usando palavras-chave (mínimo 2)
- **Interface adaptativa:**
  - Badge indicando tipo de pergunta
  - Contador de caracteres para discursivas
  - Validação em tempo real

### `questions-dataset.json` ⭐ NOVO
Dataset completo com 34 perguntas:
- **Estrutura organizada por:**
  - Sessão (introducao, credito, investimentos, financiamento)
  - Fase (contextos dentro de cada sessão)
  - Dificuldade (iniciante, basico, medio, avancado)
- **Tipos de perguntas:**
  - Objetivas: com opções e resposta correta
  - Discursivas: com palavras-chave para validação
- **Metadados completos:**
  - Contexto da pergunta
  - Explicação detalhada
  - Valor de XP
  - Palavras-chave (para discursivas)

### `result.html`
Página de resultado mostrando:
- Ícone de feedback (correto/incorreto)
- Ganho de XP animado
- Explicação da resposta
- Botões de navegação

### `app.js`
Funções JavaScript utilitárias:
- Formatação de XP
- Cálculo de níveis
- Animações de contador
- Sistema de toast/notificações
- Confetti ao ganhar XP
- Validação de formulários

## 🚀 Como Usar

1. Abra qualquer arquivo HTML no navegador
2. Os arquivos estão interligados e podem navegar entre si
3. Para testar funcionalidades JavaScript, abra o console do navegador

## 📱 Responsividade

Os layouts são totalmente responsivos e se adaptam a:
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

## 🎯 Funcionalidades Implementadas

- ✅ Design system completo
- ✅ Layout responsivo
- ✅ Animações e transições
- ✅ Interatividade básica
- ✅ Sistema de XP visual
- ✅ Mapa de níveis
- ✅ Cards de perguntas com estados
- ✅ Feedback visual de respostas
- ✅ Timer de perguntas
- ✅ Animações de confetti
- ✅ **Dashboard V2 com Sidebar profissional**
- ✅ **Mapa estilo Duolingo com sessões e fases**
- ✅ **Sistema de progresso visual entre fases**
- ✅ **Sistema de perguntas aleatórias por fase**
- ✅ **Suporte a perguntas objetivas e discursivas**
- ✅ **Validação inteligente de respostas discursivas**
- ✅ **Dataset JSON com 34 perguntas organizadas**
- ✅ **Sistema anti-repetição de perguntas**

## 🔄 Próximos Passos

- Integração com API backend (Go)
- Autenticação de usuários
- Persistência de dados
- Mais animações e micro-interações
- Testes de usabilidade

## 📝 Notas

- Os dados são mockados para demonstração
- As cores e estilos seguem o design system documentado
- Todas as animações são otimizadas para performance
- O código segue boas práticas de acessibilidade
- **Dataset de perguntas:** O arquivo `questions-dataset.json` contém 34 perguntas de exemplo. Para produção, você pode expandir este dataset com mais perguntas seguindo a mesma estrutura.
- **Seleção aleatória:** O sistema prioriza perguntas não respondidas, mas se todas foram respondidas, seleciona aleatoriamente entre todas disponíveis.
- **Validação discursiva:** Perguntas discursivas são validadas usando palavras-chave. O sistema verifica se a resposta contém pelo menos 2 palavras-chave definidas na pergunta.

