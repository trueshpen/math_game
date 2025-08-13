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
let advanceTimeout = null;
let isGeneratingQuestion = false;
let isHandlingTimeUp = false;
let showFeedback = false;
let inputMode = 'click'; // 'click' or 'keyboard'
// Game selection and difficulty/answer ranges
let selectedGame = null; // 'count' | 'add'
let selectedDifficulty = null; // 'easy' | 'medium' | 'hard'
let difficultyMin = 1;
let difficultyMax = 5;
let answerMin = 1;
let answerMax = 5;
// Addition game state
let addendA = 0;
let addendB = 0;
// Compare game state
let compareLeftCount = 0;
let compareRightCount = 0;

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
const addFruitsBtn = document.getElementById('addFruitsBtn');
const compareFruitsBtn = document.getElementById('compareFruitsBtn');
const difficultyScreen = document.getElementById('difficultyScreen');
const easyDifficultyBtn = document.getElementById('easyDifficultyBtn');
const mediumDifficultyBtn = document.getElementById('mediumDifficultyBtn');
const hardDifficultyBtn = document.getElementById('hardDifficultyBtn');
const backToHomeFromDifficultyBtn = document.getElementById('backToHomeFromDifficultyBtn');
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
// Dynamic titles
const difficultyTitle = document.getElementById('difficultyTitle');
const modeTitle = document.getElementById('modeTitle');
const gameHeaderTitle = document.getElementById('gameHeaderTitle');

// Keyboard input elements
const keyboardContainer = document.getElementById('keyboardContainer');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');

// Event listeners
countFruitsBtn.addEventListener('click', () => chooseGame('count'));
if (addFruitsBtn) addFruitsBtn.addEventListener('click', () => chooseGame('add'));
if (compareFruitsBtn) compareFruitsBtn.addEventListener('click', () => chooseGame('compare'));
easyDifficultyBtn.addEventListener('click', () => selectDifficulty('easy'));
mediumDifficultyBtn.addEventListener('click', () => selectDifficulty('medium'));
hardDifficultyBtn.addEventListener('click', () => selectDifficulty('hard'));
backToHomeFromDifficultyBtn.addEventListener('click', goHome);
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
    submitBtn.disabled = !value || value < answerMin || value > answerMax;
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
    let question;
    if (selectedGame === 'add') {
        question = `Add the ${currentFruit}s. How many in total?`;
    } else if (selectedGame === 'compare') {
        question = `Which group has more? Choose greater than, less than, or equal.`;
    } else {
        question = `How many ${currentFruit}s do you see?`;
    }
    speakText(question);
}

function speakFeedback(correct) {
    if (correct) {
        if (selectedGame === 'compare') {
            speakText('Correct!');
        } else {
            speakText("Excellent! Well done!");
        }
    } else if (timeLeft <= 0) {
        if (selectedGame === 'compare') {
            let phrase;
            if (correctAnswer === '>') phrase = 'the left group is greater than the right';
            else if (correctAnswer === '<') phrase = 'the right group is greater than the left';
            else phrase = 'the groups are equal in size';
            speakText(`Time is up, ${phrase}.`);
        } else if (selectedGame === 'add') {
            speakText(`Time's up! The answer was ${correctAnswer}`);
        } else {
            speakText(`Time's up! The answer was ${correctAnswer}`);
        }
    } else {
        if (selectedGame === 'compare') {
            speakText('Oops! Try again!');
        } else {
            speakText(`Oops! Try again! The correct answer is ${correctAnswer}`);
        }
    }
}

// Input mode management
function updateInputMode() {
    if (selectedGame === 'compare') {
        // Compare game uses custom operator buttons inside fruits container
        optionsContainer.style.display = 'none';
        keyboardContainer.style.display = 'none';
    } else if (inputMode === 'keyboard') {
        optionsContainer.style.display = 'none';
        keyboardContainer.style.display = 'block';
        // Auto-focus with a small delay to ensure visibility
        setTimeout(() => {
            answerInput.focus();
        }, 100);
        answerInput.min = String(answerMin);
        answerInput.max = String(answerMax);
    } else {
        optionsContainer.style.display = 'grid';
        keyboardContainer.style.display = 'none';
    }
}

function submitKeyboardAnswer() {
    const value = parseInt(answerInput.value);
    if (value && value >= answerMin && value <= answerMax && !showFeedback) {
        checkAnswer(value);
    }
}

