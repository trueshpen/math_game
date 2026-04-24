// ============================================================
// Internationalization (EN / CS)
// ============================================================
const translations = {
    en: {
        // Age selection
        'age.littleKids': 'Little Kids',
        'age.littleKids.ages': 'Ages 3-6',
        'age.littleKids.desc1': 'Fun counting & matching!',
        'age.littleKids.desc2': '🌈 Colorful & Playful 🌈',
        'age.biggerKids': 'Bigger Kids',
        'age.biggerKids.ages': 'Ages 7-10',
        'age.biggerKids.desc1': 'Advanced Math Challenges!',
        'age.biggerKids.desc2': '🚀 Level Up Your Skills 🚀',
        // Home
        'home.title': '🍎 Kids Math Game 🍊',
        'home.welcome': 'Welcome! Pick a game to play:',
        'home.changeAge': '🔄 Change Age Group',
        // Games
        'game.count.name': 'Count the Fruits',
        'game.count.desc': 'Count how many fruits you see!',
        'game.add.name': 'Add the Fruits',
        'game.add.desc': 'Solve simple addition with fruits!',
        'game.compare.name': 'Which Group Has More?',
        'game.compare.desc': 'Choose >, <, or =',
        'game.match.name': 'Match Number to Fruits',
        'game.match.desc': 'Connect numbers to matching fruit groups',
        'game.addsub.name': 'Add & Subtract',
        'game.addsub.desc': 'Practice addition and subtraction!',
        'game.multiply.name': 'Multiply',
        'game.multiply.desc': 'Practice multiplication!',
        'game.divide.name': 'Divide',
        'game.divide.desc': 'Practice division!',
        // Settings
        'settings.title': 'Settings',
        'settings.inputMode': 'Input Mode',
        'settings.click': '👆 Click Numbers',
        'settings.keyboard': '⌨️ Type Numbers',
        'settings.difficulty': 'Difficulty',
        'settings.easy': 'Easy',
        'settings.medium': 'Medium',
        'settings.hard': 'Hard',
        'settings.speech': 'Speech Rate',
        'settings.speech.slow': '🐢 Slow',
        'settings.speech.normal': '🚶 Normal',
        'settings.speech.fast': '🏃 Fast',
        'settings.sound': 'Sound Effects',
        'settings.sound.on': '🔊 On',
        'settings.sound.off': '🔇 Off',
        'settings.saved': 'Saved ✓',
        'settings.hint': 'Games will use these settings and start immediately.',
        'instructions.line1': '🎯 Fun math games for kids!',
        'instructions.line2': '⭐ Learn counting and numbers!',
        'difficulty.subtitle': 'Choose your difficulty',
        'playMode.title': 'Pick Play Mode',
        'playMode.subtitle': 'Choose how you want to play',
        'playMode.time': '⏱️ Time Mode',
        'playMode.time.desc': '20 seconds',
        'playMode.questions': '❓ Questions Mode',
        'playMode.questions.desc': '10 questions',
        'modeSelect.subtitle': 'How do you want to enter your answers?',
        'modeSelect.click.desc': 'Tap the answer button',
        'modeSelect.keyboard.desc': 'Use keyboard to type',
        // Game screen chrome
        'stats.score': 'Score',
        'submit': 'Submit',
        'backToHome': 'Back to Home',
        'back': '← Back to Games',
        'nextQuestion': 'Next Question',
        'speakBtn.title': 'Repeat question',
        // Dynamic game titles (long = menu, short = game header)
        'gameTitles.count.long': '🍎 Count the Fruits 🍊',
        'gameTitles.count.short': 'Count the Fruits!',
        'gameTitles.add.long': '🍎 Add the Fruits 🍊',
        'gameTitles.add.short': 'Add the Fruits!',
        'gameTitles.compare.long': '🍎 Which Group Has More? 🍊',
        'gameTitles.compare.short': 'Which Group Has More?',
        'gameTitles.match.long': '🍎 Match Number to Fruits 🍊',
        'gameTitles.match.short': 'Match Number to Fruits',
        'gameTitles.addsub.long': '➕ Add & Subtract ➖',
        'gameTitles.addsub.short': 'Add & Subtract!',
        'gameTitles.multiply.long': '✖️ Multiply',
        'gameTitles.multiply.short': 'Multiply!',
        'gameTitles.divide.long': '➗ Divide',
        'gameTitles.divide.short': 'Divide!',
        // Question text
        'q.count': 'How many {fruit} do you see?',
        'q.add': 'How many {fruit} in total?',
        'q.compare': 'Which group has more?',
        'q.match': 'Match the numbers to the groups!',
        'q.math': 'Solve: {a} {op} {b} = ?',
        // Spoken
        'tts.count': 'How many {fruit} do you see?',
        'tts.add': 'Add the {fruit}. How many in total?',
        'tts.compare': 'Which group has more? Choose greater than, less than, or equal.',
        'tts.match': 'Match each number to the group with the same number of fruits.',
        'tts.math': '{a} {op} {b} equals what?',
        'tts.op.plus': 'plus',
        'tts.op.minus': 'minus',
        'tts.op.times': 'times',
        'tts.op.dividedBy': 'divided by',
        'tts.incorrect': 'Incorrect! The answer was {answer}.',
        'tts.tryAgain': 'Oops! Try again!',
        'tts.compare.left': 'left is more',
        'tts.compare.right': 'right is more',
        'tts.compare.equal': 'they are equal',
        // Feedback
        'feedback.tryAgain': 'Oops! Try again!',
        'feedback.keepTrying': 'Keep trying...',
        // Result
        'result.title': 'Results',
        'result.yourScore': 'Your Score',
        'result.timeUp': 'Time Up!',
        'result.allDone': 'All Questions Done!',
        'result.correct': 'Correct: {n}',
        'result.correctOf': 'Correct: {n}/{total}',
        'result.newBest': '🏆 New best!',
        'result.best': 'Best: {n}',
        'result.playAgain': '🔄 Play Again',
        // Fruit plurals for question templates
        'fruit.apple': 'apples',
        'fruit.banana': 'bananas',
        'fruit.orange': 'oranges',
        'fruit.watermelon': 'watermelons',
        'fruit.pineapple': 'pineapples',
    },
    cs: {
        'age.littleKids': 'Menší děti',
        'age.littleKids.ages': 'Věk 3-6',
        'age.littleKids.desc1': 'Zábavné počítání a spojování!',
        'age.littleKids.desc2': '🌈 Barevné a hravé 🌈',
        'age.biggerKids': 'Větší děti',
        'age.biggerKids.ages': 'Věk 7-10',
        'age.biggerKids.desc1': 'Pokročilé matematické úlohy!',
        'age.biggerKids.desc2': '🚀 Zlepši své dovednosti 🚀',
        'home.title': '🍎 Dětská matematika 🍊',
        'home.welcome': 'Vítej! Vyber si hru:',
        'home.changeAge': '🔄 Změnit věkovou skupinu',
        'game.count.name': 'Počítej ovoce',
        'game.count.desc': 'Spočítej, kolik ovoce vidíš!',
        'game.add.name': 'Sčítej ovoce',
        'game.add.desc': 'Vyřeš jednoduché sčítání s ovocem!',
        'game.compare.name': 'Která skupina má víc?',
        'game.compare.desc': 'Vyber >, <, nebo =',
        'game.match.name': 'Přiřaď číslo k ovoci',
        'game.match.desc': 'Spojuj čísla s odpovídajícími skupinami',
        'game.addsub.name': 'Sčítání a odčítání',
        'game.addsub.desc': 'Trénuj sčítání a odčítání!',
        'game.multiply.name': 'Násobení',
        'game.multiply.desc': 'Trénuj násobení!',
        'game.divide.name': 'Dělení',
        'game.divide.desc': 'Trénuj dělení!',
        'settings.title': 'Nastavení',
        'settings.inputMode': 'Způsob zadávání',
        'settings.click': '👆 Klikat na čísla',
        'settings.keyboard': '⌨️ Psát na klávesnici',
        'settings.difficulty': 'Obtížnost',
        'settings.easy': 'Lehká',
        'settings.medium': 'Střední',
        'settings.hard': 'Těžká',
        'settings.speech': 'Rychlost mluvení',
        'settings.speech.slow': '🐢 Pomalu',
        'settings.speech.normal': '🚶 Normálně',
        'settings.speech.fast': '🏃 Rychle',
        'settings.sound': 'Zvukové efekty',
        'settings.sound.on': '🔊 Zapnuté',
        'settings.sound.off': '🔇 Vypnuté',
        'settings.saved': 'Uloženo ✓',
        'settings.hint': 'Hry použijí toto nastavení a ihned se spustí.',
        'instructions.line1': '🎯 Zábavné matematické hry pro děti!',
        'instructions.line2': '⭐ Uč se počítat a poznávat čísla!',
        'difficulty.subtitle': 'Vyber si obtížnost',
        'playMode.title': 'Vyber si herní mód',
        'playMode.subtitle': 'Zvol, jak chceš hrát',
        'playMode.time': '⏱️ Na čas',
        'playMode.time.desc': '20 sekund',
        'playMode.questions': '❓ Na otázky',
        'playMode.questions.desc': '10 otázek',
        'modeSelect.subtitle': 'Jak chceš zadávat odpovědi?',
        'modeSelect.click.desc': 'Klikni na odpověď',
        'modeSelect.keyboard.desc': 'Napiš na klávesnici',
        'stats.score': 'Skóre',
        'submit': 'Odeslat',
        'backToHome': 'Zpět na úvod',
        'back': '← Zpět ke hrám',
        'nextQuestion': 'Další otázka',
        'speakBtn.title': 'Zopakovat otázku',
        'gameTitles.count.long': '🍎 Počítej ovoce 🍊',
        'gameTitles.count.short': 'Počítej ovoce!',
        'gameTitles.add.long': '🍎 Sčítej ovoce 🍊',
        'gameTitles.add.short': 'Sčítej ovoce!',
        'gameTitles.compare.long': '🍎 Která skupina má víc? 🍊',
        'gameTitles.compare.short': 'Která skupina má víc?',
        'gameTitles.match.long': '🍎 Přiřaď číslo k ovoci 🍊',
        'gameTitles.match.short': 'Přiřaď číslo k ovoci',
        'gameTitles.addsub.long': '➕ Sčítání a odčítání ➖',
        'gameTitles.addsub.short': 'Sčítání a odčítání!',
        'gameTitles.multiply.long': '✖️ Násobení',
        'gameTitles.multiply.short': 'Násobení!',
        'gameTitles.divide.long': '➗ Dělení',
        'gameTitles.divide.short': 'Dělení!',
        'q.count': 'Kolik vidíš {fruit}?',
        'q.add': 'Kolik je {fruit} celkem?',
        'q.compare': 'Která skupina má víc?',
        'q.match': 'Přiřaď čísla ke skupinám!',
        'q.math': 'Vypočítej: {a} {op} {b} = ?',
        'tts.count': 'Kolik vidíš {fruit}?',
        'tts.add': 'Sečti {fruit}. Kolik jich je celkem?',
        'tts.compare': 'Která skupina má víc? Vyber větší, menší, nebo rovná se.',
        'tts.match': 'Přiřaď každé číslo ke skupině se stejným počtem ovoce.',
        'tts.math': 'Kolik je {a} {op} {b}?',
        'tts.op.plus': 'plus',
        'tts.op.minus': 'mínus',
        'tts.op.times': 'krát',
        'tts.op.dividedBy': 'děleno',
        'tts.incorrect': 'Špatně! Správná odpověď byla {answer}.',
        'tts.tryAgain': 'Zkus to znovu!',
        'tts.compare.left': 'levá skupina má víc',
        'tts.compare.right': 'pravá skupina má víc',
        'tts.compare.equal': 'skupiny jsou stejně velké',
        'feedback.tryAgain': 'Zkus to znovu!',
        'feedback.keepTrying': 'Pokračuj...',
        'result.title': 'Výsledky',
        'result.yourScore': 'Tvé skóre',
        'result.timeUp': 'Čas vypršel!',
        'result.allDone': 'Hotovo!',
        'result.correct': 'Správně: {n}',
        'result.correctOf': 'Správně: {n}/{total}',
        'result.newBest': '🏆 Nové nejlepší skóre!',
        'result.best': 'Nejlepší: {n}',
        'result.playAgain': '🔄 Hrát znovu',
        'fruit.apple': 'jablek',
        'fruit.banana': 'banánů',
        'fruit.orange': 'pomerančů',
        'fruit.watermelon': 'melounů',
        'fruit.pineapple': 'ananasů',
    },
};

