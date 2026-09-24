// Bump APP_VERSION together with the ?v= values in index.html whenever this file changes.
const APP_VERSION = '2026-09-24.4';

// A page the browser cached from another version may still load this file (the
// server keeps no old copies). The page asks for script.js?v=<its version>; if that
// is not this file's version, load the current page once under a URL the cache has
// never seen (?fresh=...), and if that already happened, offer a link instead.
const requestedVersion = ((document.currentScript && document.currentScript.src) || '').match(/[?&]v=([^&#]+)/);
if (!requestedVersion || requestedVersion[1] !== APP_VERSION) {
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
        'playMode.pickNumbers': 'or pick the numbers you want to practice',
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
        'gameTitles.multiply.numbers': 'Times tables: {list}',
        'gameTitles.divide.long': '➗ Divide',
        'gameTitles.divide.short': 'Divide!',
        'gameTitles.divide.numbers': 'Division: {list}',
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
        'result.endlessTitle': 'Well done!',
        'result.dayBest': '🏆 Best result of the day!',
        'result.bestToday': 'Best today: {pct} %',
        'result.notSaved': '⚠️ This result could not be saved.',
        'endless.notSaving': 'The result can\'t be saved right now',
        // Endless mode
        'endless.mode': 'Endless',
        'endless.mode.desc': 'as long as you like',
        'endless.finish': '✓ Finish',
        'endless.title': '♾️ Endless mode',
        'endless.last': 'Last time',
        'endless.none': 'No result yet – give it a try!',
        'endless.chart': 'Best result of each day',
        'endless.questions.one': '{n} question',
        'endless.questions.other': '{n} questions',
        'endless.correct': '{n} correct',
        'endless.numbers.multiply': 'times tables {list}',
        'endless.numbers.divide': 'dividing by {list}',
        'endless.level': 'level: {level}',
        'aria.endlessStats': 'Questions and success rate',
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
        'playMode.pickNumbers': 'nebo vyber čísla, která chceš procvičovat',
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
        'gameTitles.multiply.numbers': 'Násobilka: {list}',
        'gameTitles.divide.long': '➗ Dělení',
        'gameTitles.divide.short': 'Dělení!',
        'gameTitles.divide.numbers': 'Dělení: {list}',
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
        'result.endlessTitle': 'Dobrá práce!',
        'result.dayBest': '🏆 Nejlepší výsledek dne!',
        'result.bestToday': 'Dnes nejlépe: {pct} %',
        'result.notSaved': '⚠️ Výsledek se nepodařilo uložit.',
        'endless.notSaving': 'Výsledek se teď nedaří uložit',
        'endless.mode': 'Nekonečně',
        'endless.mode.desc': 'dokud chceš',
        'endless.finish': '✓ Konec',
        'endless.title': '♾️ Nekonečný režim',
        'endless.last': 'Naposledy',
        'endless.none': 'Zatím žádný výsledek – zkus to!',
        'endless.chart': 'Nejlepší výsledek dne',
        'endless.questions.one': '{n} otázka',
        'endless.questions.few': '{n} otázky',
        'endless.questions.many': '{n} otázek',
        'endless.correct': '{n} správně',
        'endless.numbers.multiply': 'násobilka {list}',
        'endless.numbers.divide': 'dělení {list}',
        'endless.level': 'obtížnost: {level}',
        'aria.endlessStats': 'Otázky a úspěšnost',
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
    const stored = lsGet(LANG_STORAGE_KEY);
    if (stored === 'en' || stored === 'cs') return stored;
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
    if (!playModeScreen.classList.contains('hidden')) renderEndlessPanel();
}

function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'cs') return;
    currentLang = lang;
    saveChoice(LANG_STORAGE_KEY, lang);
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
let playMode = null; // 'time' | 'questions' | 'endless'
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
// Multiplication and division can practise chosen numbers 2-9 instead of a level:
// that number × 1..10, or a multiple of it ÷ that number. Stored per game.
const PRACTICE_NUMBER_KEYS = { multiply: 'km_multiply_numbers', divide: 'km_divide_numbers' };
const PRACTICE_NUMBER_CHOICES = [2, 3, 4, 5, 6, 7, 8, 9];
let practiceNumbers = []; // numbers chosen for the current run; [] = use the level
let lastMathProblem = '';
// Endless mode (bigger kids): play until "Finish"; results kept per game
const ENDLESS_GAMES = ['addsub', 'multiply', 'divide'];
const ENDLESS_HISTORY_DAYS = 60; // days of runs kept
const ENDLESS_CHART_DAYS = 14;   // most recent days with a result in the chart
const ENDLESS_FULL_RUN = 10;     // three stars need a run at least this long
const ENDLESS_RUN_PREFIX = 'km_endless_run_'; // + game + '_' + run id: one run's result
let endlessRunId = null;         // id of this page's endless run
let endlessRunDate = null;       // the day it belongs to (set by its first answer)
let endlessRunAt = 0;            // when its last answer was counted
let lastRunAt = 0;               // newest run time seen (runs are ordered by it, see nextRunAt)
const unsavedEndlessRuns = new Map(); // run id -> latest result that could not be written yet

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
const numberPicker = document.getElementById('numberPicker');
const numberChecks = [...numberPicker.querySelectorAll('input[type="checkbox"]')];
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
// Endless mode elements
const modeButtonsEl = document.getElementById('modeButtons');
const endlessModeBtn = document.getElementById('endlessModeBtn');
const endlessPanel = document.getElementById('endlessPanel');
const endlessLast = document.getElementById('endlessLast');
const endlessHistory = document.getElementById('endlessHistory');
const endlessChart = document.getElementById('endlessChart');
const endlessTip = document.getElementById('endlessTip');
const endlessBox = document.getElementById('endlessBox');
const endlessStatsText = document.getElementById('endlessStatsText');
const finishBtn = document.getElementById('finishBtn');
const resultDetail = document.getElementById('resultDetail');

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
playLevelButtons.forEach(btn => btn.addEventListener('click', () => chooseLevel(btn.dataset.diff, [selectedGame])));
numberChecks.forEach(box => box.addEventListener('change', () => {
    savePracticeNumbers(selectedGame, numberChecks.filter(b => b.checked).map(b => Number(b.value)));
    updateSettingsUI();
}));
resultBackBtn.addEventListener('click', goHome);
resultPlayAgainBtn.addEventListener('click', playAgain);
endlessModeBtn.addEventListener('click', () => selectPlayMode('endless'));
finishBtn.addEventListener('click', finishEndlessRun);
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
    for (const name of Object.keys(SETTINGS_KEYS)) saveChoice(SETTINGS_KEYS[name], next[name]);
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
    setActive([settingsDiffEasy, settingsDiffMedium, settingsDiffHard], difficulty, b => b.dataset.diff);
    // Before a multiplication or division game, chosen numbers take the place of the level
    const numbers = loadPracticeNumbers(selectedGame);
    setActive(playLevelButtons, numbers.length ? null : difficulty, b => b.dataset.diff);
    numberPicker.classList.toggle('hidden', !practiceNumbersKey(selectedGame));
    numberChecks.forEach(box => { box.checked = numbers.includes(Number(box.value)); });
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
    // Chosen numbers are timed like Medium
    const level = loadPracticeNumbers(selectedGame).length ? 'medium' : loadSettings().difficulty;
    timeModeDesc.textContent = t('playMode.time.desc', { n: timeModeSeconds(level) });
}

function practiceNumbersKey(game) {
    return Object.prototype.hasOwnProperty.call(PRACTICE_NUMBER_KEYS, game) ? PRACTICE_NUMBER_KEYS[game] : null;
}

// Numbers chosen for a game, e.g. [3, 7]; only 2-9 count. Until anything was
// chosen, all of 2-9 are; an empty choice ('') means "play by level".
function loadPracticeNumbers(game) {
    const key = practiceNumbersKey(game);
    if (!key) return [];
    const stored = lsGet(key);
    if (stored === null) return [...PRACTICE_NUMBER_CHOICES];
    const numbers = stored.split(',').map(Number);
    return PRACTICE_NUMBER_CHOICES.filter(n => numbers.includes(n));
}

function savePracticeNumbers(game, numbers) {
    const key = practiceNumbersKey(game);
    if (key) saveChoice(key, numbers.join(','));
}

// A level and chosen numbers are alternatives: choosing a level drops the numbers
// of the given games (Settings: every game; before a game: that game).
function chooseLevel(level, games) {
    games.forEach(game => savePracticeNumbers(game, []));
    persistSettings({ difficulty: level });
}

// [2, 3, 4, 5, 9] -> "2–5, 9": three or more in a row read as a range
function formatNumberList(numbers) {
    const parts = [];
    for (let i = 0; i < numbers.length; i++) {
        let j = i;
        while (j + 1 < numbers.length && numbers[j + 1] === numbers[j] + 1) j++;
        if (j - i >= 2) {
            parts.push(`${numbers[i]}–${numbers[j]}`);
            i = j;
        } else {
            parts.push(String(numbers[i]));
        }
    }
    return parts.join(', ');
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
// 'YYYY-MM-DD' moved by n days
function shiftDay(key, n) {
    const [y, m, d] = key.split('-').map(Number);
    return todayKey(new Date(y, m - 1, d + n));
}
// How many days in a row, from `from` going by `step` (-1 back, +1 on), are in `days`
function consecutiveDays(days, from, step) {
    let n = 0;
    for (let d = from; days.has(d); d = shiftDay(d, step)) n++;
    return n;
}
function daysBetween(aKey, bKey) {
    if (!aKey || !bKey) return null;
    const a = new Date(aKey + 'T00:00:00');
    const b = new Date(bKey + 'T00:00:00');
    return Math.round((b - a) / (1000 * 60 * 60 * 24));
}
// Storage can be blocked or full (privacy settings, quota). A choice (language,
// settings, chosen tables) that could not be saved is kept in memory for this
// visit so it still applies. Progress is never kept that way: totals built on an
// unreadable baseline could later overwrite the real saved ones.
const unsavedChoices = new Map();
function lsGet(k) {
    if (unsavedChoices.has(k)) return unsavedChoices.get(k);
    try { return localStorage.getItem(k); } catch (_) { return null; }
}
function lsSet(k, v) {
    try { localStorage.setItem(k, v); } catch (_) {}
}
function saveChoice(k, v) {
    try {
        localStorage.setItem(k, v);
        unsavedChoices.delete(k);
    } catch (_) {
        unsavedChoices.set(k, String(v));
    }
}
// Reads a key telling "missing" ({ok: true, value: null}) apart from "unreadable" ({ok: false}).
function lsRead(k) {
    try { return { ok: true, value: localStorage.getItem(k) }; } catch (_) { return { ok: false, value: null }; }
}
// Writes a key and says whether it really holds the value now (lsSet stays silent).
function lsWrite(k, v) {
    lsSet(k, v);
    return lsRead(k).value === v;
}
function lsRemove(k) {
    try { localStorage.removeItem(k); } catch (_) {}
}
function lsGetInt(k, def) {
    const v = parseInt(lsGet(k), 10);
    return Number.isFinite(v) ? v : def;
}
function lsSetInt(k, v) { lsSet(k, String(v)); }
function getPlayedDaysSet() {
    const raw = lsGet(PROGRESS_KEYS.playedDays) || '';
    const s = new Set();
    if (raw) raw.split(',').forEach(d => { if (d) s.add(d); });
    return s;
}
function savePlayedDaysSet(set) {
    // Kept for ~10 years (about 40 kB): a day filled in late recounts the streak
    // from these days, so they must reach back past any real streak
    const arr = [...set].sort();
    const trimmed = arr.slice(-3660);
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
// `day`: the day the run was played, if not today (an endless run left open
// overnight ends the next morning but counts for its own day).
function recordPlaySession(starsEarned, correctCount, day) {
    const playDay = day || todayKey();
    const forToday = playDay === todayKey();
    const playedDays = getPlayedDaysSet();
    const alreadyPlayed = playedDays.has(playDay);

    let streak = lsGetInt(PROGRESS_KEYS.streakCurrent, 0);
    let best = lsGetInt(PROGRESS_KEYS.streakBest, 0);
    const last = lsGet(PROGRESS_KEYS.lastPlay);
    let streakChanged = false;
    let newStreakStarted = false;

    if (!alreadyPlayed) {
        const gap = last ? daysBetween(last, playDay) : null;
        playedDays.add(playDay);
        if (gap === null) {
            streak = 1;
            newStreakStarted = true;
        } else if (gap === 1) {
            streak += 1;
            streakChanged = true;
        } else if (gap > 1) {
            streak = 1;
            newStreakStarted = true;
        } else if (gap < 0) {
            // A day before the last one on record (a run finished late) may join
            // streaks up: count them again from the played days (never shorter)
            streak = Math.max(streak, consecutiveDays(playedDays, last, -1));
            best = Math.max(best, consecutiveDays(playedDays, playDay, -1) + consecutiveDays(playedDays, shiftDay(playDay, 1), 1));
        }
        // (gap === 0 should not happen - alreadyPlayed covers it)
        if (streak > best) best = streak;
        lsSetInt(PROGRESS_KEYS.streakCurrent, streak);
        lsSetInt(PROGRESS_KEYS.streakBest, best);
        if (gap === null || gap > 0) lsSet(PROGRESS_KEYS.lastPlay, playDay); // never moves back
        savePlayedDaysSet(playedDays);
    }

    // Comeback bonus: 2x stars if the flag was set at run start. A run without
    // stars leaves it for the next run today (0 × 2 would just waste it).
    const comeback = forToday && lsGet(PROGRESS_KEYS.comebackPending) === '1' && starsEarned > 0;
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
        firstPlayToday: forToday && !alreadyPlayed,
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

// ============================================================
// Endless mode (bigger kids): last result and the best result of each day
// ============================================================
function isEndlessGame(game) {
    return ENDLESS_GAMES.includes(game);
}

function endlessKey(game) {
    return `km_endless_${game}`;
}

function resultPercent(r) {
    return Math.round((r.correct / r.answered) * 100);
}

// The day's best: the higher share of correct answers; on a tie, more
// questions; on an exact tie, the earlier run (by id, which never changes - so
// every tab picks the same winner and cleanup never drops both).
function isBetterResult(a, b) {
    const lhs = a.correct * b.answered;
    const rhs = b.correct * a.answered;
    if (lhs !== rhs) return lhs > rhs;
    if (a.answered !== b.answered) return a.answered > b.answered;
    return a.id < b.id;
}

const RUN_ID_PATTERN = /^[a-z0-9-]{1,40}$/;

// Stored results are checked before use (storage can be edited or damaged).
function cleanEndlessResult(r, game) {
    if (!r || typeof r !== 'object') return null;
    const answered = Number(r.answered);
    const correct = Number(r.correct);
    if (!Number.isInteger(answered) || !Number.isInteger(correct) || answered < 1 || correct < 0 || correct > answered) return null;
    if (typeof r.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(r.date)) return null;
    const numbers = Array.isArray(r.numbers) ? PRACTICE_NUMBER_CHOICES.filter(n => r.numbers.includes(n)) : [];
    const level = SETTINGS_ALLOWED.difficulty.includes(r.level) ? r.level : 'medium';
    const id = typeof r.id === 'string' && RUN_ID_PATTERN.test(r.id) ? r.id : '';
    const at = Number.isFinite(r.at) && r.at >= 0 && r.at <= 8.64e15 ? r.at : 0; // (a valid time)
    return { id, game, date: r.date, at, answered, correct, numbers, level, done: r.done === true };
}

// ------------------------------------------------------------
// Each endless run has its own record (key = game + run id), written after
// every answer and at the end (then marked done) by the page playing it - and
// by nothing else. Nothing is merged or taken over, so two tabs can't
// overwrite each other or count a run twice, and closing the page, reloading
// it or the browser dropping the tab keeps the run as far as it got. A run
// belongs to the day of its first answer. "Last time" and each day's best are
// worked out from the records.
// ------------------------------------------------------------
function endlessRunKey(game, id) {
    return `${ENDLESS_RUN_PREFIX}${game}_${id}`;
}

function newRunId() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

// Order of runs ("last time"): the clock, but never earlier than any run on
// record (whichever tab saved it), so a clock set back can't make a new run
// look older than the old ones.
function nextRunAt(game) {
    readEndlessRuns(game); // raises lastRunAt
    lastRunAt = Math.max(Date.now(), lastRunAt + 1);
    return lastRunAt;
}

// The run as it stands. Its time is that of its last counted answer, so ending
// it later (Finish, Home, the next morning) doesn't make it look newer than
// runs played in between.
function currentEndlessRun(done = false) {
    if (!endlessRunDate) endlessRunDate = todayKey();
    return {
        id: endlessRunId,
        game: selectedGame,
        date: endlessRunDate,
        at: endlessRunAt || nextRunAt(selectedGame),
        answered: answersGiven,
        correct: score,
        numbers: [...practiceNumbers],
        level: selectedDifficulty,
        done,
    };
}

// A run belongs to one day: when the next answer would fall on another day
// (a paused tab picked up the next morning, or play past midnight), the run
// ends where it was instead.
function endlessRunCrossedDay() {
    return playMode === 'endless' && !runEnded && answersGiven > 0 && !!endlessRunDate && endlessRunDate !== todayKey()
        && !gameScreen.classList.contains('hidden');
}

// Writes a run's record. One that can't be written is kept in memory to try
// again (latest state), and its older copy is removed so that it can't pass
// for the result.
function writeEndlessRun(run) {
    const key = endlessRunKey(run.game, run.id);
    if (lsWrite(key, JSON.stringify(run))) {
        unsavedEndlessRuns.delete(run.id);
        return true;
    }
    lsRemove(key);
    unsavedEndlessRuns.set(run.id, run);
    return false;
}

function retryUnsavedRuns() {
    unsavedEndlessRuns.forEach(run => writeEndlessRun(run));
}

// All readable records of a game (damaged ones or ones not matching their key are ignored)
function readEndlessRuns(game) {
    const prefix = `${ENDLESS_RUN_PREFIX}${game}_`;
    let keys;
    try { keys = Object.keys(localStorage).filter(k => k.startsWith(prefix)); } catch (_) { return []; }
    const runs = [];
    keys.forEach(key => {
        const read = lsRead(key);
        if (!read.ok || read.value === null) return;
        let raw;
        try { raw = JSON.parse(read.value); } catch (_) { return; }
        const run = raw && raw.game === game ? cleanEndlessResult(raw, game) : null;
        if (run && run.id && key === prefix + run.id) {
            runs.push(run);
            lastRunAt = Math.max(lastRunAt, run.at);
        }
    });
    return runs;
}

// { last: the run played most recently, days: { 'YYYY-MM-DD': best run of that day } }
function summarizeEndless(runs) {
    let last = null;
    const days = {};
    runs.forEach(r => {
        if (!last || r.at > last.at || (r.at === last.at && r.id > last.id)) last = r; // (same pick in every tab)
        if (!days[r.date] || isBetterResult(r, days[r.date])) days[r.date] = r;
    });
    return { last, days };
}

// Keeps the latest run, and for each of the last ENDLESS_HISTORY_DAYS days
// (today included) the best finished run and every unfinished one (a paused
// tab may still add to it). Finished runs never change, so one that is not
// its day's best can never become it and goes, as does anything older.
function pruneEndlessRuns(game, runs) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - (ENDLESS_HISTORY_DAYS - 1));
    const oldest = todayKey(cutoff);
    const { last } = summarizeEndless(runs);
    const bestDone = {};
    runs.forEach(r => {
        if (r.done && (!bestDone[r.date] || isBetterResult(r, bestDone[r.date]))) bestDone[r.date] = r;
    });
    runs.forEach(r => {
        const keep = r === last || (r.date >= oldest && (!r.done || bestDone[r.date] === r));
        if (!keep) lsRemove(endlessRunKey(game, r.id));
    });
}

// After each answer in endless mode
function checkpointEndlessRun() {
    if (playMode !== 'endless' || runEnded || !endlessRunId) return;
    retryUnsavedRuns();
    endlessRunAt = nextRunAt(selectedGame);
    const saved = writeEndlessRun(currentEndlessRun());
    endlessBox.classList.toggle('not-saving', !saved);
    endlessBox.title = saved ? '' : t('endless.notSaving');
}

// Endless stars go by the share of correct answers, but a few lucky answers
// can't earn the top ones
function endlessStars(answered, correct) {
    const share = answered ? correct / answered : 0;
    if (answered >= ENDLESS_FULL_RUN && share >= 0.9) return 3;
    if (answered >= 5 && share >= 0.7) return 2;
    return correct >= 1 ? 1 : 0;
}

// A page about to be hidden (or closed) tries once more to write what it could
// not; a page coming back on another day ends its endless run where it was.
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') retryUnsavedRuns();
    else if (endlessRunCrossedDay()) endRun();
});

