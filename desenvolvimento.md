# DESENVOLVIMENTO - Hackthon

## CATEGORIA DO PROJETO

**Tipo:** Jogo Educacional / EdTech
**Domínio:** Educação Financeira
**Modelo:** Gamificação estilo Duolingo
**Plataforma:** Web (escopo inicial)

---

## CLASSES E ESTRUTURAS (Go)

### 1. Usuário (User)
```go
type User struct {
    ID          string    `json:"id"`
    Username    string    `json:"username"`
    Email       string    `json:"email"`
    XP          int       `json:"xp"`
    Level       int       `json:"level"`
    CreatedAt   time.Time `json:"created_at"`
    UpdatedAt   time.Time `json:"updated_at"`
    Progress    UserProgress `json:"progress"`
}
```

### 2. Progresso do Usuário (UserProgress)
```go
type UserProgress struct {
    UserID              string            `json:"user_id"`
    CompletedLevels     []string          `json:"completed_levels"`
    CurrentLevel        string            `json:"current_level"`
    CompletedMissions   []string          `json:"completed_missions"`
    Achievements        []Achievement     `json:"achievements"`
    LastActivity        time.Time         `json:"last_activity"`
}
```

### 3. Pergunta (Question)
```go
type Question struct {
    ID          string    `json:"id"`
    Difficulty  string    `json:"difficulty"`  // iniciante, basico, medio, avancado
    Subject     string    `json:"subject"`     // introducao, credito, investimentos, financiamento
    Context     string    `json:"context"`
    Question    string    `json:"question"`
    Options     []string  `json:"options"`
    CorrectAnswer int     `json:"correct_answer"`
    Explanation string    `json:"explanation"`
    XPValue     int       `json:"xp_value"`
    CreatedAt   time.Time `json:"created_at"`
}
```

### 4. Resposta do Usuário (UserAnswer)
```go
type UserAnswer struct {
    ID          string    `json:"id"`
    UserID      string    `json:"user_id"`
    QuestionID  string    `json:"question_id"`
    Answer      int       `json:"answer"`
    IsCorrect   bool      `json:"is_correct"`
    TimeSpent   int       `json:"time_spent"`  // em segundos
    AnsweredAt  time.Time `json:"answered_at"`
}
```

### 5. Missão (Mission)
```go
type Mission struct {
    ID          string    `json:"id"`
    Title       string    `json:"title"`
    Description string    `json:"description"`
    Type        string    `json:"type"`        // daily, weekly, achievement
    XP Reward   int       `json:"xp_reward"`
    Requirements map[string]interface{} `json:"requirements"`
    ExpiresAt   *time.Time `json:"expires_at,omitempty"`
}
```

### 6. Nível (Level)
```go
type Level struct {
    ID          string    `json:"id"`
    Number      int       `json:"number"`
    Name        string    `json:"name"`
    Difficulty  string    `json:"difficulty"`
    Subject     string    `json:"subject"`
    Questions   []string  `json:"question_ids"`
    RequiredXP  int       `json:"required_xp"`
    Unlocked    bool      `json:"unlocked"`
}
```

### 7. Conquista (Achievement)
```go
type Achievement struct {
    ID          string    `json:"id"`
    Title       string    `json:"title"`
    Description string    `json:"description"`
    Icon        string    `json:"icon"`
    XP Reward   int       `json:"xp_reward"`
    UnlockedAt  *time.Time `json:"unlocked_at,omitempty"`
}
```

---

## PARÂMETROS DO SISTEMA

### Configurações de XP
- **XP por resposta correta:** 10 pontos
- **XP por nível completado:** 50 pontos
- **XP por missão diária:** 25 pontos
- **XP por conquista:** 100 pontos

### Níveis de Dificuldade
- **Iniciante:** 0-100 XP
- **Básico:** 101-300 XP
- **Médio:** 301-600 XP
- **Avançado:** 601+ XP