let currentLang = 'en';
const LANG_STORAGE_KEY = 'km_lang';
const SPEECH_LANG = { en: 'en-US', cs: 'cs-CZ' };

function loadLang() {
    try {
        const stored = localStorage.getItem(LANG_STORAGE_KEY);
        if (stored === 'en' || stored === 'cs') return stored;
    } catch (_) {}
    // Auto-detect from browser language, default EN
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('cs') || nav.startsWith('sk')) return 'cs';
    return 'en';
}

function t(key, vars) {
    const dict = translations[currentLang] || translations.en;
    let s = dict[key];
    if (s === undefined) s = (translations.en[key] !== undefined ? translations.en[key] : key);
    if (vars) {
        for (const [k, v] of Object.entries(vars)) {
            s = s.replaceAll(`{${k}}`, String(v));
        }
    }
    return s;
}

function applyTranslations() {
    // textContent on [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    // attribute translations: data-i18n-attr="title:key, aria-label:key"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const spec = el.getAttribute('data-i18n-attr');
        spec.split(',').forEach(pair => {
            const [attr, key] = pair.split(':').map(s => s.trim());
            if (attr && key) el.setAttribute(attr, t(key));
        });
    });
    // Reflect to <html lang>
    document.documentElement.setAttribute('lang', currentLang);
    // Refresh dynamic text that JS controls
    refreshDynamicI18nText();
    // Flag button active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// Called after applyTranslations and after settings change game/difficulty.
