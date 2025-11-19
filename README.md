# 💰 HACKTHON - Educação Financeira Gamificada

> Jogo educacional de perguntas e respostas sobre educação financeira, inspirado no Duolingo, com sistema de gamificação, níveis de dificuldade progressivos e aprendizado interativo.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](https://github.com)
[![Tecnologia](https://img.shields.io/badge/backend-Go-blue)](https://golang.org/)
[![Tecnologia](https://img.shields.io/badge/frontend-HTML%2FCSS%2FJS-orange)](https://developer.mozilla.org/)
[![Banco de Dados](https://img.shields.io/badge/database-PostgreSQL-blue)](https://www.postgresql.org/)

---

## 📋 Índice

- [Objetivo](#-objetivo)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Roadmap](#-roadmap)
- [Documentação](#-documentação)

---

## 🎯 Objetivo

Desenvolver uma plataforma gamificada de educação financeira que torne o aprendizado sobre finanças pessoais, crédito, investimentos e financiamentos mais acessível, interativo e envolvente. O projeto visa:

- **Democratizar** o conhecimento financeiro através de uma interface intuitiva
- **Gamificar** o aprendizado para aumentar o engajamento e retenção
- **Personalizar** a experiência de aprendizado baseada no nível do usuário
- **Fornecer** conteúdo contextualizado e prático sobre educação financeira

---

## 📖 Sobre o Projeto

### Visão Geral

O **HACKTHON** é um jogo educacional que combina elementos de gamificação (XP, níveis, missões e conquistas) com conteúdo educacional sobre educação financeira. Inspirado no modelo de aprendizado do Duolingo, o projeto oferece uma experiência progressiva e motivadora para usuários de todos os níveis.

### Características Principais

- ✅ Sistema de perguntas e respostas interativas
- ✅ 4 níveis de dificuldade progressivos
- ✅ Sistema de XP e classificação
- ✅ Mapa de níveis visual
- ✅ Missões diárias e semanais
- ✅ Sistema de conquistas
- ✅ Progresso personalizado por usuário

---

## ✨ Funcionalidades

### Escopo Inicial (Fase Atual)

#### 🎮 Sistema de Gamificação
- **XP (Experiência):** Sistema de pontos por respostas corretas
- **Níveis:** Progressão baseada em XP acumulado
- **Classificação:** Ranking de usuários por experiência
- **Conquistas:** Badges e recompensas por marcos alcançados

#### 📚 Sistema de Conteúdo
- **4 Níveis de Dificuldade:**
  - 🟢 Iniciante (0-100 XP)
  - 🔵 Básico (101-300 XP)
  - 🟡 Médio (301-600 XP)
  - 🔴 Avançado (601+ XP)

- **4 Matérias Principais:**
  - 📖 Introdução à Educação Financeira
  - 💳 Crédito
  - 📈 Investimentos
  - 🏠 Financiamento

- **Perguntas Contextualizadas:** Cada pergunta inclui contexto para melhor compreensão

#### 🗺️ Mapa de Níveis
- Visualização progressiva dos níveis disponíveis
- Sistema de desbloqueio baseado em XP
- Indicação visual do nível atual

#### 🎯 Missões
- **Missões Diárias:** Desafios renovados diariamente
- **Missões Semanais:** Objetivos de longo prazo
- **Recompensas:** XP adicional por conclusão de missões

### Plano Futuro

#### 🤖 Inteligência Artificial
- **Agente de IA:** Orientação personalizada para usuários
- **Deep Learning de Séries Temporais:** Previsão de investimentos
- **Classificação de Nível:** Análise automática do entendimento econômico do usuário

#### 📊 Análise Avançada
- **Aprendizado de Investimentos:** Análise de gráficos e tendências
- **Recomendações Personalizadas:** Sugestões baseadas no perfil do usuário

---

## 🛠️ Tecnologias

### Stack Selecionada

#### Frontend
- **HTML, CSS e JavaScript** ✅
- React (futuro)
- Flutter (futuro)
- Figma (design)

#### Backend
- **Go (Golang)** ✅
- **Python** ✅ (para ML/AI)
- Node.js (alternativa futura)

#### Machine Learning
- **Keras** ✅
- **Python** ✅
- PyTorch (alternativa futura)

#### Banco de Dados
- **PostgreSQL** ✅
- MongoDB (alternativa futura)

#### Infraestrutura e Deploy
- **Render** ✅ (deploy)

---

## 📁 Estrutura do Projeto

```
Hackthon/
├── layouts/              # Templates HTML
│   ├── dashboard.html    # Dashboard principal
│   ├── question.html     # Página de perguntas
│   ├── result.html       # Página de resultados
│   ├── styles.css        # Estilos CSS
│   └── app.js           # Lógica JavaScript
├── desenvolvimento.md    # Documentação técnica detalhada
├── design.md            # Especificações de design
├── questions-dataset.json # Dataset de perguntas
└── README.md           # Este arquivo
```

### Documentação Adicional

- **[desenvolvimento.md](./desenvolvimento.md)** - Documentação técnica completa, estruturas de dados, API e roadmap detalhado
- **[design.md](./design.md)** - Especificações de design, paleta de cores, componentes e UX

---

## 🗺️ Roadmap

### Fase 1: Setup e Infraestrutura ✅
- [x] Configuração do repositório GitHub
- [x] Setup do projeto Go
- [x] Configuração do PostgreSQL
- [x] Estrutura de pastas do projeto
- [x] Configuração de variáveis de ambiente

### Fase 2: Modelos e Banco de Dados 🔄
- [ ] Criação das tabelas no PostgreSQL
- [ ] Implementação das structs Go
- [ ] Migrations do banco de dados
- [ ] Seed de dados iniciais (perguntas)

### Fase 3: API REST 🔄
- [ ] Endpoints de usuário (CRUD)
- [ ] Endpoints de perguntas
- [ ] Endpoints de respostas
- [ ] Endpoints de progresso
- [ ] Endpoints de missões
- [ ] Middleware de autenticação
- [ ] Validação de dados

### Fase 4: Lógica de Negócio 📋
- [ ] Sistema de XP e níveis
- [ ] Lógica de desbloqueio de níveis
- [ ] Sistema de missões
- [ ] Sistema de conquistas
- [ ] Cálculo de progresso

### Fase 5: Deploy e Testes 📋
- [ ] Configuração no Render
- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Documentação da API
- [ ] Deploy em produção

### Fase 6: Machine Learning e IA 🔮
- [ ] Implementação de agente de IA
- [ ] Modelo de análise de séries temporais
- [ ] Sistema de classificação de nível do usuário
- [ ] Análise de gráficos de investimentos

---

## 📊 Sistema de Pontuação

### XP por Ação
- **Resposta correta:** 10 pontos
- **Nível completado:** 50 pontos
- **Missão diária:** 25 pontos
- **Conquista desbloqueada:** 100 pontos

### Níveis de Dificuldade
| Dificuldade | Faixa de XP | Descrição |
|------------|-------------|-----------|
| 🟢 Iniciante | 0-100 | Conceitos básicos de educação financeira |
| 🔵 Básico | 101-300 | Fundamentos de crédito e planejamento |
| 🟡 Médio | 301-600 | Investimentos e estratégias intermediárias |
| 🔴 Avançado | 601+ | Tópicos complexos e análises avançadas |

---

## 📚 Sobre as Perguntas

### Estrutura
- **4 Dificuldades:** Iniciante, Básico, Médio, Avançado
- **Separação por Matéria:** Organização temática do conteúdo
- **Contextualização:** Cada pergunta inclui contexto para facilitar o aprendizado
- **Explicações:** Feedback detalhado após cada resposta

### Dataset
O projeto inclui um dataset completo de perguntas em `questions-dataset.json` com:
- 120+ perguntas
- 4 matérias diferentes
- Contexto e explicações para cada questão
- Sistema de pontuação variável por dificuldade

