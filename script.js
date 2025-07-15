// Game state variables
let currentFruit = '';
let correctAnswer = 0;
let options = [];
let score = 0;
let timeLeft = 20;
let currentPoints = 10;
let elapsedSeconds = 0;
let earnedPoints = 0;
let gameTimer = null;
let isGeneratingQuestion = false;
let isHandlingTimeUp = false;
let showFeedback = false;
let inputMode = 'click'; // 'click' or 'keyboard'

// Fruit data
const fruits = ['apple', 'banana', 'orange', 'watermelon', 'pineapple'];
const fruitNames = {
    'apple': 'Apple',
    'banana': 'Banana', 
    'orange': 'Orange',
    'watermelon': 'Watermelon',
    'pineapple': 'Pineapple'
};

// Unicode fruit symbols
const fruitSymbols = {
    apple: '🍎',
    banana: '🍌',
    orange: '🍊',
    watermelon: '🍉',
    pineapple: '🍍'
};

// Text-to-speech setup
let speechSynthesis = window.speechSynthesis;

// DOM elements
const homeScreen = document.getElementById('homeScreen');
const modeScreen = document.getElementById('modeScreen');
const gameScreen = document.getElementById('gameScreen');
const countFruitsBtn = document.getElementById('countFruitsBtn');
const clickModeBtn = document.getElementById('clickModeBtn');
const keyboardModeBtn = document.getElementById('keyboardModeBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const backHomeBtn = document.getElementById('backHomeBtn');
const speakBtn = document.getElementById('speakBtn');

const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const timerBox = document.getElementById('timerBox');
const currentPointsElement = document.getElementById('currentPoints');
const questionText = document.getElementById('questionText');
const fruitsContainer = document.getElementById('fruitsContainer');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackContainer = document.getElementById('feedbackContainer');
const feedbackTitle = document.getElementById('feedbackTitle');
const feedbackText = document.getElementById('feedbackText');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');

// Keyboard input elements
const keyboardContainer = document.getElementById('keyboardContainer');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');

// Event listeners
countFruitsBtn.addEventListener('click', showModeSelection);
clickModeBtn.addEventListener('click', () => startGame('click'));
keyboardModeBtn.addEventListener('click', () => startGame('keyboard'));
backToHomeBtn.addEventListener('click', goHome);
backHomeBtn.addEventListener('click', goHome);
speakBtn.addEventListener('click', speakQuestion);
submitBtn.addEventListener('click', submitKeyboardAnswer);
nextQuestionBtn.addEventListener('click', generateQuestion);

// Add option button click listeners
optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-btn') && !showFeedback && inputMode === 'click') {
        const selectedAnswer = parseInt(e.target.dataset.answer);
        checkAnswer(selectedAnswer);
    }
});

// Keyboard input listeners
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !showFeedback) {
        submitKeyboardAnswer();
    }
});

answerInput.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    submitBtn.disabled = !value || value < 1 || value > 10;
});

// Text-to-speech functions
function speakText(text) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel(); // Stop any current speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.7;
        utterance.pitch = 1.2;
        utterance.volume = 0.8;
        speechSynthesis.speak(utterance);
    }
}

function speakQuestion() {
    const question = `How many ${currentFruit}s do you see?`;
    speakText(question);
}

function speakFeedback(correct) {
    if (correct) {
        speakText("Excellent! Well done!");
    } else if (timeLeft <= 0) {
        speakText(`Time's up! The answer was ${correctAnswer}`);
    } else {
        speakText(`Oops! Try again! The correct answer is ${correctAnswer}`);
    }
}

// Input mode management
function updateInputMode() {
    if (inputMode === 'keyboard') {
        optionsContainer.style.display = 'none';
        keyboardContainer.style.display = 'block';
        // Auto-focus with a small delay to ensure visibility
        setTimeout(() => {
            answerInput.focus();
        }, 100);
    } else {
        optionsContainer.style.display = 'grid';
        keyboardContainer.style.display = 'none';
    }
}

function submitKeyboardAnswer() {
    const value = parseInt(answerInput.value);
    if (value && value >= 1 && value <= 10 && !showFeedback) {
        checkAnswer(value);
    }
}

// Screen management
function startGame(mode) {
    inputMode = mode;
    modeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    generateQuestion();
}