function refreshDynamicI18nText() {
    // Update the difficulty screen / mode-select screen / game-header titles if a game is selected
    if (selectedGame && modeTitle) modeTitle.textContent = t(`gameTitles.${selectedGame}.long`);
    if (selectedGame && gameHeaderTitle) gameHeaderTitle.textContent = t(`gameTitles.${selectedGame}.short`);
    if (selectedGame && difficultyTitle) difficultyTitle.textContent = t(`gameTitles.${selectedGame}.long`);
    // Update the current question text if a game is active
    if (selectedGame && !gameScreen.classList.contains('hidden')) {
        updateQuestion();
    }
}

function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'cs') return;
    currentLang = lang;
    try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (_) {}
    applyTranslations();
}

// ============================================================
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
// Per-side fruits so Add / Compare / Match can visually distinguish groups
let addLeftFruit = 'apple';
let addRightFruit = 'banana';
let compareLeftFruit = 'apple';
let compareRightFruit = 'banana';
let matchGroupFruits = []; // one fruit per group
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
const timeCounterBox = document.getElementById('timeCounterBox');
const timeCounterText = document.getElementById('timeCounterText');
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
const resultBest = document.getElementById('resultBest');
const resultStars = document.getElementById('resultStars');
const resultBackBtn = document.getElementById('resultBackBtn');
const resultPlayAgainBtn = document.getElementById('resultPlayAgainBtn');
const changeAgeGroupBtn = document.getElementById('changeAgeGroupBtn');
// Extra settings buttons
const settingsSpeechSlow = document.getElementById('settingsSpeechSlow');
const settingsSpeechNormal = document.getElementById('settingsSpeechNormal');
const settingsSpeechFast = document.getElementById('settingsSpeechFast');
const settingsSoundOn = document.getElementById('settingsSoundOn');
const settingsSoundOff = document.getElementById('settingsSoundOff');

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
if (resultPlayAgainBtn) resultPlayAgainBtn.addEventListener('click', playAgain);
if (changeAgeGroupBtn) changeAgeGroupBtn.addEventListener('click', goToAgeSelection);

