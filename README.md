# Kids Math Game — Web Version

A fun and educational learning game for kids. The start screen offers three parts: **Matematika / Math** for little kids (3–6) and bigger kids (7–10) — counting, arithmetic, comparisons, and matching games — and **Čeština / Czech**, a spelling-practice section for bigger kids. It features gamification, sounds, deep-linkable pages, and full EN/CS bilingual support.

## Features

### Game Modes
- **Fruit Counting** — count fruits displayed in a measured grid (each fruit gets its own cell) and pick the correct number
- **Addition / Subtraction** — simple arithmetic appropriate for the selected age
- **Multiplication / Division** — for older kids; problem-only (no fruit pictures)
- **Which Group Has More?** — compare two groups and pick the larger one
- **Match Number to Fruits** — match a number to the correct group of fruits

### Times-Table Picker (Multiplication & Division)
- Play-mode screen offers "pick the numbers you want to practise" with checkboxes 2–9
- Multiplication: each problem is a chosen number × 1..10 (either order), never the same problem twice in a row
- Division: a chosen number is the divisor and the answer is 1..10 (division within the times tables)
- Until anything is picked, all numbers 2–9 are ticked (or play by level if the choice is empty); choosing a level clears the picker
- The choice is remembered, and best scores are kept per choice; the game header shows the chosen tables (e.g. "Times tables: 3, 7")

### Endless Mode
- Available for Adding & subtracting, Multiplication and Division: play until you hit **Finish**
- HUD shows questions answered and the current success rate; a wrong answer reveals the right one and moves on
- Stars need 10+ questions for 3; each run keeps its own record (saved after every answer, resilient across reloads, dropped tabs and multiple tabs)

### Start Screen & Age-Based Selection
- The start screen presents three parts — **Matematika / Math** for little kids (3–6), **Matematika / Math** for bigger kids (7–10), and **Čeština / Czech** spelling for bigger kids — each with its age shown below and a title sized to the part's width (responsive from phones to big screens; portrait tablets stack the parts)
- Game mode and difficulty adapt to the selected age group
- Younger children get simpler counting games; older children get arithmetic with problem-only layouts
- Animated part-choice screen: the chosen part takes over the screen with a smooth transform/opacity transition — little kids' side blooms into flowers, bigger kids' side dissolves into falling green code and numbers, and the Czech part turns over like a page of a book while háčky/čárky letters fly out — before the games appear
- A **☰ Menu** button (top left, across from the language switcher) returns to the start screen

### Czech Spelling Practice (Čeština)
- A dedicated section for bigger kids covering four kinds of spelling tasks: **i/í vs y/ý** after soft and hard consonants, **u / ú / ů** (three letters — decide first whether the u is short or a long ú/ů, then where it goes), **paired consonants**, and **bě/pě/vě/mě** (including bje/vje where a prefix meets a word starting with j, and mně where a related word has an n), plus a **mixed test** (20 questions). The Czech menu lays the four topic cards out two by two with the test across the bottom
- **393 practice words**, each a blank to fill, presented in short everyday phrases
- Each topic card shows its share of right answers in the recent answers (up to the last 30, once at least 5 have been given) and which words are waiting to be practised again
- Practice rounds of 10 cycle through every word of a kind and bring back the ones answered wrong; a wrong answer shows the correct spelling and why (the applicable rule, or a check word in which the letter is heard). Newly added words join the running pass at once. Questions that would give each other away (a phrase, filled word, or check word revealing another's answer) never fall in the same round
- The **mixed test** plays like a practice round: all four kinds mixed, a wrong answer shows the correct spelling and why before you continue, and the result screen gives stars by your share of correct answers with every mistake explained — it asks more of the topics going worse lately and fewer of those going well (each topic at least 2 of the 20), and the words you missed before come first
- The words stay Czech in both languages; instructions and explanations follow the language switch, with Czech fragments marked as Czech for screen readers
- Answers verified against an independent worksheet fill-in and the Internetová jazyková příručka

### Gamification & Progress
- **Streak tracking** — consecutive correct answer streaks (a day filled in late re-joins streaks)
- **Daily goal** — set and track a daily practice goal
- **Calendar view** — see which days you practiced (played days kept ~10 years)
- **Total stats** — cumulative correct answers and games played
- **Last time & daily-best chart** — the play-mode screen shows your last run (questions, correct, %, which tables) and a chart of each day's best %, with details on hover, focus or tap

### Scoring & Progression
- Dynamic scoring — points start at 10 and decrease every 2 seconds
- Best score tracking per game mode
- Play Again flow with result screen

### Sound & Feedback
- Text-to-speech — questions and feedback are read aloud
- Sound effects for correct / incorrect answers

### Language Support
- **EN / CS language switcher** — full i18n for all UI text and spoken prompts
- Switching languages plays a "decode" animation as on-screen text resolves into the newly selected language

### Navigation & Addresses
- The pages a child returns to have their own hash addresses: `#/` (the three parts), `#/male-deti`, `#/vetsi-deti`, and `#/cestina`
- A task (a game's level and mode, the game itself, its results, a Czech round) starts fresh anyway, so it keeps its part's address; reloading, reopening, or an addressless start shows that part's menu, and old task bookmarks lead to the part's menu
- Browser **Back** goes up a level (task → its menu → start) and **Forward** does not restart a task; Back never leaves a running game
- The last page is remembered on the device (only the foreground tab), so opening the game without an address returns there; `#/` always opens the three parts

### Deployment
- GitHub Actions auto-deploy to Server 3 on push to `main`
- Versioned asset URLs (`styles.css?v=…`, `script.js?v=…`) and a stale-page guard so returning visitors always load a matching page and script after a deploy
- No flash on load — the page stays hidden until the script has set the language and the right page, showing only the opening part's colour in the meantime; it reveals anyway if the script fails or is missing (and immediately when JavaScript is off), and a page from the browser cache is swapped for the current one as soon as the script loads

---

## Getting Started

Open `index.html` in any modern web browser. No server or build step required.

```
kids_math_game/
├── index.html   # Main game
├── styles.css   # Styling
├── script.js    # Game logic
└── README.md
```

Fruits are rendered as Unicode emoji (🍎🍌🍊🍉🍍) — no image assets required.

---

## Game Rules

- Timed modes run for **20 / 25 / 30 seconds** depending on the mode
- Multiple-choice answers, or an **on-screen number pad** for typing mode (no phone keyboard covering the game)
- Correct answers earn up to 10 points (points decrease as the timer counts down)
- Auto-advance to the next question after feedback, with visual right/wrong feedback in the play area
- Incorrect answer or timeout: no points, show correct answer
- **Endless** runs instead play until you press Finish (see Game Modes above)

---

## Browser Compatibility

- Chrome / Edge (recommended)
- Firefox
- Safari
- Any modern browser with JavaScript enabled

---

## Recent Activity

<!-- AUTO-GENERATED: START -->
*Auto-maintained by the nightly README agent. This block is refreshed only when new commits land in the repo.*

**Last reflected change:** 2026-10-07T23:16:22Z

**Project status:** Active — git remote: https://github.com/trueshpen/math_game
<!-- AUTO-GENERATED: END -->