function formatDay(key) {
    const [y, m, d] = key.split('-').map(Number);
    return new Intl.DateTimeFormat(SPEECH_LANG[currentLang] || 'en-US', { day: 'numeric', month: 'numeric' }).format(new Date(y, m - 1, d));
}

// "násobilka 2–6" / "dělení 3, 7" / "obtížnost: Střední"
function describePractice(r) {
    if (r.numbers.length && (r.game === 'multiply' || r.game === 'divide')) {
        return t(`endless.numbers.${r.game}`, { list: formatNumberList(r.numbers) });
    }
    return t('endless.level', { level: t(`settings.${r.level}`) });
}

// "25 otázek · 21 správně · 84 % · násobilka 2–6"
function describeEndlessResult(r) {
    return [
        tn('endless.questions', r.answered),
        t('endless.correct', { n: r.correct }),
        `${resultPercent(r)} %`,
        describePractice(r),
    ].join(' · ');
}

// Play-mode screen: last endless result of the selected game and a chart of
// the best result of each day (hover, focus or tap a day for the details).
function renderEndlessPanel() {
    const shown = isEndlessGame(selectedGame);
    endlessPanel.classList.toggle('hidden', !shown);
    playModeScreen.classList.toggle('with-endless', shown); // wide screens: panel beside the modes
    if (!shown) return;
    retryUnsavedRuns();
    pruneEndlessRuns(selectedGame, readEndlessRuns(selectedGame));
    const data = summarizeEndless(readEndlessRuns(selectedGame));
    endlessLast.textContent = data.last
        ? `${t('endless.last')} (${formatDay(data.last.date)}): ${describeEndlessResult(data.last)}`
        : t('endless.none');
    const keys = Object.keys(data.days).sort().slice(-ENDLESS_CHART_DAYS);
    endlessHistory.classList.toggle('hidden', !keys.length);
    endlessChart.innerHTML = '';
    let newest = null;
    keys.forEach(key => {
        const r = data.days[key];
        const pct = resultPercent(r);
        const tip = `${formatDay(key)}: ${describeEndlessResult(r)}`;
        const bar = document.createElement('button');
        bar.type = 'button';
        bar.className = 'chart-bar';
        bar.dataset.tone = pct >= 90 ? 'good' : pct >= 70 ? 'ok' : 'low';
        bar.title = tip;
        bar.setAttribute('aria-label', tip);
        const value = document.createElement('span');
        value.className = 'bar-value';
        value.textContent = `${pct}%`;
        const track = document.createElement('span');
        track.className = 'bar-track';
        const fill = document.createElement('span');
        fill.className = 'bar-fill';
        fill.style.height = `${Math.max(pct, 3)}%`;
        track.appendChild(fill);
        const day = document.createElement('span');
        day.className = 'bar-day';
        day.textContent = formatDay(key);
        bar.append(value, track, day);
        const pick = () => selectChartBar(bar, tip);
        bar.addEventListener('mouseenter', pick);
        bar.addEventListener('focus', pick);
        bar.addEventListener('click', pick);
        endlessChart.appendChild(bar);
        newest = { bar, tip };
    });
    if (newest) {
        selectChartBar(newest.bar, newest.tip);
        endlessChart.scrollLeft = endlessChart.scrollWidth; // newest days in view
    } else {
        endlessTip.textContent = '';
    }
}