// Settings management
const SETTINGS_KEYS = {
    mode: 'km_inputMode',
    difficulty: 'km_difficulty',
    speech: 'km_speechRate',
    sound: 'km_soundOn',
};
const SPEECH_RATES = { slow: 0.6, normal: 0.9, fast: 1.25 };

function loadSettings() {
    try {
        return {
            mode: localStorage.getItem(SETTINGS_KEYS.mode),
            difficulty: localStorage.getItem(SETTINGS_KEYS.difficulty),
            speech: localStorage.getItem(SETTINGS_KEYS.speech) || 'normal',
            sound: localStorage.getItem(SETTINGS_KEYS.sound) || 'on',
        };
    } catch (_) {
        return { mode: null, difficulty: null, speech: 'normal', sound: 'on' };
    }
}

function persistSettings(partial) {
    const current = loadSettings();
    const next = { ...current, ...partial };
    try {
        if (next.mode) localStorage.setItem(SETTINGS_KEYS.mode, next.mode);
        if (next.difficulty) localStorage.setItem(SETTINGS_KEYS.difficulty, next.difficulty);
        if (next.speech) localStorage.setItem(SETTINGS_KEYS.speech, next.speech);
        if (next.sound) localStorage.setItem(SETTINGS_KEYS.sound, next.sound);
    } catch (_) {}
    showSettingsSaved();
    updateSettingsUI();
}

