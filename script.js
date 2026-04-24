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
// Play mode state
let playMode = null; // 'time' | 'questions'
let questionsAsked = 0;
let questionTarget = 10;
let attemptsThisQuestion = 0;
let runEnded = false;
let hasAnnouncedQuestion = false;
let questionsRemaining = 0;
// Age group selection
let selectedAgeGroup = null; // 'little' | 'bigger'

// Game selection and difficulty/answer ranges
let selectedGame = null; // 'count' | 'add' | 'compare' | 'match' | 'addsub' | 'multiply' | 'divide'
let selectedDifficulty = null; // 'easy' | 'medium' | 'hard'
let difficultyMin = 1;
let difficultyMax = 5;
let answerMin = 1;
let answerMax = 5;
// Addition game state
let addendA = 0;
let addendB = 0;
// Math problem state (addsub, multiply, divide)
let addSubOperator = '+'; // '+' | '-' | '×' | '÷'
let addSubNum1 = 0;
let addSubNum2 = 0;
// Compare game state
let compareLeftCount = 0;
let compareRightCount = 0;
// Match game state
let matchNumbers = []; // e.g., [4,6,8]
let matchGroups = []; // e.g., [{fruit:'apple', count:4, id:'g1'}, ...]
let matchLinks = []; // {numId, groupId}
let draggingLine = null; // SVG path element
let dragSourceId = null; // starting endpoint id
let svgLayer = null; // SVG overlay for connection lines
let selectedNumberId = null;
let selectedGroupId = null;

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
const ageSelectionScreen = document.getElementById('ageSelectionScreen');
const littleKidsBtn = document.getElementById('littleKidsBtn');
const biggerKidsBtn = document.getElementById('biggerKidsBtn');
const homeScreen = document.getElementById('homeScreen');
const modeScreen = document.getElementById('modeScreen');
const gameScreen = document.getElementById('gameScreen');
const countFruitsBtn = document.getElementById('countFruitsBtn');
const addFruitsBtn = document.getElementById('addFruitsBtn');
const compareFruitsBtn = document.getElementById('compareFruitsBtn');
const matchFruitsBtn = document.getElementById('matchFruitsBtn');
const addSubBtn = document.getElementById('addSubBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
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
const pointsBoxEl = document.querySelector('.points-box');
const currentPointsElement = document.getElementById('currentPoints');
const progressBox = document.getElementById('progressBox');
const progressText = document.getElementById('progressText');
const questionText = document.getElementById('questionText');
const fruitsContainer = document.getElementById('fruitsContainer');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackContainer = document.getElementById('feedbackContainer');
const feedbackTitle = document.getElementById('feedbackTitle');
const feedbackText = document.getElementById('feedbackText');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
// Play Mode screen elements
const playModeScreen = document.getElementById('playModeScreen');
const timeModeBtn = document.getElementById('timeModeBtn');
const questionsModeBtn = document.getElementById('questionsModeBtn');
const backToHomeFromPlayModeBtn = document.getElementById('backToHomeFromPlayModeBtn');
// Settings UI elements
const settingsPanel = document.getElementById('settingsPanel');
const settingsClickMode = document.getElementById('settingsClickMode');
const settingsKeyboardMode = document.getElementById('settingsKeyboardMode');
const settingsDiffEasy = document.getElementById('settingsDiffEasy');
const settingsDiffMedium = document.getElementById('settingsDiffMedium');
const settingsDiffHard = document.getElementById('settingsDiffHard');
const settingsSaved = document.getElementById('settingsSaved');
// Dynamic titles
const difficultyTitle = document.getElementById('difficultyTitle');
const modeTitle = document.getElementById('modeTitle');
const gameHeaderTitle = document.getElementById('gameHeaderTitle');

// Keyboard input elements
const keyboardContainer = document.getElementById('keyboardContainer');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
// Result screen elements
const resultScreen = document.getElementById('resultScreen');
const resultTitle = document.getElementById('resultTitle');
const resultScore = document.getElementById('resultScore');
const resultStars = document.getElementById('resultStars');
const resultBackBtn = document.getElementById('resultBackBtn');
const changeAgeGroupBtn = document.getElementById('changeAgeGroupBtn');

// Event listeners
if (littleKidsBtn) littleKidsBtn.addEventListener('click', () => selectAgeGroup('little'));
if (biggerKidsBtn) biggerKidsBtn.addEventListener('click', () => selectAgeGroup('bigger'));
countFruitsBtn.addEventListener('click', () => chooseGame('count'));
if (addFruitsBtn) addFruitsBtn.addEventListener('click', () => chooseGame('add'));
if (compareFruitsBtn) compareFruitsBtn.addEventListener('click', () => chooseGame('compare'));
if (matchFruitsBtn) matchFruitsBtn.addEventListener('click', () => chooseGame('match'));
if (addSubBtn) addSubBtn.addEventListener('click', () => chooseGame('addsub'));
if (multiplyBtn) multiplyBtn.addEventListener('click', () => chooseGame('multiply'));
if (divideBtn) divideBtn.addEventListener('click', () => chooseGame('divide'));
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
// Play mode listeners
if (timeModeBtn) timeModeBtn.addEventListener('click', () => selectPlayMode('time'));
if (questionsModeBtn) questionsModeBtn.addEventListener('click', () => selectPlayMode('questions'));
if (backToHomeFromPlayModeBtn) backToHomeFromPlayModeBtn.addEventListener('click', goHome);
if (resultBackBtn) resultBackBtn.addEventListener('click', goHome);
if (changeAgeGroupBtn) changeAgeGroupBtn.addEventListener('click', goToAgeSelection);

// Settings management
const SETTINGS_KEYS = { mode: 'km_inputMode', difficulty: 'km_difficulty' };

function loadSettings() {
    try {
        const mode = localStorage.getItem(SETTINGS_KEYS.mode);
        const difficulty = localStorage.getItem(SETTINGS_KEYS.difficulty);
        return { mode, difficulty };
    } catch (_) {
        return { mode: null, difficulty: null };
    }
}

function persistSettings(partial) {
    const current = loadSettings();
    const next = { ...current, ...partial };
    try {
        if (next.mode) localStorage.setItem(SETTINGS_KEYS.mode, next.mode);
        if (next.difficulty) localStorage.setItem(SETTINGS_KEYS.difficulty, next.difficulty);
    } catch (_) {}
    showSettingsSaved();
    updateSettingsUI();
}

function updateSettingsUI() {
    const { mode, difficulty } = loadSettings();
    // Mode buttons
    [settingsClickMode, settingsKeyboardMode].forEach(btn => btn && btn.classList.remove('active'));
    if (mode === 'click' && settingsClickMode) settingsClickMode.classList.add('active');
    if (mode === 'keyboard' && settingsKeyboardMode) settingsKeyboardMode.classList.add('active');
    // Difficulty buttons
    [settingsDiffEasy, settingsDiffMedium, settingsDiffHard].forEach(btn => btn && btn.classList.remove('active'));
    if (difficulty === 'easy' && settingsDiffEasy) settingsDiffEasy.classList.add('active');
    if (difficulty === 'medium' && settingsDiffMedium) settingsDiffMedium.classList.add('active');
    if (difficulty === 'hard' && settingsDiffHard) settingsDiffHard.classList.add('active');
}

function showSettingsSaved() {
    if (!settingsSaved) return;
    settingsSaved.classList.remove('hidden');
    setTimeout(() => settingsSaved.classList.add('hidden'), 900);
}

// Settings button listeners
if (settingsClickMode) settingsClickMode.addEventListener('click', () => persistSettings({ mode: 'click' }));
if (settingsKeyboardMode) settingsKeyboardMode.addEventListener('click', () => persistSettings({ mode: 'keyboard' }));
if (settingsDiffEasy) settingsDiffEasy.addEventListener('click', () => persistSettings({ difficulty: 'easy' }));
if (settingsDiffMedium) settingsDiffMedium.addEventListener('click', () => persistSettings({ difficulty: 'medium' }));
if (settingsDiffHard) settingsDiffHard.addEventListener('click', () => persistSettings({ difficulty: 'hard' }));

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
    if (selectedGame === 'addsub' || selectedGame === 'multiply' || selectedGame === 'divide') {
        const word = operatorWord(addSubOperator);
        question = `${addSubNum1} ${word} ${addSubNum2} equals what?`;
    } else if (selectedGame === 'add') {
        question = `Add the ${currentFruit}s. How many in total?`;
    } else if (selectedGame === 'compare') {
        question = `Which group has more? Choose greater than, less than, or equal.`;
    } else if (selectedGame === 'match') {
        // Generic phrasing so it remains correct across changing fruits
        question = `Match each number to the group with the same number of fruits.`;
    } else {
        question = `How many ${currentFruit}s do you see?`;
    }
    speakText(question);
}