// Screen management
function startGame(mode) {
    inputMode = mode;
    modeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    answerInput.min = String(answerMin);
    answerInput.max = String(answerMax);
    generateQuestion();
}

function showModeSelection() {
    homeScreen.classList.add('hidden');
    modeScreen.classList.remove('hidden');
}

function showDifficultySelection() {
    homeScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
}

function chooseGame(game) {
    clearTimer();
    if (advanceTimeout) { clearTimeout(advanceTimeout); advanceTimeout = null; }
    if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch (_) {} }
    isGeneratingQuestion = false;
    isHandlingTimeUp = false;
    showFeedback = false;
    selectedGame = game; // 'count' | 'add' | 'compare'
    if (game === 'count') {
        difficultyTitle.textContent = '🍎 Count the Fruits 🍊';
    } else if (game === 'add') {
        difficultyTitle.textContent = '🍎 Add the Fruits 🍊';
    } else {
        difficultyTitle.textContent = '🍎 Which Group Has More? 🍊';
    }
    showDifficultySelection();
}

function selectDifficulty(level) {
    selectedDifficulty = level;
    if (selectedGame === 'count') {
        if (level === 'easy') { difficultyMin = 1; difficultyMax = 5; }
        else if (level === 'medium') { difficultyMin = 5; difficultyMax = 10; }
        else if (level === 'hard') { difficultyMin = 10; difficultyMax = 15; }
        answerMin = difficultyMin;
        answerMax = difficultyMax;
    } else if (selectedGame === 'add') {
        // Add game: difficulty applies to SUM, not per addend
        if (level === 'easy') { answerMin = 2; answerMax = 5; }
        else if (level === 'medium') { answerMin = 5; answerMax = 10; }
        else if (level === 'hard') { answerMin = 5; answerMax = 15; }
        // Set a broad per-addend range for generation (at least 1 each)
        difficultyMin = 1;
        difficultyMax = Math.max(1, answerMax - 1);
    } else if (selectedGame === 'compare') {
        // Compare game: difficulty applies to group sizes
        if (level === 'easy') { difficultyMin = 1; difficultyMax = 5; }
        else if (level === 'medium') { difficultyMin = 5; difficultyMax = 10; }
        else if (level === 'hard') { difficultyMin = 5; difficultyMax = 15; }
    }
    // Update titles for next screens
    if (modeTitle) {
        if (selectedGame === 'count') modeTitle.textContent = '🍎 Count the Fruits 🍊';
        else if (selectedGame === 'add') modeTitle.textContent = '🍎 Add the Fruits 🍊';
        else modeTitle.textContent = '🍎 Which Group Has More? 🍊';
    }
    if (gameHeaderTitle) {
        if (selectedGame === 'count') gameHeaderTitle.textContent = 'Count the Fruits!';
        else if (selectedGame === 'add') gameHeaderTitle.textContent = 'Add the Fruits!';
        else gameHeaderTitle.textContent = 'Which Group Has More?';
    }
    difficultyScreen.classList.add('hidden');
    if (selectedGame === 'compare') {
        // Skip mode selection for compare game, always click mode
        startGame('click');
    } else {
        modeScreen.classList.remove('hidden');
    }
}

