# 🌟 Family Feud - School Edition Interactive Game Show

A responsive, authentic TV game show website designed for hosting Family Feud events for school kids, featuring procedural Web Audio sound effects, 3D flip-board animations, team scorecards, multi-stage strike buzzer sequences, undo/fallback support, and a built-in question editor.

---

## 🚀 Quick Start

### Option 1: Double-Click or Open Directly
Simply open `index.html` in any web browser (Chrome, Safari, Firefox, Edge).

### Option 2: Run the Launch Script
In your terminal, navigate to this folder and run:
```bash
./start.sh
```
Or start a local python server:
```bash
python3 -m http.server 8080
```
Then visit: `http://localhost:8080`

---

## 🎮 Game Show Workflow

1. **Start Screen**:
   - Matches the TV game show intro with the iconic golden oval marquee, blue LED grid, and "START" button.
2. **Choose Question Set**:
   - Clicking **START** brings up the **10 Question Sets** selector.
   - Choose any set from 1 to 10 to begin that round.
3. **Gameplay Screen**:
   - The question appears at the top in bold letters.
   - The game board displays 6 numbered blue slots arranged in 2 columns of 3 rows:
     - **Left Column**: Slots 1, 2, 3
     - **Right Column**: Slots 4, 5, 6
4. **Reveal Answers & Points**:
   - Press keys **`1` through `6`** (or click the card with your mouse) to reveal that option and its point value with a 3D flip animation and the classic bell chime ("Ding!").
   - Points are automatically banked in the **ROUND BANK**.
5. **Strikes & Buzzer Sequence**:
   - **`x`** (1st press): 1st strike **X** appears with buzzer sound.
   - **`x`** (2nd press): 2nd strike **XX** appears with buzzer sound.
   - **`x`** (3rd press): 3rd strike **XXX** appears with loud buzzer sound.
   - **`x`** (4th press): Resets back to 1st strike **X**!
   - **`Shift + X`**: Steal strike (only **1 X** appears).
6. **Fallback / Undo (`u`)**:
   - Press **`u`** (or click the on-screen **Undo** button) to undo the most recent action (un-reveal an answer, revert strikes, or reverse score changes).

---

## ⌨️ Keyboard Shortcuts Reference

| Key | Action | Description |
| :--- | :--- | :--- |
| **`1` – `6`** | Reveal Option 1–6 | Flips card, plays bell chime, banks points |
| **`x`** | Strike Cycle | Cycles 1 Strike (X) ➜ 2 Strikes (XX) ➜ 3 Strikes (XXX) ➜ Resets to 1 (X) |
| **`Shift + X`** | Single Strike | Displays single X steal strike overlay |
| **`u`** | Undo / Fall Back | Reverts the last answer reveal, strike, or score |
| **`←` / `→`** | Prev / Next Question | Step through the 7 questions in a set (rolls into the next set) |
| **`s`** | Set Selector | Open the 10 Question Sets picker |
| **`h`** | Host Cheat Sheet | Toggle secret answers drawer for the host |
| **`f`** | Fullscreen | Toggle fullscreen mode for projectors/smartboards |
| **`m`** | Mute Sound | Toggle audio effects ON / OFF |
| **`Esc`** | Dismiss | Close strike overlay or active modal |

---

## 🏆 Scoring & Team Controls

- **Team 1 (Amber Panel)** & **Team 2 (Green Panel)**:
  - Click on the team name to rename it (e.g., "TEAM LIONS" vs "TEAM TIGERS").
  - Use **▲** and **▼** arrows to adjust scores by ±1 point.
  - Click **RESET** to reset a team's score.
  - Click **+ BANK** to award the current round's banked points to that team with crowd applause!
- **Center Controls**:
  - **Sad Face**: Plays "Aw / Buzzer" sound.
  - **Red Strike X**: Triggers the strike cycle.
  - **Happy Face**: Plays cheering & applause sound.
  - **SCOREBOARD**: Opens the full head-to-head leaderboard with a confetti celebration button.

---

## ✏️ Question Manager (Custom Questions)

- Click **✏️ Edit Questions** on the start screen or access it during the game.
- You can edit any of the 10 sets (questions, answers, points).
- Save changes directly into browser storage (`localStorage`).
- Export and import question sets as JSON files.