function operatorWord(op) {
    if (op === '+') return 'plus';
    if (op === '-' || op === '−') return 'minus';
    if (op === '×' || op === '*') return 'times';
    if (op === '÷' || op === '/') return 'divided by';
    return op;
}

function formatAnswerForSpeech(answer) {
    if (selectedGame === 'compare') {
        if (answer === '>') return 'left is more';
        if (answer === '<') return 'right is more';
        if (answer === '=') return 'they are equal';
    }
    return String(answer);
}

// Input mode management
function updateInputMode() {
    if (selectedGame === 'compare' || selectedGame === 'match') {
        // Compare game uses custom operator buttons inside fruits container
        optionsContainer.style.display = 'none';
        keyboardContainer.style.display = 'none';
    } else if ((selectedGame === 'addsub' || selectedGame === 'multiply' || selectedGame === 'divide') && inputMode === 'keyboard') {
        // Math games with keyboard: hide options, show keyboard input
        optionsContainer.style.display = 'none';
        keyboardContainer.style.display = 'block';
        setTimeout(() => {
            answerInput.focus();
        }, 100);
        answerInput.min = String(answerMin);
        answerInput.max = String(answerMax);
    } else if ((selectedGame === 'addsub' || selectedGame === 'multiply' || selectedGame === 'divide') && inputMode === 'click') {
        // Math games with click mode: show options, hide keyboard
        optionsContainer.style.display = 'grid';
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
    // Persist chosen mode so future games can start immediately
    try { localStorage.setItem('km_inputMode', mode); } catch (_) {}
    // Ensure other screens are hidden when starting
    homeScreen.classList.add('hidden');
    difficultyScreen.classList.add('hidden');
    playModeScreen.classList.add('hidden');
    modeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    answerInput.min = String(answerMin);
    answerInput.max = String(answerMax);
    // Initialize mode-specific state
    questionsAsked = 0;
    runEnded = false;
    hasAnnouncedQuestion = false;
    if (playMode === 'questions') {
        questionsRemaining = questionTarget;
    }
    // Hide or show timer/progress depending on mode
    if (playMode === 'questions') {
        timerBox.style.display = 'none';
        if (progressBox) progressBox.classList.remove('hidden');
    } else {
        timerBox.style.display = '';
        if (progressBox) progressBox.classList.add('hidden');
    }
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

function showPlayModeSelection() {
    // Hide all other screens first
    homeScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    difficultyScreen.classList.add('hidden');
    modeScreen.classList.add('hidden');
    ageSelectionScreen.classList.add('hidden');
    // Show play mode selection screen
    playModeScreen.classList.remove('hidden');
}

function selectPlayMode(mode) {
    playMode = mode; // 'time' | 'questions'
    // Reset counters
    questionsAsked = 0;
    questionsRemaining = (mode === 'questions') ? questionTarget : 0;
    earnedPoints = 0;
    score = 0;
    updateScore();
    // Proceed to difficulty selection
    playModeScreen.classList.add('hidden');
    // Auto-apply saved difficulty and input mode from Settings and start immediately
    const saved = loadSettings();
    if (saved && saved.difficulty) {
        configureDifficulty(saved.difficulty);
    }
    // Hide timer in questions mode; show progress instead
    if (playMode === 'questions') {
        if (timerBox) timerBox.style.display = 'none';
        if (progressBox) progressBox.classList.remove('hidden');
    } else {
        if (timerBox) timerBox.style.display = '';
        if (progressBox) progressBox.classList.add('hidden');
    }
    // Hide current points box as stars system is removed
    if (pointsBoxEl) pointsBoxEl.style.display = 'none';
    // For compare/match, there's no input mode choice; for count/add, use saved mode
    const modeToUse = (selectedGame === 'compare' || selectedGame === 'match') ? 'click' : (saved.mode === 'keyboard' ? 'keyboard' : 'click');
    startGame(modeToUse);
}

function chooseGame(game) {
    clearTimer();
    if (advanceTimeout) { clearTimeout(advanceTimeout); advanceTimeout = null; }
    if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch (_) {} }
    isGeneratingQuestion = false;
    isHandlingTimeUp = false;
    showFeedback = false;
    // Reset match state
    matchNumbers = [];
    matchGroups = [];
    matchLinks = [];
    selectedNumberId = null;
    selectedGroupId = null;
    if (svgLayer && svgLayer.parentNode) { svgLayer.parentNode.removeChild(svgLayer); }
    svgLayer = null;
    selectedGame = game; // 'count' | 'add' | 'compare' | 'match' | 'addsub' | 'multiply' | 'divide'
    if (game === 'count') {
        difficultyTitle.textContent = '🍎 Count the Fruits 🍊';
    } else if (game === 'add') {
        difficultyTitle.textContent = '🍎 Add the Fruits 🍊';
    } else if (game === 'compare') {
        difficultyTitle.textContent = '🍎 Which Group Has More? 🍊';
    } else if (game === 'match') {
        difficultyTitle.textContent = '🍎 Match Number to Fruits 🍊';
    } else if (game === 'addsub') {
        difficultyTitle.textContent = '➕ Add & Subtract ➖';
    } else if (game === 'multiply') {
        difficultyTitle.textContent = '✖️ Multiply';
    } else if (game === 'divide') {
        difficultyTitle.textContent = '➗ Divide';
    }
    // Always show Play Mode selection first; difficulty and input mode are read from Settings
    showPlayModeSelection();
}

function configureDifficulty(level) {
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
    } else if (selectedGame === 'match') {
        // Match game difficulty
        if (level === 'easy') { difficultyMin = 1; difficultyMax = 5; }
        else if (level === 'medium') { difficultyMin = 1; difficultyMax = 10; }
        else if (level === 'hard') { difficultyMin = 5; difficultyMax = 15; }
    } else if (selectedGame === 'addsub') {
        // Add & Subtract: Easy 1-20, Medium 1-50, Hard 10-100
        if (level === 'easy') { difficultyMin = 1; difficultyMax = 20; answerMin = 1; answerMax = 20; }
        else if (level === 'medium') { difficultyMin = 1; difficultyMax = 50; answerMin = 1; answerMax = 50; }
        else if (level === 'hard') { difficultyMin = 10; difficultyMax = 100; answerMin = 1; answerMax = 100; }
    } else if (selectedGame === 'multiply') {
        // Multiplication: easy up to 5×5, medium up to 10×10, hard up to 12×12
        if (level === 'easy') { difficultyMin = 1; difficultyMax = 5; answerMin = 1; answerMax = 25; }
        else if (level === 'medium') { difficultyMin = 1; difficultyMax = 10; answerMin = 1; answerMax = 100; }
        else if (level === 'hard') { difficultyMin = 2; difficultyMax = 12; answerMin = 1; answerMax = 144; }
    } else if (selectedGame === 'divide') {
        // Division: always clean (no remainders). Difficulty controls divisor/quotient.
        if (level === 'easy') { difficultyMin = 1; difficultyMax = 5; answerMin = 1; answerMax = 5; }
        else if (level === 'medium') { difficultyMin = 2; difficultyMax = 10; answerMin = 1; answerMax = 10; }
        else if (level === 'hard') { difficultyMin = 2; difficultyMax = 12; answerMin = 1; answerMax = 12; }
    }
    // Update titles for next screens
    const gameTitles = {
        count: ['🍎 Count the Fruits 🍊', 'Count the Fruits!'],
        add: ['🍎 Add the Fruits 🍊', 'Add the Fruits!'],
        compare: ['🍎 Which Group Has More? 🍊', 'Which Group Has More?'],
        match: ['🍎 Match Number to Fruits 🍊', 'Match Number to Fruits'],
        addsub: ['➕ Add & Subtract ➖', 'Add & Subtract!'],
        multiply: ['✖️ Multiply', 'Multiply!'],
        divide: ['➗ Divide', 'Divide!'],
    };
    const titles = gameTitles[selectedGame] || gameTitles.count;
    if (modeTitle) modeTitle.textContent = titles[0];
    if (gameHeaderTitle) gameHeaderTitle.textContent = titles[1];
}