function goHome() {
    // Properly stop all game activities
    clearTimer();
    if (advanceTimeout) { clearTimeout(advanceTimeout); advanceTimeout = null; }
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
    difficultyScreen.classList.add('hidden');
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
    // Only generate if game screen is visible
    if (gameScreen.classList.contains('hidden')) {
        isGeneratingQuestion = false;
        return;
    }
    
    isGeneratingQuestion = true;
    clearTimer();
    
    showFeedback = false;
    feedbackContainer.classList.add('hidden');
    
    // Reset input field
    answerInput.value = '';
    submitBtn.disabled = true;
    
    // Generate random fruit and answer based on selected game
    currentFruit = fruits[Math.floor(Math.random() * fruits.length)];
    if (selectedGame === 'add') {
        const sum = getRandomIntInclusive(answerMin, answerMax);
        // ensure two positive addends that sum to 'sum'
        addendA = getRandomIntInclusive(1, sum - 1);
        addendB = sum - addendA;
        correctAnswer = sum;
    } else if (selectedGame === 'compare') {
        compareLeftCount = getRandomIntInclusive(difficultyMin, difficultyMax);
        compareRightCount = getRandomIntInclusive(difficultyMin, difficultyMax);
        correctAnswer = compareLeftCount > compareRightCount ? '>' : (compareLeftCount < compareRightCount ? '<' : '=');
    } else {
        correctAnswer = getRandomIntInclusive(difficultyMin, difficultyMax);
    }
    
    // Generate options for count and add games as 4 consecutive numbers around the correct answer
    if (selectedGame === 'add') {
        const minSum = answerMin;
        const maxSum = answerMax;
        options = buildConsecutiveOptions(correctAnswer, minSum, maxSum);
    } else if (selectedGame === 'count') {
        options = buildConsecutiveOptions(correctAnswer, difficultyMin, difficultyMax);
    } else {
        options = [];
    }
    
    // Shuffle options (when applicable)
    if (options && options.length > 0) {
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
    }
    
    // Update UI
    updateQuestion();
    if (selectedGame === 'add') {
        arrangeAdditionFruits();
    } else if (selectedGame === 'compare') {
        arrangeCompareFruits();
    } else {
        arrangeFruits();
    }
    if (selectedGame !== 'compare') {
        updateOptions();
    }
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
    if (selectedGame === 'add') {
        questionText.textContent = `How many ${currentFruit}s in total?`;
    } else if (selectedGame === 'compare') {
        const left = compareLeftCount;
        const right = compareRightCount;
        questionText.textContent = `Which group has more?`;
    } else {
        questionText.textContent = `How many ${currentFruit}s do you see?`;
    }
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
    fruitsContainer.classList.remove('compare-layout');
    
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

// Arrange two groups of fruits with a plus sign between for addition game
function arrangeAdditionFruits() {
    fruitsContainer.innerHTML = '';
    fruitsContainer.style.position = 'relative';
    fruitsContainer.classList.remove('compare-layout');

    const isMobile = window.innerWidth <= 768;
    const containerWidth = isMobile ? 300 : 420;
    const containerHeight = isMobile ? 180 : 270;
    const groupWidth = Math.floor(containerWidth / 2) - 30;
    const fruitSize = isMobile ? 50 : 60;

    // Left group positions
    const leftPositions = generateRandomPositionsInArea(addendA, 0, 0, groupWidth, containerHeight, fruitSize);
    // Right group positions
    const rightPositions = generateRandomPositionsInArea(addendB, groupWidth + 60, 0, groupWidth, containerHeight, fruitSize);

    // Render left group
    for (let i = 0; i < addendA; i++) {
        const item = document.createElement('div');
        item.className = 'fruit-item fruit-random';
        item.style.position = 'absolute';
        item.style.left = leftPositions[i].x + 'px';
        item.style.top = leftPositions[i].y + 'px';
        item.innerHTML = fruitSymbols[currentFruit];
        fruitsContainer.appendChild(item);
    }

    // Plus sign
    const plus = document.createElement('div');
    plus.className = 'plus-sign';
    plus.style.position = 'absolute';
    plus.style.left = (groupWidth + 20) + 'px';
    plus.style.top = (containerHeight / 2 - 20) + 'px';
    plus.style.fontSize = isMobile ? '28px' : '36px';
    plus.style.fontWeight = 'bold';
    plus.textContent = '+';
    fruitsContainer.appendChild(plus);

    // Render right group
    for (let i = 0; i < addendB; i++) {
        const item = document.createElement('div');
        item.className = 'fruit-item fruit-random';
        item.style.position = 'absolute';
        item.style.left = rightPositions[i].x + 'px';
        item.style.top = rightPositions[i].y + 'px';
        item.innerHTML = fruitSymbols[currentFruit];
        fruitsContainer.appendChild(item);
    }
}

// Arrange two groups of fruits with operator buttons between for compare game
function arrangeCompareFruits() {
    fruitsContainer.innerHTML = '';
    fruitsContainer.style.position = 'static';
    fruitsContainer.classList.add('compare-layout');

    const isMobile = window.innerWidth <= 768;
    const boxWidth = isMobile ? 150 : 200;
    const boxHeight = isMobile ? 180 : 240;
    const fruitSize = isMobile ? 50 : 60;

    // Create left and right boxes
    const leftBox = document.createElement('div');
    leftBox.className = 'compare-box';
    leftBox.style.position = 'relative';
    leftBox.style.width = boxWidth + 'px';
    leftBox.style.height = boxHeight + 'px';

    const rightBox = document.createElement('div');
    rightBox.className = 'compare-box';
    rightBox.style.position = 'relative';
    rightBox.style.width = boxWidth + 'px';
    rightBox.style.height = boxHeight + 'px';

    // Operator buttons container (center column)
    const ops = document.createElement('div');
    ops.className = 'compare-operators';
    ops.style.alignSelf = 'center';

    const symbols = ['>', '<', '='];
    symbols.forEach(sym => {
        const b = document.createElement('button');
        b.className = 'compare-operator';
        b.type = 'button';
        b.textContent = sym;
        b.dataset.answer = sym;
        ops.appendChild(b);
    });
    
    // Assemble layout
    fruitsContainer.appendChild(leftBox);
    fruitsContainer.appendChild(ops);
    fruitsContainer.appendChild(rightBox);

    // Generate positions relative to each box
    const leftPositions = generateRandomPositionsInArea(compareLeftCount, 0, 0, boxWidth, boxHeight, fruitSize);
    const rightPositions = generateRandomPositionsInArea(compareRightCount, 0, 0, boxWidth, boxHeight, fruitSize);

    // Render left group
    for (let i = 0; i < compareLeftCount; i++) {
        const item = document.createElement('div');
        item.className = 'fruit-item fruit-random';
        item.style.position = 'absolute';
        item.style.left = leftPositions[i].x + 'px';
        item.style.top = leftPositions[i].y + 'px';
        item.innerHTML = fruitSymbols[currentFruit];
        leftBox.appendChild(item);
    }

    // Render right group
    for (let i = 0; i < compareRightCount; i++) {
        const item = document.createElement('div');
        item.className = 'fruit-item fruit-random';
        item.style.position = 'absolute';
        item.style.left = rightPositions[i].x + 'px';
        item.style.top = rightPositions[i].y + 'px';
        item.innerHTML = fruitSymbols[currentFruit];
        rightBox.appendChild(item);
    }
}

function generateRandomPositionsInArea(count, offsetX, offsetY, areaWidth, areaHeight, fruitSize) {
    const positions = [];
    const minDistance = Math.min(areaWidth, areaHeight) / 4;
    for (let i = 0; i < count; i++) {
        let attempts = 0;
        let pos;
        let ok = false;
        do {
            pos = {
                x: offsetX + Math.random() * (areaWidth - fruitSize),
                y: offsetY + Math.random() * (areaHeight - fruitSize)
            };
            attempts++;
            ok = !isPositionTooClose(pos, positions, minDistance);
        } while (attempts < 100 && !ok);
        if (!ok) {
            pos = { x: offsetX + (i % 3) * (fruitSize + 10), y: offsetY + Math.floor(i / 3) * (fruitSize + 10) };
        }
        positions.push(pos);
    }
    return positions;
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
    
    const isCorrect = selectedGame === 'compare' ? (String(selectedAnswer) === String(correctAnswer)) : (selectedAnswer === correctAnswer);
    
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
        advanceTimeout = setTimeout(() => {
            advanceTimeout = null;
            generateQuestion();
        }, 3000);
    } else {
        // For incorrect answers, show brief feedback but keep timer running
        if (selectedGame === 'compare') {
            // Immediate short feedback for compare
            feedbackContainer.classList.remove('hidden', 'correct', 'incorrect');
            feedbackContainer.classList.add('incorrect');
            feedbackTitle.textContent = 'Oops! Try again!';
            feedbackText.textContent = 'Keep trying...';
            nextQuestionBtn.style.display = 'none';
            setTimeout(() => feedbackContainer.classList.add('hidden'), 1200);
        } else {
            showBriefIncorrectFeedback();
            speakText("Oops! Try again!");
        }
        
        // Clear input for next attempt
        if (inputMode === 'keyboard') {
            answerInput.value = '';
            submitBtn.disabled = true;
            setTimeout(() => answerInput.focus(), 100);
        }
    }
}