function showModeSelection() {
    homeScreen.classList.add('hidden');
    modeScreen.classList.remove('hidden');
}

function goHome() {
    // Properly stop all game activities
    clearTimer();
    speechSynthesis.cancel(); // Stop any ongoing speech
    isGeneratingQuestion = false;
    isHandlingTimeUp = false;
    showFeedback = false;
    
    // Hide feedback and reset input
    feedbackContainer.classList.add('hidden');
    answerInput.value = '';
    submitBtn.disabled = true;
    
    // Switch screens
    gameScreen.classList.add('hidden');
    modeScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    
    // Reset game state
    score = 0;
    updateScore();
}

// Timer functions
function startTimer() {
    clearTimer();
    timeLeft = 20;
    currentPoints = 10;
    elapsedSeconds = 0;
    isHandlingTimeUp = false;
    
    updateTimer();
    updatePoints();
    
    gameTimer = setInterval(() => {
        timeLeft--;
        elapsedSeconds++;
        
        // Decrease points every 2 seconds
        if (elapsedSeconds % 2 === 0 && currentPoints > 1) {
            currentPoints--;
            updatePoints();
        }
        
        updateTimer();
        
        // Check if time is up
        if (timeLeft <= 0) {
            clearTimer();
            if (!isHandlingTimeUp) {
                handleTimeUp();
            }
        }
    }, 1000);
}

function clearTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
}

function handleTimeUp() {
    if (isHandlingTimeUp) return;
    
    isHandlingTimeUp = true;
    clearTimer();
    
    showFeedback = true;
    showFeedbackMessage(false, true);
    speakFeedback(false);
    
    // Don't auto-advance when time is up - show next question button
}

// Question generation
function generateQuestion() {
    if (isGeneratingQuestion) return;
    
    isGeneratingQuestion = true;
    clearTimer();
    
    showFeedback = false;
    feedbackContainer.classList.add('hidden');
    
    // Reset input field
    answerInput.value = '';
    submitBtn.disabled = true;
    
    // Generate random fruit and answer
    currentFruit = fruits[Math.floor(Math.random() * fruits.length)];
    correctAnswer = Math.floor(Math.random() * 10) + 1;
    
    // Generate options
    options = [correctAnswer];
    while (options.length < 4) {
        const randomOption = Math.floor(Math.random() * 10) + 1;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }
    
    // Shuffle options
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    // Update UI
    updateQuestion();
    arrangeFruits();
    updateOptions();
    updateInputMode(); // Setup correct input mode and auto-focus
    
    // Start timer
    startTimer();
    
    // Speak question after a short delay
    setTimeout(() => {
        speakQuestion();
        isGeneratingQuestion = false;
    }, 500);
}

function updateQuestion() {
    questionText.textContent = `How many ${currentFruit}s do you see?`;
}

function updateOptions() {
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, index) => {
        btn.textContent = options[index];
        btn.dataset.answer = options[index];
    });
}

// Fruit arrangement with random positioning
function arrangeFruits() {
    fruitsContainer.innerHTML = '';
    fruitsContainer.style.position = 'relative';
    
    const positions = generateRandomPositions(correctAnswer);
    
    for (let i = 0; i < correctAnswer; i++) {
        const fruitItem = document.createElement('div');
        fruitItem.className = 'fruit-item fruit-random';
        fruitItem.style.position = 'absolute';
        fruitItem.style.left = positions[i].x + 'px';
        fruitItem.style.top = positions[i].y + 'px';
        
        // Use Unicode fruit symbol
        fruitItem.innerHTML = fruitSymbols[currentFruit];
        
        fruitsContainer.appendChild(fruitItem);
    }
}

function generateRandomPositions(count) {
    // Adjust container size based on screen size
    const isMobile = window.innerWidth <= 768;
    const containerWidth = isMobile ? 300 : 420; // Account for padding (increased for bigger container)
    const containerHeight = isMobile ? 180 : 270; // Account for padding (increased for bigger container)
    const fruitSize = isMobile ? 50 : 60; // Size of each fruit item
    const positions = [];
    const minDistance = isMobile ? 70 : 85; // Ensure no significant overlapping
    
    for (let i = 0; i < count; i++) {
        let attempts = 0;
        let position;
        let foundValidPosition = false;
        
        // Try random positioning first
        do {
            position = {
                x: Math.random() * (containerWidth - fruitSize),
                y: Math.random() * (containerHeight - fruitSize)
            };
            attempts++;
            if (!isPositionTooClose(position, positions, minDistance)) {
                foundValidPosition = true;
            }
        } while (attempts < 100 && !foundValidPosition);
        
        // If random positioning fails, use grid-based fallback
        if (!foundValidPosition) {
            position = getGridFallbackPosition(i, count, containerWidth, containerHeight, fruitSize);
        }
        
        positions.push(position);
    }
    
    return positions;
}