function updateSettingsUI() {
    const { mode, difficulty, speech, sound } = loadSettings();
    const setActive = (buttons, value, match) => {
        buttons.forEach(btn => btn && btn.classList.remove('active'));
        buttons.forEach(btn => { if (btn && match(btn) === value) btn.classList.add('active'); });
    };
    setActive([settingsClickMode, settingsKeyboardMode], mode, b => b.dataset.mode);
    setActive([settingsDiffEasy, settingsDiffMedium, settingsDiffHard], difficulty, b => b.dataset.diff);
    setActive([settingsSpeechSlow, settingsSpeechNormal, settingsSpeechFast], speech, b => b.dataset.speech);
    setActive([settingsSoundOn, settingsSoundOff], sound, b => b.dataset.sound);
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
if (settingsSpeechSlow) settingsSpeechSlow.addEventListener('click', () => persistSettings({ speech: 'slow' }));
if (settingsSpeechNormal) settingsSpeechNormal.addEventListener('click', () => persistSettings({ speech: 'normal' }));
if (settingsSpeechFast) settingsSpeechFast.addEventListener('click', () => persistSettings({ speech: 'fast' }));
if (settingsSoundOn) settingsSoundOn.addEventListener('click', () => persistSettings({ sound: 'on' }));
if (settingsSoundOff) settingsSoundOff.addEventListener('click', () => persistSettings({ sound: 'off' }));

// Add option button click listeners
optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-btn') && !showFeedback && inputMode === 'click') {
        const selectedAnswer = parseInt(e.target.dataset.answer);
        checkAnswer(selectedAnswer);
    }
});

// Global keyboard shortcuts: 1-4 picks the corresponding option in click mode.
// Skips when typing into the keyboard-input field or when feedback is showing.
document.addEventListener('keydown', (e) => {
    if (showFeedback) return;
    if (gameScreen.classList.contains('hidden')) return;
    if (inputMode !== 'click') return;
    if (document.activeElement === answerInput) return;
    if (selectedGame === 'compare' || selectedGame === 'match') return;
    const idx = ['1', '2', '3', '4'].indexOf(e.key);
    if (idx === -1) return;
    const btn = optionsContainer.querySelectorAll('.option-btn')[idx];
    if (btn) {
        e.preventDefault();
        const val = parseInt(btn.dataset.answer);
        if (Number.isFinite(val)) checkAnswer(val);
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
        const speech = loadSettings().speech;
        utterance.rate = SPEECH_RATES[speech] || SPEECH_RATES.normal;
        utterance.pitch = 1.2;
        utterance.volume = 0.8;
        utterance.lang = SPEECH_LANG[currentLang] || 'en-US';
        speechSynthesis.speak(utterance);
    }
}

// WebAudio beeps for correct/incorrect feedback. Gated by sound setting.
let _audioCtx = null;
function getAudioCtx() {
    if (!_audioCtx) {
        try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (_) { _audioCtx = null; }
    }
    return _audioCtx;
}

function playBeep(frequency, durationMs, type = 'sine', volume = 0.15) {
    if (loadSettings().sound === 'off') return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = type;
        o.frequency.value = frequency;
        o.connect(g);
        g.connect(ctx.destination);
        const now = ctx.currentTime;
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(volume, now + 0.02);
        o.start(now);
        const stopAt = now + durationMs / 1000;
        g.gain.exponentialRampToValueAtTime(0.0001, stopAt);
        o.stop(stopAt + 0.05);
    } catch (_) {}
}

function playCorrectSound() {
    playBeep(880, 120, 'triangle');
    setTimeout(() => playBeep(1320, 140, 'triangle'), 130);
}

function playIncorrectSound() {
    playBeep(220, 220, 'sawtooth', 0.12);
}

function speakQuestion() {
    let question;
    if (selectedGame === 'addsub' || selectedGame === 'multiply' || selectedGame === 'divide') {
        question = t('tts.math', { a: addSubNum1, op: operatorWord(addSubOperator), b: addSubNum2 });
    } else if (selectedGame === 'add') {
        question = t('tts.add', { fruit: t(`fruit.${currentFruit}`) });
    } else if (selectedGame === 'compare') {
        question = t('tts.compare');
    } else if (selectedGame === 'match') {
        question = t('tts.match');
    } else {
        question = t('tts.count', { fruit: t(`fruit.${currentFruit}`) });
    }
    speakText(question);
}