// Compare game operator clicks
fruitsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (!target) return;
    if (!target.classList || !target.classList.contains('compare-operator')) return;
    if (showFeedback || selectedGame !== 'compare') return;
    const symbol = target.dataset.answer;
    // Highlight selection
    const allOps = fruitsContainer.querySelectorAll('.compare-operator');
    allOps.forEach(btn => btn.classList.remove('selected', 'correct', 'incorrect'));
    target.classList.add('selected');
    const wasCorrect = symbol === correctAnswer;
    if (wasCorrect) {
        target.classList.add('correct');
    } else {
        target.classList.add('incorrect');
    }
    checkAnswer(symbol);
});

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
        if (selectedGame === 'compare') {
            feedbackText.textContent = `Correct!`;
        } else {
            feedbackText.textContent = `+${earnedPoints} points!`;
        }
        nextQuestionBtn.style.display = 'none'; // Hide button for correct answers (auto-advance)
        // Addition merge animation on correct
        if (selectedGame === 'add') {
            tryMergeAnimation();
        }
    } else if (timeUp) {
        feedbackContainer.classList.add('incorrect');
        feedbackTitle.textContent = "Time's up!";
        if (selectedGame === 'compare') {
            let phrase;
            if (correctAnswer === '>') phrase = 'Left > Right';
            else if (correctAnswer === '<') phrase = 'Left < Right';
            else phrase = 'Left = Right';
            feedbackText.textContent = phrase;
        } else {
            feedbackText.textContent = `The correct answer is ${correctAnswer}`;
        }
        nextQuestionBtn.style.display = 'block'; // Show button when time is up
    }
}