function getGridFallbackPosition(index, total, containerWidth, containerHeight, fruitSize) {
    // Create a simple grid as fallback
    const cols = Math.ceil(Math.sqrt(total));
    const rows = Math.ceil(total / cols);
    
    const col = index % cols;
    const row = Math.floor(index / cols);
    
    const spacingX = (containerWidth - fruitSize) / Math.max(1, cols - 1);
    const spacingY = (containerHeight - fruitSize) / Math.max(1, rows - 1);
    
    return {
        x: Math.min(col * spacingX, containerWidth - fruitSize),
        y: Math.min(row * spacingY, containerHeight - fruitSize)
    };
}

function isPositionTooClose(newPos, existingPositions, minDistance) {
    for (let pos of existingPositions) {
        const distance = Math.sqrt(
            Math.pow(newPos.x - pos.x, 2) + Math.pow(newPos.y - pos.y, 2)
        );
        if (distance < minDistance) {
            return true;
        }
    }
    return false;
}



// Answer checking
function checkAnswer(selectedAnswer) {
    if (showFeedback) return;
    
    const isCorrect = selectedAnswer === correctAnswer;
    
    if (isCorrect) {
        // Stop timer and show success feedback
        clearTimer();
        showFeedback = true;
        earnedPoints = currentPoints;
        score += earnedPoints;
        updateScore();
        
        showFeedbackMessage(true, false);
        speakFeedback(true);
        
        // Auto-advance after 3 seconds for correct answers
        setTimeout(() => {
            generateQuestion();
        }, 3000);
    } else {
        // For incorrect answers, show brief feedback but keep timer running
        showBriefIncorrectFeedback();
        speakText("Oops! Try again!");
        
        // Clear input for next attempt
        if (inputMode === 'keyboard') {
            answerInput.value = '';
            submitBtn.disabled = true;
            setTimeout(() => answerInput.focus(), 100);
        }
    }
}

function showBriefIncorrectFeedback() {
    // Show brief "try again" message without stopping the game
    feedbackContainer.classList.remove('hidden', 'correct', 'incorrect');
    feedbackContainer.classList.add('incorrect');
    feedbackTitle.textContent = 'Oops! Try again!';
    feedbackText.textContent = 'Keep trying...';
    nextQuestionBtn.style.display = 'none';
    
    // Hide the feedback after 2 seconds
    setTimeout(() => {
        feedbackContainer.classList.add('hidden');
    }, 2000);
}

function showFeedbackMessage(isCorrect, timeUp) {
    feedbackContainer.classList.remove('hidden', 'correct', 'incorrect');
    
    if (isCorrect) {
        feedbackContainer.classList.add('correct');
        feedbackTitle.textContent = 'Excellent!';
        feedbackText.textContent = `+${earnedPoints} points!`;
        nextQuestionBtn.style.display = 'none'; // Hide button for correct answers (auto-advance)
    } else if (timeUp) {
        feedbackContainer.classList.add('incorrect');
        feedbackTitle.textContent = "Time's up!";
        feedbackText.textContent = `The correct answer is ${correctAnswer}`;
        nextQuestionBtn.style.display = 'block'; // Show button when time is up
    }
}

// UI update functions
function updateScore() {
    scoreElement.textContent = score;
}

function updateTimer() {
    timerElement.textContent = timeLeft;
    
    // Change timer color when low
    if (timeLeft <= 10) {
        timerBox.classList.add('warning');
    } else {
        timerBox.classList.remove('warning');
    }
}

function updatePoints() {
    currentPointsElement.textContent = currentPoints;
}

// Initialize the game
function init() {
    updateScore();
    updateTimer();
    updatePoints();
}

// Start the app
init(); 