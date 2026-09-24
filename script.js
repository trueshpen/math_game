// A page the browser cached before this version still loads plain /script.js
// (now this file) and cannot run it. Load the current page once, under a URL
// the cache has never seen (?fresh=...); if that already happened, offer a link.
// Current pages load this file as script.js?v=... so they never mix versions.
if (!document.getElementById('numPad')) {
    const freshUrl = location.pathname + '?fresh=' + Date.now();
    if (!/[?&]fresh=/.test(location.search)) {
        location.replace(freshUrl);
    } else {
        const link = document.createElement('a');
        link.href = freshUrl;
        link.textContent = 'Nová verze hry – klikni pro načtení / New version – tap to load';
        link.style.cssText = 'position:fixed;inset:auto 12px 12px;z-index:9999;padding:16px;border-radius:14px;'
            + 'background:#fff;color:#1d2b22;font:800 17px/1.3 sans-serif;text-align:center;box-shadow:0 6px 18px rgba(0,0,0,.3)';
        document.body.appendChild(link);
    }
    throw new Error('Outdated page from the browser cache; loading the current one.');
}

// ============================================================
// Internationalization (EN / CS)
// ============================================================
const translations = {
    en: {
        'app.title': 'Kids Math Game',
        'lang.label': 'Language',
        // Age selection
        'age.littleKids': 'Little Kids',
        'age.littleKids.ages': 'Ages 3-6',
        'age.littleKids.desc1': 'Fun counting & matching!',
        'age.littleKids.desc2': '🌈 Colorful & Playful 🌈',
        'age.biggerKids': 'Bigger Kids',
        'age.biggerKids.ages': 'Ages 7-10',
        'age.biggerKids.desc1': 'Advanced Math Challenges!',
        'age.biggerKids.desc2': '🚀 Level Up Your Skills 🚀',
        'age.play': 'Play ▶',
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
        'playMode.title': 'Pick Play Mode',
        'playMode.subtitle': 'Choose how you want to play',
        'playMode.time': 'Time Mode',
        'playMode.time.desc': '{n} seconds',
        'playMode.questions': 'Questions Mode',
        'playMode.questions.desc': '10 questions',
        // Game screen chrome
        'stats.score': 'Score',
        'submit': 'Submit',
        'backToHome': '🏠 Home',
        'back': '← Back to Games',
        'speakBtn.title': 'Repeat question',
        'aria.options': 'Answer choices',
        'aria.timer': 'Time left',
        'aria.progress': 'Question',
        'aria.answer': 'Your answer',
        'aria.backspace': 'Delete',
        'aria.group': 'Group {n}',
        'aria.compare.gt': 'Greater than',
        'aria.compare.lt': 'Less than',
        'aria.compare.eq': 'Equal',
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
        'q.add': 'How many fruits in total?',
        'q.compare': 'Which group has more?',
        'q.match': 'Match the numbers to the groups!',
        'q.math': 'Solve the problem!',
        // Spoken
        'tts.count': 'How many {fruit} do you see?',
        'tts.add': 'Add both groups together. How many fruits are there in total?',
        'tts.compare': 'Which group has more? Choose greater than, less than, or equal.',
        'tts.match': 'Match each number to the group with the same number of fruits.',
        'tts.math': '{a} {op} {b} equals what?',
        'tts.op.plus': 'plus',
        'tts.op.minus': 'minus',
        'tts.op.times': 'times',
        'tts.op.dividedBy': 'divided by',
        'tts.incorrect': 'Not quite! The answer is {answer}.',
        'tts.incorrect.compare': 'Not quite! {answer}.',
        'tts.tryAgain': 'Oops! Try again!',
        'tts.compare.left': 'The left group has more',
        'tts.compare.right': 'The right group has more',
        'tts.compare.equal': 'Both groups are the same',
        // Feedback
        'feedback.tryAgain': 'Oops! Try again!',
        'feedback.answerIs': 'The answer is {answer}',
        'feedback.roundDone': '🎉 Great job!',
        'feedback.roundDoneMistakes': '👍 All matched!',
        // Result
        'result.yourScore': 'Correct answers',
        'result.timeUp': 'Time Up!',
        'result.allDone': 'All Questions Done!',
        'result.newBest': '🏆 New best!',
        'result.best': 'Best: {n}',
        'result.playAgain': '🔄 Play Again',
        'result.comeback': '🎁 Comeback bonus! 2× stars',
        'result.streakUp.one': '🔥 Streak: {n} day!',
        'result.streakUp.other': '🔥 Streak: {n} days in a row!',
        'result.streakNew': '🔥 New streak started!',
        'result.stars': '{n} of 3 stars',
        // Progress panel
        'progress.title': 'My Progress',
        'progress.today': 'Today',
        'progress.streak': 'Streak',
        'progress.todayPlay': '⬜ Play 1 game',
        'progress.todayDone': '✅ Done! Great job!',
        'progress.streakZero': 'Start today!',
        'progress.streakDays.one': '🔥 {n} day',
        'progress.streakDays.other': '🔥 {n} days',
        'progress.calendar': 'Last 14 days',
        'progress.played': 'played',
        'progress.totalStars': 'Stars',
        'progress.totalCorrect': 'Correct answers',
        'progress.bestStreak': 'Best streak',
        // Fruit plurals for question templates
        'fruit.apple': 'apples',
        'fruit.banana': 'bananas',
        'fruit.orange': 'oranges',
        'fruit.watermelon': 'watermelons',
        'fruit.pineapple': 'pineapples',
    },
    cs: {
        'app.title': 'Dětská matematika',
        'lang.label': 'Jazyk',
        'age.littleKids': 'Menší děti',
        'age.littleKids.ages': 'Věk 3-6',
        'age.littleKids.desc1': 'Zábavné počítání a spojování!',
        'age.littleKids.desc2': '🌈 Barevné a hravé 🌈',
        'age.biggerKids': 'Větší děti',
        'age.biggerKids.ages': 'Věk 7-10',
        'age.biggerKids.desc1': 'Pokročilé matematické úlohy!',
        'age.biggerKids.desc2': '🚀 Zlepši své dovednosti 🚀',
        'age.play': 'Hrát ▶',
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
        'settings.keyboard': '⌨️ Psát čísla',
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
        'playMode.title': 'Vyber si herní mód',
        'playMode.subtitle': 'Zvol, jak chceš hrát',
        'playMode.time': 'Na čas',
        'playMode.time.desc': '{n} sekund',
        'playMode.questions': 'Na otázky',
        'playMode.questions.desc': '10 otázek',
        'stats.score': 'Skóre',
        'submit': 'Odeslat',
        'backToHome': '🏠 Domů',
        'back': '← Zpět ke hrám',
        'speakBtn.title': 'Zopakovat otázku',
        'aria.options': 'Možnosti odpovědi',
        'aria.timer': 'Zbývající čas',
        'aria.progress': 'Otázka',
        'aria.answer': 'Tvoje odpověď',
        'aria.backspace': 'Smazat',
        'aria.group': 'Skupina {n}',
        'aria.compare.gt': 'Větší než',
        'aria.compare.lt': 'Menší než',
        'aria.compare.eq': 'Rovná se',
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
        'q.add': 'Kolik je to dohromady?',
        'q.compare': 'Která skupina má víc?',
        'q.match': 'Přiřaď čísla ke skupinám!',
        'q.math': 'Vypočítej příklad!',
        'tts.count': 'Kolik vidíš {fruit}?',
        'tts.add': 'Sečti obě skupiny. Kolik je to dohromady?',
        'tts.compare': 'Která skupina má víc? Vyber větší, menší, nebo rovná se.',
        'tts.match': 'Přiřaď každé číslo ke skupině se stejným počtem ovoce.',
        'tts.math': 'Kolik je {a} {op} {b}?',
        'tts.op.plus': 'plus',
        'tts.op.minus': 'mínus',
        'tts.op.times': 'krát',
        'tts.op.dividedBy': 'děleno',
        'tts.incorrect': 'Tentokrát ne. Správná odpověď je {answer}.',
        'tts.incorrect.compare': 'Tentokrát ne. {answer}.',
        'tts.tryAgain': 'Zkus to znovu!',
        'tts.compare.left': 'Víc má levá skupina',
        'tts.compare.right': 'Víc má pravá skupina',
        'tts.compare.equal': 'Obě skupiny jsou stejné',
        'feedback.tryAgain': 'Zkus to znovu!',
        'feedback.answerIs': 'Správně je {answer}',
        'feedback.roundDone': '🎉 Skvělé!',
        'feedback.roundDoneMistakes': '👍 Všechno spojeno!',
        'result.yourScore': 'Správné odpovědi',
        'result.timeUp': 'Čas vypršel!',
        'result.allDone': 'Hotovo!',
        'result.newBest': '🏆 Nové nejlepší skóre!',
        'result.best': 'Nejlepší: {n}',
        'result.playAgain': '🔄 Hrát znovu',
        'result.comeback': '🎁 Vítej zpátky! 2× hvězdy',
        'result.streakUp.one': '🔥 Série: {n} den!',
        'result.streakUp.few': '🔥 Série: {n} dny v řadě!',
        'result.streakUp.many': '🔥 Série: {n} dní v řadě!',
        'result.streakNew': '🔥 Nová série začala!',
        'result.stars': '{n} ze 3 hvězd',
        'progress.title': 'Můj pokrok',
        'progress.today': 'Dnes',
        'progress.streak': 'Série',
        'progress.todayPlay': '⬜ Zahraj 1 hru',
        'progress.todayDone': '✅ Hotovo! Skvělá práce!',
        'progress.streakZero': 'Začni dnes!',
        'progress.streakDays.one': '🔥 {n} den',
        'progress.streakDays.few': '🔥 {n} dny',
        'progress.streakDays.many': '🔥 {n} dní',
        'progress.calendar': 'Posledních 14 dní',
        'progress.played': 'hráno',
        'progress.totalStars': 'Hvězdy',
        'progress.totalCorrect': 'Správné odpovědi',
        'progress.bestStreak': 'Nejdelší série',
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
            s = s.split(`{${k}}`).join(String(v)); // not replaceAll: older Android WebViews lack it
        }
    }
    return s;
}