function selectChartBar(bar, tip) {
    endlessChart.querySelectorAll('.chart-bar.selected').forEach(b => b.classList.remove('selected'));
    bar.classList.add('selected');
    endlessTip.textContent = tip;
}

// Settings button listeners
settingsClickMode.addEventListener('click', () => persistSettings({ mode: 'click' }));
settingsKeyboardMode.addEventListener('click', () => persistSettings({ mode: 'keyboard' }));
settingsDiffEasy.addEventListener('click', () => chooseLevel('easy', Object.keys(PRACTICE_NUMBER_KEYS)));
settingsDiffMedium.addEventListener('click', () => chooseLevel('medium', Object.keys(PRACTICE_NUMBER_KEYS)));
settingsDiffHard.addEventListener('click', () => chooseLevel('hard', Object.keys(PRACTICE_NUMBER_KEYS)));
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
    // Time mode shows the clock, questions mode the progress, endless mode
    // the problems answered, the success rate and a Finish button
    timerBox.classList.toggle('hidden', playMode !== 'time');
    progressBox.classList.toggle('hidden', playMode !== 'questions');
    endlessBox.classList.toggle('hidden', playMode !== 'endless');
    finishBtn.classList.toggle('hidden', playMode !== 'endless');
    gameScreen.dataset.mode = playMode; // phones held sideways make room for the wider chips
    endlessRunId = playMode === 'endless' ? newRunId() : null;
    endlessRunDate = null;
    endlessRunAt = 0;
    retryUnsavedRuns();
    endlessBox.classList.remove('not-saving');
    endlessBox.title = '';
    updateRunStats();
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
    if (practiceNumbersKey(selectedGame) && practiceNumbers.length) {
        gameHeaderTitle.textContent = t(`gameTitles.${selectedGame}.numbers`, { list: formatNumberList(practiceNumbers) });
    } else if (selectedGame) {
        gameHeaderTitle.textContent = t(`gameTitles.${selectedGame}.short`);
    }
}