function selectDifficulty(level) {
    configureDifficulty(level);
    // Persist chosen difficulty so future games can start immediately
    try { localStorage.setItem('km_difficulty', level); } catch (_) {}
    // Not used anymore; flow uses settings to start directly
    difficultyScreen.classList.add('hidden');
}

// Age group selection
function selectAgeGroup(ageGroup) {
    selectedAgeGroup = ageGroup; // 'little' | 'bigger'
    
    // Hide age selection screen
    if (ageSelectionScreen) ageSelectionScreen.classList.add('hidden');
    
    // Show home screen with filtered games
    homeScreen.classList.remove('hidden');
    filterGamesByAgeGroup();
}

function filterGamesByAgeGroup() {
    const instructionsPanel = document.getElementById('instructionsPanel');
    
    // Show/hide games based on age group
    if (selectedAgeGroup === 'little') {
        // Little kids: show count, add, compare, match
        if (countFruitsBtn) countFruitsBtn.style.display = '';
        if (addFruitsBtn) addFruitsBtn.style.display = '';
        if (compareFruitsBtn) compareFruitsBtn.style.display = '';
        if (matchFruitsBtn) matchFruitsBtn.style.display = '';
        if (addSubBtn) addSubBtn.style.display = 'none';
        if (multiplyBtn) multiplyBtn.style.display = 'none';
        if (divideBtn) divideBtn.style.display = 'none';
        document.body.className = 'little-kids-theme';
        if (instructionsPanel) {
            instructionsPanel.innerHTML = '<p>🎯 Fun math games for kids!</p><p>⭐ Learn counting and numbers!</p>';
            instructionsPanel.style.display = '';
        }
    } else if (selectedAgeGroup === 'bigger') {
        // Bigger kids: hide kid-friendly games, show advanced math games
        if (countFruitsBtn) countFruitsBtn.style.display = 'none';
        if (addFruitsBtn) addFruitsBtn.style.display = 'none';
        if (compareFruitsBtn) compareFruitsBtn.style.display = 'none';
        if (matchFruitsBtn) matchFruitsBtn.style.display = 'none';
        if (addSubBtn) addSubBtn.style.display = '';
        if (multiplyBtn) multiplyBtn.style.display = '';
        if (divideBtn) divideBtn.style.display = '';
        document.body.className = 'bigger-kids-theme';
        if (instructionsPanel) {
            instructionsPanel.style.display = 'none';
        }
    }
}

