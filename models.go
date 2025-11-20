package main

import (
	"time"

	"gorm.io/gorm"
)

// Metadata representa os metadados do dataset de perguntas
type Metadata struct {
	ID            uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	Version       string    `gorm:"type:varchar(20);not null" json:"version"`
	LastUpdated   time.Time `gorm:"type:date;not null" json:"last_updated"`
	TotalQuestions int      `gorm:"type:int;not null" json:"total_questions"`
	Subjects      string    `gorm:"type:text" json:"subjects"` // JSON array stored as text
	CreatedAt     time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt     time.Time `gorm:"autoUpdateTime" json:"updated_at"`
}

// Question representa uma pergunta do sistema
type Question struct {
	ID            uint           `gorm:"primaryKey;autoIncrement" json:"id"`
	QuestionID    string         `gorm:"type:varchar(50);uniqueIndex;not null" json:"question_id"` // ID original do JSON (q001, q002, etc)
	Type          string         `gorm:"type:varchar(20);not null" json:"type"`                    // objetiva, discursiva
	Session       string         `gorm:"type:varchar(50);not null;index" json:"session"`          // introducao, credito, investimentos, financiamento
	Phase         string         `gorm:"type:varchar(100);not null;index" json:"phase"`           // conceitos_basicos, orcamento_pessoal, etc
	Difficulty    string         `gorm:"type:varchar(20);not null;index" json:"difficulty"`      // iniciante, basico, medio, avancado
	Context       string         `gorm:"type:text" json:"context"`
	Question      string         `gorm:"type:text;not null" json:"question"`
	Options       string         `gorm:"type:text" json:"options"` // JSON array stored as text (para perguntas objetivas)
	CorrectAnswer *int           `gorm:"type:int" json:"correct_answer"`                          // nullable para perguntas discursivas
	Explanation   string         `gorm:"type:text;not null" json:"explanation"`
	XPValue       int            `gorm:"type:int;not null;default:10" json:"xp_value"`
	Keywords      string         `gorm:"type:text" json:"keywords"` // JSON array stored as text (para perguntas discursivas)
	CreatedAt     time.Time      `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt     time.Time      `gorm:"autoUpdateTime" json:"updated_at"`
	DeletedAt     gorm.DeletedAt `gorm:"index" json:"deleted_at,omitempty"`
}

// TableName especifica o nome da tabela para Question
func (Question) TableName() string {
	return "questions"
}

// TableName especifica o nome da tabela para Metadata
func (Metadata) TableName() string {
	return "metadata"
}