function showPlayModeSelection() {
    updateGameTitles();
    updateSettingsUI(); // level buttons and the time-mode length follow the saved difficulty
    const endless = isEndlessGame(selectedGame);
    endlessModeBtn.classList.toggle('hidden', !endless);
    modeButtonsEl.dataset.count = endless ? '3' : '2';
    showOnly(playModeScreen);
    renderEndlessPanel(); // after showing, so the chart can scroll to the newest day
}

function selectPlayMode(mode) {
    playMode = mode; // 'time' | 'questions' | 'endless'
    const saved = loadSettings();
    configureDifficulty(saved.difficulty);
    updateGameTitles(); // the header names chosen times tables
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
    practiceNumbers = loadPracticeNumbers(selectedGame); // [] unless multiplication/division with chosen numbers
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
        // Multiplication: easy up to 5×5, medium up to 10×10, hard up to 12×12,
        // or chosen times tables (2-9 × 1..10), which play like Medium
        if (practiceNumbers.length) {
            selectedDifficulty = 'medium';
            answerMin = 1;
            answerMax = Math.max(...practiceNumbers) * 10;
        } else if (level === 'easy') { difficultyMin = 1; difficultyMax = 5; answerMin = 1; answerMax = 25; }
        else if (level === 'medium') { difficultyMin = 1; difficultyMax = 10; answerMin = 1; answerMax = 100; }
        else if (level === 'hard') { difficultyMin = 2; difficultyMax = 12; answerMin = 1; answerMax = 144; }
    } else if (selectedGame === 'divide') {
        // Division: always clean (no remainders). Difficulty controls divisor/quotient,
        // or chosen divisors 2-9 with answers 1..10, which play like Medium
        if (practiceNumbers.length) {
            selectedDifficulty = 'medium';
            answerMin = 1;
            answerMax = 10;
        } else if (level === 'easy') { difficultyMin = 1; difficultyMax = 5; answerMin = 1; answerMax = 5; }
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
    // Leaving an endless run keeps its result (it has no other end)
    if (playMode === 'endless' && !runEnded && answersGiven > 0 && !gameScreen.classList.contains('hidden')) {
        runEnded = true;
        cancelPendingCallbacks();
        lastResult = recordRun();
    }
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
        // A chosen table times 1..10 in either order, or two factors from the level;
        // never the same problem twice in a row
        for (let tries = 0; tries < 10; tries++) {
            if (practiceNumbers.length) {
                const table = practiceNumbers[Math.floor(Math.random() * practiceNumbers.length)];
                const other = getRandomIntInclusive(1, 10);
                [addSubNum1, addSubNum2] = Math.random() < 0.5 ? [table, other] : [other, table];
            } else {
                addSubNum1 = getRandomIntInclusive(difficultyMin, difficultyMax);
                addSubNum2 = getRandomIntInclusive(difficultyMin, difficultyMax);
            }
            if (`${addSubNum1}×${addSubNum2}` !== lastMathProblem) break;
        }
        lastMathProblem = `${addSubNum1}×${addSubNum2}`;
        correctAnswer = addSubNum1 * addSubNum2;
    } else if (selectedGame === 'divide') {
        addSubOperator = '÷';
        // Clean division: pick quotient and divisor (a chosen number, or from the
        // level), compute the dividend; never the same problem twice in a row
        for (let tries = 0; tries < 10; tries++) {
            let quotient, divisor;
            if (practiceNumbers.length) {
                divisor = practiceNumbers[Math.floor(Math.random() * practiceNumbers.length)];
                quotient = getRandomIntInclusive(1, 10);
            } else {
                quotient = getRandomIntInclusive(Math.max(1, answerMin), answerMax);
                divisor = getRandomIntInclusive(Math.max(2, difficultyMin), difficultyMax);
            }
            addSubNum1 = quotient * divisor;
            addSubNum2 = divisor;
            correctAnswer = quotient;
            if (`${addSubNum1}÷${addSubNum2}` !== lastMathProblem) break;
        }
        lastMathProblem = `${addSubNum1}÷${addSubNum2}`;
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
    // Chosen times tables keep their own best score per choice, e.g. km_best_multiply_n37_questions
    const level = practiceNumbers.length ? `n${practiceNumbers.join('')}` : selectedDifficulty;
    return `km_best_${selectedGame}_${level}_${playMode}`;
}

