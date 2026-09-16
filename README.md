# Kids Math Game — Web Version

A fun and educational math game for kids, featuring counting, arithmetic, comparisons, and matching games with gamification, sounds, and bilingual support.

## Features

### Game Modes
- **Fruit Counting** — count fruits displayed in circles and pick the correct number
- **Addition** — simple addition problems appropriate for the selected age
- **Multiplication / Division** — for older kids
- **Which Group Has More?** — compare two groups and pick the larger one
- **Match Number to Fruits** — match a number to the correct group of fruits

### Age-Based Selection
- Game mode and difficulty adapt to the selected age group
- Younger children get simpler counting games; older children get arithmetic

### Gamification
- **Streak tracking** — consecutive correct answer streaks
- **Daily goal** — set and track a daily practice goal
- **Calendar view** — see which days you practiced
- **Total stats** — cumulative correct answers and games played

### Scoring & Progression
- Dynamic scoring — points start at 10 and decrease every 2 seconds
- Best score tracking per game mode
- Play Again flow with result screen

### Sound & Feedback
- Text-to-speech — questions and feedback are read aloud
- Sound effects for correct / incorrect answers

### Language Support
- **EN / CS language switcher** — full i18n for all UI text and spoken prompts

### Deployment
- GitHub Actions auto-deploy to Server 3 on push to `main`

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

- Each question has a **20-second timer**
- 4 multiple-choice answers per question
- Correct answers earn up to 10 points (points decrease as the timer counts down)
- Auto-advance to the next question after feedback
- Incorrect answer or timeout: no points, show correct answer

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

**Last reflected change:** 2026-09-16T23:08:39Z

**Project status:** Active — git remote: https://github.com/trueshpen/math_game
<!-- AUTO-GENERATED: END -->
