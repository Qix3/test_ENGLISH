// Конфиг
const TOTAL_QUESTIONS = 25;
const TIME_PER_QUESTION = 30;

let currentQuestions = [];        // выбранные 25 вопросов с перемешанными вариантами
let currentIndex = 0;
let userAnswers = [];
let timerInterval = null;
let testStartTime = null;
let currentTimeLeft = TIME_PER_QUESTION;
let isAnswerLocked = false;

// DOM
const welcomeScreen = document.getElementById('welcomeScreen');
const testScreen = document.getElementById('testScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startTestBtn');
const homeBtn = document.getElementById('homeButton');
const retryBtn = document.getElementById('retryTestBtn');
const resultsHomeBtn = document.getElementById('resultsHomeBtn');
const modal = document.getElementById('exitModal');
const modalCancel = document.getElementById('modalCancel');
const modalConfirm = document.getElementById('modalConfirm');
const lastResultPreview = document.getElementById('lastResultPreview');
const questionCounterSpan = document.getElementById('questionCounter');
const timerValueSpan = document.getElementById('timerValue');
const questionTextDiv = document.getElementById('questionText');
const optionsListDiv = document.getElementById('optionsList');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const scoreNumberSpan = document.getElementById('scoreNumber');
const correctCountSpan = document.getElementById('correctCount');
const wrongCountSpan = document.getElementById('wrongCount');
const timeSpentSpan = document.getElementById('timeSpent');
const scoreCommentDiv = document.getElementById('scoreComment');

// Хранилище результатов
let testHistory = [];

function loadHistory() {
    const stored = localStorage.getItem('engTestHistory');
    if (stored) testHistory = JSON.parse(stored);
    updateLastResultPreview();
}

function saveHistory(score, totalTimeSec) {
    const now = new Date();
    const formattedDate = `${now.getDate()} ${now.toLocaleString('ru', { month: 'short' })}`;
    const result = {
        date: formattedDate,
        score: score,
        total: TOTAL_QUESTIONS,
        time: totalTimeSec,
        timestamp: now.getTime()
    };
    testHistory.unshift(result);
    if (testHistory.length > 10) testHistory.pop();
    localStorage.setItem('engTestHistory', JSON.stringify(testHistory));
    updateLastResultPreview();
}

function updateLastResultPreview() {
    if (!lastResultPreview) return;
    if (testHistory.length === 0) {
        lastResultPreview.innerHTML = '<i class="fas fa-chart-line"></i> Нет пройденных тестов';
        return;
    }
    const last = testHistory[0];
    const minutes = Math.floor(last.time / 60);
    const seconds = last.time % 60;
    const timeStr = minutes > 0 ? `${minutes}м ${seconds}с` : `${seconds}с`;
    lastResultPreview.innerHTML = `<i class="fas fa-calendar-alt"></i> ${last.date} | ${last.score}/${last.total} | ${timeStr}`;
}

// Перемешивание массива Фишера-Йетса
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Перемешивание вариантов ответа в вопросе
function shuffleQuestionOptions(q) {
    const newOptions = [...q.options];
    const correctAnswerText = newOptions[q.correct];
    const indices = [0,1,2,3];
    shuffleArray(indices);
    const shuffledOptions = indices.map(i => newOptions[i]);
    let newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);
    return { ...q, options: shuffledOptions, correct: newCorrectIndex };
}

// Выбор 25 случайных вопросов и перемешивание вариантов
function selectRandomQuestions() {
    const shuffledBank = shuffleArray([...fullQuestionBank]);
    const selected = shuffledBank.slice(0, TOTAL_QUESTIONS);
    return selected.map(q => shuffleQuestionOptions(q));
}

// Начать тест
function startTest() {
    currentQuestions = selectRandomQuestions();
    currentIndex = 0;
    userAnswers = [];
    testStartTime = Date.now();
    clearTimer();
    isAnswerLocked = false;
    showScreen('test');
    renderCurrentQuestion();
    updateProgress();
    startTimerForCurrent();
}

function renderCurrentQuestion() {
    const q = currentQuestions[currentIndex];
    questionTextDiv.textContent = q.text;
    optionsListDiv.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.innerHTML = `<span class="option-letter">${letters[idx]}</span><span>${opt}</span>`;
        div.addEventListener('click', () => handleAnswer(idx));
        optionsListDiv.appendChild(div);
    });
    questionCounterSpan.textContent = `Вопрос ${currentIndex+1} / ${TOTAL_QUESTIONS}`;
}