function getBestScore() {
    return lsGetInt(bestScoreKey(), 0);
}

function saveBestScore(newScore) {
    if (newScore <= getBestScore()) return false;
    lsSetInt(bestScoreKey(), newScore);
    return true;
}

function starsForScore(value) {
    if (playMode === 'time') return value >= 16 ? 3 : value >= 10 ? 2 : value >= 1 ? 1 : 0;
    if (playMode === 'endless') return endlessStars(answersGiven, value);
    return value >= 9 ? 3 : value >= 5 ? 2 : value >= 1 ? 1 : 0;
}

function endRun() {
    if (runEnded) return;
    runEnded = true;
    cancelPendingCallbacks();
    lastResult = recordRun();
    renderResult(lastResult);
    showOnly(resultScreen);
    if (lastResult.stars > 0) playFanfare();
}

// Saves a finished run (best score or endless history, streak and totals) and
// returns what the result screen shows.
function recordRun() {
    const stars = starsForScore(score);
    if (playMode === 'endless') {
        const run = currentEndlessRun(true);
        retryUnsavedRuns();
        const saved = writeEndlessRun(run);
        // Stars, streak and totals like any run: once, since this page ends its run
        // once - and for the day the run was played
        const session = recordPlaySession(stars, score, run.date);
        pruneEndlessRuns(run.game, readEndlessRuns(run.game));
        const dayBest = summarizeEndless(readEndlessRuns(run.game)).days[run.date] || null;
        return { mode: 'endless', run, score, stars, session, saved, newDayBest: saved && !!dayBest && dayBest.id === run.id, dayBest };
    }
    // Only a run in which the child actually answered counts toward streak and totals
    const session = answersGiven > 0 ? recordPlaySession(stars, score) : null;
    const previousBest = getBestScore();
    const isNewBest = saveBestScore(score);
    return {
        mode: playMode,
        score,
        total: questionTarget,
        stars,
        isNewBest: isNewBest && score > 0,
        best: Math.max(previousBest, score),
        session,
    };
}