### Matérias Disponíveis
- Introdução à Educação Financeira
- Crédito
- Investimentos
- Financiamento

### Configurações de Banco de Dados
- **Tipo:** PostgreSQL
- **Pool de conexões:** 10 conexões máximas
- **Timeout:** 30 segundos

### Configurações de API
- **Porta padrão:** 8080
- **Timeout de requisição:** 30 segundos
- **Rate limiting:** 100 requisições/minuto por IP

---

## ROADMAP - ESCOPO INICIAL

### Fase 1: Setup e Infraestrutura (Semana 1-2)
- [ ] Configuração do repositório GitHub
- [ ] Setup do projeto Go
- [ ] Configuração do PostgreSQL
- [ ] Estrutura de pastas do projeto
- [ ] Configuração de variáveis de ambiente
- [ ] Setup básico de CI/CD (GitHub Actions)

### Fase 2: Modelos e Banco de Dados (Semana 2-3)
- [ ] Criação das tabelas no PostgreSQL
- [ ] Implementação das structs Go
- [ ] Migrations do banco de dados
- [ ] Seed de dados iniciais (perguntas)

### Fase 3: API REST (Semana 3-4)
- [ ] Endpoints de usuário (CRUD)
- [ ] Endpoints de perguntas
- [ ] Endpoints de respostas
- [ ] Endpoints de progresso
- [ ] Endpoints de missões
- [ ] Middleware de autenticação
- [ ] Validação de dados

### Fase 4: Lógica de Negócio (Semana 4-5)
- [ ] Sistema de XP e níveis
- [ ] Lógica de desbloqueio de níveis
- [ ] Sistema de missões
- [ ] Sistema de conquistas
- [ ] Cálculo de progresso

### Fase 5: Deploy e Testes (Semana 5-6)
- [ ] Configuração no Render
- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Documentação da API
- [ ] Deploy em produção

---

## DADOS EM JSON

### Estrutura de Perguntas (questions.json)
```json
{
  "questions": [
    {
      "id": "q001",
      "difficulty": "iniciante",
      "subject": "introducao",
      "context": "Você está começando a aprender sobre educação financeira e precisa entender os conceitos básicos.",
      "question": "O que é uma reserva de emergência?",
      "options": [
        "Dinheiro guardado para compras supérfluas",
        "Valor reservado para imprevistos e situações de urgência",
        "Investimento de alto risco",
        "Conta corrente comum"
      ],
      "correct_answer": 1,
      "explanation": "A reserva de emergência é um valor guardado especificamente para cobrir gastos inesperados, como desemprego, doenças ou reparos urgentes.",
      "xp_value": 10
    },
    {
      "id": "q002",
      "difficulty": "basico",
      "subject": "credito",
      "context": "Você está aprendendo sobre como usar o crédito de forma consciente.",
      "question": "Qual é a melhor prática ao usar cartão de crédito?",
      "options": [
        "Usar todo o limite disponível",
        "Pagar apenas o valor mínimo",
        "Pagar a fatura integralmente antes do vencimento",
        "Não verificar a fatura mensalmente"
      ],
      "correct_answer": 2,
      "explanation": "Pagar a fatura integralmente antes do vencimento evita juros e mantém um bom histórico de crédito.",
      "xp_value": 15
    },
    {
      "id": "q003",
      "difficulty": "medio",
      "subject": "investimentos",
      "context": "Você está explorando opções de investimento para fazer seu dinheiro render.",
      "question": "Qual é a principal diferença entre renda fixa e renda variável?",
      "options": [
        "Não há diferença",
        "Renda fixa tem retorno previsível, renda variável não",
        "Renda variável é sempre mais segura",
        "Renda fixa não existe no Brasil"
      ],
      "correct_answer": 1,
      "explanation": "Renda fixa oferece retorno previsível e menor risco, enquanto renda variável tem retorno incerto e maior risco.",
      "xp_value": 20
    },
    {
      "id": "q004",
      "difficulty": "avancado",
      "subject": "financiamento",
      "context": "Você está analisando opções de financiamento imobiliário.",
      "question": "O que significa CET (Custo Efetivo Total) em um financiamento?",
      "options": [
        "Apenas a taxa de juros",
        "O valor total do imóvel",
        "Todos os custos envolvidos no financiamento expressos em taxa anual",
        "A entrada do financiamento"
      ],
      "correct_answer": 2,
      "explanation": "O CET inclui todos os custos do financiamento: juros, taxas, seguros e encargos, expressos em uma taxa anual.",
      "xp_value": 25
    }
  ]
}
```

