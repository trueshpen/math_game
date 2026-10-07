// Bump APP_VERSION together with the ?v= values in index.html whenever this file changes.
const APP_VERSION = '2026-10-07.3';

// A page the browser cached from another version may still load this file (the
// server keeps no old copies). The page asks for script.js?v=<its version>; if that
// is not this file's version, load the current page once under a URL the cache has
// never seen (?fresh=...), and if that already happened, offer a link instead.
const requestedVersion = ((document.currentScript && document.currentScript.src) || '').match(/[?&]v=([^&#]+)/);
if (!requestedVersion || requestedVersion[1] !== APP_VERSION) {
    // Nothing of the outdated page shows meanwhile - whatever its HTML and styles
    document.documentElement.classList.add('booting', 'stale');
    const hide = document.createElement('style');
    hide.textContent = '.screen, .lang-switcher { visibility: hidden !important; }';
    document.head.appendChild(hide);
    const freshUrl = location.pathname + '?fresh=' + Date.now() + location.hash;
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
        'app.title': 'School Practice',
        'lang.label': 'Language',
        // Age selection
        'age.littleKids': 'Math',
        'age.littleKids.ages': 'Ages 3–6',
        'age.littleKids.desc1': 'Fun counting & matching!',
        'age.littleKids.desc2': '🌈 Colorful & Playful 🌈',
        'age.biggerKids': 'Math',
        'age.biggerKids.ages': 'Ages 7–10',
        'age.biggerKids.desc1': 'Advanced Math Challenges!',
        'age.biggerKids.desc2': '🚀 Level Up Your Skills 🚀',
        'age.czech': 'Czech',
        'age.czech.ages': 'Ages 7–10',
        'age.czech.desc1': 'i/y, u/ú/ů, bě/pě/vě/mě & paired consonants',
        'age.czech.desc2': '✏️ 2nd grade review ✏️',
        'age.play': 'Play ▶',
        // Home
        'home.title': '🍎 Math 🍊',
        'home.welcome': 'Welcome! Pick a game to play:',
        'home.changeAge': '☰ Menu',
        // Czech (the words themselves are always Czech)
        'cz.home.title': '📚 Czech ✏️',
        'cz.home.welcome': 'Pick what to practice:',
        'game.cz_iy.name': 'i/í – y/ý',
        'game.cz_iy.desc': 'after soft and hard consonants',
        'game.cz_uu.name': 'u – ú – ů',
        'game.cz_uu.desc': 'short u, or long ú/ů',
        'game.cz_pairs.name': 'Paired consonants',
        'game.cz_bpvm.name': 'bě/pě/vě/mě',
        'cz.stats': '✓ {p} % right',
        'cz.stats.title': 'Right in the last {n} answers',
        'game.cz_test.name': 'Test',
        'game.cz_test.desc': 'Everything mixed · 20 questions',
        'cz.review.one': '🔁 {n} word to practice again',
        'cz.review.other': '🔁 {n} words to practice again',
        // ({x}, {c}, {a}, {check}...: Czech letters and words, marked Czech on the page - see tCzech)
        'cz.q.iy': 'Fill in {x} or {y}',
        'cz.q.uu': 'Fill in {x}, {y} or {z}',
        'cz.q.pairs': 'Fill in the paired consonant',
        'cz.q.bpvm': 'Fill in {x} or {y}',
        'cz.why.soft': '“{c}” is a soft consonant → we write {letters}',
        'cz.why.hard': '“{c}” is a hard consonant → we write {letters}',
        'cz.why.dtnSoft': '“{cv}” sounds soft, like “{sv}” → we write {letters}',
        'cz.why.dtnHard': '“{cv}” sounds hard → we write {letters}',
        'cz.why.long': 'The right letter – but here it is long: “{a}”',
        'cz.why.short': 'The right letter – but here it is short: “{a}”',
        'cz.why.uStart': 'At the start of a word we write {a}',
        'cz.why.uInside': 'Inside a word we write {a}',
        'cz.why.uEnd': 'At the end of a word we write {a}',
        'cz.why.uLongStart': 'It is long here – at the start of a word we write {a}',
        'cz.why.uLongInside': 'It is long here – inside a word we write {a}',
        'cz.why.uLongEnd': 'It is long here – at the end of a word we write {a}',
        'cz.why.pair': 'Check with “{check}” – you can hear “{a}”',
        'cz.why.bpvE': 'In the syllable “{s}” there is no j',
        'cz.why.prefixJ': 'A prefix and then j: {split} → we write “{s}”',
        'cz.why.meE': 'There is no “{mn}” in this word → we write “{s}”',
        'cz.why.mne': 'Check with “{check}” – it has an n → we write “{s}”',
        'cz.correctIs': 'Correct:',
        'cz.next': 'Continue ▶',
        'cz.aria.blank': 'missing letter',
        'cz.review.title': 'Watch out for these:',
        'cz.review.allRight': 'All correct – great job! 🎉',
        'cz.review.chose': 'your choice: “{a}”',
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
        'playMode.time': 'Timed',
        'playMode.time.desc': '{n} seconds',
        'playMode.questions': 'Questions',
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
        'gameTitles.cz_iy.long': 'i/í – y/ý',
        'gameTitles.cz_iy.short': 'i/í – y/ý',
        'gameTitles.cz_uu.long': 'u – ú – ů',
        'gameTitles.cz_uu.short': 'u – ú – ů',
        'gameTitles.cz_bpvm.long': 'bě/pě/vě/mě',
        'gameTitles.cz_bpvm.short': 'bě/pě/vě/mě',
        'gameTitles.cz_pairs.long': 'Paired consonants',
        'gameTitles.cz_pairs.short': 'Paired consonants',
        'gameTitles.cz_test.long': 'Czech test',
        'gameTitles.cz_test.short': 'Czech test',
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
        'app.title': 'Školní procvičování', // (index.html puts this up while the page boots)
        'lang.label': 'Jazyk',
        'age.littleKids': 'Matematika',
        'age.littleKids.ages': 'Věk 3–6',
        'age.littleKids.desc1': 'Zábavné počítání a spojování!',
        'age.littleKids.desc2': '🌈 Barevné a hravé 🌈',
        'age.biggerKids': 'Matematika',
        'age.biggerKids.ages': 'Věk 7–10',
        'age.biggerKids.desc1': 'Pokročilé matematické úlohy!',
        'age.biggerKids.desc2': '🚀 Zlepši své dovednosti 🚀',
        'age.czech': 'Čeština',
        'age.czech.ages': 'Věk 7–10',
        'age.czech.desc1': 'i/y, u/ú/ů, bě/pě/vě/mě a párové souhlásky',
        'age.czech.desc2': '✏️ Opakování 2. třídy ✏️',
        'age.play': 'Hrát ▶',
        'home.title': '🍎 Matematika 🍊',
        'home.welcome': 'Vítej! Vyber si hru:',
        'home.changeAge': '☰ Menu',
        'cz.home.title': '📚 Čeština ✏️',
        'cz.home.welcome': 'Vyber si, co chceš procvičit:',
        'game.cz_iy.name': 'i/í – y/ý',
        'game.cz_iy.desc': 'po měkkých a tvrdých souhláskách',
        'game.cz_uu.name': 'u – ú – ů',
        'game.cz_uu.desc': 'krátké u, nebo dlouhé ú/ů',
        'game.cz_pairs.name': 'Párové souhlásky',
        'game.cz_bpvm.name': 'bě/pě/vě/mě',
        'cz.stats': '✓ {p} % správně',
        'cz.stats.title': 'Správně v posledních {n} odpovědích',
        'game.cz_test.name': 'Test',
        'game.cz_test.desc': 'Všechno namíchané · 20 otázek',
        'cz.review.one': '🔁 {n} slovo k opakování',
        'cz.review.few': '🔁 {n} slova k opakování',
        'cz.review.many': '🔁 {n} slov k opakování',
        'cz.q.iy': 'Doplň {x} nebo {y}',
        'cz.q.uu': 'Doplň {x}, {y} nebo {z}',
        'cz.q.pairs': 'Doplň párovou souhlásku',
        'cz.q.bpvm': 'Doplň {x} nebo {y}',
        'cz.why.soft': '„{c}“ je měkká souhláska → píšeme {letters}',
        'cz.why.hard': '„{c}“ je tvrdá souhláska → píšeme {letters}',
        'cz.why.dtnSoft': '„{cv}“ zní měkce, jako „{sv}“ → píšeme {letters}',
        'cz.why.dtnHard': '„{cv}“ zní tvrdě → píšeme {letters}',
        'cz.why.long': 'Písmeno máš dobře, jen je tady dlouhé: „{a}“',
        'cz.why.short': 'Písmeno máš dobře, jen je tady krátké: „{a}“',
        'cz.why.uStart': 'Na začátku slova píšeme {a}',
        'cz.why.uInside': 'Uprostřed slova píšeme {a}',
        'cz.why.uEnd': 'Na konci slova píšeme {a}',
        'cz.why.uLongStart': 'Tady je dlouhé – na začátku slova píšeme {a}',
        'cz.why.uLongInside': 'Tady je dlouhé – uprostřed slova píšeme {a}',
        'cz.why.uLongEnd': 'Tady je dlouhé – na konci slova píšeme {a}',
        'cz.why.pair': 'Ověř si slovem „{check}“ – slyšíš „{a}“',
        'cz.why.bpvE': 'Ve slabice „{s}“ se j nepíše',
        'cz.why.prefixJ': 'Předpona a za ní j: {split} → píšeme „{s}“',
        'cz.why.meE': 'Ve slově není „{mn}“ → píšeme „{s}“',
        'cz.why.mne': 'Ověř si slovem „{check}“ – je tam n → píšeme „{s}“',
        'cz.correctIs': 'Správně:',
        'cz.next': 'Pokračovat ▶',
        'cz.aria.blank': 'vynechané písmeno',
        'cz.review.title': 'Na tohle si dej pozor:',
        'cz.review.allRight': 'Všechno správně – skvělá práce! 🎉',
        'cz.review.chose': 'tvoje volba: „{a}“',
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
        'gameTitles.cz_iy.long': 'i/í – y/ý',
        'gameTitles.cz_iy.short': 'i/í – y/ý',
        'gameTitles.cz_uu.long': 'u – ú – ů',
        'gameTitles.cz_uu.short': 'u – ú – ů',
        'gameTitles.cz_bpvm.long': 'bě/pě/vě/mě',
        'gameTitles.cz_bpvm.short': 'bě/pě/vě/mě',
        'gameTitles.cz_pairs.long': 'Párové souhlásky',
        'gameTitles.cz_pairs.short': 'Párové souhlásky',
        'gameTitles.cz_test.long': 'Test z češtiny',
        'gameTitles.cz_test.short': 'Test z češtiny',
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
    if (selectedAgeGroup === 'czech') renderCzechMenu();
    if (czExplained && !czExplain.classList.contains('hidden')) renderCzechExplain();
}

function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'cs') return;
    currentLang = lang;
    saveChoice(LANG_STORAGE_KEY, lang);
    applyTranslations();
}

// ------------------------------------------------------------
// Switching language with the EN / CZ buttons: the texts on screen "decode"
// into the new language. Their letters flicker through random letters and
// settle from left to right, in a quick wave down the screen (under 0.7 s);
// what both wordings start and end with (an emoji, an arrow) stays put.
// setLanguage() itself stays instant - the effect only repaints texts that have
// already switched, and leaves alone any text something else changes meanwhile.
// While a text decodes, its element holds the new wording for screen readers
// (visually hidden) and beside it the decoding letters, hidden from them - so
// button names and labels never read as a jumble.
// ------------------------------------------------------------
const SCRAMBLE_LETTERS = { en: 'abcdefghknopqrstuvxyz', cs: 'abcdeghknoprstuvyzáčďéěňóřšťúůýž' };
const SCRAMBLE_THIN = 'ijí'; // thin letters (i, j, l) flicker through thin ones - also in capitals - so a word keeps about its width
const SCRAMBLE_DIGITS = '0123456789';
const graphemeSegmenter = window.Intl && Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;
let languageScramble = null; // { items, raf, safety } while the effect runs

function switchLanguage(lang) {
    if ((lang !== 'en' && lang !== 'cs') || lang === currentLang) return;
    // What is on screen now - mid-effect texts too, so a quick second switch carries on from them
    const before = prefersReducedMotion() ? null : textsOnScreen();
    finishLanguageScramble();
    setLanguage(lang);
    if (before) startLanguageScramble(before);
}

// Text-only elements of the shown screen that are on screen, with the text they
// show, by their place in the page (a part re-rendered in the new language has
// new elements in the same places). Live regions are left out: a screen reader
// would read the scramble.
function textsOnScreen() {
    const decoding = new Map(); // element -> the letters it shows right now
    if (languageScramble) languageScramble.items.forEach(item => { if (!item.done) decoding.set(item.el, item.shown); });
    const texts = new Map();
    const height = window.innerHeight;
    document.querySelectorAll('.screen:not(.hidden) *').forEach(el => {
        let text = decoding.get(el);
        if (text === undefined) {
            if (el.children.length || decoding.has(el.parentElement) || el.closest('[aria-live]')) return;
            text = el.textContent;
        }
        if (!/[\p{L}\p{N}]/u.test(text)) return;
        const r = el.getBoundingClientRect();
        if (!r.width || r.bottom < 0 || r.top > height) return;
        const place = placeKey(el);
        if (place) texts.set(place, { el, text, top: r.top });
    });
    return texts;
}

// "id/child index/..." from the nearest ancestor with an id
function placeKey(el) {
    const path = [];
    for (let node = el; node.parentElement; node = node.parentElement) {
        if (node.id) return `${node.id}/${path.reverse().join('/')}`;
        path.push(Array.prototype.indexOf.call(node.parentElement.children, node));
    }
    return null;
}

function graphemes(text) {
    return graphemeSegmenter ? Array.from(graphemeSegmenter.segment(text), part => part.segment) : Array.from(text);
}

function scrambleGlyph(like) {
    if (/\p{N}/u.test(like)) return SCRAMBLE_DIGITS[Math.floor(Math.random() * SCRAMBLE_DIGITS.length)];
    const letters = 'ijíl'.includes(like.toLowerCase()) ? SCRAMBLE_THIN : (SCRAMBLE_LETTERS[currentLang] || SCRAMBLE_LETTERS.en);
    const glyph = letters[Math.floor(Math.random() * letters.length)];
    return like === like.toLowerCase() ? glyph : glyph.toUpperCase();
}

function startLanguageScramble(before) {
    const items = [];
    const height = Math.max(1, window.innerHeight);
    textsOnScreen().forEach((now, place) => {
        const old = before.get(place);
        if (!old || old.text === now.text) return;
        const from = graphemes(old.text);
        const to = graphemes(now.text);
        let head = 0; // the same start...
        while (head < from.length && head < to.length && from[head] === to[head]) head++;
        let tail = 0; // ...and the same end stay put
        while (tail < from.length - head && tail < to.length - head
            && from[from.length - 1 - tail] === to[to.length - 1 - tail]) tail++;
        const fromMid = from.slice(head, from.length - tail);
        const toMid = to.slice(head, to.length - tail);
        const count = Math.max(fromMid.length, toMid.length);
        const wave = Math.min(1, Math.max(0, now.top / height)) * 180; // lower texts a little later
        const letters = [];
        for (let i = 0; i < count; i++) {
            const start = wave + (count > 1 ? i / (count - 1) : 0) * 220 + Math.random() * 40;
            letters.push({ from: fromMid[i] || '', to: toMid[i] || '', start, settle: start + 110 + Math.random() * 130, glyph: '', nextGlyphAt: 0 });
        }
        // The new wording for screen readers, and beside it what the eye sees: the
        // old wording, which then decodes (custom tags, so no style for spans hits them)
        const sr = document.createElement('lang-fx');
        sr.className = 'sr';
        sr.textContent = now.text;
        const fx = document.createElement('lang-fx');
        fx.setAttribute('aria-hidden', 'true');
        const fxText = document.createTextNode(old.text);
        fx.append(fxText);
        now.el.replaceChildren(sr, fx); // (before anything is painted)
        items.push({ el: now.el, sr, fx, fxText, prefix: to.slice(0, head).join(''), suffix: to.slice(to.length - tail).join(''), letters,
            newText: now.text, shown: old.text, done: false });
    });
    if (!items.length) return;
    const run = { items, raf: 0, safety: 0 };
    let startedAt = null;
    const frame = (time) => {
        if (languageScramble !== run) return;
        if (startedAt === null) startedAt = time;
        const elapsed = time - startedAt;
        let running = false;
        items.forEach(item => {
            if (item.done) return;
            if (!item.el.isConnected || item.el.childNodes.length !== 2 || item.el.firstChild !== item.sr || item.el.lastChild !== item.fx) {
                endDecoding(item); // changed by something else (or gone): leave it
                return;
            }
            let out = item.prefix;
            let settled = true;
            item.letters.forEach(letter => {
                if (elapsed >= letter.settle) {
                    out += letter.to;
                    return;
                }
                settled = false;
                const like = letter.to || letter.from;
                if (elapsed < letter.start) out += letter.from;
                else if (!/[\p{L}\p{N}]/u.test(like)) out += letter.to; // spaces, punctuation and emoji just switch
                else {
                    if (elapsed >= letter.nextGlyphAt) {
                        letter.glyph = scrambleGlyph(like);
                        letter.nextGlyphAt = elapsed + 50;
                    }
                    out += letter.glyph;
                }
            });
            if (settled) {
                endDecoding(item);
                return;
            }
            out += item.suffix;
            if (out !== item.shown) {
                item.fxText.data = out;
                item.shown = out;
            }
            running = true;
        });
        if (running) run.raf = requestAnimationFrame(frame);
        else finishLanguageScramble();
    };
    languageScramble = run;
    run.raf = requestAnimationFrame(frame);
    run.safety = setTimeout(finishLanguageScramble, 1500); // (no animation frames on a hidden page)
}

// Back to plain text: the new wording in place of the effect's two parts
// (whatever else was put into the element meanwhile stays)
function endDecoding(item) {
    item.done = true;
    if (item.fx.parentNode === item.el) item.fx.remove();
    if (item.sr.parentNode === item.el) item.sr.replaceWith(item.newText);
}

// Ends the effect at once: every text still decoding gets its new wording
function finishLanguageScramble() {
    const run = languageScramble;
    if (!run) return;
    languageScramble = null;
    cancelAnimationFrame(run.raf);
    clearTimeout(run.safety);
    run.items.forEach(item => { if (!item.done) endDecoding(item); });
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
const czechBtn = document.getElementById('czechBtn');
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
littleKidsBtn.addEventListener('click', () => chooseAgeGroup('little', littleKidsBtn));
biggerKidsBtn.addEventListener('click', () => chooseAgeGroup('bigger', biggerKidsBtn));
czechBtn.addEventListener('click', () => chooseAgeGroup('czech', czechBtn));
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
    if (document.visibilityState === 'hidden') {
        retryUnsavedRuns();
        finishAgeTransition(); // (the games, not a frozen transition, when the child comes back)
    } else if (endlessRunCrossedDay()) endRun();
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
    checkAnswer(btn.dataset.answer, btn); // (compared as text: a number or a Czech letter)
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
    if (!btn || btn.disabled || btn.classList.contains('hidden') || optionsContainer.classList.contains('hidden')) return;
    e.preventDefault();
    checkAnswer(btn.dataset.answer, btn);
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

function speakText(text, lang = currentLang) {
    if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') return;
    try {
        window.speechSynthesis.cancel(); // Stop any current speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = SPEECH_RATES[loadSettings().speech] || SPEECH_RATES.normal;
        utterance.pitch = 1.2;
        utterance.volume = 0.8;
        utterance.lang = SPEECH_LANG[lang] || 'en-US';
        const voice = voiceFor(lang);
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
    if (isCzechGame(selectedGame)) {
        if (czItem) speakCzech(czFilled(czItem)); // the word as a teacher reads it in a dictation
        return;
    }
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
    hideCzechExplain();
}

function showOnly(screen) {
    finishLanguageScramble(); // (texts settle before the screen changes)
    [ageSelectionScreen, homeScreen, playModeScreen, gameScreen, resultScreen].forEach(s => {
        s.classList.toggle('hidden', s !== screen);
    });
    document.body.classList.toggle('in-game', screen === gameScreen);
    screen.scrollTop = 0;
    syncRoute();
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
    gameScreen.classList.toggle('cz-mode', isCzechGame(selectedGame));
    // Czech words are read only by a Czech voice (see speakCzech)
    speakBtn.classList.toggle('hidden', isCzechGame(selectedGame) && !voiceFor('cs'));
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
    if (isCzechGame(selectedGame)) {
        startCzechRun(); // a new round of words
        return;
    }
    startGame(inputMode);
}

function updateGameTitles() {
    playModeTitle.textContent = selectedGame ? t(`gameTitles.${selectedGame}.long`) : t('playMode.title');
    if (practiceNumbersKey(selectedGame) && practiceNumbers.length) {
        gameHeaderTitle.textContent = t(`gameTitles.${selectedGame}.numbers`, { list: formatNumberList(practiceNumbers) });
    } else if (selectedGame) {
        gameHeaderTitle.textContent = t(`gameTitles.${selectedGame}.short`);
    }
    // (the Czech kinds named by their letters: said the Czech way)
    if (selectedGame === 'cz_iy' || selectedGame === 'cz_uu' || selectedGame === 'cz_bpvm') gameHeaderTitle.lang = 'cs';
    else gameHeaderTitle.removeAttribute('lang');
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
    questionTarget = 10;
    const saved = loadSettings();
    configureDifficulty(saved.difficulty);
    updateGameTitles(); // the header names chosen times tables
    // Compare and Match are always answered by tapping; the other games use the saved input mode
    const modeToUse = (selectedGame === 'compare' || selectedGame === 'match') ? 'click' : saved.mode;
    startGame(modeToUse);
}

function chooseGame(game) {
    cancelAgeTransition();
    cancelPendingCallbacks();
    stopSpeech();
    selectedGame = game; // 'count' | 'add' | 'compare' | 'match' | 'addsub' | 'multiply' | 'divide' | Czech: 'cz_…'
    if (isCzechGame(game)) {
        startCzechRun();
        return;
    }
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
function selectAgeGroup(ageGroup, fromTransition = false) {
    if (!fromTransition) cancelAgeTransition();
    selectedAgeGroup = ageGroup; // 'little' | 'bigger' | 'czech' (Czech for bigger kids)
    filterGamesByAgeGroup();
    updateProgressPanel();
    showOnly(homeScreen);
}

// The home screen of the chosen group: its games (or the Czech tasks), its
// colours and, for Czech, its own heading
function filterGamesByAgeGroup() {
    const czech = selectedAgeGroup === 'czech';
    const bigger = selectedAgeGroup === 'bigger';
    LITTLE_KIDS_GAMES.forEach(btn => btn.classList.toggle('hidden', bigger || czech));
    BIGGER_KIDS_GAMES.forEach(btn => btn.classList.toggle('hidden', !bigger));
    CZECH_GAME_BUTTONS.forEach(btn => btn.classList.toggle('hidden', !czech));
    gameSelection.dataset.count = czech ? 'czech' : String(bigger ? BIGGER_KIDS_GAMES.length : LITTLE_KIDS_GAMES.length);
    document.body.classList.toggle('bigger-kids-theme', bigger);
    document.body.classList.toggle('czech-theme', czech);
    document.body.classList.toggle('little-kids-theme', !bigger && !czech);
    if (themeColorMeta) themeColorMeta.setAttribute('content', czech ? '#5b2a91' : bigger ? '#2a5298' : '#3fae55');
    homeTitle.setAttribute('data-i18n', czech ? 'cz.home.title' : 'home.title');
    homeWelcome.setAttribute('data-i18n', czech ? 'cz.home.welcome' : 'home.welcome');
    homeTitle.textContent = t(homeTitle.getAttribute('data-i18n'));
    homeWelcome.textContent = t(homeWelcome.getAttribute('data-i18n'));
    if (czech) renderCzechMenu();
}

// ------------------------------------------------------------
// Age group transition (the three Play parts): the chosen part takes over the
// screen; for little kids flowers and animals bloom and the games pop in, for
// bigger kids the blue dissolves into falling green code (Matrix) and the
// games, already underneath, show through, and for Czech letters with háčky
// and čárky fly out while the purple turns over like a page of a book. A tap
// or a key skips it; with reduced motion there is none. selectAgeGroup()
// itself stays instant.
// Smoothness: only transform and opacity are animated (the graphics card moves
// ready-made layers, nothing is laid out or re-drawn), the flowers are small
// pictures drawn once in advance, and the code rain is a canvas.
// ------------------------------------------------------------
const AGE_TRANSITION_MS = {
    little: { switchAt: 700, revealAt: 1150, endAt: 2150 },
    bigger: { switchAt: 700, revealAt: 750, endAt: 2750 },
    czech: { switchAt: 700, burstAt: 600, revealAt: 1000, endAt: 2500 },
};
const CZECH_BURST_LETTERS = ['á', 'č', 'ď', 'é', 'ě', 'í', 'ň', 'ó', 'ř', 'š', 'ť', 'ú', 'ů', 'ý', 'ž', 'i', 'y', 'Č', 'Ř', 'Ž'];
const AGE_TRANSITION_SKIP_AFTER_MS = 600; // an earlier tap is a double tap, not "skip"
const BLOSSOM_EMOJI = ['🌸', '🐰', '🌼', '🦋', '🌷', '🐥', '🌻', '🐞', '🌺', '🐱', '🐶', '🦊', '🐼', '🐸', '🐝', '🐻'];
const MAGIC_GLYPHS = '0123456789+−×÷=√π∞';
const MAGIC_COLORS = ['#3dff9a', '#8cffd9', '#eafff3']; // Matrix green and aqua, and the bright head of a falling column
let ageTransition = null;   // { group, layer, timers, raf, switched, startedAt }
let gamesEntranceTimer = 0;
const bloomSprites = [];    // the flowers and animals as small, decoded pictures (see prepareBloomSprites)
let nextBloomSprite = 0;    // the next one to draw

function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

function chooseAgeGroup(group, section) {
    if (ageTransition) return;
    finishLanguageScramble(); // (its text is copied below)
    if (prefersReducedMotion()) {
        selectAgeGroup(group);
        return;
    }
    const timing = AGE_TRANSITION_MS[group];
    const rect = section.getBoundingClientRect();
    const vw = Math.max(1, window.innerWidth);
    const vh = Math.max(1, window.innerHeight);
    const layer = document.createElement('div');
    layer.className = `age-transition at-${group}`;
    layer.setAttribute('aria-hidden', 'true');
    // The chosen half's colours, stretched from where the half is to the whole
    // screen (for bigger kids a canvas, which the code rain later eats away)
    let bg;
    if (group === 'bigger') {
        bg = document.createElement('canvas');
        bg.className = 'at-bg at-cover';
        paintCover(bg, vw, vh);
    } else {
        bg = document.createElement('div');
        bg.className = `at-bg at-bg-${group}`;
    }
    bg.style.transform = `translate(${rect.left}px, ${rect.top}px) scale(${rect.width / vw}, ${rect.height / vh})`;
    // ...and a copy of its text, which glides to the middle
    const panel = document.createElement('div');
    panel.className = `${section.className} at-panel`;
    panel.appendChild(section.querySelector('.age-content').cloneNode(true));
    const pad = getComputedStyle(section); // (the stacked top part's own room for the language switcher, too)
    Object.assign(panel.style, {
        left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`,
        paddingTop: pad.paddingTop, paddingRight: pad.paddingRight, paddingBottom: pad.paddingBottom, paddingLeft: pad.paddingLeft,
    });
    panel.style.setProperty('--to-x', `${Math.round(vw / 2 - (rect.left + rect.width / 2))}px`);
    panel.style.setProperty('--to-y', `${Math.round(vh / 2 - (rect.top + rect.height / 2))}px`);
    const fx = document.createElement('div');
    fx.className = 'at-fx';
    if (group === 'czech') {
        // the purple and the text on it are a page, which later turns over
        const page = document.createElement('div');
        page.className = 'at-page';
        page.append(bg, panel);
        layer.append(page, fx);
    } else {
        layer.append(bg, panel, fx);
    }
    document.body.appendChild(layer);
    section.classList.add('at-source'); // its own text hides while the copy moves (restored at the end)
    ageTransition = { group, layer, section, timers: [], raf: 0, switched: false, startedAt: performance.now() };
    clearTimeout(gamesEntranceTimer);
    homeScreen.classList.remove('enter-soft');
    void layer.offsetWidth; // start from the half's own place
    layer.classList.add('at-grow');
    if (group === 'little') buildBlossomEffects(fx);
    const at = (ms, fn) => ageTransition.timers.push(setTimeout(fn, ms));
    at(timing.switchAt, switchToGames);
    at(timing.revealAt, group === 'bigger' ? dissolveToGames : group === 'czech' ? turnPage : revealGames);
    at(timing.endAt, finishAgeTransition);
    if (group === 'czech') at(timing.burstAt, () => { if (ageTransition) buildLetterBurst(fx); });
    layer.addEventListener('pointerdown', skipAgeTransition);
    document.addEventListener('keydown', skipAgeTransition, true);
}

// Behind the covering layer: the games screen of that age group
function switchToGames() {
    const t = ageTransition;
    if (!t || t.switched) return;
    t.switched = true;
    selectAgeGroup(t.group, true);
}

// Little kids: the layer fades away while the games pop in one by one
function revealGames() {
    const t = ageTransition;
    if (!t) return;
    switchToGames();
    [...gameSelection.querySelectorAll('.game-btn:not(.hidden)')].forEach((btn, i) => btn.style.setProperty('--enter-i', i));
    homeScreen.classList.add('enter-soft');
    t.layer.classList.add('at-reveal');
}

// Bigger kids: the full-screen blue dissolves into falling green code, column
// by column, and the games (switched in underneath) show through
function dissolveToGames() {
    const t = ageTransition;
    if (!t) return;
    switchToGames();
    const rain = document.createElement('canvas');
    rain.className = 'at-rain';
    t.layer.querySelector('.at-fx').appendChild(rain);
    startMatrixDissolve(t.layer.querySelector('.at-cover'), rain);
}

// Czech: big golden letters with háčky and čárky burst out of the title, then
// the purple page turns over like a page of a book, uncovering the Czech tasks
function turnPage() {
    const t = ageTransition;
    if (!t) return;
    switchToGames();
    t.layer.classList.add('at-turn');
}

function buildLetterBurst(fx) {
    const count = window.innerWidth < 600 ? 18 : 28;
    const unit = Math.min(window.innerWidth, window.innerHeight) / 100; // 1vmin in px
    for (let i = 0; i < count; i++) {
        const letter = document.createElement('span');
        letter.className = 'at-letter';
        letter.textContent = CZECH_BURST_LETTERS[i % CZECH_BURST_LETTERS.length];
        fx.appendChild(letter);
        if (!letter.animate) continue;
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.35;
        const dist = 24 + Math.random() * 24; // vmin from the middle
        const dx = Math.cos(angle) * dist * unit;
        const dy = Math.sin(angle) * dist * unit;
        const rot = Math.round(Math.random() * 90 - 45);
        const scale = +(0.8 + Math.random() * 0.2).toFixed(2); // never above 1 (drawn once, only shrunk)
        // out quickly, then a long moment in full view, fading only at the end
        letter.animate([
            { opacity: 0, transform: 'translate(0px, 0px) scale(0.3) rotate(0deg)' },
            { opacity: 1, transform: `translate(${dx * 0.45}px, ${dy * 0.45}px) scale(${scale}) rotate(${rot / 2}deg)`, offset: 0.2 },
            { opacity: 1, transform: `translate(${dx * 0.85}px, ${dy * 0.85}px) scale(${scale}) rotate(${rot}deg)`, offset: 0.7 },
            { opacity: 0, transform: `translate(${dx}px, ${dy + 6 * unit}px) scale(${+(scale * 0.9).toFixed(2)}) rotate(${rot}deg)` },
        ], { duration: 1400, delay: i * 15, easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)', fill: 'both' });
    }
}

function finishAgeTransition() {
    if (!ageTransition) return;
    switchToGames();
    stopAgeTransition();
    // Drop the entrance once it has played, so the games don't replay it later
    gamesEntranceTimer = setTimeout(() => homeScreen.classList.remove('enter-soft'), 1300);
}

// Something else navigates while the transition runs (e.g. a screen reader
// activating a control under the layer): just stop it, wherever that leads.
function cancelAgeTransition() {
    if (!ageTransition) return;
    stopAgeTransition();
    clearTimeout(gamesEntranceTimer);
    homeScreen.classList.remove('enter-soft');
}

function stopAgeTransition() {
    const t = ageTransition;
    t.timers.forEach(clearTimeout);
    cancelAnimationFrame(t.raf);
    document.removeEventListener('keydown', skipAgeTransition, true);
    t.section.classList.remove('at-source');
    t.layer.remove();
    ageTransition = null;
}

function skipAgeTransition(e) {
    const t = ageTransition;
    if (!t || performance.now() - t.startedAt < AGE_TRANSITION_SKIP_AFTER_MS) return;
    if (e.type === 'keydown' && ['Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) return;
    e.preventDefault(); // (the tap or key only skips; nothing underneath gets it)
    finishAgeTransition();
}

// Draws the flowers and animals into small pictures while the child is still
// choosing (text emoji in many sizes stalled the start of the transition): one
// at a time in the browser's idle moments, encoded off the main thread. Never
// done on the tap itself.
function scheduleBloomSprites() {
    if (nextBloomSprite >= BLOSSOM_EMOJI.length) return;
    if (window.requestIdleCallback) requestIdleCallback(prepareBloomSprites, { timeout: 2000 });
    else setTimeout(prepareBloomSprites, 50);
}

function prepareBloomSprites(deadline) {
    const size = 112; // twice the size shown: sharp on high-DPI screens
    do {
        const emoji = BLOSSOM_EMOJI[nextBloomSprite++];
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext && canvas.getContext('2d');
        if (!ctx || !canvas.toBlob || !window.URL || !URL.createObjectURL) {
            nextBloomSprite = BLOSSOM_EMOJI.length; // no pictures: the transition goes without flowers
            return;
        }
        ctx.font = `${Math.round(size * 0.78)}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(emoji, size / 2, size / 2 + size * 0.04);
        canvas.toBlob(blob => {
            if (!blob) return;
            const url = URL.createObjectURL(blob);
            bloomSprites.push(url);
            const img = new Image(); // decoded ahead where the browser can (a 112 px picture is cheap anyway)
            img.src = url;
            if (img.decode) img.decode().catch(() => {});
        }, 'image/png');
    } while (nextBloomSprite < BLOSSOM_EMOJI.length && deadline && deadline.timeRemaining && deadline.timeRemaining() > 8);
    scheduleBloomSprites();
}

// Little kids: flowers and animals bloom from the middle and float away
function buildBlossomEffects(fx) {
    const glow = document.createElement('div');
    glow.className = 'at-glow';
    fx.appendChild(glow);
    // Only the pictures ready by now (a tap in the first moments after the page
    // opened gets fewer, or just the glow)
    const sprites = bloomSprites.slice();
    const count = sprites.length ? (window.innerWidth < 600 ? 10 : 14) : 0;
    const unit = Math.min(window.innerWidth, window.innerHeight) / 100; // 1vmin in px
    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.src = sprites[i % sprites.length];
        item.alt = '';
        item.className = 'at-bloom';
        fx.appendChild(item);
        if (!item.animate) continue;
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
        const dist = 16 + Math.random() * 30; // vmin from the middle
        const dx = Math.cos(angle) * dist * unit;
        const dy = (Math.sin(angle) * dist - 6) * unit;
        const rot = Math.round(Math.random() * 60 - 30);
        const scale = +(0.7 + Math.random() * 0.3).toFixed(2); // never above 1: drawn once, only shrunk
        const ease = 'cubic-bezier(0.2, 0.8, 0.3, 1)';
        item.animate([
            { opacity: 0, transform: 'translate(0px, 0px) scale(0.3) rotate(0deg)', easing: ease },
            { opacity: 1, transform: `translate(${dx}px, ${dy}px) scale(${scale}) rotate(${rot}deg)`, offset: 0.3, easing: ease },
            { opacity: 1, transform: `translate(${dx}px, ${dy - 3 * unit}px) scale(${scale * 0.92}) rotate(${-rot / 2}deg)`, offset: 0.55, easing: ease },
            { opacity: 0, transform: `translate(${dx * 1.2}px, ${dy - 16 * unit}px) scale(${scale * 0.85}) rotate(${rot}deg)` },
        ], { duration: 1250, delay: 250 + i * 40, fill: 'both' });
    }
}

// The bigger kids' half painted on a canvas: the same colours as
// --bigger-half-bg in styles.css (keep the two in step), laid out as CSS does
function paintCover(canvas, w, h) {
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext && canvas.getContext('2d');
    if (!ctx) return;
    // linear-gradient(145deg, #1e3c72 0%, #2a5298 55%, #4a90e2 100%)
    const angle = 145 * Math.PI / 180;
    const dx = Math.sin(angle);
    const dy = -Math.cos(angle);
    const half = (Math.abs(w * dx) + Math.abs(h * dy)) / 2;
    const linear = ctx.createLinearGradient(w / 2 - dx * half, h / 2 - dy * half, w / 2 + dx * half, h / 2 + dy * half);
    linear.addColorStop(0, '#1e3c72');
    linear.addColorStop(0.55, '#2a5298');
    linear.addColorStop(1, '#4a90e2');
    ctx.fillStyle = linear;
    ctx.fillRect(0, 0, w, h);
    // radial-gradient(circle at 70% 20%, rgba(120, 190, 255, 0.5) 0%, rgba(120, 190, 255, 0) 50%),
    // sized to the farthest corner
    const cx = w * 0.7;
    const cy = h * 0.2;
    const r = Math.max(Math.hypot(cx, cy), Math.hypot(w - cx, cy), Math.hypot(cx, h - cy), Math.hypot(w - cx, h - cy));
    const radial = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    radial.addColorStop(0, 'rgba(120, 190, 255, 0.5)');
    radial.addColorStop(0.5, 'rgba(120, 190, 255, 0)');
    radial.addColorStop(1, 'rgba(120, 190, 255, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, w, h);
}

// The glyphs in each colour, drawn once; the rain copies them from here
function glyphAtlas(size) {
    const atlas = document.createElement('canvas');
    atlas.width = size * MAGIC_GLYPHS.length;
    atlas.height = size * MAGIC_COLORS.length;
    const ctx = atlas.getContext('2d');
    ctx.font = `700 ${Math.round(size * 0.9)}px ui-monospace, Consolas, "Segoe UI Symbol", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    MAGIC_COLORS.forEach((color, row) => {
        ctx.fillStyle = color;
        [...MAGIC_GLYPHS].forEach((glyph, i) => ctx.fillText(glyph, i * size + size / 2, row * size + size / 2));
    });
    return atlas;
}

// Falling glyphs, drawn each frame at CSS-pixel resolution, copied from the
// atlas, at a speed in px per second (the same on slow and fast devices)
// Each column of the cover is eaten from the top by a falling head of green
// glyphs: just below the head the blue breaks up into glyph-shaped holes, above
// it the blue is gone (the games show through), and the glyphs left behind fade
// out. The columns start close together at similar speeds, so the front is a
// ragged band rather than bars. Positions come from the clock, so the dissolve
// takes the same time on slow and fast devices.
function startMatrixDissolve(cover, rain) {
    const cctx = cover && cover.getContext && cover.getContext('2d');
    const rctx = rain.getContext && rain.getContext('2d');
    if (!cctx || !rctx) return;
    const w = cover.width;
    const h = cover.height;
    rain.width = w;
    rain.height = h;
    const size = w < 600 ? 16 : 20;
    const atlas = glyphAtlas(size);
    const columns = Array.from({ length: Math.ceil(w / size) }, () => ({ delay: Math.random() * 300, duration: 850 + Math.random() * 300, head: 0, headCell: 0 }));
    const start = performance.now();
    let last = start;
    const draw = (now) => {
        if (!ageTransition) return;
        const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
        last = now;
        // The glyphs left behind fade to transparent
        rctx.globalCompositeOperation = 'destination-out';
        rctx.fillStyle = `rgba(0, 0, 0, ${(1 - Math.pow(0.9, dt * 60)).toFixed(3)})`;
        rctx.fillRect(0, 0, w, h);
        rctx.globalCompositeOperation = 'source-over';
        columns.forEach((column, i) => {
            const progress = Math.min(1, Math.max(0, (now - start - column.delay) / column.duration));
            const y = progress * (h + size); // the head, past the bottom at the end
            if (y <= column.head) return;
            cctx.clearRect(i * size, column.head, size, y - column.head);
            // the blue just ahead of the head breaks up into glyph-shaped holes
            cctx.globalCompositeOperation = 'destination-out';
            for (let k = 0; k < 2; k++) {
                const cell = y + Math.floor(Math.random() * 8) * size;
                if (cell < h) cctx.drawImage(atlas, Math.floor(Math.random() * MAGIC_GLYPHS.length) * size, 0, size, size, i * size, cell, size, size);
            }
            cctx.globalCompositeOperation = 'source-over';
            // each cell the head enters gets a bright glyph, and the cell it leaves
            // turns green (so the trail is green at any frame rate)
            for (let cell = Math.floor(column.head / size) * size + size; cell <= y; cell += size) {
                if (column.headCell) {
                    rctx.clearRect(i * size, column.headCell - size, size, size);
                    rctx.drawImage(atlas, Math.floor(Math.random() * MAGIC_GLYPHS.length) * size, (Math.random() < 0.6 ? 0 : 1) * size, size, size, i * size, column.headCell - size, size, size);
                }
                rctx.drawImage(atlas, Math.floor(Math.random() * MAGIC_GLYPHS.length) * size, 2 * size, size, size, i * size, cell - size, size, size);
                column.headCell = cell;
            }
            column.head = y;
        });
        ageTransition.raf = requestAnimationFrame(draw);
    };
    ageTransition.raf = requestAnimationFrame(draw);
}

function goToAgeSelection() {
    cancelAgeTransition();
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
    if (selectedAgeGroup === 'czech') renderCzechMenu(); // (words to practise again may have changed)
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
        hideCzechExplain();
        setTypedAnswer('');

        createQuestion();

        updateQuestion();
        // Show the right controls first: the board is measured at its final size
        updateInputMode();
        if (isMathGame()) {
            arrangeMathDisplay();
        } else if (isCzechGame(selectedGame)) {
            arrangeCzechCard();
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
    if (isCzechGame(selectedGame)) {
        // The next word of the round; the letters keep their order (i í y ý, ú ů, b p ...)
        czItem = CZ_BY_ID.get(czRound[questionsAsked]);
        correctAnswer = czItem.answer;
        options = czOptions(czItem).slice();
        return;
    }
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
    if (isCzechGame(selectedGame)) return `km_best_${selectedGame}`;
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
    // 9 and 5 of 10 (the Czech test: 18 and 10 of 20)
    const share = value / Math.max(1, questionTarget);
    return share >= 0.9 ? 3 : share >= 0.5 ? 2 : value >= 1 ? 1 : 0;
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
        czech: isCzechGame(selectedGame)
            ? { cat: CZ_GAMES[selectedGame], mistakes: czMistakes.slice() }
            : null,
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
    resultTitle.textContent = endless ? t('result.endlessTitle')
        : (result.mode === 'time' ? t('result.timeUp') : t('result.allDone'));
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
    czReview.classList.toggle('hidden', !result.czech);
    if (result.czech) renderCzechReview(result.czech);
}

function updateQuestion() {
    if (isCzechGame(selectedGame)) {
        if (czItem) questionText.replaceChildren(...czInstruction(czItem));
        return;
    }
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
    const czech = isCzechGame(selectedGame);
    optionsContainer.dataset.count = String(options.length); // Czech: 4 (i í y ý), 3 (u ú ů) or 2 letters
    optionButtons.forEach((btn, index) => {
        const shown = index < options.length;
        btn.classList.toggle('hidden', !shown);
        if (czech) btn.lang = 'cs';
        else btn.removeAttribute('lang');
        if (!shown) return;
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

    if (isCzechGame(selectedGame)) {
        czAnswer(String(selectedAnswer), isCorrect, chosen, rightBtn);
        return;
    }

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

// ============================================================
// Czech for bigger kids: the 2nd grade review worksheet ("opakování učiva
// 2. ročníku"). Every blank of the worksheet is one question ("_" marks it; a
// phrase with two blanks is two questions, each with the other blank filled
// in): i/í or y/ý after soft and hard consonants, u, ú or ů, and paired
// consonants at the end of words, with a check word in which the letter can be
// heard. The words stay Czech in both languages; only the instructions and the
// explanations follow the language switch. The answers were checked against an
// independent fill-in of the worksheet and the Internetová jazyková příručka.
// ============================================================
const CZ_IY = [
    ['iy01', 'suché šat_', 'y'],
    ['iy02', 'př_kré schody', 'í'],
    ['iy03', 'příkré schod_', 'y'],
    ['iy04', 'ž_vočichové', 'i'],
    ['iy05', 'za hod_nu', 'i'],
    ['iy06', 'krátk_ úkol', 'ý'],
    ['iy07', 'pěkn_ dům', 'ý'],
    ['iy08', 'do r_bníka', 'y'],
    ['iy09', 'pro č_tanku', 'í'],
    ['iy10', 'dlouh_ úsek', 'ý'],
    ['iy11', 'teplé j_dlo', 'í'],
    ['iy12', 'před span_m', 'í'],
    ['iy13', 't_chá hudba', 'i'],
    ['iy14', 'lež_ na zemi', 'í'],
    ['iy15', 'tento t_den', 'ý'],
    ['iy16', 'příšt_ úterý', 'í'],
    ['iy17', 'příští úter_', 'ý'],
    ['iy18', 'u Helen_', 'y'],
    ['iy19', 'polic_sta', 'i'],
    ['iy20', 'luk a š_p', 'í'],
    ['iy21', 'hlasitě kř_čí', 'i'],
    ['iy22', 'ostrá d_ka', 'ý'],
    ['iy23', 'č_sté boty', 'i'],
    ['iy24', 'čisté bot_', 'y'],
    ['iy25', 'plyn un_kal', 'i'],
    ['iy26', 'such_ chléb', 'ý'],
    ['iy27', 'Sářin seš_t', 'i'],
    ['iy28', 'tajný úkr_t', 'y'],
    ['iy29', 'češt_na', 'i'],
    ['iy30', 'ch_trý Jiřík', 'y'],
    ['iy31', 'chytrý J_řík', 'i'],
    ['iy32', 'závodn_k', 'í'],
    ['iy33', 'ř_ční břehy', 'í'],
    ['iy34', 'říční břeh_', 'y'],
    ['iy35', 'létá na j_h', 'i'],
    ['iy36', 'prst_nek', 'ý'],
    ['iy37', 'klad_vko', 'í'],
    ['iy38', 'dva rok_', 'y'],
    // More words of the same kind, beyond the worksheet: everyday words only - no
    // loanwords (kino, diktát: there the rule does not hold) and no vyjmenovaná slova
    ['iy39', 'š_kovný kluk', 'i'],
    ['iy40', 'ž_rafa v zoo', 'i'],
    ['iy41', 'ř_zek s bramborami', 'í'],
    ['iy42', 'c_bule a česnek', 'i'],
    ['iy43', 'j_skra z ohně', 'i'],
    ['iy44', 'č_st knížku', 'í'],
    ['iy45', 'číst kn_žku', 'í'],
    ['iy46', 'ř_dič autobusu', 'i'],
    ['iy47', 'c_rkus přijel', 'i'],
    ['iy48', 'školní j_delna', 'í'],
    ['iy49', 'bílá koš_le', 'i'],
    ['iy50', 'slepič_ vejce', 'í'],
    ['iy51', 'c_l závodu', 'í'],
    ['iy52', 'srna ž_je v lese', 'i'],
    ['iy53', 'měsíc ř_jen', 'í'],
    ['iy54', 'j_ný den', 'i'],
    ['iy55', 'c_zí pes', 'i'],
    ['iy56', 'ž_to na poli', 'i'],
    ['iy57', 'hořč_ce na párek', 'i'],
    ['iy58', 'ch_ba v úkolu', 'y'],
    ['iy59', 'k_tka na louce', 'y'],
    ['iy60', 'r_ba ve vodě', 'y'],
    ['iy61', 'ch_tat míč', 'y'],
    ['iy62', 'k_selé jablko', 'y'],
    ['iy63', 'r_chlé auto', 'y'],
    ['iy64', 'k_chat do kapesníku', 'ý'],
    ['iy65', 'r_že s masem', 'ý'],
    ['iy66', 'tich_ večer', 'ý'],
    ['iy67', 'hezk_ obrázek', 'ý'],
    ['iy68', 'drah_ dárek', 'ý'],
    ['iy69', 'dobr_ kamarád', 'ý'],
    ['iy70', 'nové knih_', 'y'],
    ['iy71', 'vysoké hor_', 'y'],
    ['iy72', 'sladké hrušk_', 'y'],
    ['iy73', 'jdeme do d_vadla', 'i'],
    ['iy74', 'd_tě si hraje', 'í'],
    ['iy75', 'n_kdo tu není', 'i'],
    ['iy76', 't_síc korun', 'i'],
    ['iy77', 'jehla a n_t', 'i'],
    ['iy78', 'd_voký kůň', 'i'],
    ['iy79', 'krásné květ_ny', 'i'],
    ['iy80', 'kočka sed_ na okně', 'í'],
    ['iy81', 'letadlo let_', 'í'],
    ['iy82', 'rann_ rosa', 'í'],
    ['iy83', 'd_ně na zahradě', 'ý'],
    ['iy84', 'pruhovaný t_gr', 'y'],
    ['iy85', 'd_m z komína', 'ý'],
    ['iy86', 'dlouhá t_č', 'y'],
    ['iy87', 'd_chat nosem', 'ý'],
    ['iy88', 'zlat_ prsten', 'ý'],
    ['iy89', 'mlad_ kocour', 'ý'],
    ['iy90', 'siln_ vítr', 'ý'],
    ['iy91', 'zelen_ strom', 'ý'],
    ['iy92', 'děda čte novin_', 'y'],
    // More after hard and soft consonants (and d, t, n by sound) - chosen so that no
    // word shows another question's answer filled in (the test mixes them)
    ['iy93', 'h_bat rukou', 'ý'],
    ['iy94', 'ch_stat se na výlet', 'y'],
    ['iy95', 'k_tice ve váze', 'y'],
    ['iy96', 'k_vat hlavou', 'ý'],
    ['iy97', 'r_tíř na koni', 'y'],
    ['iy98', 'r_s v horách', 'y'],
    ['iy99', 'd_rka v plotě', 'í'],
    ['iy100', 'd_ky za dárek', 'í'],
    ['iy101', 'd_vat se z okna', 'í'],
    ['iy102', 't_kev na poli', 'y'],
    ['iy103', 't_skárna u počítače', 'i'],
    ['iy104', 'n_čeho se nebojí', 'i'],
    ['iy105', 'podzimn_ listí', 'í'],
    ['iy106', 'jarn_ den', 'í'],
    ['iy107', 'ž_dle v kuchyni', 'i'],
    ['iy108', 'ž_la na ruce', 'í'],
    ['iy109', 'š_ška z borovice', 'i'],
    ['iy110', 'š_roká řeka', 'i'],
    ['iy111', 'učím se š_t jehlou', 'í'],
    ['iy112', 'č_slo pokoje', 'í'],
    ['iy113', 'ř_kat pravdu', 'í'],
    ['iy114', 'ptačí kř_dlo', 'í'],
    ['iy115', 'c_tit zimu', 'í'],
    ['iy116', 'j_t do školy', 'í'],
    ['iy117', 'malá j_zva', 'i'],
    ['iy118', 'tvrd_ oříšek', 'ý'],
    ['iy119', 'čern_ havran', 'ý'],
    ['iy120', 'chud_ pán', 'ý'],
    ['iy121', 'tenk_ papír', 'ý'],
    // From Leon's September test (the ones he got wrong: týden is here already, připravuje, tílko,
    // trenky) and the rest of its words; při- or pří- like připravuje
    ['iy122', 'škola v př_rodě', 'í'],
    ['iy123', 'př_pravuje si batoh', 'i'],
    ['iy124', 'sbalit si věc_', 'i'],
    ['iy125', 'J_zerské hory', 'i'],
    ['iy126', 'malý kufř_k', 'í'],
    ['iy127', 'dva provázk_', 'y'],
    ['iy128', 'ostrý nož_k', 'í'],
    ['iy129', 'teplé oblečen_', 'í'],
    ['iy130', 'nasadit si čepic_', 'i'],
    ['iy131', 'dvě mikin_', 'y'],
    ['iy132', 'dlouhé kalhot_', 'y'],
    ['iy133', 'bílé t_lko', 'í'],
    ['iy134', 'nové trenk_', 'y'],
    ['iy135', 'vlněné ponožk_', 'y'],
    ['iy136', 'měkké bačkor_', 'y'],
    ['iy137', 'oblíbené hračk_', 'y'],
    ['iy138', 'malý Jen_k', 'í'],
    ['iy139', 'př_jít domů', 'i'],
    ['iy140', 'dobrý př_tel', 'í'],
    ['iy141', 'počítat př_klad', 'í'],
];
const CZ_UU = [
    ['uu01', 'zavřená _sta', 'ú'],
    ['uu02', 'těší se dom_', 'ů'],
    ['uu03', 'stará k_lna', 'ů'],
    ['uu04', 'velká _nava', 'ú'],
    ['uu05', '_žasně vaří', 'ú'],
    ['uu06', 'zavírací n_ž', 'ů'],
    ['uu07', 'd_ležitý úkol', 'ů'],
    ['uu08', 'důležitý _kol', 'ú'],
    ['uu09', 'na p_dě', 'ů'],
    ['uu10', '_tulný byt', 'ú'],
    ['uu11', 'velký _div', 'ú'],
    ['uu12', 'f_ra sena', 'ů'],
    ['uu13', 'pár strom_', 'ů'],
    ['uu14', 'k_ra břízy', 'ů'],
    ['uu15', '_plný seznam', 'ú'],
    ['uu16', 'jdeme dol_', 'ů'],
    ['uu17', 'krásné _dolí', 'ú'],
    ['uu18', 'zp_sobit škodu', 'ů'],
    ['uu19', '_zká cesta', 'ú'],
    // More words: ú only at the very start (no prefix), ů inside and at the end; no exceptions
    ['uu20', 'v _terý ráno', 'ú'],
    ['uu21', 'veselý _směv', 'ú'],
    ['uu22', 'včelí _l', 'ú'],
    ['uu23', 'bohatá _roda', 'ú'],
    ['uu24', 'velký _klid', 'ú'],
    ['uu25', 'těžká _loha', 'ú'],
    ['uu26', '_raz na kole', 'ú'],
    ['uu27', 'rychlý _tok', 'ú'],
    ['uu28', 'nový _čes', 'ú'],
    ['uu29', '_těk z klece', 'ú'],
    ['uu30', 'obecní _řad', 'ú'],
    ['uu31', 'zaplatit _čet', 'ú'],
    ['uu32', 'rychlý k_ň', 'ů'],
    ['uu33', 'kuchyňský st_l', 'ů'],
    ['uu34', 's_l a pepř', 'ů'],
    ['uu35', 'červená r_že', 'ů'],
    ['uu36', 'měkká k_že', 'ů'],
    ['uu37', 'm_j táta', 'ů'],
    ['uu38', 'tv_j míč', 'ů'],
    ['uu39', 'p_l jablka', 'ů'],
    ['uu40', 'v_ně květin', 'ů'],
    ['uu41', 'ostré n_žky', 'ů'],
    ['uu42', 'r_zné barvy', 'ů'],
    ['uu43', 'dárky od rodič_', 'ů'],
    ['uu44', 'hodně kamarád_', 'ů'],
    ['uu45', 'u soused_', 'ů'],
    ['uu46', 'dlouhý pr_vod', 'ů'],
    ['uu47', 'p_jčit knihu', 'ů'],
    ['uu48', 'dřevěná h_l', 'ů'],
    ['uu49', 'noční m_ra', 'ů'],
    // Short u, where a child could put ú or ů: at the start (uklidit beside úklid,
    // utíkat beside útěk), inside, and as an ending (k domu beside domů)
    ['uu50', 'velké _cho', 'u'],
    ['uu51', 'dlouhá _lice', 'u'],
    ['uu52', 'pevný _zel', 'u'],
    ['uu53', '_mýt si ruce', 'u'],
    ['uu54', '_klidit pokoj', 'u'],
    ['uu55', '_kázat cestu', 'u'],
    ['uu56', 'paní _čitelka', 'u'],
    ['uu57', '_tíkat před deštěm', 'u'],
    ['uu58', '_vařit polévku', 'u'],
    ['uu59', 'černé _hlí', 'u'],
    ['uu60', 'bílý _brus', 'u'],
    ['uu61', '_snout v posteli', 'u'],
    ['uu62', 'nové br_sle', 'u'],
    ['uu63', 'žlutý t_lipán', 'u'],
    ['uu64', 'měsíc d_ben', 'u'],
    ['uu65', 'teplá b_nda', 'u'],
    ['uu66', 'bílá h_sa', 'u'],
    ['uu67', 'barevná d_ha', 'u'],
    ['uu68', 'hlasitý b_ben', 'u'],
    ['uu69', 'mokrý r_čník', 'u'],
    ['uu70', 'těžký k_fr', 'u'],
    ['uu71', 'sk_pina dětí', 'u'],
    ['uu72', 'hraje na tr_bku', 'u'],
    ['uu73', 'k_kačka v lese', 'u'],
    ['uu74', 'mořská m_šle', 'u'],
    ['uu75', 'jdeme k dom_', 'u'],
    ['uu76', 'sedneme si ke stol_', 'u'],
    // From Leon's September test (he wrote ú in strýcův and půjdu) and more -ův
    ['uu77', 'st_j rovně', 'ů'],
    ['uu78', '_dusat hlínu', 'u'],
    ['uu79', 'položit otázk_', 'u'],
    ['uu80', 'chytat _hoře', 'ú'],
    ['uu81', '_klidové práce', 'ú'],
    ['uu82', 'strýc_v statek', 'ů'],
    ['uu83', 'kouzelná h_lka', 'ů'],
    ['uu84', 'dlouhá šň_ra', 'ů'],
    ['uu85', 'to je sm_la', 'ů'],
    ['uu86', 'psát _hledně', 'ú'],
    ['uu87', 'p_jdu nakoupit', 'ů'],
    ['uu88', 'slova _těchy', 'ú'],
    ['uu89', 'rychlá ch_ze', 'ů'],
    ['uu90', 'tát_v klobouk', 'ů'],
    ['uu91', 'bratr_v pokoj', 'ů'],
];
// [id, phrase, answer, check word]
const CZ_PAIRS = [
    ['pc01', 'dětský smí_', 'ch', 'smíchu'],
    ['pc02', 'dobrý gulá_', 'š', 'guláše'],
    ['pc03', 'má nás rá_', 'd', 'ráda'],
    ['pc04', 'ru_ a líc', 'b', 'rubu'],
    ['pc05', 'vysoký slou_', 'p', 'sloupy'],
    ['pc06', 'hráli gol_', 'f', 'golfu'],
    ['pc07', 'bílý sní_', 'h', 'sněhu'],
    ['pc08', 'tupý nů_', 'ž', 'nože'],
    ['pc09', 'významný obje_', 'v', 'objevy'],
    ['pc10', 'nejí špená_', 't', 'špenátu'],
    ['pc11', 'roztrhaná sí_', 'ť', 'sítě'],
    ['pc12', 'se_ klidně', 'ď', 'sedí'],
    ['pc13', 'bílá labu_', 'ť', 'labutě'],
    ['pc14', 'časopi_', 's', 'časopisy'],
    ['pc15', 'žízeň a hla_', 'd', 'hladový'],
    ['pc16', 'přísný záka_', 'z', 'zákazy'],
    ['pc17', 'košík plný hu_', 'b', 'houby'],
    ['pc18', 'vltavský bře_', 'h', 'břehy'],
    ['pc19', 'kalu_ vody', 'ž', 'kaluže'],
    ['pc20', 'zápi_ do školy', 's', 'zápisy'],
    ['pc21', 'našli pokla_', 'd', 'poklady'],
    ['pc22', 'naře_ dřevo', 'ž', 'nařeže'],
    ['pc23', 'hluboký příko_', 'p', 'příkopy'],
    ['pc24', 'Jose_', 'f', 'Josefa'],
    ['pc25', 'zamotaný drá_', 't', 'dráty'],
    ['pc26', 'příkrý sva_', 'h', 'svahy'],
    ['pc27', 'šedivý holu_', 'b', 'holubi'],
    ['pc28', 'letní déš_', 'ť', 'deště'],
    ['pc29', 'pi_ čitelně', 'š', 'píše'],
    ['pc30', 'zatažený závě_', 's', 'závěsy'],
    ['pc31', 'le_ je šelma', 'v', 'lvi'],
    ['pc32', 'ovocný salá_', 't', 'saláty'],
    ['pc33', 'nala_ kytaru', 'ď', 'naladit'],
    ['pc34', 'velký úspě_', 'ch', 'úspěchy'],
    ['pc35', 'vyři_ vzkaz', 'ď', 'vyřídit'],
    ['pc36', 'vyřiď vzka_', 'z', 'vzkazy'],
    ['pc37', 'vylomený zu_', 'b', 'zuby'],
    ['pc38', 'útulný by_', 't', 'byty'],
    ['pc39', 'měkký chlé_', 'b', 'chleba'],
    ['pc40', 'fotogra_', 'f', 'fotografa'],
    ['pc41', 'beraní ro_', 'h', 'rohy'],
    ['pc42', 'zbořená ze_', 'ď', 'zdi'],
    ['pc43', 'kočka a my_', 'š', 'myši'],
    ['pc44', 'kone_ vody', 'v', 'konve'],
    ['pc45', 'listnatý le_', 's', 'lesy'],
    ['pc46', 'vra_ mi to', 'ť', 'vrátit'],
    ['pc47', 'tuhý mrá_', 'z', 'mrazy'],
    ['pc48', 'kočičí drá_', 'p', 'drápy'],
    ['pc49', 'zasel hrá_', 'ch', 'hrachu'],
    ['pc50', 'pěvecká soutě_', 'ž', 'soutěže'],
    // More words: only where the other letter of the pair makes no word that fits
    // (not plod/plot, led/let); a check word hears d and t before a hard vowel (hada, not hadi)
    ['pc51', 'du_ má žaludy', 'b', 'duby'],
    ['pc52', 'vysoký stro_', 'p', 'stropy'],
    ['pc53', 'fotbalový klu_', 'b', 'kluby'],
    ['pc54', 'kamarád Jaku_', 'b', 'Jakuba'],
    ['pc55', 'starý hra_', 'd', 'hrady'],
    ['pc56', 'sladký me_', 'd', 'medu'],
    ['pc57', 'zelený ha_', 'd', 'hada'],
    ['pc58', 'ovocný sa_', 'd', 'sady'],
    ['pc59', 'zimní kabá_', 't', 'kabáty'],
    ['pc60', 'bílý kvě_', 't', 'květy'],
    ['pc61', 'celý svě_', 't', 'světa'],
    ['pc62', 'velký obcho_', 'd', 'obchody'],
    ['pc63', 'dobrý nápa_', 'd', 'nápady'],
    ['pc64', 'zápa_ slunce', 'd', 'západu'],
    ['pc65', 'lo_ pluje po moři', 'ď', 'lodě'],
    ['pc66', 'dobrou chu_', 'ť', 'chuti'],
    ['pc67', 'správná odpově_', 'ď', 'odpovědi'],
    ['pc68', 'dobrá pamě_', 'ť', 'paměti'],
    ['pc69', 'cho_ pomalu', 'ď', 'chodit'],
    ['pc70', 'ho_ mi míč', 'ď', 'hodit'],
    ['pc71', 'pus_ psa ven', 'ť', 'pustit'],
    ['pc72', 'velký no_', 's', 'nosy'],
    ['pc73', 'dřevěný vů_', 'z', 'vozy'],
    ['pc74', 'náš pe_ štěká', 's', 'psi'],
    ['pc75', 'ukroj ku_ chleba', 's', 'kusy'],
    ['pc76', 'krásný obra_', 'z', 'obrazy'],
    ['pc77', 'dlouhý prova_', 'z', 'provazy'],
    ['pc78', 'školní autobu_', 's', 'autobusy'],
    ['pc79', 'vítě_ závodu', 'z', 'vítězové'],
    ['pc80', 'ko_ na odpadky', 'š', 'koše'],
    ['pc81', 'silný mu_', 'ž', 'muži'],
    ['pc82', 'velká gará_', 'ž', 'garáže'],
    ['pc83', 'kamarád Luká_', 'š', 'Lukáše'],
    ['pc84', 'vysoká vě_', 'ž', 'věže'],
    ['pc85', 'sladká mrke_', 'v', 'mrkve'],
    ['pc86', 'dlouhý ruká_', 'v', 'rukávy'],
    ['pc87', 'krásný zpě_', 'v', 'zpěvu'],
    ['pc88', 'můj domo_', 'v', 'domova'],
    ['pc89', 'hodný šé_', 'f', 'šéfa'],
    ['pc90', 'vlašský oře_', 'ch', 'ořechy'],
    ['pc91', 'velký stra_', 'ch', 'strachu'],
    ['pc92', 'čerstvý vzdu_', 'ch', 'vzduchu'],
    ['pc93', 'velký kru_', 'h', 'kruhy'],
    ['pc94', 'dobrý slu_', 'ch', 'sluchu'],
    ['pc95', 'sladký tvaro_', 'h', 'tvarohu'],
    // Inside a word: the consonant before another consonant, checked by a related
    // word where a vowel follows it
    ['pc96', 'ka_ka vody', 'p', 'kapat'],
    ['pc97', 'le_ký batoh', 'h', 'lehoučký'],
    ['pc98', 'há_ka dětí', 'd', 'hádat'],
    ['pc99', 'dlouhá prochá_ka', 'z', 'procházet'],
    ['pc100', 'tu_ka a papír', 'ž', 'tužek'],
    ['pc101', 'lo_ka na řece', 'ď', 'lodička'],
    ['pc102', 'malá no_ka', 'ž', 'nožička'],
    ['pc103', 'ry_ka v potoce', 'b', 'rybička'],
    ['pc104', 'červená stu_ka', 'ž', 'stužek'],
    ['pc105', 'dí_ka s mašlí', 'v', 'dívenka'],
    ['pc106', 'bu_ka pro ptáky', 'd', 'bouda'],
    ['pc107', 'veselá lou_ka', 't', 'loutek'],
    ['pc108', 'klu_ký led', 'z', 'klouzat'],
    ['pc109', 'stará ba_ka', 'b', 'babička'],
    ['pc110', 'ža_ka v rákosí', 'b', 'žabička'],
    ['pc111', 'lá_ka přes potok', 'v', 'lávek'],
    ['pc112', 'hou_ka s máslem', 's', 'housek'],
    ['pc113', 'malá mu_ka', 'š', 'mušek'],
    // From Leon's September test (he wrote p in hřib, š in tužka, d in pohovka) - where there is
    // something to check: the consonant at the end of a word or before another consonant
    ['pc114', 'jedlý hři_', 'b', 'hřiby'],
    ['pc115', 'pohodlná poho_ka', 'v', 'pohovek'],
    ['pc116', 'sladká broske_', 'v', 'broskve'],
    ['pc117', 'chlupatý medvě_', 'd', 'medvěda'],
    ['pc118', 'veselá sva_ba', 't', 'svatební'],
    ['pc119', 'ilustrovaná kní_ka', 'ž', 'knížek'],
    ['pc120', 'čokoládový dor_', 't', 'dorty'],
    ['pc121', 'televizní pořa_', 'd', 'pořady'],
    ['pc122', 'ohřívaný obě_', 'd', 'obědy'],
];
// [id, phrase, answer, check]: bě, pě, vě, mě without j/n; bje, vje where a prefix (ob-, v-)
// meets a word with j (check: the parts); mně where a related word has n (check: that word)
const CZ_BPVM = [
    ['bv01', 'ob_d ve škole', 'ě'],
    ['bv02', 'b_hat po hřišti', 'ě'],
    ['bv03', 'b_žet do školy', 'ě'],
    ['bv04', 'b_hem dne', 'ě'],
    ['bv05', 'zab_hnout za kamarádem', 'ě'],
    ['bv06', 'ob_t jezero', 'je', 'ob-jet'],
    ['bv07', 'velký ob_m', 'je', 'ob-jem'],
    ['bv08', 'ob_vit hnízdo', 'je', 'ob-jevit'],
    ['bv09', 'ob_dnat lístky', 'je', 'ob-jednat'],
    ['bv10', 'v_c na stole', 'ě'],
    ['bv11', 'suchá v_tev', 'ě'],
    ['bv12', 'v_řit pohádce', 'ě'],
    ['bv13', 'zv_davý kluk', 'ě'],
    ['bv14', 'v_trný den', 'ě'],
    ['bv15', 'vlak může v_t do tunelu', 'je', 'v-jet'],
    ['bv16', 'v_zd na dálnici', 'je', 'v-jezd'],
    ['bv17', 'p_t prstů', 'ě'],
    ['bv18', 'op_t prší', 'ě'],
    ['bv19', 'do školy p_šky', 'ě'],
    ['bv20', 'bílá p_na', 'ě'],
    ['bv21', 'zavřená p_st', 'ě'],
    ['bv22', 'velké m_sto', 'ě'],
    ['bv23', 'm_řit délku', 'ě'],
    ['bv24', 'velká zm_na', 'ě'],
    ['bv25', 'staré nám_stí', 'ě'],
    ['bv26', 'm_lká voda', 'ě'],
    ['bv27', 'zapom_l klíče', 'ně', 'zapomenout'],
    ['bv28', 'vzpom_l si', 'ně', 'vzpomenout'],
    ['bv29', 'jem_ zpívat', 'ně', 'jemný'],
    ['bv30', 'je tu příjem_ teplo', 'ně', 'příjemný'],
    ['bv31', 'mluví rozum_', 'ně', 'rozumný'],
    ['bv32', 'tem_ modrá', 'ně', 'temný'],
    ['bv33', 'bydlí skrom_', 'ně', 'skromný'],
    ['bv34', 'tajem_ se usmál', 'ně', 'tajemný'],
    // From Leon's September test (words he wrote whole)
    ['bv35', 'buchty v troub_', 'ě'],
    ['bv36', 'hráb_ na zahradě', 'ě'],
    ['bv37', 'velký medv_d', 'ě'],
    ['bv38', 'm_síc na obloze', 'ě'],
    ['bv39', 'krásné kv_tiny', 'ě'],
];
const CZ_ITEMS = [
    ...CZ_IY.map(([id, text, answer]) => ({ cat: 'iy', id, text, answer })),
    ...CZ_UU.map(([id, text, answer]) => ({ cat: 'uu', id, text, answer })),
    ...CZ_PAIRS.map(([id, text, answer, check]) => ({ cat: 'pairs', id, text, answer, check })),
    ...CZ_BPVM.map(([id, text, answer, check]) => ({ cat: 'bpvm', id, text, answer, check })),
];
const CZ_BY_ID = new Map(CZ_ITEMS.map(item => [item.id, item]));
const CZ_PAIR_SETS = [['b', 'p'], ['d', 't'], ['ď', 'ť'], ['z', 's'], ['ž', 'š'], ['v', 'f'], ['h', 'ch']];
const CZ_GAMES = { cz_iy: 'iy', cz_uu: 'uu', cz_pairs: 'pairs', cz_bpvm: 'bpvm', cz_test: 'test' };
const CZ_KINDS = ['iy', 'uu', 'pairs', 'bpvm'];
const CZ_ROUND = 10;                             // questions in a practice round
const CZ_TEST_SIZE = 20;                         // the test: every kind mixed, played like practice
const CZ_TEST_MIN_PER_KIND = 2;                  // (every kind in every test, however well it goes)
const CZ_STATS_KEY = 'km_cz_stats';              // per kind: the last answers, 1 right / 0 wrong
const CZ_STATS_KEEP = 30;
const CZ_STATS_SHOW_AFTER = 5;                   // (the menu shows a kind's share from this many answers)
const CZ_MISSED_KEY = 'km_cz_missed2';           // ids answered wrong (until answered right): see czLoadMissed
const CZ_OLD_MISSED_KEY = 'km_cz_missed';
const CZ_WAIT_KEY = 'km_cz_wait2';               // ids left out of a round for a word they would give away: rounds waited
const CZ_PASS_PREFIX = 'km_cz_pass_';            // + kind: the pass through its words (see czLoadPass)
// Where versions before 2026-10-07.2 kept the pass (the words not asked yet, those waiting left out)
// and the words waiting: read once per kind to carry the pass over - such a version never sees the
// new records, nor do they see what it writes later
const CZ_DECK_PREFIX = 'km_cz_deck_';
const CZ_DECK_KEYS = { uu: 'km_cz_deck_uu2', iy: 'km_cz_deck_iy2', pairs: 'km_cz_deck_pairs2' };
const CZ_OLD_WAIT_KEY = 'km_cz_wait';
// ...and the highest word number of each kind such a pass knew
const CZ_PASS_KNEW = { iy: 121, uu: 76, pairs: 113, bpvm: 34 };
const CZ_SOFT = ['ž', 'š', 'č', 'ř', 'c', 'j'];
const CZ_HARD = ['h', 'ch', 'k', 'r'];
const CZ_DTN_SOFT = { d: 'ď', t: 'ť', n: 'ň' };  // d, t, n: soft or hard by how they sound
const CZ_RIGHT_ADVANCE_MS = 700;                 // the filled-in word stays a moment
const CZ_EXPLAIN_AFTER_MS = 450;                 // the wrong and the right button show first
const CZECH_GAME_BUTTONS = [...document.querySelectorAll('.czech-game')];
const homeTitle = document.getElementById('homeTitle');
const homeWelcome = document.getElementById('homeWelcome');
const czExplain = document.getElementById('czExplain');
const czExplainWord = document.getElementById('czExplainWord');
const czExplainRule = document.getElementById('czExplainRule');
const czNextBtn = document.getElementById('czNextBtn');
const czReview = document.getElementById('czReview');
const czReviewTitle = document.getElementById('czReviewTitle');
const czReviewList = document.getElementById('czReviewList');
let czRound = [];            // item ids of this run, in order
let czItem = null;           // the item asked now
let czMistakes = [];         // [{ id, chosen }] of this run
let czExplained = null;      // { item, chosen } while the explanation is shown
let czExplainTimeout = null;

function isCzechGame(game) {
    return Object.prototype.hasOwnProperty.call(CZ_GAMES, game);
}

function czOptions(item) {
    if (item.cat === 'iy') return ['i', 'í', 'y', 'ý'];
    if (item.cat === 'uu') return ['u', 'ú', 'ů'];
    if (item.cat === 'bpvm') return czConsonantBefore(item) === 'm' ? ['ě', 'ně'] : ['ě', 'je'];
    return CZ_PAIR_SETS.find(pair => pair.includes(item.answer));
}

// The consonant just before the blank ("ch" is one)
function czConsonantBefore(item) {
    const before = item.text.slice(0, item.text.indexOf('_')).toLowerCase();
    return before.endsWith('ch') ? 'ch' : before.slice(-1);
}

function czFilled(item, letter = item.answer) {
    return item.text.replace('_', letter);
}

// Why the answer is right: a sentence in the language of the page and its
// Czech bits (letters, syllables, check words). With the right letter but the
// wrong length, it says just that.
function czWhy(item, chosen) {
    const a = item.answer;
    if (item.cat === 'iy') {
        const base = x => (x === 'í' ? 'i' : x === 'ý' ? 'y' : x);
        if (chosen && chosen !== a && base(chosen) === base(a)) return [a === 'í' || a === 'ý' ? 'cz.why.long' : 'cz.why.short', { a }];
        const c = czConsonantBefore(item);
        if (CZ_SOFT.includes(c)) return ['cz.why.soft', { c, letters: 'i/í' }];
        if (CZ_HARD.includes(c)) return ['cz.why.hard', { c, letters: 'y/ý' }];
        return base(a) === 'i'
            ? ['cz.why.dtnSoft', { cv: c + a, sv: CZ_DTN_SOFT[c] + a, letters: 'i/í' }]
            : ['cz.why.dtnHard', { cv: c + a, letters: 'y/ý' }];
    }
    if (item.cat === 'uu') {
        if (a === 'u') return ['cz.why.short', { a }];
        const i = item.text.indexOf('_');
        const place = i === 0 || item.text[i - 1] === ' ' ? 'Start' : i === item.text.length - 1 || item.text[i + 1] === ' ' ? 'End' : 'Inside';
        return [chosen === 'u' ? `cz.why.uLong${place}` : `cz.why.u${place}`, { a }];
    }
    if (item.cat === 'bpvm') {
        const c = czConsonantBefore(item);
        if (a === 'je') return ['cz.why.prefixJ', { split: item.check, s: c + 'je' }];
        if (a === 'ně') return ['cz.why.mne', { check: item.check, s: 'mně' }];
        return c === 'm' ? ['cz.why.meE', { mn: 'mn', s: 'mě' }] : ['cz.why.bpvE', { s: c + 'ě' }];
    }
    return ['cz.why.pair', { check: item.check, a }];
}

function czReason(item, chosen) {
    const [key, vars] = czWhy(item, chosen);
    return t(key, vars);
}

function czReasonNodes(item, chosen) {
    const [key, vars] = czWhy(item, chosen);
    return tCzech(key, vars);
}

// A translation whose {placeholders} are Czech letters or words, as nodes: those
// are marked Czech, so a screen reader says them the Czech way on an English page
function tCzech(key, vars) {
    return t(key).split(/\{(\w+)\}/).map((part, i) => {
        if (i % 2 === 0) return part;
        const span = document.createElement('span');
        span.lang = 'cs';
        span.textContent = String(vars[part]);
        return span;
    });
}

// The instruction above the word
function czInstruction(item) {
    const [x, y] = czOptions(item);
    const letters = { iy: { x: 'i/í', y: 'y/ý' }, uu: { x: 'u', y: 'ú', z: 'ů' }, pairs: {}, bpvm: { x, y } }[item.cat];
    return tCzech(`cz.q.${item.cat}`, letters);
}

// The phrase as nodes, the blank filled with a highlighted letter (or an empty slot)
function czPhraseNodes(item, letter, slotClass) {
    const [before, after] = item.text.split('_');
    const slot = document.createElement(letter ? 'b' : 'span');
    slot.className = slotClass;
    slot.textContent = letter || '?';
    // the word with the blank never breaks across lines
    const start = before.lastIndexOf(' ') + 1;
    const endAt = after.indexOf(' ');
    const end = endAt === -1 ? after.length : endAt;
    const word = document.createElement('span');
    word.className = 'cz-word';
    word.append(before.slice(start), slot, after.slice(0, end));
    return [before.slice(0, start), word, after.slice(end)];
}

function czLoadIds(key) {
    try {
        const ids = JSON.parse(lsGet(key) || '[]');
        return Array.isArray(ids) ? ids.filter(id => CZ_BY_ID.has(id)) : [];
    } catch (_) {
        return [];
    }
}

// Saved like a choice: when the storage can't take it (full, blocked), it is kept
// for this visit, so the rounds still move on and mistakes still come back
function czSaveIds(key, ids) {
    saveChoice(key, JSON.stringify(ids));
}

// A pass through a kind's words: every word of it not asked yet (those waiting for their
// turn too) and, in the same record, the highest word number the pass knew - ["#141",
// "iy07", ...] - so the two are always written together. With no record yet, the pass an
// older version kept is carried over once (it knew CZ_PASS_KNEW), the words it had waiting
// first.
function czLoadPass(cat) {
    const read = key => {
        try {
            return JSON.parse(lsGet(key));
        } catch (_) {
            return null;
        }
    };
    const ofKind = raw => [...new Set(raw.filter(id => CZ_BY_ID.has(id) && CZ_BY_ID.get(id).cat === cat))];
    const record = read(CZ_PASS_PREFIX + cat);
    if (Array.isArray(record)) {
        const mark = record.find(x => typeof x === 'string' && /^#\d+$/.test(x));
        return { saved: true, knew: mark ? Number(mark.slice(1)) : Infinity, ids: ofKind(record) };
    }
    const older = read(CZ_DECK_KEYS[cat] || CZ_DECK_PREFIX + cat);
    if (!Array.isArray(older)) return { saved: false, knew: 0, ids: [] };
    const waited = read(CZ_OLD_WAIT_KEY);
    const first = waited && typeof waited === 'object' && !Array.isArray(waited) ? Object.keys(waited) : [];
    return { saved: true, knew: CZ_PASS_KNEW[cat] || 0, ids: ofKind([...first, ...older]) };
}

// (the test: every kind)
function czOfKind(item, cat) {
    return cat === 'test' || item.cat === cat;
}

// The words answered wrong, until answered right. With no list of its own yet, the one an
// older version kept is carried over; such a version keeps writing only its own (it drops
// the words it does not know from any list it saves)
function czLoadMissed() {
    return czLoadIds(lsGet(CZ_MISSED_KEY) === null ? CZ_OLD_MISSED_KEY : CZ_MISSED_KEY);
}

function czMissedIn(cat) {
    return czLoadMissed().filter(id => CZ_BY_ID.has(id) && czOfKind(CZ_BY_ID.get(id), cat));
}

// Questions that give each other away: what one puts on the screen - its
// phrase, its filled word once answered, its check word after a mistake -
// shows the other's answer with its neighbours in the word, vowel length aside
// ("ry_ka" the y of "r_ba"; once answered, "kytice" the y of "k_tka" and "loď"
// the ď of "lo_ka"; "chleba" the b of "chlé_"; the check word "sedí" the í of
// "sed_"). They never come in the same round; the other one waits for a later
// round. (Worked out once, when needed.)
const CZ_SHORT = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ů': 'u', 'ý': 'y' };
const czShort = text => text.replace(/[áéíóúůý]/g, ch => CZ_SHORT[ch]);
let czClues = null;
function czGiveaways() {
    if (czClues) return czClues;
    const info = CZ_ITEMS.map(item => {
        const blank = item.text.indexOf('_');
        const filled = czFilled(item).toLowerCase();
        const start = item.text.lastIndexOf(' ', blank) + 1;
        const end = (filled + ' ').indexOf(' ', blank);
        const word = filled.slice(start, end), at = blank - start, answer = item.answer.toLowerCase();
        // (the answer with letters of its word around it: at least two of them)
        const clues = [[2, 1], [1, 2], [3, 0], [0, 3]].map(([before, after]) => {
            const from = Math.max(0, at - before);
            return { text: czShort(word.slice(from, at + answer.length + after)), offset: at - from };
        }).filter(clue => clue.text.length >= answer.length + 2);
        // (and its word from the start up to the answer, at the start of a word: "vje" of vjet in "vjezd")
        const head = czShort(word.slice(0, Math.max(3, at + answer.length)));
        if (head.length >= 3) clues.push({ text: head, offset: at, wordStart: true });
        return { id: item.id, answer, clues, shown: item.check ? `${filled} ${item.check.toLowerCase()}` : filled };
    });
    // (all of it in one text, searched once per clue: quick even on a phone)
    const all = info.map(q => q.shown).join('\n');
    const allShort = czShort(all);
    const owner = [];
    info.forEach((q, i) => {
        for (let k = 0; k <= q.shown.length; k++) owner.push(i);
    });
    czClues = new Map(info.map(q => [q.id, new Set()]));
    info.forEach((a, ai) => a.clues.forEach(clue => {
        for (let p = allShort.indexOf(clue.text); p >= 0; p = allShort.indexOf(clue.text, p + 1)) {
            const bi = owner[p], at = p + clue.offset;
            if (bi === ai || all.slice(at, at + a.answer.length) !== a.answer) continue; // (its own; another letter there)
            if (clue.wordStart && p > 0 && !/[\s-]/.test(all[p - 1])) continue;
            czClues.get(a.id).add(info[bi].id);
            czClues.get(info[bi].id).add(a.id);
        }
    }));
    return czClues;
}

function czClash(id, round) {
    return round.some(other => czGiveaways().get(id).has(other));
}

// Words left out of a round for a word they would give away, and how many
// rounds each has waited
function czLoadWaits() {
    try {
        const waits = JSON.parse(lsGet(CZ_WAIT_KEY) || '{}');
        if (!waits || typeof waits !== 'object' || Array.isArray(waits)) return {};
        return Object.fromEntries(Object.entries(waits).filter(([id, n]) => CZ_BY_ID.has(id) && Number.isFinite(n) && n > 0));
    } catch (_) {
        return {};
    }
}

// A round: so many words of each kind (sizes: { kind: how many } - one kind in
// practice, all four in the test). First the words that had to wait, the
// longest waiting first; then the words answered wrong before, the oldest
// first whatever their kind, up to half of each kind's share (one answered
// wrong again goes to the back); then each kind's pass. A word that would give
// away one already in the round waits for a later round, and each round it
// waits it comes before more of the others - so none is left out for good:
// two that give each other away take turns, however often one comes back wrong.
function czBuildRound(sizes) {
    const round = [], left = [];
    const waits = czLoadWaits();
    const waiting = Object.keys(waits);
    const ofKind = cat => round.filter(id => CZ_BY_ID.get(id).cat === cat).length;
    const offer = id => {
        if (round.includes(id) || left.includes(id)) return false;
        if (czClash(id, round)) left.push(id);
        else round.push(id);
        return round.includes(id);
    };
    waiting.slice().sort((a, b) => waits[b] - waits[a]).forEach(id => {
        const cat = CZ_BY_ID.get(id).cat;
        if (sizes[cat] && ofKind(cat) < sizes[cat]) offer(id);
    });
    const missedOf = {};
    czMissedIn('test').forEach(id => {
        const cat = CZ_BY_ID.get(id).cat;
        if (!sizes[cat] || (missedOf[cat] || 0) >= Math.ceil(sizes[cat] / 2) || ofKind(cat) >= sizes[cat]) return;
        if (offer(id)) missedOf[cat] = (missedOf[cat] || 0) + 1;
    });
    Object.keys(sizes).forEach(cat => czFillFromPass(cat, sizes[cat], round, left, waiting));
    // (those left out wait a round more, those asked no more, the others keep their place)
    const next = {};
    left.forEach(id => { next[id] = (waits[id] || 0) + 1; });
    waiting.forEach(id => { if (!round.includes(id) && !(id in next)) next[id] = waits[id]; });
    saveChoice(CZ_WAIT_KEY, JSON.stringify(next));
    return round;
}

// A kind's share from its pass: a shuffled pass through all its words, saved,
// so the rounds - practice and test alike - go through every word before any
// comes again. The saved pass holds every word of it not asked yet, those
// waiting for their turn too (the waiting list only says which come first), so
// a word left out of a round is never lost from it. When the pass runs out, a
// new one starts with the words of this round at its end, so none is left out.
function czFillFromPass(cat, size, round, left, waiting) {
    const all = CZ_ITEMS.filter(item => item.cat === cat).map(item => item.id);
    const target = Math.min(size, all.length);
    const ofKind = () => round.filter(id => CZ_BY_ID.get(id).cat === cat).length;
    const pass = czLoadPass(cat);
    let deck = pass.ids;
    const number = id => Number(id.replace(/\D/g, ''));
    if (pass.saved) {
        // (words added to the game since the pass began join it at once, anywhere in it: the words
        // are numbered in order, so those above the highest number the pass knew are new)
        all.filter(id => number(id) > pass.knew && !deck.includes(id) && !round.includes(id))
            .forEach(id => deck.splice(Math.floor(Math.random() * (deck.length + 1)), 0, id));
        // (and a word waiting for its turn is in the pass, at its front)
        waiting.filter(id => CZ_BY_ID.get(id).cat === cat && !deck.includes(id) && !round.includes(id))
            .forEach(id => deck.unshift(id));
    }
    const kept = [], tail = [];
    for (let refills = 0; ofKind() < target;) {
        if (!deck.length) {
            if (refills++ === 2) break; // (only words that would give others away are left)
            tail.push(...all.filter(id => round.includes(id) && !tail.includes(id)));
            deck = shuffleInPlace(all.filter(id => !round.includes(id) && !kept.includes(id))).concat(tail);
        }
        const id = deck.shift();
        if (round.includes(id) || kept.includes(id)) continue;
        if (left.includes(id) || waiting.includes(id) || czClash(id, round)) {
            // (not now - it would give a word of this round away, or waits for its turn: it stays
            // in the pass, at its front)
            if (!left.includes(id) && !waiting.includes(id)) left.push(id);
            kept.push(id);
            continue;
        }
        round.push(id);
    }
    // (a word asked in this round is done in this pass - unless the round began a new one)
    deck = deck.filter(id => tail.includes(id) || !round.includes(id));
    czSaveIds(CZ_PASS_PREFIX + cat, ['#' + Math.max(...all.map(number)), ...kept, ...deck]); // (the mark first: see czLoadPass)
}

// A practice round: words of its kind. The test: every kind mixed, more of the
// kinds the child gets wrong more often (see czTestQuotas).
function czPracticeRound(cat) {
    return shuffleInPlace(czBuildRound(cat === 'test' ? czTestQuotas() : { [cat]: CZ_ROUND }));
}

// How many words of each kind the test asks: in proportion to how often the
// child got that kind wrong lately (smoothed, so a kind not played yet counts
// as average), every kind at least CZ_TEST_MIN_PER_KIND
function czTestQuotas() {
    const weights = CZ_KINDS.map(cat => {
        const st = czStatsOf(cat);
        return (st.answered - st.right + 1) / (st.answered + 3);
    });
    const sum = weights.reduce((a, b) => a + b, 0);
    const quotas = weights.map(w => Math.max(CZ_TEST_MIN_PER_KIND, Math.round(CZ_TEST_SIZE * w / sum)));
    let total = quotas.reduce((a, b) => a + b, 0);
    while (total !== CZ_TEST_SIZE) {
        // (rounding: the largest quota gives or takes the difference)
        const largest = quotas.indexOf(Math.max(...quotas));
        quotas[largest] += total < CZ_TEST_SIZE ? 1 : -1;
        total += total < CZ_TEST_SIZE ? 1 : -1;
    }
    return Object.fromEntries(CZ_KINDS.map((cat, i) => [cat, quotas[i]]));
}

// The last answers of each kind (right or wrong), for the menu and the test
function czLoadStats() {
    try {
        const all = JSON.parse(lsGet(CZ_STATS_KEY) || '{}');
        return all && typeof all === 'object' && !Array.isArray(all) ? all : {};
    } catch (_) {
        return {};
    }
}

function czStatsOf(cat) {
    const marks = String(czLoadStats()[cat] || '').replace(/[^01]/g, '').slice(-CZ_STATS_KEEP);
    return { answered: marks.length, right: marks.split('1').length - 1 };
}

function czNoteStats(cat, right) {
    const all = czLoadStats();
    const marks = String(all[cat] || '').replace(/[^01]/g, '');
    all[cat] = (marks + (right ? '1' : '0')).slice(-CZ_STATS_KEEP);
    saveChoice(CZ_STATS_KEY, JSON.stringify(all));
}

// A word answered wrong comes back in practice until it is answered right
function czNoteAnswer(item, right) {
    const missed = czLoadMissed().filter(id => id !== item.id);
    if (!right) missed.push(item.id);
    czSaveIds(CZ_MISSED_KEY, missed);
}

// A Czech card on the menu: no level or mode to pick, the round starts at once
function startCzechRun() {
    const cat = CZ_GAMES[selectedGame];
    playMode = 'questions';
    czRound = czPracticeRound(cat);
    questionTarget = czRound.length;
    czMistakes = [];
    czExplained = null;
    updateGameTitles();
    startGame('click');
}

// The question: the phrase on a card, the blank as an empty slot
function arrangeCzechCard() {
    resetBoard('layout-czech');
    const card = document.createElement('div');
    card.className = 'cz-card';
    const phrase = document.createElement('p');
    phrase.className = 'cz-phrase';
    phrase.lang = 'cs';
    phrase.append(...czPhraseNodes(czItem, '', 'cz-slot'));
    const slot = phrase.querySelector('.cz-slot');
    slot.setAttribute('aria-label', t('cz.aria.blank'));
    slot.setAttribute('role', 'img');
    card.appendChild(phrase);
    fruitsContainer.appendChild(card);
}

function czSetSlot(letter, state) {
    const slot = fruitsContainer.querySelector('.cz-slot');
    if (!slot) return;
    slot.textContent = letter;
    slot.removeAttribute('role');
    slot.removeAttribute('aria-label');
    slot.classList.remove('is-right', 'is-wrong');
    slot.classList.add(state);
}

// An answer to a Czech question (checkAnswer has already counted it)
function czAnswer(chosenLetter, isCorrect, chosen, rightBtn) {
    const item = czItem;
    showFeedback = true;
    czNoteAnswer(item, isCorrect);
    czNoteStats(item.cat, isCorrect);
    czSetSlot(chosenLetter, isCorrect ? 'is-right' : 'is-wrong');
    if (isCorrect) {
        playCorrectSound();
        score += 1;
        updateScore();
        if (chosen) chosen.classList.add('is-correct');
        scheduleNextQuestion(CZ_RIGHT_ADVANCE_MS);
        return;
    }
    playIncorrectSound();
    czMistakes.push({ id: item.id, chosen: chosenLetter });
    if (chosen) chosen.classList.add('is-wrong');
    // The right letter, then the right spelling and why, until the child goes on
    if (rightBtn) rightBtn.classList.add('is-correct');
    speakCzech(czFilled(item));
    czExplainTimeout = setTimeout(() => {
        czExplainTimeout = null;
        if (runEnded || czItem !== item) return;
        czSetSlot(item.answer, 'is-right');
        czExplained = { item, chosen: chosenLetter };
        renderCzechExplain();
        optionsContainer.classList.add('hidden');
        czExplain.classList.remove('hidden');
        czNextBtn.focus({ preventScroll: true });
    }, CZ_EXPLAIN_AFTER_MS);
}

function renderCzechExplain() {
    const { item, chosen } = czExplained;
    czExplainWord.replaceChildren(...czPhraseNodes(item, item.answer, 'cz-letter'));
    czExplainRule.replaceChildren(...czReasonNodes(item, chosen));
}

function hideCzechExplain() {
    if (czExplainTimeout) { clearTimeout(czExplainTimeout); czExplainTimeout = null; }
    czExplained = null;
    czExplain.classList.add('hidden');
}

function czContinue() {
    if (!czExplained || runEnded) return;
    hideCzechExplain();
    generateQuestion(); // (it shows the answers again)
}

// The Czech words are read by a Czech voice; without one they are not read at
// all (another voice would mangle them)
function speakCzech(text) {
    if (!voiceFor('cs')) return;
    speakText(text, 'cs');
}

// Results: every mistake with the right spelling and why
function renderCzechReview(r) {
    czReviewTitle.textContent = r.mistakes.length ? t('cz.review.title') : t('cz.review.allRight');
    czReviewList.replaceChildren(...r.mistakes.map(({ id, chosen }) => {
        const item = CZ_BY_ID.get(id);
        const li = document.createElement('li');
        const word = document.createElement('span');
        word.className = 'cz-review-word';
        word.lang = 'cs';
        word.append(...czPhraseNodes(item, item.answer, 'cz-letter'));
        const why = document.createElement('span');
        why.className = 'cz-review-why';
        why.append(...czReasonNodes(item, chosen), ' · ', ...tCzech('cz.review.chose', { a: chosen }));
        li.append(word, why);
        return li;
    }));
}

// The Czech menu: each kind's share of right answers lately, and how many of
// its words wait to be practised again
function renderCzechMenu() {
    CZECH_GAME_BUTTONS.forEach(btn => {
        const cat = CZ_GAMES[btn.dataset.game];
        const stats = btn.querySelector('.cz-stats');
        if (stats) {
            const st = czStatsOf(cat);
            const shown = st.answered >= CZ_STATS_SHOW_AFTER;
            stats.classList.toggle('hidden', !shown);
            stats.textContent = shown ? t('cz.stats', { p: Math.round(100 * st.right / st.answered) }) : '';
            if (shown) stats.title = t('cz.stats.title', { n: st.answered }); else stats.removeAttribute('title');
        }
        const badge = btn.querySelector('.cz-review-badge');
        if (!badge) return;
        const n = czMissedIn(cat).length;
        badge.classList.toggle('hidden', n === 0);
        badge.textContent = n ? tn('cz.review', n) : '';
    });
    // (which words give each other away: worked out while the child chooses, not on the tap)
    if (!czClues) {
        if (window.requestIdleCallback) requestIdleCallback(czGiveaways, { timeout: 2000 });
        else setTimeout(czGiveaways, 50);
    }
}

CZECH_GAME_BUTTONS.forEach(btn => btn.addEventListener('click', () => chooseGame(btn.dataset.game)));
czNextBtn.addEventListener('click', czContinue);

// ============================================================
// Addresses: the pages a child comes back to have their own address, like the
// football game: #/ (the three parts), #/male-deti, #/vetsi-deti and
// #/cestina. A task (a game's level and mode, the game, its results, a Czech
// round) has none - it would start again anyway: the address stays its part's,
// and reopening it, reloading, or opening the game without an address (which
// goes back where the child was last time on this device) shows that part's
// menu. The browser's Back goes up a level: from a task to its menu (a task
// has a step of its own in the history, with its menu's address), from a menu
// to the start. Every press moves - steps that would show the same page again
// are passed over - but never out of the game.
// ============================================================
const ROUTE_GROUPS = { little: 'male-deti', bigger: 'vetsi-deti', czech: 'cestina' };
const LAST_ROUTE_KEY = 'km_last_route';
let applyingRoute = false; // (opening an address: the screens change without new history entries)
let routeStep = 0;         // this page's step in the browser history (kept in history.state.km)
let handledStep = '';      // (popstate and hashchange often both come for one step)
let skippedSteps = 0;      // (steps passed over in one press of Back or Forward)

function currentRoute() {
    return location.hash.replace(/^#\/?/, '').replace(/\/+$/, '');
}

// Where the game opens: the address (#/ is the three parts), or, when opened
// without one, where the child was last time on this device
function startingRoute() {
    return location.hash ? currentRoute() : (lsGet(LAST_ROUTE_KEY) || '');
}

// Only the tab the child has in front of them remembers its page: one in the
// background (a timed game can run out there) leaves the page of the tab in
// use, and remembers its own once it is shown again
function rememberRoute(route) {
    if (document.visibilityState !== 'hidden') saveChoice(LAST_ROUTE_KEY, route);
}

// A history step for a route: a new one, or this one rewritten. A task's step
// has its menu's address and says it is a task's (history.state.task).
function writeRoute(route, replace, task) {
    if (!replace) routeStep += 1;
    handledStep = `${routeStep}|#/${route}`;
    try { history[replace ? 'replaceState' : 'pushState']({ km: routeStep, task: !!task }, '', `#/${route}`); } catch (_) {}
}

function onTaskStep() {
    const state = history.state;
    return !!(state && state.task);
}

// The address of what is on screen: the start or a part's menu (a task has its part's)
function routeOfScreen() {
    const group = ROUTE_GROUPS[selectedAgeGroup];
    return group && ageSelectionScreen.classList.contains('hidden') ? group : '';
}

// A task on screen: a game's level and mode, the game or its results
function inTask() {
    return routeOfScreen() !== '' && homeScreen.classList.contains('hidden');
}

// (what Back and Forward compare: a task counts as a page of its own)
function pageOfScreen() {
    return routeOfScreen() + (inTask() ? ' task' : '');
}

// After every change of screen (showOnly): the address follows and is
// remembered. A task opened from its menu gets a step of its own, so Back
// leaves it for the menu; that step serves every task played from the menu
// after it (Home and "Back to Games" add nothing).
function syncRoute() {
    if (applyingRoute) return; // (openRoute sets the address once, at its end)
    const route = routeOfScreen();
    rememberRoute(route);
    if (currentRoute() !== route) writeRoute(route, false, false);
    if (inTask() && !onTaskStep()) writeRoute(route, false, true);
}

// Opens a page by its address (Back and Forward, an edited, shared or
// remembered address): a part's menu or the start. A task on screen is left
// as with Home (an endless run keeps its result); a task's old address
// (#/vetsi-deti/nasobeni, #/cestina/i-y/…) leads to its part's menu, an
// unknown one to the start.
function openRoute(route) {
    const group = Object.keys(ROUTE_GROUPS).find(g => ROUTE_GROUPS[g] === route.split('/')[0]);
    if ((group ? ROUTE_GROUPS[group] : '') !== routeOfScreen() || inTask()) {
        applyingRoute = true;
        try {
            if (!gameScreen.classList.contains('hidden')) goHome(); // (an endless run keeps its result)
            if (group) selectAgeGroup(group);
            else goToAgeSelection();
        } finally {
            applyingRoute = false;
        }
    }
    showRouteOfScreen();
}

// The address bar shows where the child really is (after a redirect, too)
function showRouteOfScreen() {
    const route = routeOfScreen();
    rememberRoute(route);
    const state = history.state;
    if (location.hash !== `#/${route}` || !state || state.km !== routeStep) writeRoute(route, true, onTaskStep());
}

// Back, Forward, or an address typed in: open that step's page (a task's step
// opens its menu - the task isn't started again). A step that would change
// nothing (a menu left twice) is passed over in the same direction, so every
// press of Back or Forward moves the child - never back out of the game, though.
function onHistoryStep() {
    const state = history.state;
    const step = state && typeof state.km === 'number' ? state.km : null;
    if (`${step === null ? routeStep : step}|${location.hash}` === handledStep) return;
    let direction = 0;
    if (step === null) { // an address typed in or followed: a new step
        routeStep += 1;
        try { history.replaceState({ km: routeStep, task: false }, '', location.href); } catch (_) {}
    } else {
        direction = Math.sign(step - routeStep);
        routeStep = step;
    }
    handledStep = `${routeStep}|${location.hash}`;
    const before = pageOfScreen();
    openRoute(currentRoute());
    if (direction && pageOfScreen() === before && skippedSteps < 60 && (direction > 0 || routeStep > 0)) {
        skippedSteps += 1;
        history.go(direction);
    } else {
        skippedSteps = 0;
    }
}

window.addEventListener('popstate', onHistoryStep);
window.addEventListener('hashchange', onHistoryStep);

// The remembered page is the one the child really has in front of them: also
// after Back from another page brings this one back from the browser's cache
// (the game doesn't start again then), and when this tab is shown again among
// others. (Not when a page is left: a tab closed in the background would
// overwrite the page of the tab in use.)
window.addEventListener('pageshow', (e) => {
    if (!e.persisted) return; // (a fresh load: init)
    const state = history.state;
    if (state && typeof state.km === 'number') routeStep = state.km;
    handledStep = `${routeStep}|${location.hash}`;
    showRouteOfScreen();
});
document.addEventListener('visibilitychange', () => rememberRoute(routeOfScreen()));

// Language switcher wiring
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
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
    try {
        // Arrived from an outdated cached page (see the top of this file): tidy the address
        if (/[?&]fresh=/.test(location.search)) {
            try { history.replaceState(null, '', location.pathname + location.hash); } catch (_) {}
        }

        // Apply language first so all subsequent text uses the right locale
        currentLang = loadLang();
        applyTranslations();

        updateScore();
        updateTimer();
        updateSettingsUI();
        updateProgressPanel();

        // The page of the address, or where the child was last time on this device
        const startRoute = startingRoute();
        const state = history.state;
        routeStep = state && typeof state.km === 'number' ? state.km : 0; // (a reload keeps its step)
        applyingRoute = true;
        showOnly(ageSelectionScreen);
        applyingRoute = false;
        openRoute(startRoute);
        // The little kids' transition flowers, drawn while the page is idle
        scheduleBloomSprites();
    } finally {
        // Ready (language, page, colours): the page shows - it stayed hidden till now,
        // see .booting in styles.css
        document.documentElement.classList.remove('booting');
    }
}

// Start the app
init();