// Endless mode's Finish button. With nothing answered there is nothing to show.
function finishEndlessRun() {
    if (runEnded) return;
    if (answersGiven === 0) {
        runEnded = true;
        cancelPendingCallbacks();
        stopSpeech();
        showPlayModeSelection();
        return;
    }
    endRun();
}

// Endless mode: problems answered and the share of correct answers so far
function updateRunStats() {
    if (playMode !== 'endless') return;
    endlessStatsText.textContent = answersGiven
        ? `${answersGiven} · ${Math.round((score / answersGiven) * 100)} %`
        : '0';
}

function renderResult(result) {
    const endless = result.mode === 'endless';
    resultTitle.textContent = endless ? t('result.endlessTitle') : (result.mode === 'time' ? t('result.timeUp') : t('result.allDone'));
    resultEmoji.textContent = ['💪', '👍', '🎉', '🏆'][result.stars];
    if (endless) {
        resultScore.textContent = `${result.run.correct} / ${result.run.answered}`;
        resultDetail.textContent = `${resultPercent(result.run)} % · ${describePractice(result.run)}`;
        resultBest.textContent = !result.saved
            ? t('result.notSaved')
            : result.newDayBest
                ? t('result.dayBest')
                : (result.dayBest ? t('result.bestToday', { pct: resultPercent(result.dayBest) }) : '');
        resultBest.classList.toggle('new-best', result.saved && result.newDayBest);
        resultBest.classList.toggle('not-saved', !result.saved);
    } else {
        resultBest.classList.remove('not-saved');
        resultScore.textContent = result.mode === 'time' ? String(result.score) : `${result.score} / ${result.total}`;
        resultBest.textContent = result.isNewBest ? t('result.newBest') : (result.best > 0 ? t('result.best', { n: result.best }) : '');
        resultBest.classList.toggle('new-best', result.isNewBest);
    }
    resultDetail.classList.toggle('hidden', !endless);
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

// Math problem display for Add/Subtract/Multiply/Divide (bigger kids: the
// problem only, no pictures)
function arrangeMathDisplay() {
    resetBoard('layout-math');
    const card = document.createElement('div');
    card.className = 'math-card';
    const expression = document.createElement('div');
    expression.className = 'math-expression';
    const op = addSubOperator === '-' ? '−' : addSubOperator;
    expression.textContent = `${addSubNum1} ${op} ${addSubNum2} = ?`;
    card.appendChild(expression);
    fruitsContainer.appendChild(card);
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
    if (endlessRunCrossedDay()) {
        endRun();
        return;
    }
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
        updateRunStats();
        checkpointEndlessRun();
        if (chosen) chosen.classList.add('is-correct');
        if (typing) answerInput.classList.add('is-correct');
        scheduleNextQuestion(CORRECT_ADVANCE_MS);
        return;
    }

    playIncorrectSound();
    updateRunStats();
    checkpointEndlessRun();
    if (playMode !== 'time' || selectedGame === 'compare') {
        // No second try: show what was right, then move on.
        showFeedback = true;
        if (chosen) chosen.classList.add('is-wrong');
        if (rightBtn) rightBtn.classList.add('is-correct');
        if (typing) answerInput.classList.add('is-wrong');
        showAnswerFeedback(selectedGame === 'compare'
            ? formatAnswerForSpeech(correctAnswer)
            : t('feedback.answerIs', { answer: correctAnswer }));
        if (playMode !== 'time') {
            const key = selectedGame === 'compare' ? 'tts.incorrect.compare' : 'tts.incorrect';
            speakText(t(key, { answer: formatAnswerForSpeech(correctAnswer) }));
        }
        scheduleNextQuestion(playMode !== 'time' ? WRONG_ADVANCE_MS : COMPARE_TIME_WRONG_MS);
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