function operatorWord(op) {
    if (op === '+') return t('tts.op.plus');
    if (op === '-' || op === '−') return t('tts.op.minus');
    if (op === '×' || op === '*') return t('tts.op.times');
    if (op === '÷' || op === '/') return t('tts.op.dividedBy');
    return op;
}

function formatAnswerForSpeech(answer) {
    if (selectedGame === 'compare') {
        if (answer === '>') return t('tts.compare.left');
        if (answer === '<') return t('tts.compare.right');
        if (answer === '=') return t('tts.compare.equal');
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
    // Hide or show timer/progress/counter depending on mode
    if (playMode === 'questions') {
        timerBox.style.display = 'none';
        if (progressBox) progressBox.classList.remove('hidden');
        if (timeCounterBox) timeCounterBox.classList.add('hidden');
    } else {
        timerBox.style.display = '';
        if (progressBox) progressBox.classList.add('hidden');
        if (timeCounterBox) timeCounterBox.classList.remove('hidden');
        if (timeCounterText) timeCounterText.textContent = '0';
    }
    generateQuestion();
}

// Restart the same game+difficulty+playMode without going back to menus.
function playAgain() {
    // Stop any TTS/timers from the result screen context
    if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch (_) {} }
    clearTimer();
    if (advanceTimeout) { clearTimeout(advanceTimeout); advanceTimeout = null; }
    // Reset state
    score = 0;
    questionsAsked = 0;
    questionsRemaining = (playMode === 'questions') ? questionTarget : 0;
    runEnded = false;
    hasAnnouncedQuestion = false;
    isGeneratingQuestion = false;
    isHandlingTimeUp = false;
    showFeedback = false;
    updateScore();
    // Hide result, show game screen, re-enter startGame with current input mode
    resultScreen.classList.add('hidden');
    if (resultBest) resultBest.textContent = '';
    startGame(inputMode);
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
    // Stat boxes: questions mode shows progress, time mode shows question counter
    if (playMode === 'questions') {
        if (timerBox) timerBox.style.display = 'none';
        if (progressBox) progressBox.classList.remove('hidden');
        if (timeCounterBox) timeCounterBox.classList.add('hidden');
    } else {
        if (timerBox) timerBox.style.display = '';
        if (progressBox) progressBox.classList.add('hidden');
        if (timeCounterBox) {
            timeCounterBox.classList.remove('hidden');
            if (timeCounterText) timeCounterText.textContent = '0';
        }
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
    if (difficultyTitle) difficultyTitle.textContent = t(`gameTitles.${game}.long`);
    // Always show Play Mode selection first; difficulty and input mode are read from Settings
    showPlayModeSelection();
}

function configureDifficulty(level) {
    selectedDifficulty = level;
    if (selectedGame === 'count') {
        // Hard capped at 12 so fruits don't overcrowd the container.
        if (level === 'easy') { difficultyMin = 1; difficultyMax = 5; }
        else if (level === 'medium') { difficultyMin = 5; difficultyMax = 10; }
        else if (level === 'hard') { difficultyMin = 8; difficultyMax = 12; }
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
    // Update titles for next screens using current language
    if (modeTitle) modeTitle.textContent = t(`gameTitles.${selectedGame}.long`);
    if (gameHeaderTitle) gameHeaderTitle.textContent = t(`gameTitles.${selectedGame}.short`);
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
            instructionsPanel.innerHTML = `<p data-i18n="instructions.line1">${t('instructions.line1')}</p><p data-i18n="instructions.line2">${t('instructions.line2')}</p>`;
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
        // Two distinct fruits so the groups read as separate visually
        [addLeftFruit, addRightFruit] = pickDistinctFruits(2);
    } else if (selectedGame === 'compare') {
        compareLeftCount = getRandomIntInclusive(difficultyMin, difficultyMax);
        compareRightCount = getRandomIntInclusive(difficultyMin, difficultyMax);
        correctAnswer = compareLeftCount > compareRightCount ? '>' : (compareLeftCount < compareRightCount ? '<' : '=');
        [compareLeftFruit, compareRightFruit] = pickDistinctFruits(2);
    } else if (selectedGame === 'match') {
        // Build 4 distinct counts within difficulty range
        const used = new Set();
        matchNumbers = [];
        while (matchNumbers.length < 4) {
            const val = getRandomIntInclusive(difficultyMin, difficultyMax);
            if (!used.has(val)) { used.add(val); matchNumbers.push(val); }
        }
        // One fruit per group (distinct) so visually each group is its own thing
        matchGroupFruits = pickDistinctFruits(4);
        const shuffledCounts = [...matchNumbers].sort(() => Math.random() - 0.5);
        matchGroups = shuffledCounts.map((count, idx) => {
            return { fruit: matchGroupFruits[idx], count, id: `group_${Date.now()}_${idx}` };
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
    // Update progress indicator in questions mode / question counter in time mode
    if (playMode === 'questions' && progressText) {
        const current = Math.min(questionsAsked, questionTarget);
        progressText.textContent = `${current}/${questionTarget}`;
    } else if (playMode === 'time' && timeCounterText) {
        timeCounterText.textContent = String(questionsAsked);
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

function bestScoreKey() {
    return `km_best_${selectedGame}_${selectedDifficulty}_${playMode}`;
}

function getBestScore() {
    try {
        const v = parseInt(localStorage.getItem(bestScoreKey()));
        return Number.isFinite(v) ? v : 0;
    } catch (_) { return 0; }
}

function saveBestScore(newScore) {
    try {
        const prev = getBestScore();
        if (newScore > prev) {
            localStorage.setItem(bestScoreKey(), String(newScore));
            return true;
        }
    } catch (_) {}
    return false;
}

function endRun() {
    runEnded = true;
    // Show a dedicated result screen
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    let stars = 0;
    const previousBest = getBestScore();
    const isNewBest = saveBestScore(score);
    if (playMode === 'time') {
        if (score >= 16) stars = 3; else if (score >= 10) stars = 2; else if (score >= 1) stars = 1; else stars = 0;
        resultTitle.textContent = t('result.timeUp');
        resultScore.textContent = t('result.correct', { n: score });
    } else {
        if (score >= 9) stars = 3; else if (score >= 5) stars = 2; else if (score >= 1) stars = 1; else stars = 0;
        resultTitle.textContent = t('result.allDone');
        resultScore.textContent = t('result.correctOf', { n: score, total: questionTarget });
    }
    // Best score display
    if (resultBest) {
        if (isNewBest && score > 0) {
            resultBest.textContent = t('result.newBest');
        } else {
            const best = Math.max(previousBest, score);
            resultBest.textContent = best > 0 ? t('result.best', { n: best }) : '';
        }
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
        questionText.textContent = t('q.math', { a: addSubNum1, op, b: addSubNum2 });
    } else if (selectedGame === 'add') {
        questionText.textContent = t('q.add', { fruit: t(`fruit.${currentFruit}`) });
    } else if (selectedGame === 'compare') {
        questionText.textContent = t('q.compare');
    } else if (selectedGame === 'match') {
        questionText.textContent = t('q.match');
    } else {
        questionText.textContent = t('q.count', { fruit: t(`fruit.${currentFruit}`) });
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

// Arrange math problem display for Add/Subtract/Multiply/Divide games.
// For small ranges we add a visual aid (grid for ×, fade-out row for −)
// so the concept is concrete, not just symbolic.
function arrangeMathDisplay() {
    fruitsContainer.innerHTML = '';
    fruitsContainer.style.position = 'static';
    fruitsContainer.classList.remove('compare-layout', 'match-layout');

    const mathProblem = document.createElement('div');
    mathProblem.className = 'math-problem-display';
    mathProblem.style.textAlign = 'center';
    mathProblem.style.fontWeight = 'bold';
    mathProblem.style.color = '#1e3c72';
    mathProblem.style.background = 'white';
    mathProblem.style.borderRadius = '20px';
    mathProblem.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
    mathProblem.style.margin = '12px auto';
    mathProblem.style.maxWidth = '480px';

    const showGrid = selectedGame === 'multiply' && selectedDifficulty !== 'hard' && addSubNum1 * addSubNum2 <= 60;
    const showSubtractVisual = selectedGame === 'addsub' && addSubOperator === '-' && selectedDifficulty === 'easy' && addSubNum1 <= 12;

    if (showGrid) {
        mathProblem.style.fontSize = '2rem';
        mathProblem.style.padding = '16px';
        mathProblem.appendChild(buildTextLine(`${addSubNum1} × ${addSubNum2} = ?`));
        mathProblem.appendChild(buildMultiplyGrid(addSubNum1, addSubNum2));
    } else if (showSubtractVisual) {
        mathProblem.style.fontSize = '2rem';
        mathProblem.style.padding = '16px';
        mathProblem.appendChild(buildTextLine(`${addSubNum1} − ${addSubNum2} = ?`));
        mathProblem.appendChild(buildSubtractVisual(addSubNum1, addSubNum2));
    } else {
        mathProblem.style.fontSize = '4rem';
        mathProblem.style.padding = '40px';
        const op = addSubOperator === '-' ? '−' : addSubOperator;
        mathProblem.textContent = `${addSubNum1} ${op} ${addSubNum2} = ?`;
    }

    fruitsContainer.appendChild(mathProblem);
}

function buildTextLine(text) {
    const el = document.createElement('div');
    el.textContent = text;
    el.style.marginBottom = '8px';
    return el;
}

function buildMultiplyGrid(rows, cols) {
    // Pick one fruit for the whole grid
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gap = '4px';
    grid.style.justifyItems = 'center';
    grid.style.padding = '8px';
    const size = cols > 8 ? 20 : (cols > 5 ? 26 : 32);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('span');
            cell.textContent = fruitSymbols[fruit];
            cell.style.fontSize = size + 'px';
            cell.style.lineHeight = '1';
            grid.appendChild(cell);
        }
    }
    return grid;
}

function buildSubtractVisual(total, removed) {
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flexWrap = 'wrap';
    row.style.gap = '6px';
    row.style.justifyContent = 'center';
    row.style.padding = '8px';
    for (let i = 0; i < total; i++) {
        const cell = document.createElement('span');
        cell.textContent = fruitSymbols[fruit];
        cell.style.fontSize = '32px';
        cell.style.lineHeight = '1';
        cell.style.position = 'relative';
        if (i < removed) {
            cell.style.opacity = '0.35';
            cell.style.textDecoration = 'line-through';
            cell.style.textDecorationColor = '#d32f2f';
            cell.style.textDecorationThickness = '3px';
        }
        row.appendChild(cell);
    }
    return row;
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
        item.innerHTML = fruitSymbols[addLeftFruit];
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
        item.innerHTML = fruitSymbols[addRightFruit];
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
        item.innerHTML = fruitSymbols[compareLeftFruit];
        leftBox.appendChild(item);
    }

    // Render right group
    for (let i = 0; i < compareRightCount; i++) {
        const item = document.createElement('div');
        item.className = 'fruit-item fruit-random';
        item.style.position = 'absolute';
        item.style.left = rightPositions[i].x + 'px';
        item.style.top = rightPositions[i].y + 'px';
        item.innerHTML = fruitSymbols[compareRightFruit];
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
        playCorrectSound();
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
        playIncorrectSound();
        if (playMode === 'questions') {
            // Questions mode: don't allow retries, move to next question immediately
            showFeedback = true;
            speakText(t('tts.incorrect', { answer: formatAnswerForSpeech(correctAnswer) }));
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
            speakText(t('tts.tryAgain'));

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
    feedbackTitle.textContent = t('feedback.tryAgain');
    feedbackText.textContent = t('feedback.keepTrying');
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
            f.innerHTML = fruitSymbols[g.fruit || currentFruit];
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
        playBeep(660, 90, 'triangle');
        numEl.classList.add('matched');
        grpEl.classList.add('matched');
        numEl.classList.remove('selected');
        grpEl.classList.remove('selected');
        matchLinks.push({ numId: numEl.id, groupId: grpEl.id });
        selectedNumberId = null;
        selectedGroupId = null;
        if (matchLinks.length >= matchGroups.length) {
            playCorrectSound();
            score += 1;
            updateScore();
            if (!runEnded) {
                setTimeout(() => { if (!runEnded) generateQuestion(); }, 50);
            }
        }
    } else {
        playIncorrectSound();
        setTimeout(() => {
            if (line && line.parentNode) line.parentNode.removeChild(line);
        }, 600);
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

// Pick N distinct fruits from the fruits list (Fisher–Yates partial shuffle)
function pickDistinctFruits(n) {
    const pool = [...fruits];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, Math.min(n, pool.length));
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

// Language switcher wiring
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Initialize the game
function init() {
    // Apply language first so all subsequent text uses the right locale
    currentLang = loadLang();
    applyTranslations();

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
