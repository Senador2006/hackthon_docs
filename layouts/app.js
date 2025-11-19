// ============================================
// APP.JS - Hackthon Educação Financeira
// ============================================

// Funções utilitárias globais

/**
 * Formata número de XP com separador de milhar
 */
function formatXP(xp) {
    return xp.toLocaleString('pt-BR');
}

/**
 * Calcula o nível baseado no XP
 */
function calculateLevel(xp) {
    if (xp < 100) return 1;
    if (xp < 300) return 2;
    if (xp < 600) return 3;
    if (xp < 1000) return 4;
    return 5;
}

/**
 * Calcula progresso para próximo nível
 */
function calculateProgress(currentXP, currentLevel) {
    const levelThresholds = {
        1: { min: 0, max: 100 },
        2: { min: 100, max: 300 },
        3: { min: 300, max: 600 },
        4: { min: 600, max: 1000 },
        5: { min: 1000, max: Infinity }
    };

    const threshold = levelThresholds[currentLevel];
    const progress = ((currentXP - threshold.min) / (threshold.max - threshold.min)) * 100;
    return Math.min(Math.max(progress, 0), 100);
}

/**
 * Anima contador de número
 */
function animateCounter(elementId, startValue, endValue, duration = 1000) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const startTime = Date.now();
    const difference = endValue - startValue;

    function updateCounter() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + difference * eased);
        
        element.textContent = formatXP(currentValue);

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    updateCounter();
}

/**
 * Mostra toast de notificação
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Adiciona animação de confetti ao ganhar XP
 */
function createConfetti() {
    const colors = ['#4CAF50', '#2196F3', '#FF9800', '#F44336'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${1 + Math.random()}s linear forwards;
        `;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2000);
    }
}

// Adiciona estilos de animação se não existirem
if (!document.getElementById('confetti-styles')) {
    const style = document.createElement('style');
    style.id = 'confetti-styles';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Inicializa funcionalidades comuns
 */
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona efeito de hover nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Adiciona animação de fade-in nas páginas
    document.body.classList.add('fade-in');
});

/**
 * Simula ganho de XP
 */
function gainXP(amount) {
    const xpElement = document.querySelector('.xp-number');
    if (!xpElement) return;

    const currentXP = parseInt(xpElement.textContent) || 0;
    const newXP = currentXP + amount;

    animateCounter('totalXP', currentXP, newXP);
    createConfetti();
    showToast(`+${amount} XP ganhos!`, 'success');
}

/**
 * Validação de formulários
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#F44336';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

/**
 * Debounce para otimizar eventos
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Carrega o dataset de perguntas
 */
let questionsDataset = null;

async function loadQuestionsDataset() {
    if (questionsDataset) return questionsDataset;
    
    try {
        const response = await fetch('questions-dataset.json');
        questionsDataset = await response.json();
        return questionsDataset;
    } catch (error) {
        console.error('Erro ao carregar dataset de perguntas:', error);
        return null;
    }
}

/**
 * Seleciona uma pergunta aleatória de uma fase específica
 */
async function getRandomQuestion(session, phase) {
    const dataset = await loadQuestionsDataset();
    if (!dataset) return null;

    // Filtra perguntas da sessão e fase especificadas
    const filteredQuestions = dataset.questions.filter(q => 
        q.session === session && q.phase === phase
    );

    if (filteredQuestions.length === 0) {
        console.warn(`Nenhuma pergunta encontrada para sessão: ${session}, fase: ${phase}`);
        return null;
    }

    // Seleciona uma pergunta aleatória
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    return filteredQuestions[randomIndex];
}

/**
 * Valida resposta discursiva usando palavras-chave
 */
function validateDiscursiveAnswer(userAnswer, keywords, minKeywords = 2) {
    if (!userAnswer || !keywords) return false;
    
    const answerLower = userAnswer.toLowerCase();
    const foundKeywords = keywords.filter(keyword => 
        answerLower.includes(keyword.toLowerCase())
    );
    
    return foundKeywords.length >= minKeywords;
}

/**
 * Salva pergunta respondida no localStorage (para evitar repetição)
 */
function markQuestionAsAnswered(questionId) {
    const answered = JSON.parse(localStorage.getItem('answeredQuestions') || '[]');
    if (!answered.includes(questionId)) {
        answered.push(questionId);
        localStorage.setItem('answeredQuestions', JSON.stringify(answered));
    }
}

/**
 * Verifica se uma pergunta já foi respondida
 */
function isQuestionAnswered(questionId) {
    const answered = JSON.parse(localStorage.getItem('answeredQuestions') || '[]');
    return answered.includes(questionId);
}

/**
 * Obtém perguntas não respondidas de uma fase
 */
async function getUnansweredQuestions(session, phase) {
    const dataset = await loadQuestionsDataset();
    if (!dataset) return [];

    const answered = JSON.parse(localStorage.getItem('answeredQuestions') || '[]');
    
    return dataset.questions.filter(q => 
        q.session === session && 
        q.phase === phase && 
        !answered.includes(q.id)
    );
}

// Exporta funções para uso global
window.FinEdu = {
    formatXP,
    calculateLevel,
    calculateProgress,
    animateCounter,
    showToast,
    createConfetti,
    gainXP,
    validateForm,
    debounce,
    loadQuestionsDataset,
    getRandomQuestion,
    validateDiscursiveAnswer,
    markQuestionAsAnswered,
    isQuestionAnswered,
    getUnansweredQuestions
};