function tryMergeAnimation() {
    const items = Array.from(fruitsContainer.querySelectorAll('.fruit-item'));
    if (items.length === 0) return;
    const centerX = fruitsContainer.clientWidth / 2;
    const centerY = fruitsContainer.clientHeight / 2;
    // Fade out the plus sign when merging
    const plusSign = fruitsContainer.querySelector('.plus-sign');
    if (plusSign) {
        plusSign.style.transition = 'opacity 0.6s ease-in, transform 0.6s ease-in';
        requestAnimationFrame(() => {
            plusSign.style.opacity = '0';
            plusSign.style.transform = 'scale(0.7)';
        });
        setTimeout(() => {
            if (plusSign && plusSign.parentNode) {
                plusSign.parentNode.removeChild(plusSign);
            }
        }, 650);
    }
    items.forEach((el, idx) => {
        el.style.transition = 'transform 0.6s ease-in, opacity 0.6s ease-in';
        const rect = el.getBoundingClientRect();
        const parentRect = fruitsContainer.getBoundingClientRect();
        const dx = centerX - (rect.left - parentRect.left) - el.offsetWidth / 2;
        const dy = centerY - (rect.top - parentRect.top) - el.offsetHeight / 2;
        requestAnimationFrame(() => {
            el.style.transform = `translate(${dx}px, ${dy}px) scale(0.8)`;
            el.style.opacity = '0.7';
        });
    });
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

function getRandomIntInclusive(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

// Build four consecutive options around the correct answer, clamped to bounds.
// Tries to return either [x-2, x-1, x, x+1] or [x-1, x, x+1, x+2]
// If close to edges, it shifts the window to stay within [minBound, maxBound]
function buildConsecutiveOptions(x, minBound, maxBound) {
    let start;
    // Randomly choose left-leaning or right-leaning window initially
    const preferLeft = Math.random() < 0.5;
    if (preferLeft) {
        start = x - 2;
    } else {
        start = x - 1;
    }
    // Clamp to bounds so we have 4 values within [minBound, maxBound]
    if (start < minBound) start = minBound;
    if (start + 3 > maxBound) start = Math.max(minBound, maxBound - 3);
    // Ensure x is included; if not, adjust to include it
    if (x < start) start = x - 1;
    if (x > start + 3) start = x - 2;
    if (start < minBound) start = minBound;
    if (start + 3 > maxBound) start = Math.max(minBound, maxBound - 3);
    const arr = [start, start + 1, start + 2, start + 3];
    // Guard: if x fell outside due to extreme bounds, force last element to x and rebuild window if needed
    if (!arr.includes(x)) {
        // Try to center around x as much as possible
        start = Math.min(Math.max(x - 1, minBound), Math.max(minBound, maxBound - 3));
        const arr2 = [start, start + 1, start + 2, start + 3];
        return arr2.map(v => Math.min(Math.max(v, minBound), maxBound));
    }
    return arr;
}

// Initialize the game
function init() {
    updateScore();
    updateTimer();
    updatePoints();
}

// Start the app
init(); 