### Estrutura de Níveis (levels.json)
```json
{
  "levels": [
    {
      "id": "level_001",
      "number": 1,
      "name": "Primeiros Passos",
      "difficulty": "iniciante",
      "subject": "introducao",
      "question_ids": ["q001", "q002", "q003"],
      "required_xp": 0,
      "unlocked": true
    },
    {
      "id": "level_002",
      "number": 2,
      "name": "Entendendo Crédito",
      "difficulty": "basico",
      "subject": "credito",
      "question_ids": ["q004", "q005", "q006"],
      "required_xp": 50,
      "unlocked": false
    },
    {
      "id": "level_003",
      "number": 3,
      "name": "Investindo com Sabedoria",
      "difficulty": "medio",
      "subject": "investimentos",
      "question_ids": ["q007", "q008", "q009"],
      "required_xp": 150,
      "unlocked": false
    },
    {
      "id": "level_004",
      "number": 4,
      "name": "Financiamentos Avançados",
      "difficulty": "avancado",
      "subject": "financiamento",
      "question_ids": ["q010", "q011", "q012"],
      "required_xp": 300,
      "unlocked": false
    }
  ]
}
```

### Estrutura de Missões (missions.json)
```json
{
  "missions": [
    {
      "id": "mission_001",
      "title": "Primeiro Dia",
      "description": "Complete 5 perguntas hoje",
      "type": "daily",
      "xp_reward": 25,
      "requirements": {
        "questions_answered": 5,
        "time_period": "day"
      },
      "expires_at": null
    },
    {
      "id": "mission_002",
      "title": "Estudante Dedicado",
      "description": "Complete 3 níveis consecutivos",
      "type": "achievement",
      "xp_reward": 100,
      "requirements": {
        "levels_completed": 3,
        "consecutive": true
      },
      "expires_at": null
    },
    {
      "id": "mission_003",
      "title": "Semana Produtiva",
      "description": "Responda 20 perguntas esta semana",
      "type": "weekly",
      "xp_reward": 50,
      "requirements": {
        "questions_answered": 20,
        "time_period": "week"
      },
      "expires_at": null
    }
  ]
}
```

### Estrutura de Conquistas (achievements.json)
```json
{
  "achievements": [
    {
      "id": "ach_001",
      "title": "Iniciante",
      "description": "Complete seu primeiro nível",
      "icon": "🎯",
      "xp_reward": 50,
      "unlocked_at": null
    },
    {
      "id": "ach_002",
      "title": "Estudante Aplicado",
      "description": "Responda 50 perguntas corretamente",
      "icon": "📚",
      "xp_reward": 100,
      "unlocked_at": null
    },
    {
      "id": "ach_003",
      "title": "Mestre Financeiro",
      "description": "Alcance 1000 XP",
      "icon": "🏆",
      "xp_reward": 200,
      "unlocked_at": null
    }
  ]
}
```

---

## MAPAS MENTAIS

### Mapa Mental 1: Arquitetura do Sistema
```
                    HACKTHON - Educação Financeira
                            |
        +-------------------+-------------------+
        |                   |                   |
    FRONTEND            BACKEND (Go)        DATABASE
        |                   |                   |
    React/Flutter      API REST            PostgreSQL
        |                   |                   |
        |           +-------+-------+           |
        |           |       |       |           |
        |      Handlers  Models  Services      |
        |           |       |       |           |
        |           +-------+-------+           |
        |                                       |
        +-------------------+-------------------+
                            |
                    DEPLOY (Render)
```