function goToAgeSelection() {
    // Reset age group selection
    selectedAgeGroup = null;
    
    // Hide all screens
    gameScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    difficultyScreen.classList.add('hidden');
    modeScreen.classList.add('hidden');
    homeScreen.classList.add('hidden');
    
    // Show age selection screen
    if (ageSelectionScreen) ageSelectionScreen.classList.remove('hidden');
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
    resultScreen.classList.add('hidden');
    difficultyScreen.classList.add('hidden');
    modeScreen.classList.add('hidden');
    playModeScreen.classList.add('hidden');
    ageSelectionScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    
    // Reset age group if going back to age selection
    // For now, keep selected age group so games stay filtered
    
    // Reset game state
    score = 0;
    updateScore();
    // Cleanup match SVG
    if (svgLayer && svgLayer.parentNode) { svgLayer.parentNode.removeChild(svgLayer); }
    svgLayer = null;
}

// Timer functions
// Global timer for time mode. Duration scales with difficulty so harder problems
// aren't penalized by the same 20s budget as easy ones.
function getTimeModeDuration() {
    if (selectedDifficulty === 'hard') return 30;
    if (selectedDifficulty === 'medium') return 25;
    return 20;
}

function startGlobalTimer() {
    clearTimer();
    timeLeft = getTimeModeDuration();
    elapsedSeconds = 0;
    updateTimer();
    gameTimer = setInterval(() => {
        timeLeft--;
        elapsedSeconds++;
        updateTimer();
        if (timeLeft <= 0) {
            clearTimer();
            endRun();
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
    if (playMode === 'time') {
        endRun();
        return;
    }
    // Questions mode has no per-question timer; no other mode expected here.
}

// Question generation
function generateQuestion() {
    if (isGeneratingQuestion) return;
    if (runEnded) return;
    // Only generate if game screen is visible
    if (gameScreen.classList.contains('hidden')) {
        isGeneratingQuestion = false;
        return;
    }
    
    isGeneratingQuestion = true;
    // Questions mode: ensure we ask exactly questionTarget
    if (playMode === 'questions') {
        if (questionsRemaining <= 0) {
            endRun();
            isGeneratingQuestion = false;
            return;
        }
    }
    // In time mode we don't clear global timer here
    if (playMode !== 'time') clearTimer();
    
    showFeedback = false;
    feedbackContainer.classList.add('hidden');
    
    // Reset input field
    answerInput.value = '';
    submitBtn.disabled = true;
    
    // Generate random fruit and answer based on selected game
    currentFruit = fruits[Math.floor(Math.random() * fruits.length)];
    if (selectedGame === 'addsub') {
        // Randomly choose addition or subtraction
        addSubOperator = Math.random() < 0.5 ? '+' : '-';
        const minAns = Math.max(1, answerMin);

        if (addSubOperator === '+') {
            // Addition: num1 + num2 = answer, both addends >= 1
            const sum = getRandomIntInclusive(Math.max(2, minAns), answerMax);
            addSubNum1 = getRandomIntInclusive(1, sum - 1);
            addSubNum2 = sum - addSubNum1;
            correctAnswer = sum;
        } else {
            // Subtraction: num1 - num2 = answer, all values >= 1
            const safeMin = Math.max(2, difficultyMin);
            addSubNum1 = getRandomIntInclusive(safeMin, difficultyMax);
            addSubNum2 = getRandomIntInclusive(1, addSubNum1 - 1);
            correctAnswer = addSubNum1 - addSubNum2;
            if (correctAnswer < minAns || correctAnswer > answerMax) {
                const desired = getRandomIntInclusive(minAns, Math.min(answerMax, addSubNum1 - 1));
                addSubNum2 = addSubNum1 - desired;
                correctAnswer = desired;
            }
        }
    } else if (selectedGame === 'multiply') {
        addSubOperator = '×';
        addSubNum1 = getRandomIntInclusive(difficultyMin, difficultyMax);
        addSubNum2 = getRandomIntInclusive(difficultyMin, difficultyMax);
        correctAnswer = addSubNum1 * addSubNum2;
    } else if (selectedGame === 'divide') {
        addSubOperator = '÷';
        // Build clean division: pick quotient and divisor, compute dividend
        const quotient = getRandomIntInclusive(Math.max(1, answerMin), answerMax);
        const divisor = getRandomIntInclusive(Math.max(2, difficultyMin), difficultyMax);
        addSubNum1 = quotient * divisor;
        addSubNum2 = divisor;
        correctAnswer = quotient;
    } else if (selectedGame === 'add') {
        const sum = getRandomIntInclusive(answerMin, answerMax);
        // ensure two positive addends that sum to 'sum'
        addendA = getRandomIntInclusive(1, sum - 1);
        addendB = sum - addendA;
        correctAnswer = sum;
    } else if (selectedGame === 'compare') {
        compareLeftCount = getRandomIntInclusive(difficultyMin, difficultyMax);
        compareRightCount = getRandomIntInclusive(difficultyMin, difficultyMax);
        correctAnswer = compareLeftCount > compareRightCount ? '>' : (compareLeftCount < compareRightCount ? '<' : '=');
    } else if (selectedGame === 'match') {
        // Build 4 distinct counts within difficulty range
        const used = new Set();
        matchNumbers = [];
        while (matchNumbers.length < 4) {
            const val = getRandomIntInclusive(difficultyMin, difficultyMax);
            if (!used.has(val)) { used.add(val); matchNumbers.push(val); }
        }
        // Build 4 fruit groups with the same counts but shuffled order
        const shuffledCounts = [...matchNumbers].sort(() => Math.random() - 0.5);
        matchGroups = shuffledCounts.map((count, idx) => {
            return { fruit: currentFruit, count, id: `group_${Date.now()}_${idx}` };
        });
        matchLinks = [];
        selectedNumberId = null;
        selectedGroupId = null;
        correctAnswer = null; // not used in match mode
    } else {
        correctAnswer = getRandomIntInclusive(difficultyMin, difficultyMax);
    }
    
    // Generate 4 options. Use spread options for larger answer ranges (e.g. hard addsub, multiply)
    // so click mode isn't trivial from adjacent numbers.
    const useSpread = (selectedGame === 'multiply' || selectedGame === 'divide') ||
        (selectedGame === 'addsub' && (answerMax - answerMin) > 15);
    if (selectedGame === 'addsub' || selectedGame === 'multiply' || selectedGame === 'divide') {
        options = useSpread
            ? buildSpreadOptions(correctAnswer, Math.max(1, answerMin), answerMax)
            : buildConsecutiveOptions(correctAnswer, Math.max(1, answerMin), answerMax);
    } else if (selectedGame === 'add') {
        options = buildConsecutiveOptions(correctAnswer, answerMin, answerMax);
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
    if (selectedGame === 'addsub' || selectedGame === 'multiply' || selectedGame === 'divide') {
        arrangeMathDisplay();
    } else if (selectedGame === 'add') {
        arrangeAdditionFruits();
    } else if (selectedGame === 'compare') {
        arrangeCompareFruits();
    } else if (selectedGame === 'match') {
        arrangeMatchLayout();
    } else {
        arrangeFruits();
    }
    if (selectedGame !== 'compare' && selectedGame !== 'match') {
        updateOptions();
    }
    // End conditions handled at the top before generating
    updateInputMode(); // Setup correct input mode and auto-focus
    
    // Start timer: per-mode behavior
    if (playMode === 'time') {
        // Global timer: only start on first question of run
        if (!gameTimer) {
            startGlobalTimer();
        }
    } else {
        // Questions mode: no timer
        clearTimer();
    }
    
    // Increment counters
    if (playMode === 'time') {
        questionsAsked++;
    } else {
        // questions mode
        questionsAsked++;
        questionsRemaining--;
    }
    // Update progress indicator in questions mode
    if (playMode === 'questions' && progressText) {
        const current = Math.min(questionsAsked, questionTarget);
        progressText.textContent = `${current}/${questionTarget}`;
    }
    // Speak question only at the beginning of the run
    setTimeout(() => {
        if (!hasAnnouncedQuestion) {
            speakQuestion();
            hasAnnouncedQuestion = true;
        }
        isGeneratingQuestion = false;
    }, 300);
}

function endRun() {
    runEnded = true;
    // Show a dedicated result screen
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    let stars = 0;
    if (playMode === 'time') {
        // time mode thresholds
        if (score >= 16) stars = 3; else if (score >= 10) stars = 2; else if (score >= 1) stars = 1; else stars = 0;
        resultTitle.textContent = 'Time Up!';
        resultScore.textContent = `Correct: ${score}`;
    } else {
        // questions mode thresholds
        if (score >= 9) stars = 3; else if (score >= 5) stars = 2; else if (score >= 1) stars = 1; else stars = 0;
        resultTitle.textContent = 'All Questions Done!';
        resultScore.textContent = `Correct: ${score}/${questionTarget}`;
    }
    // Render stars under score
    if (resultStars) {
        resultStars.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const s = document.createElement('span');
            s.className = 'star' + (i < stars ? '' : ' empty');
            s.textContent = '★';
            resultStars.appendChild(s);
        }
    }
    nextQuestionBtn.style.display = 'none';
    // Offer a simple way back to home via back button
    // Stop any timers
    clearTimer();
}

function updateQuestion() {
    if (selectedGame === 'addsub' || selectedGame === 'multiply' || selectedGame === 'divide') {
        const op = addSubOperator === '-' ? '−' : addSubOperator;
        questionText.textContent = `Solve: ${addSubNum1} ${op} ${addSubNum2} = ?`;
    } else if (selectedGame === 'add') {
        questionText.textContent = `How many ${currentFruit}s in total?`;
    } else if (selectedGame === 'compare') {
        const left = compareLeftCount;
        const right = compareRightCount;
        questionText.textContent = `Which group has more?`;
    } else if (selectedGame === 'match') {
        questionText.textContent = `Match the numbers to the groups!`;
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

// Arrange math problem display for Add/Subtract/Multiply/Divide games (numbers only, no fruits)
function arrangeMathDisplay() {
    fruitsContainer.innerHTML = '';
    fruitsContainer.style.position = 'static';
    fruitsContainer.classList.remove('compare-layout', 'match-layout');

    const mathProblem = document.createElement('div');
    mathProblem.className = 'math-problem-display';
    mathProblem.style.textAlign = 'center';
    mathProblem.style.fontSize = '4rem';
    mathProblem.style.fontWeight = 'bold';
    mathProblem.style.color = '#1e3c72';
    mathProblem.style.padding = '40px';
    mathProblem.style.background = 'white';
    mathProblem.style.borderRadius = '20px';
    mathProblem.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
    mathProblem.style.margin = '20px auto';
    mathProblem.style.maxWidth = '400px';

    const op = addSubOperator === '-' ? '−' : addSubOperator;
    mathProblem.textContent = `${addSubNum1} ${op} ${addSubNum2} = ?`;

    fruitsContainer.appendChild(mathProblem);
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
    // Ensure operators column is centered between boxes
    ops.style.display = 'flex';
    ops.style.flexDirection = 'column';
    ops.style.alignItems = 'center';
    ops.style.justifyContent = 'center';
    
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
    // Account for the 2px border on .fruit-item so the full element stays inside
    const fruitBorder = 2;
    const effectiveSize = fruitSize + fruitBorder * 2;
    const minDistance = Math.min(areaWidth, areaHeight) / 4;
    for (let i = 0; i < count; i++) {
        let attempts = 0;
        let pos;
        let ok = false;
        do {
            pos = {
                x: offsetX + Math.random() * Math.max(0, areaWidth - effectiveSize),
                y: offsetY + Math.random() * Math.max(0, areaHeight - effectiveSize)
            };
            attempts++;
            ok = !isPositionTooClose(pos, positions, minDistance);
        } while (attempts < 100 && !ok);
        if (!ok) {
            // Grid fallback entirely within bounds
            const cols = Math.max(1, Math.floor(areaWidth / effectiveSize));
            const rows = Math.max(1, Math.ceil(count / cols));
            const spacingX = cols > 1 ? (areaWidth - effectiveSize) / (cols - 1) : 0;
            const spacingY = rows > 1 ? (areaHeight - effectiveSize) / (rows - 1) : 0;
            const col = i % cols;
            const row = Math.floor(i / cols);
            pos = { x: offsetX + col * spacingX, y: offsetY + row * spacingY };
        }
        // Clamp within area bounds to avoid overflow
        const maxX = offsetX + Math.max(0, areaWidth - effectiveSize);
        const maxY = offsetY + Math.max(0, areaHeight - effectiveSize);
        if (pos.x < offsetX) pos.x = offsetX;
        if (pos.y < offsetY) pos.y = offsetY;
        if (pos.x > maxX) pos.x = maxX;
        if (pos.y > maxY) pos.y = maxY;
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
    // Match mode handles correctness per-link, not a single answer
    if (selectedGame === 'match') return;

    const isCorrect = selectedGame === 'compare' ? (String(selectedAnswer) === String(correctAnswer)) : (selectedAnswer === correctAnswer);
    
    if (isCorrect) {
        // In per-question timer (legacy) clear; in time mode, keep global timer running
        if (playMode !== 'time') clearTimer();
        showFeedback = true;
        // Count correct answers
        score += 1;
        updateScore();
        // No popup or speech on correct answers
        feedbackContainer.classList.add('hidden');
        
        // In time mode, advance immediately; in questions mode, also advance immediately
        if (!runEnded) {
            advanceTimeout = setTimeout(() => {
                advanceTimeout = null;
                if (!runEnded) generateQuestion();
            }, 50);
        }
    } else {
        // For incorrect answers
        if (playMode === 'questions') {
            // Questions mode: don't allow retries, move to next question immediately
            showFeedback = true;
            speakText(`Incorrect! The answer was ${formatAnswerForSpeech(correctAnswer)}.`);
            // Advance to next question after brief feedback
            if (!runEnded) {
                advanceTimeout = setTimeout(() => {
                    advanceTimeout = null;
                    if (!runEnded) generateQuestion();
                }, 1500);
            }
        } else if (selectedGame === 'compare') {
            // Compare game: no lingering feedback; advances immediately
            feedbackContainer.classList.add('hidden');
        } else {
            // Time mode: allow retries, show brief feedback
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
        // Immediately advance to next question on any answer in compare
        checkAnswer(symbol);
    } else {
        target.classList.add('incorrect');
        // Delegate to checkAnswer. In questions mode it schedules the advance itself
        // (with spoken feedback); in time mode we nudge to the next question here.
        checkAnswer(symbol);
        if (!runEnded && playMode !== 'questions') {
            setTimeout(() => { if (!runEnded) generateQuestion(); }, 150);
        }
    }
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

// Match game layout and interactions
function arrangeMatchLayout() {
    fruitsContainer.innerHTML = '';
    fruitsContainer.style.position = 'relative';
    fruitsContainer.classList.remove('compare-layout');
    fruitsContainer.classList.add('match-layout');

    ensureSvgLayer();
    // Clear SVG
    while (svgLayer.firstChild) svgLayer.removeChild(svgLayer.firstChild);

    // Create rows: top groups, bottom numbers
    const groupsRow = document.createElement('div');
    groupsRow.className = 'match-row groups-row';
    const numbersRow = document.createElement('div');
    numbersRow.className = 'match-row numbers-row';

    // Numbers
    matchNumbers.forEach((num, idx) => {
        const id = `num_${num}_${idx}`;
        const item = document.createElement('div');
        item.className = 'match-item match-number';
        item.id = id;
        item.dataset.value = String(num);
        item.textContent = String(num);
        item.addEventListener('click', () => handleNumberClick(item));
        numbersRow.appendChild(item);
    });

    // Groups
    const isMobile = window.innerWidth <= 768;
    const boxWidth = isMobile ? 150 : 180;
    const boxHeight = isMobile ? 100 : 120;
    const fruitSize = isMobile ? 36 : 40;

    matchGroups.forEach((g) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'match-item match-group';
        wrapper.id = g.id;
        wrapper.dataset.count = String(g.count);
        wrapper.addEventListener('click', () => handleGroupClick(wrapper));

        const box = document.createElement('div');
        box.className = 'group-box';
        box.style.width = boxWidth + 'px';
        box.style.height = boxHeight + 'px';
        box.style.position = 'relative';
        box.style.overflow = 'hidden';

        // Render fruit symbols inside box
        const inset = Math.max(2, Math.round(fruitSize * 0.2));
        const positions = generateRandomPositionsInArea(
            g.count,
            inset,
            inset,
            Math.max(0, boxWidth - inset * 2),
            Math.max(0, boxHeight - inset * 2),
            fruitSize
        );
        for (let i = 0; i < g.count; i++) {
            const f = document.createElement('div');
            f.className = 'fruit-item';
            f.style.position = 'absolute';
            f.style.left = positions[i].x + 'px';
            f.style.top = positions[i].y + 'px';
            f.style.width = fruitSize + 'px';
            f.style.height = fruitSize + 'px';
            f.style.fontSize = Math.round(fruitSize * 0.6) + 'px';
            f.innerHTML = fruitSymbols[currentFruit];
            box.appendChild(f);
        }
        // Keep answers hidden; do not render a visible count label
        wrapper.appendChild(box);
        groupsRow.appendChild(wrapper);
    });

    fruitsContainer.appendChild(groupsRow);
    fruitsContainer.appendChild(numbersRow);
}

function handleNumberClick(el) {
    if (el.classList.contains('matched')) return;
    const prev = fruitsContainer.querySelector('.match-number.selected');
    if (prev && prev !== el) prev.classList.remove('selected');
    el.classList.toggle('selected');
    selectedNumberId = el.classList.contains('selected') ? el.id : null;
    // If a group already selected, attempt match
    if (selectedNumberId && selectedGroupId) {
        const numEl = document.getElementById(selectedNumberId);
        const grpEl = document.getElementById(selectedGroupId);
        tryAttemptMatch(numEl, grpEl);
    }
}

function handleGroupClick(el) {
    if (el.classList.contains('matched')) return;
    const prev = fruitsContainer.querySelector('.match-group.selected');
    if (prev && prev !== el) prev.classList.remove('selected');
    el.classList.toggle('selected');
    selectedGroupId = el.classList.contains('selected') ? el.id : null;
    if (selectedNumberId && selectedGroupId) {
        const numEl = document.getElementById(selectedNumberId);
        const grpEl = document.getElementById(selectedGroupId);
        tryAttemptMatch(numEl, grpEl);
    }
}

function tryAttemptMatch(numEl, grpEl) {
    if (!numEl || !grpEl) return;
    const num = parseInt(numEl.dataset.value);
    const cnt = parseInt(grpEl.dataset.count);
    // Coordinates
    const a = getRelativeCenter(numEl);
    const b = getRelativeCenter(grpEl);
    const success = num === cnt;
    const line = createMatchLine(a.x, a.y, b.x, b.y, success);
    if (success) {
        // Persist line and mark matched
        numEl.classList.add('matched');
        grpEl.classList.add('matched');
        numEl.classList.remove('selected');
        grpEl.classList.remove('selected');
        matchLinks.push({ numId: numEl.id, groupId: grpEl.id });
        // Keep global timer running in time mode; do not stop or clear on correct
        // Clear selections
        selectedNumberId = null;
        selectedGroupId = null;
        // If all matched -> complete
        if (matchLinks.length >= matchGroups.length) {
            // Count one correct for the fully completed match puzzle
            score += 1;
            updateScore();
            // Immediately go to next question if run not ended
            if (!runEnded) {
                setTimeout(() => { if (!runEnded) generateQuestion(); }, 50);
            }
        }
    } else {
        // Temporary line for failure
        setTimeout(() => {
            if (line && line.parentNode) line.parentNode.removeChild(line);
        }, 600);
        // Keep selections but flash
        numEl.classList.remove('selected');
        grpEl.classList.remove('selected');
        selectedNumberId = null;
        selectedGroupId = null;
    }
}

function ensureSvgLayer() {
    if (!svgLayer) {
        svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgLayer.classList.add('match-svg');
        fruitsContainer.appendChild(svgLayer);
    }
    // Resize to container
    svgLayer.setAttribute('width', fruitsContainer.clientWidth);
    svgLayer.setAttribute('height', fruitsContainer.clientHeight);
}

function getRelativeCenter(el) {
    const rect = el.getBoundingClientRect();
    const parentRect = fruitsContainer.getBoundingClientRect();
    return {
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top + rect.height / 2
    };
}

function createMatchLine(x1, y1, x2, y2, success) {
    ensureSvgLayer();
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const dx = Math.abs(x2 - x1) * 0.3;
    const c1x = x1 + dx;
    const c2x = x2 - dx;
    const d = `M ${x1} ${y1} C ${c1x} ${y1}, ${c2x} ${y2}, ${x2} ${y2}`;
    path.setAttribute('d', d);
    path.classList.add('match-line');
    path.classList.add(success ? 'success' : 'fail');
    svgLayer.appendChild(path);
    return path;
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

// Build four options spread around the correct answer.
// Wrong options use a random offset proportional to the range, not just ±1,
// so the correct number isn't obvious in wide ranges (e.g. hard addsub, multiply).
function buildSpreadOptions(correct, minBound, maxBound) {
    const options = new Set([correct]);
    const range = Math.max(1, maxBound - minBound);
    const baseDelta = Math.max(2, Math.floor(range / 8));
    let attempts = 0;
    while (options.size < 4 && attempts < 200) {
        const mag = getRandomIntInclusive(1, baseDelta * 3);
        const sign = Math.random() < 0.5 ? -1 : 1;
        const candidate = correct + sign * mag;
        if (candidate >= minBound && candidate <= maxBound && candidate !== correct) {
            options.add(candidate);
        }
        attempts++;
    }
    // Fallback: fill with adjacent numbers if we couldn't find 4 spread values
    if (options.size < 4) {
        for (let d = 1; d <= 10 && options.size < 4; d++) {
            for (const offset of [-d, d]) {
                const v = correct + offset;
                if (v >= minBound && v <= maxBound) options.add(v);
                if (options.size >= 4) break;
            }
        }
    }
    return Array.from(options);
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
    updateSettingsUI();
    
    // Show age selection screen first, hide home screen
    if (ageSelectionScreen) ageSelectionScreen.classList.remove('hidden');
    homeScreen.classList.add('hidden');
}

// Start the app
init(); 