// Plural-aware t(): looks up `${key}.one|few|many` (Czech) or `${key}.one|other`
// (English) and falls back to `${key}.other`.
function tn(key, n, vars) {
    const dict = translations[currentLang] || translations.en;
    let form;
    if (currentLang === 'cs') form = n === 1 ? 'one' : (n >= 2 && n <= 4 ? 'few' : 'many');
    else form = n === 1 ? 'one' : 'other';
    const full = `${key}.${form}`;
    return t(dict[full] !== undefined ? full : `${key}.other`, { n, ...vars });
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
    // Reflect to <html lang> and the tab title
    document.documentElement.setAttribute('lang', currentLang);
    document.title = t('app.title');
    // Language button active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const active = btn.dataset.lang === currentLang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });
    // Refresh dynamic text that JS controls
    refreshDynamicI18nText();
}

// Re-renders the text that JS writes itself (everything not covered by [data-i18n]).
function refreshDynamicI18nText() {
    updateGameTitles();
    updateTimeModeDesc();
    updateProgressPanel();
    if (selectedGame && !gameScreen.classList.contains('hidden')) {
        updateQuestion();
    }
    if (lastResult && !resultScreen.classList.contains('hidden')) {
        renderResult(lastResult);
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
let gameTimer = null;
let advanceTimeout = null;   // the one pending "go to the next question"
let announceTimeout = null;  // delayed read-aloud of the first question
let feedbackTimeout = null;  // hides the feedback bubble
let isGeneratingQuestion = false;
let showFeedback = false;    // an answer is being shown; further input is ignored
let inputLockedUntil = 0;    // brief lock after a new question so a double tap can't answer it
let inputMode = 'click'; // 'click' or 'keyboard'
// Play mode state
let playMode = null; // 'time' | 'questions'
let questionsAsked = 0;
let questionTarget = 10;
let answersGiven = 0; // real attempts this run; a run without any is not recorded as played
let runEnded = false;
let hasAnnouncedQuestion = false;
let questionsRemaining = 0;
let lastResult = null; // what the result screen shows, so it can be re-rendered in another language
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
let matchRoundHadMistake = false;
let svgLayer = null; // SVG overlay for connection lines
let selectedNumberId = null;
let selectedGroupId = null;

// Timing (ms)
const CORRECT_ADVANCE_MS = 350;      // green flash on a right answer
const WRONG_ADVANCE_MS = 1800;       // questions mode: time to see (and hear) the right answer
const COMPARE_TIME_WRONG_MS = 800;   // compare in time mode: short reveal, no second try
const MATCH_ROUND_DONE_MS = 900;
const INPUT_LOCK_MS = 250;

// Fruit data
const fruits = ['apple', 'banana', 'orange', 'watermelon', 'pineapple'];

// Unicode fruit symbols
const fruitSymbols = {
    apple: '🍎',
    banana: '🍌',
    orange: '🍊',
    watermelon: '🍉',
    pineapple: '🍍'
};

// DOM elements
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const ageSelectionScreen = document.getElementById('ageSelectionScreen');
const littleKidsBtn = document.getElementById('littleKidsBtn');
const biggerKidsBtn = document.getElementById('biggerKidsBtn');
const homeScreen = document.getElementById('homeScreen');
const gameScreen = document.getElementById('gameScreen');
const gameSelection = document.getElementById('gameSelection');
const countFruitsBtn = document.getElementById('countFruitsBtn');
const addFruitsBtn = document.getElementById('addFruitsBtn');
const compareFruitsBtn = document.getElementById('compareFruitsBtn');
const matchFruitsBtn = document.getElementById('matchFruitsBtn');
const addSubBtn = document.getElementById('addSubBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const backHomeBtn = document.getElementById('backHomeBtn');
const speakBtn = document.getElementById('speakBtn');

const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const timerBox = document.getElementById('timerBox');
const progressBox = document.getElementById('progressBox');
const progressText = document.getElementById('progressText');
const questionText = document.getElementById('questionText');
const fruitsContainer = document.getElementById('fruitsContainer');
const optionsContainer = document.getElementById('optionsContainer');
const answerFeedback = document.getElementById('answerFeedback');
// Play Mode screen elements
const playModeScreen = document.getElementById('playModeScreen');
const playModeTitle = document.getElementById('playModeTitle');
const timeModeDesc = document.getElementById('timeModeDesc');
const timeModeBtn = document.getElementById('timeModeBtn');
const questionsModeBtn = document.getElementById('questionsModeBtn');
const backToHomeFromPlayModeBtn = document.getElementById('backToHomeFromPlayModeBtn');
const playLevelButtons = [...document.querySelectorAll('#playLevelOptions .level-btn')];
// Settings UI elements
const settingsClickMode = document.getElementById('settingsClickMode');
const settingsKeyboardMode = document.getElementById('settingsKeyboardMode');
const settingsDiffEasy = document.getElementById('settingsDiffEasy');
const settingsDiffMedium = document.getElementById('settingsDiffMedium');
const settingsDiffHard = document.getElementById('settingsDiffHard');
const settingsSpeechSlow = document.getElementById('settingsSpeechSlow');
const settingsSpeechNormal = document.getElementById('settingsSpeechNormal');
const settingsSpeechFast = document.getElementById('settingsSpeechFast');
const settingsSoundOn = document.getElementById('settingsSoundOn');
const settingsSoundOff = document.getElementById('settingsSoundOff');
const settingsSaved = document.getElementById('settingsSaved');
// Dynamic titles
const gameHeaderTitle = document.getElementById('gameHeaderTitle');

// Keyboard input elements
const keyboardContainer = document.getElementById('keyboardContainer');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const backspaceBtn = document.getElementById('backspaceBtn');
const numPad = document.getElementById('numPad');
// Result screen elements
const resultScreen = document.getElementById('resultScreen');
const resultEmoji = document.getElementById('resultEmoji');
const resultTitle = document.getElementById('resultTitle');
const resultScore = document.getElementById('resultScore');
const resultBest = document.getElementById('resultBest');
const resultStars = document.getElementById('resultStars');
const resultComeback = document.getElementById('resultComeback');
const resultStreakUpdate = document.getElementById('resultStreakUpdate');
const resultBackBtn = document.getElementById('resultBackBtn');
const resultPlayAgainBtn = document.getElementById('resultPlayAgainBtn');
const changeAgeGroupBtn = document.getElementById('changeAgeGroupBtn');

const LITTLE_KIDS_GAMES = [countFruitsBtn, addFruitsBtn, compareFruitsBtn, matchFruitsBtn];
const BIGGER_KIDS_GAMES = [addSubBtn, multiplyBtn, divideBtn];

// Event listeners
littleKidsBtn.addEventListener('click', () => selectAgeGroup('little'));
biggerKidsBtn.addEventListener('click', () => selectAgeGroup('bigger'));
countFruitsBtn.addEventListener('click', () => chooseGame('count'));
addFruitsBtn.addEventListener('click', () => chooseGame('add'));
compareFruitsBtn.addEventListener('click', () => chooseGame('compare'));
matchFruitsBtn.addEventListener('click', () => chooseGame('match'));
addSubBtn.addEventListener('click', () => chooseGame('addsub'));
multiplyBtn.addEventListener('click', () => chooseGame('multiply'));
divideBtn.addEventListener('click', () => chooseGame('divide'));
backHomeBtn.addEventListener('click', goHome);
speakBtn.addEventListener('click', speakQuestion);
submitBtn.addEventListener('click', submitKeyboardAnswer);
// Play mode listeners
timeModeBtn.addEventListener('click', () => selectPlayMode('time'));
questionsModeBtn.addEventListener('click', () => selectPlayMode('questions'));
backToHomeFromPlayModeBtn.addEventListener('click', goHome);
playLevelButtons.forEach(btn => btn.addEventListener('click', () => persistSettings({ difficulty: btn.dataset.diff })));
resultBackBtn.addEventListener('click', goHome);
resultPlayAgainBtn.addEventListener('click', playAgain);
changeAgeGroupBtn.addEventListener('click', goToAgeSelection);

// Settings management
const SETTINGS_KEYS = {
    mode: 'km_inputMode',
    difficulty: 'km_difficulty',
    speech: 'km_speechRate',
    sound: 'km_soundOn',
};
const SETTINGS_DEFAULTS = { mode: 'click', difficulty: 'easy', speech: 'normal', sound: 'on' };
const SETTINGS_ALLOWED = {
    mode: ['click', 'keyboard'],
    difficulty: ['easy', 'medium', 'hard'],
    speech: ['slow', 'normal', 'fast'],
    sound: ['on', 'off'],
};
const SPEECH_RATES = { slow: 0.6, normal: 0.9, fast: 1.25 };

// Stored settings with defaults for anything missing or unknown, so the
// settings panel always shows what the games will actually use.
function loadSettings() {
    const settings = { ...SETTINGS_DEFAULTS };
    for (const name of Object.keys(SETTINGS_KEYS)) {
        const stored = lsGet(SETTINGS_KEYS[name]);
        if (SETTINGS_ALLOWED[name].includes(stored)) settings[name] = stored;
    }
    return settings;
}

function persistSettings(partial) {
    const next = { ...loadSettings(), ...partial };
    for (const name of Object.keys(SETTINGS_KEYS)) lsSet(SETTINGS_KEYS[name], next[name]);
    showSettingsSaved();
    updateSettingsUI();
}

function updateSettingsUI() {
    const { mode, difficulty, speech, sound } = loadSettings();
    const setActive = (buttons, value, match) => {
        buttons.forEach(btn => {
            const active = match(btn) === value;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', String(active));
        });
    };
    setActive([settingsClickMode, settingsKeyboardMode], mode, b => b.dataset.mode);
    setActive([settingsDiffEasy, settingsDiffMedium, settingsDiffHard, ...playLevelButtons], difficulty, b => b.dataset.diff);
    setActive([settingsSpeechSlow, settingsSpeechNormal, settingsSpeechFast], speech, b => b.dataset.speech);
    setActive([settingsSoundOn, settingsSoundOff], sound, b => b.dataset.sound);
    updateTimeModeDesc();
}

let settingsSavedTimeout = null;
function showSettingsSaved() {
    settingsSaved.classList.add('show');
    clearTimeout(settingsSavedTimeout);
    settingsSavedTimeout = setTimeout(() => settingsSaved.classList.remove('show'), 900);
}

// Time mode lasts longer on harder levels so harder problems aren't
// penalized by the same budget as easy ones.
function timeModeSeconds(level) {
    if (level === 'hard') return 30;
    if (level === 'medium') return 25;
    return 20;
}

function updateTimeModeDesc() {
    timeModeDesc.textContent = t('playMode.time.desc', { n: timeModeSeconds(loadSettings().difficulty) });
}

// ============================================================
// Progress tracking (streak, daily goal, calendar, totals)
// ============================================================
const PROGRESS_KEYS = {
    streakCurrent: 'km_streak_current',
    streakBest: 'km_streak_best',
    lastPlay: 'km_last_play_date',
    playedDays: 'km_played_days',
    totalStars: 'km_total_stars',
    totalCorrect: 'km_total_correct',
    comebackPending: 'km_comeback_pending',
};
const CALENDAR_DAYS = 14;

function todayKey(date) {
    const d = date || new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}
function daysBetween(aKey, bKey) {
    if (!aKey || !bKey) return null;
    const a = new Date(aKey + 'T00:00:00');
    const b = new Date(bKey + 'T00:00:00');
    return Math.round((b - a) / (1000 * 60 * 60 * 24));
}
function lsGetInt(k, def) {
    try { const v = parseInt(localStorage.getItem(k)); return Number.isFinite(v) ? v : def; }
    catch (_) { return def; }
}
function lsSetInt(k, v) { try { localStorage.setItem(k, String(v)); } catch (_) {} }
function lsGet(k) { try { return localStorage.getItem(k); } catch (_) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }
function getPlayedDaysSet() {
    const raw = lsGet(PROGRESS_KEYS.playedDays) || '';
    const s = new Set();
    if (raw) raw.split(',').forEach(d => { if (d) s.add(d); });
    return s;
}
function savePlayedDaysSet(set) {
    // Cap to ~400 days to avoid unbounded growth
    const arr = [...set].sort();
    const trimmed = arr.slice(-400);
    lsSet(PROGRESS_KEYS.playedDays, trimmed.join(','));
}

// Call this when the user STARTS a run — detects if they're coming back
// from a gap so the session can get a 2x comeback bonus.
function checkComebackOnStart() {
    const last = lsGet(PROGRESS_KEYS.lastPlay);
    const today = todayKey();
    if (!last) return; // first ever play — no comeback
    const gap = daysBetween(last, today);
    if (gap !== null && gap >= 2 && !getPlayedDaysSet().has(today)) {
        lsSet(PROGRESS_KEYS.comebackPending, '1');
    } else if (gap !== null && gap >= 1) {
        // An unused bonus belongs to the day the child came back; don't carry it over.
        lsSet(PROGRESS_KEYS.comebackPending, '0');
    }
}

// Call this when a run ENDS with real play (at least one answer attempt).
// Updates streak, played days, totals. Returns a summary for the result screen.
function recordPlaySession(starsEarned, correctCount) {
    const today = todayKey();
    const playedDays = getPlayedDaysSet();
    const alreadyPlayedToday = playedDays.has(today);

    let streak = lsGetInt(PROGRESS_KEYS.streakCurrent, 0);
    let best = lsGetInt(PROGRESS_KEYS.streakBest, 0);
    const last = lsGet(PROGRESS_KEYS.lastPlay);
    let streakChanged = false;
    let newStreakStarted = false;

    if (!alreadyPlayedToday) {
        const gap = last ? daysBetween(last, today) : null;
        if (gap === null) {
            streak = 1;
            newStreakStarted = true;
        } else if (gap === 1) {
            streak += 1;
            streakChanged = true;
        } else if (gap === 0) {
            // Should not happen (alreadyPlayedToday covers it) but be safe
        } else {
            streak = 1;
            newStreakStarted = true;
        }
        if (streak > best) best = streak;
        lsSetInt(PROGRESS_KEYS.streakCurrent, streak);
        lsSetInt(PROGRESS_KEYS.streakBest, best);
        lsSet(PROGRESS_KEYS.lastPlay, today);
        playedDays.add(today);
        savePlayedDaysSet(playedDays);
    }

    // Comeback bonus: 2x stars if the flag was set at run start. A run without
    // stars leaves it for the next run today (0 × 2 would just waste it).
    const comeback = lsGet(PROGRESS_KEYS.comebackPending) === '1' && starsEarned > 0;
    const effectiveStars = comeback ? starsEarned * 2 : starsEarned;
    if (comeback) lsSet(PROGRESS_KEYS.comebackPending, '0');

    const totalStars = lsGetInt(PROGRESS_KEYS.totalStars, 0) + effectiveStars;
    const totalCorrect = lsGetInt(PROGRESS_KEYS.totalCorrect, 0) + (correctCount || 0);
    lsSetInt(PROGRESS_KEYS.totalStars, totalStars);
    lsSetInt(PROGRESS_KEYS.totalCorrect, totalCorrect);

    return {
        streak,
        best,
        totalStars,
        totalCorrect,
        comebackApplied: comeback,
        starsEarned: effectiveStars,
        streakChanged,
        newStreakStarted,
        firstPlayToday: !alreadyPlayedToday,
    };
}

// The stored streak only changes when a run is recorded, so after missed days
// it is stale. It is still alive only if the last play was today or yesterday.
function getEffectiveStreak() {
    const streak = lsGetInt(PROGRESS_KEYS.streakCurrent, 0);
    const gap = daysBetween(lsGet(PROGRESS_KEYS.lastPlay), todayKey());
    return gap !== null && gap >= 0 && gap <= 1 ? streak : 0;
}

function updateProgressPanel() {
    const streak = getEffectiveStreak();
    const best = lsGetInt(PROGRESS_KEYS.streakBest, 0);
    const totalStars = lsGetInt(PROGRESS_KEYS.totalStars, 0);
    const totalCorrect = lsGetInt(PROGRESS_KEYS.totalCorrect, 0);
    const doneToday = getPlayedDaysSet().has(todayKey());

    document.getElementById('dailyGoalStatus').textContent = doneToday ? t('progress.todayDone') : t('progress.todayPlay');
    document.getElementById('dailyGoalCard').classList.toggle('done', doneToday);

    document.getElementById('streakDisplay').textContent = streak > 0 ? tn('progress.streakDays', streak) : t('progress.streakZero');
    document.getElementById('streakCard').classList.toggle('active', streak > 0);

    document.getElementById('totalStarsDisplay').textContent = String(totalStars);
    document.getElementById('totalCorrectDisplay').textContent = String(totalCorrect);
    document.getElementById('bestStreakDisplay').textContent = String(best);

    renderCalendar();
}

function renderCalendar() {
    const cal = document.getElementById('calendar');
    cal.innerHTML = '';
    const played = getPlayedDaysSet();
    const today = new Date();
    const dateLabel = new Intl.DateTimeFormat(SPEECH_LANG[currentLang] || 'en-US', { weekday: 'short', day: 'numeric', month: 'numeric' });
    // Show last CALENDAR_DAYS days ending today
    for (let i = CALENDAR_DAYS - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const key = todayKey(d);
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';
        cell.setAttribute('role', 'listitem');
        cell.textContent = String(d.getDate());
        const label = dateLabel.format(d) + (played.has(key) ? ` · ${t('progress.played')}` : '');
        cell.title = label;
        cell.setAttribute('aria-label', label);
        if (played.has(key)) cell.classList.add('played');
        if (i === 0) cell.classList.add('today');
        cal.appendChild(cell);
    }
}

// Settings button listeners
settingsClickMode.addEventListener('click', () => persistSettings({ mode: 'click' }));
settingsKeyboardMode.addEventListener('click', () => persistSettings({ mode: 'keyboard' }));
settingsDiffEasy.addEventListener('click', () => persistSettings({ difficulty: 'easy' }));
settingsDiffMedium.addEventListener('click', () => persistSettings({ difficulty: 'medium' }));
settingsDiffHard.addEventListener('click', () => persistSettings({ difficulty: 'hard' }));
settingsSpeechSlow.addEventListener('click', () => persistSettings({ speech: 'slow' }));
settingsSpeechNormal.addEventListener('click', () => persistSettings({ speech: 'normal' }));
settingsSpeechFast.addEventListener('click', () => persistSettings({ speech: 'fast' }));
settingsSoundOn.addEventListener('click', () => persistSettings({ sound: 'on' }));
settingsSoundOff.addEventListener('click', () => persistSettings({ sound: 'off' }));

// Answer buttons (click mode)
optionsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.option-btn');
    if (!btn || btn.disabled || inputMode !== 'click') return;
    checkAnswer(Number(btn.dataset.answer), btn);
});

// Global keyboard: typing mode takes digits / Backspace / Enter from a real
// keyboard; in click mode, 1-4 picks the corresponding answer button.
document.addEventListener('keydown', (e) => {
    if (e.repeat || e.altKey || e.ctrlKey || e.metaKey) return;
    if (gameScreen.classList.contains('hidden')) return;
    if (!keyboardContainer.classList.contains('hidden')) {
        if (/^[0-9]$/.test(e.key)) {
            e.preventDefault();
            pressDigit(e.key);
        } else if (e.key === 'Backspace') {
            e.preventDefault();
            pressBackspace();
        } else if (e.key === 'Enter' && !(e.target instanceof HTMLButtonElement)) {
            // (Enter on a focused button already clicks that button)
            e.preventDefault();
            submitKeyboardAnswer();
        }
        return;
    }
    if (inputMode !== 'click') return;
    if (selectedGame === 'compare' || selectedGame === 'match') return;
    const idx = ['1', '2', '3', '4'].indexOf(e.key);
    if (idx === -1) return;
    const btn = optionsContainer.querySelectorAll('.option-btn')[idx];
    if (!btn || btn.disabled) return;
    e.preventDefault();
    checkAnswer(Number(btn.dataset.answer), btn);
});

// On-screen number pad. Only digits can be entered, so "3.9" or "3e1" can
// never be read as 3, and no phone keyboard opens over the game.
numPad.addEventListener('click', (e) => {
    const key = e.target.closest('.pad-key');
    if (key) pressDigit(key.dataset.digit);
});
backspaceBtn.addEventListener('click', pressBackspace);
// Tapping a pad key must not take focus away (Enter on a real keyboard should still submit)
keyboardContainer.addEventListener('mousedown', (e) => {
    if (e.target.closest('.pad-key')) e.preventDefault();
});

function setTypedAnswer(value) {
    answerInput.value = value;
    submitBtn.disabled = value === '';
    answerInput.classList.remove('is-wrong', 'is-correct');
}

function pressDigit(digit) {
    if (showFeedback || runEnded) return;
    const current = answerInput.value;
    if (current.length >= 3) return;
    setTypedAnswer(current === '0' ? digit : current + digit);
    // Whatever had focus (Home, Repeat question...), Enter must now submit this answer
    if (document.activeElement !== submitBtn) submitBtn.focus({ preventScroll: true });
}

function pressBackspace() {
    if (showFeedback || runEnded) return;
    setTypedAnswer(answerInput.value.slice(0, -1));
}

// Text-to-speech functions
function stopSpeech() {
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (_) {}
}

let cachedVoices = [];
function refreshVoices() {
    try { cachedVoices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; } catch (_) { cachedVoices = []; }
}
if (window.speechSynthesis) {
    refreshVoices();
    try { window.speechSynthesis.onvoiceschanged = refreshVoices; } catch (_) {}
}

// A voice that actually speaks the UI language (browsers don't always pick one from utterance.lang).
function voiceFor(lang) {
    if (!cachedVoices.length) refreshVoices();
    const want = (SPEECH_LANG[lang] || 'en-US').toLowerCase();
    const base = want.split('-')[0];
    const norm = v => (v.lang || '').replace('_', '-').toLowerCase();
    return cachedVoices.find(v => norm(v) === want) || cachedVoices.find(v => norm(v).startsWith(base)) || null;
}

function speakText(text) {
    if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') return;
    try {
        window.speechSynthesis.cancel(); // Stop any current speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = SPEECH_RATES[loadSettings().speech] || SPEECH_RATES.normal;
        utterance.pitch = 1.2;
        utterance.volume = 0.8;
        utterance.lang = SPEECH_LANG[currentLang] || 'en-US';
        const voice = voiceFor(currentLang);
        if (voice) utterance.voice = voice;
        window.speechSynthesis.speak(utterance);
    } catch (_) {}
}

// WebAudio beeps for correct/incorrect feedback. Gated by sound setting.
let _audioCtx = null;
function getAudioCtx() {
    if (!_audioCtx) {
        try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (_) { _audioCtx = null; }
    }
    // Some browsers (iOS Safari) start the context suspended
    if (_audioCtx && _audioCtx.state === 'suspended') {
        try { _audioCtx.resume(); } catch (_) {}
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

function playFanfare() {
    [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => playBeep(f, 150, 'triangle', 0.12), i * 130));
}

function isMathGame() {
    return selectedGame === 'addsub' || selectedGame === 'multiply' || selectedGame === 'divide';
}

function speakQuestion() {
    let question;
    if (isMathGame()) {
        question = t('tts.math', { a: addSubNum1, op: operatorWord(addSubOperator), b: addSubNum2 });
    } else if (selectedGame === 'add') {
        question = t('tts.add');
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

// Shows the answer buttons or the number pad for the current game.
function updateInputMode() {
    const usesOptions = selectedGame !== 'compare' && selectedGame !== 'match';
    const typing = usesOptions && inputMode === 'keyboard';
    optionsContainer.classList.toggle('hidden', !usesOptions || typing);
    keyboardContainer.classList.toggle('hidden', !typing);
}

function submitKeyboardAnswer() {
    const value = answerInput.value;
    if (!/^\d+$/.test(value)) return;
    checkAnswer(Number(value), null);
}

// Screen management

// Drops every pending game callback: clock, next question, read-aloud, feedback bubble.
function cancelPendingCallbacks() {
    clearTimer();
    if (advanceTimeout) { clearTimeout(advanceTimeout); advanceTimeout = null; }
    if (announceTimeout) { clearTimeout(announceTimeout); announceTimeout = null; }
    hideAnswerFeedback();
}

function showOnly(screen) {
    [ageSelectionScreen, homeScreen, playModeScreen, gameScreen, resultScreen].forEach(s => {
        s.classList.toggle('hidden', s !== screen);
    });
    document.body.classList.toggle('in-game', screen === gameScreen);
    screen.scrollTop = 0;
}

// Starts a run of the selected game (first play and Play Again alike).
function startGame(mode) {
    inputMode = mode;
    cancelPendingCallbacks();
    stopSpeech();
    // The run starts here, so this is where a comeback after missed days is detected
    checkComebackOnStart();
    // Fresh run state
    score = 0;
    updateScore();
    questionsAsked = 0;
    answersGiven = 0;
    questionsRemaining = playMode === 'questions' ? questionTarget : 0;
    runEnded = false;
    hasAnnouncedQuestion = false;
    isGeneratingQuestion = false;
    showFeedback = false;
    lastResult = null;
    // Questions mode shows progress; time mode shows the clock
    timerBox.classList.toggle('hidden', playMode === 'questions');
    progressBox.classList.toggle('hidden', playMode !== 'questions');
    if (playMode === 'time') {
        timeLeft = getTimeModeDuration();
        updateTimer();
    }
    showOnly(gameScreen);
    generateQuestion();
}

// Restart the same game+difficulty+playMode without going back to menus.
function playAgain() {
    startGame(inputMode);
}

function updateGameTitles() {
    playModeTitle.textContent = selectedGame ? t(`gameTitles.${selectedGame}.long`) : t('playMode.title');
    if (selectedGame) gameHeaderTitle.textContent = t(`gameTitles.${selectedGame}.short`);
}

function showPlayModeSelection() {
    updateGameTitles();
    updateSettingsUI(); // level buttons and the time-mode length follow the saved difficulty
    showOnly(playModeScreen);
}

function selectPlayMode(mode) {
    playMode = mode; // 'time' | 'questions'
    const saved = loadSettings();
    configureDifficulty(saved.difficulty);
    // Compare and Match are always answered by tapping; the other games use the saved input mode
    const modeToUse = (selectedGame === 'compare' || selectedGame === 'match') ? 'click' : saved.mode;
    startGame(modeToUse);
}

function chooseGame(game) {
    cancelPendingCallbacks();
    stopSpeech();
    selectedGame = game; // 'count' | 'add' | 'compare' | 'match' | 'addsub' | 'multiply' | 'divide'
    // Always show Play Mode selection first; difficulty and input mode come from Settings
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
}

// Age group selection
function selectAgeGroup(ageGroup) {
    selectedAgeGroup = ageGroup; // 'little' | 'bigger'
    filterGamesByAgeGroup();
    updateProgressPanel();
    showOnly(homeScreen);
}

function filterGamesByAgeGroup() {
    const bigger = selectedAgeGroup === 'bigger';
    LITTLE_KIDS_GAMES.forEach(btn => btn.classList.toggle('hidden', bigger));
    BIGGER_KIDS_GAMES.forEach(btn => btn.classList.toggle('hidden', !bigger));
    gameSelection.dataset.count = String(bigger ? BIGGER_KIDS_GAMES.length : LITTLE_KIDS_GAMES.length);
    document.body.classList.toggle('bigger-kids-theme', bigger);
    document.body.classList.toggle('little-kids-theme', !bigger);
    if (themeColorMeta) themeColorMeta.setAttribute('content', bigger ? '#2a5298' : '#3fae55');
}

function goToAgeSelection() {
    cancelPendingCallbacks();
    stopSpeech();
    selectedAgeGroup = null;
    showOnly(ageSelectionScreen);
}

function goHome() {
    // Properly stop all game activities
    cancelPendingCallbacks();
    stopSpeech();
    runEnded = true; // an abandoned run must not be picked up by a stray callback
    isGeneratingQuestion = false;
    showFeedback = false;
    setTypedAnswer('');
    resetBoard();
    score = 0;
    updateScore();
    // Refresh progress panel (streak/totals may have just updated)
    updateProgressPanel();
    showOnly(homeScreen);
}

// Timer functions
function getTimeModeDuration() {
    return timeModeSeconds(selectedDifficulty);
}

function startGlobalTimer() {
    clearTimer();
    timeLeft = getTimeModeDuration();
    updateTimer();
    gameTimer = setInterval(() => {
        timeLeft--;
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

// Question generation
function generateQuestion() {
    if (isGeneratingQuestion || runEnded) return;
    // Only generate if game screen is visible
    if (gameScreen.classList.contains('hidden')) return;
    // Questions mode: ask exactly questionTarget questions
    if (playMode === 'questions' && questionsRemaining <= 0) {
        endRun();
        return;
    }
    isGeneratingQuestion = true;
    try {
        showFeedback = false;
        hideAnswerFeedback();
        setTypedAnswer('');

        createQuestion();

        updateQuestion();
        // Show the right controls first: the board is measured at its final size
        updateInputMode();
        if (isMathGame()) {
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

        // Time mode: one clock for the whole run, started with the first question
        if (playMode === 'time' && !gameTimer) {
            startGlobalTimer();
        }

        questionsAsked++;
        if (playMode === 'questions') {
            questionsRemaining--;
            progressText.textContent = `${Math.min(questionsAsked, questionTarget)}/${questionTarget}`;
        }
        // A double tap on the previous answer must not land on this question
        inputLockedUntil = performance.now() + INPUT_LOCK_MS;
    } finally {
        isGeneratingQuestion = false;
    }
    // Speak question only at the beginning of the run
    if (!hasAnnouncedQuestion) {
        hasAnnouncedQuestion = true;
        announceTimeout = setTimeout(() => {
            announceTimeout = null;
            speakQuestion();
        }, 300);
    }
}

// Picks the numbers (and fruit) for the next question of the selected game.
function createQuestion() {
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
        const shuffledCounts = shuffleInPlace([...matchNumbers]);
        matchGroups = shuffledCounts.map((count, idx) => {
            return { fruit: matchGroupFruits[idx], count, id: `group_${Date.now()}_${idx}` };
        });
        matchLinks = [];
        matchRoundHadMistake = false;
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
    if (isMathGame()) {
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
    shuffleInPlace(options);
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

function starsForScore(value) {
    if (playMode === 'time') return value >= 16 ? 3 : value >= 10 ? 2 : value >= 1 ? 1 : 0;
    return value >= 9 ? 3 : value >= 5 ? 2 : value >= 1 ? 1 : 0;
}

function endRun() {
    if (runEnded) return;
    runEnded = true;
    cancelPendingCallbacks();
    const stars = starsForScore(score);
    const previousBest = getBestScore();
    const isNewBest = saveBestScore(score);
    // Only a run in which the child actually answered counts toward streak and totals
    const session = answersGiven > 0 ? recordPlaySession(stars, score) : null;
    lastResult = {
        mode: playMode,
        score,
        total: questionTarget,
        stars,
        isNewBest: isNewBest && score > 0,
        best: Math.max(previousBest, score),
        session,
    };
    renderResult(lastResult);
    showOnly(resultScreen);
    if (stars > 0) playFanfare();
}

function renderResult(result) {
    resultTitle.textContent = result.mode === 'time' ? t('result.timeUp') : t('result.allDone');
    resultEmoji.textContent = ['💪', '👍', '🎉', '🏆'][result.stars];
    resultScore.textContent = result.mode === 'time' ? String(result.score) : `${result.score} / ${result.total}`;
    resultBest.textContent = result.isNewBest ? t('result.newBest') : (result.best > 0 ? t('result.best', { n: result.best }) : '');
    resultBest.classList.toggle('new-best', result.isNewBest);
    const session = result.session;
    resultComeback.classList.toggle('hidden', !(session && session.comebackApplied));
    if (session && session.firstPlayToday) {
        resultStreakUpdate.textContent = (session.newStreakStarted && session.streak === 1)
            ? t('result.streakNew')
            : tn('result.streakUp', session.streak);
        resultStreakUpdate.classList.remove('hidden');
    } else {
        resultStreakUpdate.classList.add('hidden');
    }
    resultStars.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const s = document.createElement('span');
        s.className = 'star' + (i < result.stars ? '' : ' empty');
        s.style.animationDelay = `${150 + i * 180}ms`;
        s.textContent = '★';
        resultStars.appendChild(s);
    }
    resultStars.setAttribute('aria-label', t('result.stars', { n: result.stars }));
}

function updateQuestion() {
    if (isMathGame()) {
        questionText.textContent = t('q.math');
    } else if (selectedGame === 'add') {
        questionText.textContent = t('q.add');
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
        btn.disabled = false;
        btn.classList.remove('is-correct', 'is-wrong');
    });
}

// ============================================================
// Fruit boards
// Every fruit gets its own cell of a grid fitted to the board's real size and
// sits at a random spot inside that cell, so fruits never overlap (they can
// always be counted) yet still look scattered. Boards shown together (Add,
// Compare, Match) share one fruit size, so a group never looks bigger just
// because its fruits are drawn bigger.
// ============================================================
const CELL_FILL = 0.86; // fruit size as a share of its cell

function resetBoard(layoutClass) {
    fruitsContainer.innerHTML = '';
    fruitsContainer.className = layoutClass ? `fruits-container ${layoutClass}` : 'fruits-container';
    delete fruitsContainer.dataset.maxFruit;
    svgLayer = null; // innerHTML took the old line layer with it
}

function makeBoard() {
    // <span> so a board may sit inside a <button> (Match groups)
    const board = document.createElement('span');
    board.className = 'fruit-board';
    return board;
}

// groups: [{ board, count, fruit }] — boards already in the DOM at their final size.
function fillBoards(groups, maxSize) {
    fruitsContainer.dataset.maxFruit = String(maxSize);
    groups.forEach(({ board, count, fruit }) => {
        board.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const item = document.createElement('span');
            item.className = 'fruit-item';
            item.style.animationDelay = `${Math.min(i, 14) * 30}ms`;
            item.textContent = fruitSymbols[fruit];
            board.appendChild(item);
        }
        placeInGrid(board, maxSize);
    });
    fitBoards();
}

// Gives each fruit of the board its own cell of a grid chosen for the board's current size.
function placeInGrid(board, maxSize) {
    const items = [...board.querySelectorAll('.fruit-item')];
    const { width, height } = boardInnerSize(board);
    const { cols, rows } = chooseBoardGrid(items.length, width, height, maxSize);
    board.dataset.cols = String(cols);
    board.dataset.rows = String(rows);
    const cells = shuffleInPlace([...Array(cols * rows).keys()]);
    items.forEach((item, i) => {
        item.dataset.col = String(cells[i] % cols);
        item.dataset.row = String(Math.floor(cells[i] / cols));
        item.dataset.jx = Math.random().toFixed(3);
        item.dataset.jy = Math.random().toFixed(3);
    });
}

// After a rotation the old grid can leave the fruit much smaller than the new
// shape allows; then the same fruit are dealt into fresh grids (counts unchanged).
function regridBoardsIfCramped() {
    const boards = [...fruitsContainer.querySelectorAll('.fruit-board')].filter(b => b.dataset.cols);
    const maxSize = Number(fruitsContainer.dataset.maxFruit) || 64;
    const cramped = boards.some(board => {
        const { width, height } = boardInnerSize(board);
        const cell = Math.min(width / Number(board.dataset.cols), height / Number(board.dataset.rows));
        const current = Math.min(maxSize, cell * CELL_FILL);
        const count = board.querySelectorAll('.fruit-item').length;
        return current < chooseBoardGrid(count, width, height, maxSize).size * 0.75;
    });
    if (cramped) boards.forEach(board => placeInGrid(board, maxSize));
}

// Positions every fruit for the boards' current size. Also used on resize: the
// cells and random offsets stay, only pixel positions and the shared size change.
function fitBoards() {
    const boards = [...fruitsContainer.querySelectorAll('.fruit-board')].filter(b => b.dataset.cols);
    if (!boards.length) return;
    const maxSize = Number(fruitsContainer.dataset.maxFruit) || 64;
    const metrics = boards.map(board => {
        const box = boardInnerSize(board);
        return {
            board,
            box,
            cellW: box.width / Number(board.dataset.cols),
            cellH: box.height / Number(board.dataset.rows),
        };
    });
    const size = Math.max(12, Math.floor(Math.min(maxSize, ...metrics.map(m => Math.min(m.cellW, m.cellH) * CELL_FILL))));
    metrics.forEach(({ board, box, cellW, cellH }) => {
        board.style.setProperty('--fruit-size', `${size}px`);
        board.querySelectorAll('.fruit-item').forEach(item => {
            const x = box.left + Number(item.dataset.col) * cellW + Number(item.dataset.jx) * Math.max(0, cellW - size);
            const y = box.top + Number(item.dataset.row) * cellH + Number(item.dataset.jy) * Math.max(0, cellH - size);
            item.style.left = `${Math.round(x)}px`;
            item.style.top = `${Math.round(y)}px`;
        });
    });
}

function boardInnerSize(board) {
    const style = getComputedStyle(board);
    const left = parseFloat(style.paddingLeft) || 0;
    const right = parseFloat(style.paddingRight) || 0;
    const top = parseFloat(style.paddingTop) || 0;
    const bottom = parseFloat(style.paddingBottom) || 0;
    return {
        left,
        top,
        width: Math.max(0, board.clientWidth - left - right),
        height: Math.max(0, board.clientHeight - top - bottom),
    };
}

// Picks cols x rows (at least `count` cells) that give the biggest fruit. Among
// grids that are nearly as good, the one with the most spare cells wins: empty
// cells make a group look scattered instead of lined up.
function chooseBoardGrid(count, width, height, maxSize) {
    const n = Math.max(1, count);
    const maxCells = Math.max(n + 3, Math.ceil(n * 1.6));
    const candidates = [];
    for (let cols = 1; cols <= maxCells; cols++) {
        for (let rows = Math.ceil(n / cols); cols * rows <= maxCells; rows++) {
            const cell = Math.min(width / cols, height / rows);
            candidates.push({ cols, rows, size: Math.min(maxSize, cell * CELL_FILL) });
        }
    }
    const bestSize = Math.max(...candidates.map(c => c.size));
    const good = candidates.filter(c => c.size >= bestSize * 0.9);
    good.sort((a, b) => (b.cols * b.rows) - (a.cols * a.rows) || b.size - a.size);
    return good[0];
}

// Count game: one board with the fruit to count
function arrangeFruits() {
    resetBoard('layout-count');
    const board = makeBoard();
    fruitsContainer.appendChild(board);
    fillBoards([{ board, count: correctAnswer, fruit: currentFruit }], 76);
}

// Arrange math problem display for Add/Subtract/Multiply/Divide games.
// For small ranges we add a visual aid (grid for ×, crossed-out fruit for −)
// so the concept is concrete, not just symbolic.
function arrangeMathDisplay() {
    resetBoard('layout-math');
    const card = document.createElement('div');
    card.className = 'math-card';
    const expression = document.createElement('div');
    expression.className = 'math-expression';
    const op = addSubOperator === '-' ? '−' : addSubOperator;
    expression.textContent = `${addSubNum1} ${op} ${addSubNum2} = ?`;
    card.appendChild(expression);

    let aid = null;
    if (selectedGame === 'multiply' && selectedDifficulty !== 'hard' && addSubNum1 * addSubNum2 <= 60) {
        aid = buildMultiplyGrid(addSubNum1, addSubNum2);
    } else if (selectedGame === 'addsub' && addSubOperator === '-' && selectedDifficulty === 'easy' && addSubNum1 <= 12) {
        aid = buildSubtractVisual(addSubNum1, addSubNum2);
    }
    if (aid) {
        card.classList.add('has-aid');
        card.appendChild(aid);
    }
    fruitsContainer.appendChild(card);
    fitMathAid();
}

function buildMultiplyGrid(rows, cols) {
    // Pick one fruit for the whole grid
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    const grid = makeMathAid(cols, rows);
    for (let i = 0; i < rows * cols; i++) {
        grid.appendChild(makeAidCell(fruitSymbols[fruit]));
    }
    return grid;
}

function buildSubtractVisual(total, removed) {
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    const cols = total <= 6 ? total : Math.ceil(total / 2);
    const grid = makeMathAid(cols, Math.ceil(total / cols));
    for (let i = 0; i < total; i++) {
        const cell = makeAidCell(fruitSymbols[fruit]);
        if (i < removed) cell.classList.add('removed');
        grid.appendChild(cell);
    }
    return grid;
}

function makeMathAid(cols, rows) {
    const aid = document.createElement('div');
    aid.className = 'math-aid';
    aid.dataset.cols = String(cols);
    aid.dataset.rows = String(rows);
    aid.style.setProperty('--aid-cols', String(cols));
    aid.setAttribute('aria-hidden', 'true');
    return aid;
}

function makeAidCell(symbol) {
    const cell = document.createElement('span');
    cell.textContent = symbol;
    return cell;
}

// Sizes the visual aid so the whole array fits under the problem. Without room
// for readable fruit (tiny landscape screens) only the problem is shown.
function fitMathAid() {
    const aid = fruitsContainer.querySelector('.math-aid');
    if (!aid) return;
    const card = aid.parentElement;
    card.classList.add('has-aid');
    aid.classList.remove('hidden');
    const cols = Number(aid.dataset.cols) || 1;
    const rows = Number(aid.dataset.rows) || 1;
    const cell = Math.floor(Math.min(aid.clientWidth / cols, aid.clientHeight / rows));
    if (cell < 12) {
        aid.classList.add('hidden');
        card.classList.remove('has-aid');
        return;
    }
    aid.style.setProperty('--aid-cell', `${Math.min(44, cell)}px`);
}

// Add game: two groups of fruit with a plus sign between
function arrangeAdditionFruits() {
    resetBoard('layout-pair');
    const left = makeBoard();
    const right = makeBoard();
    const plus = document.createElement('div');
    plus.className = 'pair-sign';
    plus.textContent = '+';
    plus.setAttribute('aria-hidden', 'true');
    fruitsContainer.append(left, plus, right);
    fillBoards([
        { board: left, count: addendA, fruit: addLeftFruit },
        { board: right, count: addendB, fruit: addRightFruit },
    ], 64);
}

// Compare game: two groups with the operator buttons between them
function arrangeCompareFruits() {
    resetBoard('layout-compare');
    const left = makeBoard();
    const right = makeBoard();
    const ops = document.createElement('div');
    ops.className = 'compare-operators';
    [['>', 'gt'], ['<', 'lt'], ['=', 'eq']].forEach(([sym, name]) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'compare-operator';
        b.textContent = sym;
        b.dataset.answer = sym;
        b.setAttribute('aria-label', t(`aria.compare.${name}`));
        ops.appendChild(b);
    });
    fruitsContainer.append(left, ops, right);
    fillBoards([
        { board: left, count: compareLeftCount, fruit: compareLeftFruit },
        { board: right, count: compareRightCount, fruit: compareRightFruit },
    ], 60);
}

// Answer checking

// Buttons that stand for the answers of the current question.
function answerButtons() {
    if (selectedGame === 'compare') return [...fruitsContainer.querySelectorAll('.compare-operator')];
    return [...optionsContainer.querySelectorAll('.option-btn')];
}

function checkAnswer(selectedAnswer, sourceBtn) {
    if (showFeedback || runEnded) return;
    // Match mode handles correctness per-link, not a single answer
    if (selectedGame === 'match') return;
    if (performance.now() < inputLockedUntil) return;
    answersGiven++;

    const typing = inputMode === 'keyboard' && selectedGame !== 'compare';
    const isCorrect = String(selectedAnswer) === String(correctAnswer);
    const buttons = typing ? [] : answerButtons();
    const chosen = sourceBtn || buttons.find(b => b.dataset.answer === String(selectedAnswer)) || null;
    const rightBtn = buttons.find(b => b.dataset.answer === String(correctAnswer)) || null;

    if (isCorrect) {
        playCorrectSound();
        showFeedback = true;
        score += 1;
        updateScore();
        if (chosen) chosen.classList.add('is-correct');
        if (typing) answerInput.classList.add('is-correct');
        scheduleNextQuestion(CORRECT_ADVANCE_MS);
        return;
    }

    playIncorrectSound();
    if (playMode === 'questions' || selectedGame === 'compare') {
        // No second try: show what was right, then move on.
        showFeedback = true;
        if (chosen) chosen.classList.add('is-wrong');
        if (rightBtn) rightBtn.classList.add('is-correct');
        if (typing) answerInput.classList.add('is-wrong');
        showAnswerFeedback(selectedGame === 'compare'
            ? formatAnswerForSpeech(correctAnswer)
            : t('feedback.answerIs', { answer: correctAnswer }));
        if (playMode === 'questions') {
            const key = selectedGame === 'compare' ? 'tts.incorrect.compare' : 'tts.incorrect';
            speakText(t(key, { answer: formatAnswerForSpeech(correctAnswer) }));
        }
        scheduleNextQuestion(playMode === 'questions' ? WRONG_ADVANCE_MS : COMPARE_TIME_WRONG_MS);
        return;
    }

    // Time mode: the child may try again; the wrong button is switched off.
    if (chosen) {
        chosen.classList.add('is-wrong');
        chosen.disabled = true;
    }
    showAnswerFeedback(t('feedback.tryAgain'), 1200);
    speakText(t('tts.tryAgain'));
    if (typing) {
        setTypedAnswer('');
        restartAnimation(answerInput, 'is-wrong');
    }
}

function scheduleNextQuestion(delay) {
    if (advanceTimeout) clearTimeout(advanceTimeout);
    advanceTimeout = setTimeout(() => {
        advanceTimeout = null;
        generateQuestion();
    }, delay);
}

// Small bubble above the answers ("Try again!", "The answer is 7") — never covers the buttons.
function showAnswerFeedback(text, hideAfterMs) {
    if (feedbackTimeout) { clearTimeout(feedbackTimeout); feedbackTimeout = null; }
    answerFeedback.textContent = text;
    answerFeedback.classList.add('show');
    if (hideAfterMs) feedbackTimeout = setTimeout(hideAnswerFeedback, hideAfterMs);
}

function hideAnswerFeedback() {
    if (feedbackTimeout) { clearTimeout(feedbackTimeout); feedbackTimeout = null; }
    answerFeedback.classList.remove('show');
}

// Re-adds a class so its CSS animation plays again.
function restartAnimation(el, className) {
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
}

// Compare game operator clicks
fruitsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.compare-operator');
    if (!btn || selectedGame !== 'compare') return;
    checkAnswer(btn.dataset.answer, btn);
});

// Match game layout and interactions
function arrangeMatchLayout() {
    resetBoard('layout-match');
    const groups = matchGroups.map((g, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'match-item match-group';
        btn.id = g.id;
        btn.dataset.count = String(g.count);
        btn.style.gridArea = `g${idx + 1}`;
        btn.setAttribute('aria-label', t('aria.group', { n: idx + 1 }));
        btn.setAttribute('aria-pressed', 'false');
        const board = makeBoard();
        btn.appendChild(board);
        btn.addEventListener('click', () => handleGroupClick(btn));
        fruitsContainer.appendChild(btn);
        return { board, count: g.count, fruit: g.fruit };
    });

    const numbersRow = document.createElement('div');
    numbersRow.className = 'numbers-row';
    matchNumbers.forEach((num, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'match-item match-number';
        btn.id = `num_${num}_${idx}`;
        btn.dataset.value = String(num);
        btn.textContent = String(num);
        btn.setAttribute('aria-pressed', 'false');
        btn.addEventListener('click', () => handleNumberClick(btn));
        numbersRow.appendChild(btn);
    });
    fruitsContainer.appendChild(numbersRow);

    ensureSvgLayer();
    fillBoards(groups, 44);
}

function matchInputBlocked() {
    return showFeedback || runEnded || performance.now() < inputLockedUntil;
}

function toggleMatchSelection(el, selector) {
    const prev = fruitsContainer.querySelector(`${selector}.selected`);
    if (prev && prev !== el) {
        prev.classList.remove('selected');
        prev.setAttribute('aria-pressed', 'false');
    }
    el.classList.toggle('selected');
    const selected = el.classList.contains('selected');
    el.setAttribute('aria-pressed', String(selected));
    return selected ? el.id : null;
}

function handleNumberClick(el) {
    if (matchInputBlocked() || el.classList.contains('matched')) return;
    selectedNumberId = toggleMatchSelection(el, '.match-number');
    tryPendingMatch();
}

function handleGroupClick(el) {
    if (matchInputBlocked() || el.classList.contains('matched')) return;
    selectedGroupId = toggleMatchSelection(el, '.match-group');
    tryPendingMatch();
}

function tryPendingMatch() {
    // A number and a group are both selected: try to connect them
    if (selectedNumberId && selectedGroupId) {
        tryAttemptMatch(document.getElementById(selectedNumberId), document.getElementById(selectedGroupId));
    }
}

function tryAttemptMatch(numEl, grpEl) {
    if (!numEl || !grpEl) return;
    answersGiven++;
    [numEl, grpEl].forEach(el => {
        el.classList.remove('selected');
        el.setAttribute('aria-pressed', 'false');
    });
    selectedNumberId = null;
    selectedGroupId = null;
    const success = Number(numEl.dataset.value) === Number(grpEl.dataset.count);
    const line = drawMatchLine(numEl, grpEl, success);

    if (!success) {
        matchRoundHadMistake = true;
        playIncorrectSound();
        restartAnimation(numEl, 'is-wrong');
        restartAnimation(grpEl, 'is-wrong');
        setTimeout(() => {
            line.remove();
            numEl.classList.remove('is-wrong');
            grpEl.classList.remove('is-wrong');
        }, 600);
        return;
    }

    playBeep(660, 90, 'triangle');
    [numEl, grpEl].forEach(el => {
        el.classList.add('matched');
        el.disabled = true;
    });
    grpEl.dataset.badge = numEl.dataset.value;
    matchLinks.push({ numId: numEl.id, groupId: grpEl.id });
    if (matchLinks.length < matchGroups.length) return;

    // Round complete. Questions mode counts only rounds without a wrong link
    // (like a first-try answer elsewhere); time mode counts every finished round.
    showFeedback = true;
    playCorrectSound();
    const perfect = !matchRoundHadMistake;
    if (perfect || playMode === 'time') {
        score += 1;
        updateScore();
    }
    showAnswerFeedback(perfect ? t('feedback.roundDone') : t('feedback.roundDoneMistakes'));
    scheduleNextQuestion(MATCH_ROUND_DONE_MS);
}

function ensureSvgLayer() {
    // innerHTML = '' detaches the old layer, so a stale reference is not enough
    if (!svgLayer || !svgLayer.isConnected) {
        svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgLayer.classList.add('match-svg');
        svgLayer.setAttribute('aria-hidden', 'true');
        fruitsContainer.appendChild(svgLayer);
    }
    return svgLayer;
}

// Curve from the number's edge that faces the group to the group's facing edge.
function matchLinePath(numEl, grpEl) {
    const base = fruitsContainer.getBoundingClientRect();
    const n = numEl.getBoundingClientRect();
    const g = grpEl.getBoundingClientRect();
    const groupAbove = g.top + g.height / 2 < n.top + n.height / 2;
    const x1 = n.left + n.width / 2 - base.left;
    const y1 = (groupAbove ? n.top : n.bottom) - base.top;
    const x2 = g.left + g.width / 2 - base.left;
    const y2 = (groupAbove ? g.bottom : g.top) - base.top;
    const midY = (y1 + y2) / 2;
    return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
}

function drawMatchLine(numEl, grpEl, success) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', matchLinePath(numEl, grpEl));
    path.setAttribute('pathLength', '1'); // dash lengths in CSS are fractions of the line
    path.classList.add('match-line');
    path.classList.add(success ? 'success' : 'fail');
    ensureSvgLayer().appendChild(path);
    return path;
}

// After a resize the items moved: redraw the finished links from matchLinks.
function redrawMatchLines() {
    if (selectedGame !== 'match' || !svgLayer || !svgLayer.isConnected) return;
    svgLayer.querySelectorAll('.match-line.success').forEach(p => p.remove());
    matchLinks.forEach(({ numId, groupId }) => {
        const numEl = document.getElementById(numId);
        const grpEl = document.getElementById(groupId);
        if (numEl && grpEl) drawMatchLine(numEl, grpEl, true).classList.add('static');
    });
}

// UI update functions
function updateScore() {
    scoreElement.textContent = score;
}

function updateTimer() {
    timerElement.textContent = timeLeft;
    // Change timer color when low
    timerBox.classList.toggle('warning', timeLeft <= 5);
}

function getRandomIntInclusive(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

// Fisher–Yates shuffle
function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Pick N distinct fruits from the fruits list
function pickDistinctFruits(n) {
    return shuffleInPlace([...fruits]).slice(0, Math.min(n, fruits.length));
}

// Build four options clustered around the correct answer.
// Spread is proportional to the CORRECT ANSWER (not to the whole bound range)
// so for 25+38=63 we get options like 55-75, not 40/120/500.
// Mixes one close distractor, one medium, one further — so kids still reason
// instead of just spotting "the big number".
function buildSpreadOptions(correct, minBound, maxBound) {
    const options = new Set([correct]);
    const maxSpread = Math.max(3, Math.min(Math.floor(correct * 0.35), 30));
    // Three bands: close / medium / far, roughly thirds of maxSpread.
    const bands = [
        [1, Math.max(1, Math.floor(maxSpread / 3))],
        [Math.max(1, Math.floor(maxSpread / 3) + 1), Math.max(2, Math.floor(2 * maxSpread / 3))],
        [Math.max(2, Math.floor(2 * maxSpread / 3) + 1), maxSpread],
    ];
    for (const [lo, hi] of bands) {
        let tries = 0;
        while (tries < 20 && options.size < 4) {
            const mag = getRandomIntInclusive(lo, Math.max(lo, hi));
            const sign = Math.random() < 0.5 ? -1 : 1;
            const candidate = correct + sign * mag;
            if (candidate >= minBound && candidate <= maxBound && candidate !== correct && !options.has(candidate)) {
                options.add(candidate);
                break;
            }
            tries++;
        }
    }
    // Fallback: fill with adjacent numbers if we still don't have 4
    if (options.size < 4) {
        for (let d = 1; d <= 20 && options.size < 4; d++) {
            for (const offset of [-d, d]) {
                const v = correct + offset;
                if (v >= minBound && v <= maxBound && !options.has(v)) options.add(v);
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

// Keep the board fitted when the window changes size (rotation, resizing): the
// question, its counts and finished matches stay; only how the fruit is drawn changes.
// (A timer, not requestAnimationFrame: rAF never fires while the page is hidden,
// which would leave a rotation in the background unhandled.)
let resizeTimeout = null;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        if (gameScreen.classList.contains('hidden')) return;
        regridBoardsIfCramped();
        fitBoards();
        fitMathAid();
        redrawMatchLines();
    }, 80);
});

// Initialize the game
function init() {
    // Arrived from an outdated cached page (see the top of this file): tidy the address
    if (/[?&]fresh=/.test(location.search)) {
        try { history.replaceState(null, '', location.pathname); } catch (_) {}
    }

    // Apply language first so all subsequent text uses the right locale
    currentLang = loadLang();
    applyTranslations();

    updateScore();
    updateTimer();
    updateSettingsUI();
    updateProgressPanel();

    // Show age selection screen first
    showOnly(ageSelectionScreen);
}

// Start the app
init();