### Mapa Mental 2: Fluxo de Dados
```
    Usuário
        |
        v
    Frontend (React/Flutter)
        |
        v
    API REST (Go)
        |
        +---> Autenticação
        |
        +---> Validação
        |
        v
    Services Layer
        |
        +---> UserService
        +---> QuestionService
        +---> ProgressService
        +---> MissionService
        |
        v
    Database Layer (PostgreSQL)
        |
        +---> Users Table
        +---> Questions Table
        +---> Answers Table
        +---> Progress Table
        +---> Missions Table
```

### Mapa Mental 3: Estrutura de Níveis e Progressão
```
                    SISTEMA DE NÍVEIS
                            |
        +-------------------+-------------------+
        |                   |                   |
    DIFICULDADE         MATÉRIA            PROGRESSÃO
        |                   |                   |
    +---+---+---+       +---+---+---+       +---+---+
    |   |   |   |       |   |   |   |       |   |   |
    I   B   M   A       I   C   Inv Fin     XP  Level
    n   a   é   v       n   r               |   |
    i   s   d   a       t   e               |   +---+
    c   i   i   n       r   d               |       |
    i   c   o   ç       o   i               |   Missões
    a   o       a       d   t               |   |
    d           d       u   o               |   Conquistas
    o                   ç   s               |
                        ã                     |
                                            |
                                    Sistema de Recompensas
```

### Mapa Mental 4: Funcionalidades Principais
```
                    FUNCIONALIDADES
                            |
        +-------------------+-------------------+
        |                   |                   |
    GAMIFICAÇÃO        CONTEÚDO           PROGRESSO
        |                   |                   |
    +---+---+---+       +---+---+---+       +---+---+
    |   |   |   |       |   |   |   |       |   |   |
    XP  Missões Conquistas Perguntas Níveis Mapa Histórico
    |   |   |           |   |           |   |
    |   |   |           |   |           |   +---+
    |   |   |           |   |           |       |
    |   |   |           |   |           |   Estatísticas
    |   |   |           |   |           |
    |   |   |           |   |           |
    |   |   |           |   +---+
    |   |   |           |       |
    |   |   |           |   Dificuldade
    |   |   |           |
    |   |   |           +---+
    |   |   |               |
    |   |   |           Matéria
    |   |   |
    |   |   +---+
    |   |       |
    |   |   Badges
    |   |
    |   +---+
    |       |
    |   Ranking
    |
    +---+
        |
    Níveis
```

### Mapa Mental 5: Tecnologias e Ferramentas
```
                    STACK TECNOLÓGICO
                            |
        +-------------------+-------------------+
        |                   |                   |
    FRONTEND            BACKEND            INFRAESTRUTURA
        |                   |                   |
    React/Flutter       Go (Golang)         PostgreSQL
        |                   |                   |
    HTML/CSS/JS        Gin/Echo            Docker
        |                   |                   |
    Figma (Design)     JWT Auth            Render (Deploy)
        |                   |                   |
                        JSON API            GitHub (Repo)
                                            |
                                    GitHub Actions (CI/CD)
```

---

## OBSERVAÇÕES IMPORTANTES

1. **Escopo Inicial:** Focar apenas nas funcionalidades básicas de perguntas e respostas, sistema de XP e progressão simples.

2. **Dados JSON:** Os arquivos JSON serão usados para seed inicial do banco de dados e podem ser atualizados conforme necessário.

3. **Versionamento:** Manter versionamento semântico (v1.0.0) para a API.

4. **Documentação:** Usar Swagger/OpenAPI para documentação da API.

5. **Testes:** Implementar testes unitários e de integração para garantir qualidade do código.

