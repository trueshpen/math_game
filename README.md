# Kids Math Game — Web Version

A fun and educational math game for kids, featuring counting, arithmetic, comparisons, and matching games with gamification, sounds, and bilingual support.

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

### Age-Based Selection
- Game mode and difficulty adapt to the selected age group
- Younger children get simpler counting games; older children get arithmetic with problem-only layouts
- Animated age-choice screen: the chosen half takes over the screen with a smooth transform/opacity transition — little kids' side blooms into flowers, bigger kids' side dissolves into falling green code and numbers before the games appear
- Age screen titles stay on a single line in both languages

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

### Deployment
- GitHub Actions auto-deploy to Server 3 on push to `main`
- Versioned asset URLs (`styles.css?v=…`, `script.js?v=…`) and a stale-page guard so returning visitors always load a matching page and script after a deploy

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

**Last reflected change:** 2026-09-25T23:12:49Z

**Project status:** Active — git remote: https://github.com/trueshpen/math_game
<!-- AUTO-GENERATED: END -->