function handleAnswer(selectedIdx) {
    if (isAnswerLocked) return;
    const question = currentQuestions[currentIndex];
    const isCorrect = (selectedIdx === question.correct);
    userAnswers.push({ questionIndex: currentIndex, isCorrect, selectedIdx });
    
    // Подсветка
    const allOptions = document.querySelectorAll('.option-item');
    allOptions.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === question.correct) opt.classList.add('correct');
        if (idx === selectedIdx && !isCorrect) opt.classList.add('wrong');
    });
    isAnswerLocked = true;
    clearTimer();
    
    setTimeout(() => {
        isAnswerLocked = false;
        currentIndex++;
        if (currentIndex < TOTAL_QUESTIONS) {
            renderCurrentQuestion();
            updateProgress();
            startTimerForCurrent();
        } else {
            finishTest();
        }
    }, 1000);
}

function startTimerForCurrent() {
    currentTimeLeft = TIME_PER_QUESTION;
    timerValueSpan.textContent = currentTimeLeft;
    timerValueSpan.classList.remove('pulse');
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!isAnswerLocked) {
            currentTimeLeft--;
            timerValueSpan.textContent = currentTimeLeft;
            if (currentTimeLeft <= 5) timerValueSpan.classList.add('pulse');
            if (currentTimeLeft <= 0) {
                clearTimer();
                handleAnswer(-1);  // нет ответа → неправильный
            }
        }
    }, 1000);
}

function clearTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateProgress() {
    const percent = ((currentIndex) / TOTAL_QUESTIONS) * 100;
    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = `${Math.round(percent)}%`;
}

function finishTest() {
    clearTimer();
    const totalTimeSec = Math.floor((Date.now() - testStartTime) / 1000);
    const correct = userAnswers.filter(a => a.isCorrect).length;
    const wrong = TOTAL_QUESTIONS - correct;
    const score = correct;
    
    // Сохраняем
    saveHistory(score, totalTimeSec);
    
    // Отображаем результат
    scoreNumberSpan.textContent = score;
    correctCountSpan.textContent = correct;
    wrongCountSpan.textContent = wrong;
    const minutes = Math.floor(totalTimeSec / 60);
    const secs = totalTimeSec % 60;
    timeSpentSpan.textContent = minutes > 0 ? `${minutes}м ${secs}с` : `${secs}с`;
    
    let comment = '';
    if (score === 25) comment = '🎉 Идеально! Ты — гуру английского! 🎉';
    else if (score >= 20) comment = '🏆 Отлично! Ты очень хорошо знаешь грамматику.';
    else if (score >= 15) comment = '👍 Хорошо, но есть куда расти.';
    else if (score >= 10) comment = '📚 Неплохо, стоит повторить правила.';
    else comment = '💪 Начни с базы — у тебя получится!';
    scoreCommentDiv.textContent = comment;
    
    // Анимации в зависимости от результата
    triggerResultAnimation(score);
    
    showScreen('results');
}

function triggerResultAnimation(score) {
    if (score === 25) {
        createConfetti();
    } else if (score >= 20) {
        createSparkles();
    } else if (score <= 5) {
        createSadEffect();
    }
}

function createConfetti() {
    for (let i=0;i<80;i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random()*100+'%';
        conf.style.top = '-20px';
        conf.style.position = 'fixed';
        conf.style.width = '8px';
        conf.style.height = '12px';
        conf.style.background = `hsl(${Math.random()*360}, 70%, 60%)`;
        conf.style.zIndex = 999;
        conf.style.pointerEvents = 'none';
        document.body.appendChild(conf);
        conf.animate([{ transform: 'translateY(0) rotate(0deg)' }, { transform: `translateY(100vh) rotate(${Math.random()*720}deg)` }], { duration: 2000, easing: 'cubic-bezier(0.2,0.9,0.4,1)' });
        setTimeout(()=>conf.remove(), 2100);
    }
}
function createSparkles() { /* можно добавить лучи */ }
function createSadEffect() { /* небольшое трясение */ }

// Навигация
function showScreen(screen) {
    welcomeScreen.classList.remove('active');
    testScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    if (screen === 'welcome') welcomeScreen.classList.add('active');
    if (screen === 'test') testScreen.classList.add('active');
    if (screen === 'results') resultsScreen.classList.add('active');
}

function exitTest() {
    clearTimer();
    showScreen('welcome');
    isAnswerLocked = false;
}

// Модалка
homeBtn.addEventListener('click', () => modal.classList.add('active'));
modalCancel.addEventListener('click', () => modal.classList.remove('active'));
modalConfirm.addEventListener('click', () => {
    modal.classList.remove('active');
    exitTest();
});

startBtn.addEventListener('click', startTest);
retryBtn.addEventListener('click', startTest);
resultsHomeBtn.addEventListener('click', () => showScreen('welcome'));

// Инициализация
loadHistory();
showScreen('welcome');