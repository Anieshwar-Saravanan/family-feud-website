// Family Feud Game Engine - TV Game Show Interactive Experience

class FamilyFeudApp {
  constructor() {
    this.questionSets = loadQuestionSets();
    this.currentSetIndex = 0;
    this.currentQuestionIndex = 0;
    this.revealedSlots = [false, false, false, false, false, false];
    this.roundBank = 0;
    this.team1Score = 0;
    this.team2Score = 0;
    this.team1Name = 'TEAM 1';
    this.team2Name = 'TEAM 2';
    this.currentStrikes = 0;
    this.playedSets = new Set();
    this.undoStack = [];
    this.strikeDismissTimer = null;
    this.confettiParticles = [];
    this.confettiAnimationId = null;

    this.initDOM();
    this.bindEvents();
    this.renderSetSelectionGrid();
    this.loadQuestionSet(0, false);
    this.updateScoreDisplay();
  }

  // ==========================================
  // DOM ELEMENT REFERENCES
  // ==========================================
  initDOM() {
    // Screens
    this.screenStart = document.getElementById('start-screen');
    this.screenSet = document.getElementById('set-screen');
    this.screenGame = document.getElementById('game-screen');

    // Start Screen Elements
    this.btnStart = document.getElementById('btn-start');
    this.btnOpenEditorStart = document.getElementById('btn-open-editor-start');
    this.btnShortcutsStart = document.getElementById('btn-shortcuts-start');
    this.btnSoundStart = document.getElementById('btn-sound-start');
    this.startSoundLabel = document.getElementById('start-sound-label');

    // Set Screen Elements
    this.setCardsGrid = document.getElementById('set-cards-grid');
    this.btnBackToTitle = document.getElementById('btn-back-to-title');
    this.btnStartFromFirst = document.getElementById('btn-start-from-first');

    // Gameplay Elements
    this.topSetIndicator = document.getElementById('top-set-indicator');
    this.roundBankDisplay = document.getElementById('round-bank-display');
    this.questionText = document.getElementById('current-question-text');
    this.slotsGrid = document.getElementById('board-slots-grid');
    this.hostCheatSheet = document.getElementById('host-cheat-sheet');
    this.cheatSheetItems = document.getElementById('cheat-sheet-items');

    // Top Controls
    this.btnChooseSetTop = document.getElementById('btn-choose-set-top');
    this.btnHostSheetToggle = document.getElementById('btn-host-sheet-toggle');
    this.btnCloseCheatSheet = document.getElementById('btn-close-cheat-sheet');
    this.btnUndoTop = document.getElementById('btn-undo-top');
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.topSoundIcon = document.getElementById('top-sound-icon');
    this.btnFullscreenToggle = document.getElementById('btn-fullscreen-toggle');
    this.btnHelpToggle = document.getElementById('btn-help-toggle');

    // Team 1 DOM
    this.team1NameInput = document.getElementById('team-1-name');
    this.t1Digit1 = document.getElementById('t1-digit-1');
    this.t1Digit2 = document.getElementById('t1-digit-2');
    this.btnT1Up = document.getElementById('btn-t1-up');
    this.btnT1Down = document.getElementById('btn-t1-down');
    this.btnT1Reset = document.getElementById('btn-t1-reset');
    this.btnT1Bank = document.getElementById('btn-t1-bank');

    // Team 2 DOM
    this.team2NameInput = document.getElementById('team-2-name');
    this.t2Digit1 = document.getElementById('t2-digit-1');
    this.t2Digit2 = document.getElementById('t2-digit-2');
    this.btnT2Up = document.getElementById('btn-t2-up');
    this.btnT2Down = document.getElementById('btn-t2-down');
    this.btnT2Reset = document.getElementById('btn-t2-reset');
    this.btnT2Bank = document.getElementById('btn-t2-bank');

    // Center Console DOM
    this.btnSadFace = document.getElementById('btn-sad-face');
    this.btnHappyFace = document.getElementById('btn-happy-face');
    this.btnStrikeX = document.getElementById('btn-strike-x');
    this.btnOpenScoreboard = document.getElementById('btn-open-scoreboard');
    this.sDot1 = document.getElementById('s-dot-1');
    this.sDot2 = document.getElementById('s-dot-2');
    this.sDot3 = document.getElementById('s-dot-3');

    // Navigation Buttons
    this.btnPrevQuestion = document.getElementById('btn-prev-question');
    this.btnNextQuestion = document.getElementById('btn-next-question');

    // Strike Overlay DOM
    this.strikeOverlay = document.getElementById('strike-overlay');
    this.strikeBackdrop = document.getElementById('strike-backdrop');
    this.strikeXDisplay = document.getElementById('strike-x-display');
    this.strikeSubtext = document.getElementById('strike-subtext');

    // Modals
    this.modalScoreboard = document.getElementById('modal-scoreboard');
    this.btnCloseScoreboard = document.getElementById('btn-close-scoreboard');
    this.sbT1Tag = document.getElementById('sb-t1-tag');
    this.sbT2Tag = document.getElementById('sb-t2-tag');
    this.sbT1Score = document.getElementById('sb-t1-score');
    this.sbT2Score = document.getElementById('sb-t2-score');
    this.sbProgressT1 = document.getElementById('sb-progress-t1');
    this.sbProgressT2 = document.getElementById('sb-progress-t2');
    this.sbCompletedCount = document.getElementById('sb-completed-count');
    this.sbSetsDots = document.getElementById('sb-sets-dots');
    this.btnCelebrateWinner = document.getElementById('btn-celebrate-winner');
    this.btnResetAllScores = document.getElementById('btn-reset-all-scores');

    // Question Editor Modal DOM
    this.modalEditor = document.getElementById('modal-editor');
    this.btnCloseEditor = document.getElementById('btn-close-editor');
    this.editorSetTabs = document.getElementById('editor-set-tabs');
    this.editSetTitle = document.getElementById('edit-set-title');
    this.editSetQuestion = document.getElementById('edit-set-question');
    this.editTotalPts = document.getElementById('edit-total-pts');
    this.editorAnswersGrid = document.getElementById('editor-answers-grid');
    this.btnSaveQuestions = document.getElementById('btn-save-questions');
    this.btnResetQuestions = document.getElementById('btn-reset-questions');
    this.btnExportQuestions = document.getElementById('btn-export-questions');
    this.btnImportQuestions = document.getElementById('btn-import-questions');
    this.importFileInput = document.getElementById('import-file-input');
    this.editorQuestionTabs = document.getElementById('editor-question-tabs');
    this.editingSetIndex = 0;
    this.editingQuestionIndex = 0;

    // Shortcuts Modal DOM
    this.modalShortcuts = document.getElementById('modal-shortcuts');
    this.btnCloseShortcuts = document.getElementById('btn-close-shortcuts');

    // Toast Container
    this.toastContainer = document.getElementById('toast-container');

    // Confetti Canvas
    this.confettiCanvas = document.getElementById('confetti-canvas');
    this.confettiCtx = this.confettiCanvas.getContext('2d');
    this.resizeConfettiCanvas();
  }

  // ==========================================
  // EVENT BINDINGS
  // ==========================================
  bindEvents() {
    // Window Resize
    window.addEventListener('resize', () => this.resizeConfettiCanvas());

    // Navigation Screens
    this.btnStart.addEventListener('click', () => {
      sounds.playClick();
      this.switchScreen('set');
    });

    this.btnBackToTitle.addEventListener('click', () => {
      sounds.playClick();
      this.switchScreen('start');
    });

    this.btnStartFromFirst.addEventListener('click', () => {
      sounds.playClick();
      this.loadQuestionSet(0, true);
    });

    this.btnChooseSetTop.addEventListener('click', () => {
      sounds.playClick();
      this.switchScreen('set');
    });

    // Previous & Next Question Navigation
    this.btnPrevQuestion.addEventListener('click', () => this.prevQuestion());
    this.btnNextQuestion.addEventListener('click', () => this.nextQuestion());

    // Slot Clicks (Mouse Reveal)
    for (let i = 1; i <= 6; i++) {
      const slotEl = document.getElementById(`slot-${i}`);
      if (slotEl) {
        slotEl.addEventListener('click', () => this.handleSlotClick(i));
      }
    }

    // Strike Red Button (Mouse Strike)
    this.btnStrikeX.addEventListener('click', () => this.triggerStrikeCycle());

    // Center Console Sound Buttons
    this.btnSadFace.addEventListener('click', () => {
      sounds.playAww();
      this.showToast('Sad Face: Aw! 😞');
    });

    this.btnHappyFace.addEventListener('click', () => {
      sounds.playApplause();
      this.showToast('Happy Face: Cheering! 👏');
    });

    // Team 1 Controls
    this.btnT1Up.addEventListener('click', () => this.adjustTeamScore(1, 1));
    this.btnT1Down.addEventListener('click', () => this.adjustTeamScore(1, -1));
    this.btnT1Reset.addEventListener('click', () => this.resetTeamScore(1));
    this.btnT1Bank.addEventListener('click', () => this.awardBankToTeam(1));
    this.team1NameInput.addEventListener('change', (e) => {
      this.team1Name = e.target.value.trim() || 'TEAM 1';
      this.updateScoreboardModal();
    });

    // Team 2 Controls
    this.btnT2Up.addEventListener('click', () => this.adjustTeamScore(2, 1));
    this.btnT2Down.addEventListener('click', () => this.adjustTeamScore(2, -1));
    this.btnT2Reset.addEventListener('click', () => this.resetTeamScore(2));
    this.btnT2Bank.addEventListener('click', () => this.awardBankToTeam(2));
    this.team2NameInput.addEventListener('change', (e) => {
      this.team2Name = e.target.value.trim() || 'TEAM 2';
      this.updateScoreboardModal();
    });

    // Host Cheat Sheet Toggle
    this.btnHostSheetToggle.addEventListener('click', () => this.toggleHostCheatSheet());
    this.btnCloseCheatSheet.addEventListener('click', () => this.toggleHostCheatSheet(false));

    // Undo Button
    this.btnUndoTop.addEventListener('click', () => this.performUndo());

    // Audio & Fullscreen Toggles
    this.btnSoundToggle.addEventListener('click', () => this.toggleSound());
    this.btnSoundStart.addEventListener('click', () => this.toggleSound());
    this.btnFullscreenToggle.addEventListener('click', () => this.toggleFullscreen());

    // Strike Overlay Dismiss
    this.strikeOverlay.addEventListener('click', () => this.dismissStrikeOverlay());

    // Scoreboard Modal
    this.btnOpenScoreboard.addEventListener('click', () => this.openScoreboardModal());
    this.btnCloseScoreboard.addEventListener('click', () => this.closeModal(this.modalScoreboard));
    this.btnCelebrateWinner.addEventListener('click', () => this.celebrateWinner());
    this.btnResetAllScores.addEventListener('click', () => this.resetAllScores());

    // Question Editor Modal
    this.btnOpenEditorStart.addEventListener('click', () => this.openEditorModal());
    this.btnCloseEditor.addEventListener('click', () => this.closeModal(this.modalEditor));
    this.btnSaveQuestions.addEventListener('click', () => this.saveEditorChanges());
    this.btnResetQuestions.addEventListener('click', () => this.resetDefaultQuestions());
    this.btnExportQuestions.addEventListener('click', () => this.exportQuestionsJSON());
    this.btnImportQuestions.addEventListener('click', () => this.importFileInput.click());
    this.importFileInput.addEventListener('change', (e) => this.handleImportJSON(e));

    // Keyboard Shortcuts Modal
    this.btnHelpToggle.addEventListener('click', () => this.openShortcutsModal());
    this.btnShortcutsStart.addEventListener('click', () => this.openShortcutsModal());
    this.btnCloseShortcuts.addEventListener('click', () => this.closeModal(this.modalShortcuts));

    // Global Modal Backdrop Click to Close
    [this.modalScoreboard, this.modalEditor, this.modalShortcuts].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(modal);
      });
    });

    // GLOBAL KEYBOARD LISTENER
    window.addEventListener('keydown', (e) => this.handleKeyboardShortcut(e));
  }

  // ==========================================
  // KEYBOARD CONTROLS (EXACTLY AS SPECIFIED)
  // ==========================================
  handleKeyboardShortcut(e) {
    // If typing in input or textarea, ignore hotkeys
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    const key = e.key;

    // Numbers 1 - 6: Reveal corresponding option
    if (['1', '2', '3', '4', '5', '6'].includes(key)) {
      e.preventDefault();
      const slotIndex = parseInt(key, 10);
      this.handleSlotKey(slotIndex);
      return;
    }

    // Strike Logic:
    // Shift + X: Single Strike only
    if (e.shiftKey && (key === 'X' || key === 'x')) {
      e.preventDefault();
      this.triggerSingleStealStrike();
      return;
    }

    // Plain 'x' or 'X' (without shift): Strike Sequence (1st X, 2nd XX, 3rd XXX, reset to 1 X)
    if (!e.shiftKey && (key === 'x' || key === 'X')) {
      e.preventDefault();
      this.triggerStrikeCycle();
      return;
    }

    // Key 'u' or 'U': Fall Back / Undo Operation
    if (key === 'u' || key === 'U') {
      e.preventDefault();
      this.performUndo();
      return;
    }

    // Navigation Arrows: Left / Right
    if (key === 'ArrowLeft') {
      e.preventDefault();
      this.prevQuestion();
      return;
    }
    if (key === 'ArrowRight') {
      e.preventDefault();
      this.nextQuestion();
      return;
    }

    // Other Utility Shortcuts
    if (key === 's' || key === 'S') {
      e.preventDefault();
      this.switchScreen('set');
      return;
    }

    if (key === 'h' || key === 'H') {
      e.preventDefault();
      this.toggleHostCheatSheet();
      return;
    }

    if (key === 'f' || key === 'F') {
      e.preventDefault();
      this.toggleFullscreen();
      return;
    }

    if (key === 'm' || key === 'M') {
      e.preventDefault();
      this.toggleSound();
      return;
    }

    if (key === '?' || (e.shiftKey && key === '/')) {
      e.preventDefault();
      this.openShortcutsModal();
      return;
    }

    if (key === 'Escape') {
      // Dismiss strike overlay first if visible
      if (!this.strikeOverlay.classList.contains('hidden')) {
        this.dismissStrikeOverlay();
        return;
      }
      // Otherwise close open modals
      this.closeModal(this.modalScoreboard);
      this.closeModal(this.modalEditor);
      this.closeModal(this.modalShortcuts);
      this.toggleHostCheatSheet(false);
      return;
    }
  }

  // ==========================================
  // SCREEN SWITCHING
  // ==========================================
  switchScreen(screenName) {
    [this.screenStart, this.screenSet, this.screenGame].forEach(s => s.classList.remove('active'));

    if (screenName === 'start') {
      this.screenStart.classList.add('active');
    } else if (screenName === 'set') {
      this.renderSetSelectionGrid();
      this.screenSet.classList.add('active');
    } else if (screenName === 'game') {
      this.screenGame.classList.add('active');
    }
  }

  // ==========================================
  // QUESTION SET LOADING & RENDERING
  // ==========================================
  currentQuestion() {
    const set = this.questionSets[this.currentSetIndex];
    return set && set.questions[this.currentQuestionIndex];
  }

  loadQuestionSet(index, switchToGame = true, questionIndex = 0) {
    if (index < 0 || index >= this.questionSets.length) return;

    this.currentSetIndex = index;
    this.currentQuestionIndex = questionIndex;
    const currentSet = this.questionSets[index];
    const currentQ = this.currentQuestion();

    // Reset current round board status
    this.revealedSlots = [false, false, false, false, false, false];
    this.roundBank = 0;
    this.currentStrikes = 0;
    this.updateStrikeIndicators();
    this.updateRoundBankDisplay();

    // Mark set as visited
    this.playedSets.add(currentSet.id);

    // Update Top Indicator and Question Title
    this.topSetIndicator.textContent = `SET ${index + 1} · Q ${questionIndex + 1} OF ${currentSet.questions.length}`;
    this.questionText.textContent = currentQ.question;

    // Update Slots DOM
    currentQ.answers.forEach((ans, i) => {
      const slotNum = i + 1;
      const slotEl = document.getElementById(`slot-${slotNum}`);
      if (slotEl) {
        slotEl.classList.remove('revealed');
        const textEl = slotEl.querySelector('.slot-answer-text');
        const ptsEl = slotEl.querySelector('.slot-points-badge');
        if (textEl) textEl.textContent = ans.text;
        if (ptsEl) ptsEl.textContent = ans.points;
      }
    });

    // Update Host Cheat Sheet
    this.renderHostCheatSheet();

    // Switch screen if requested
    if (switchToGame) {
      this.switchScreen('game');
    }
  }

  // Arrows step through questions in the set, rolling over into the adjacent set at the edges
  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      sounds.playClick();
      this.loadQuestionSet(this.currentSetIndex, true, this.currentQuestionIndex - 1);
    } else if (this.currentSetIndex > 0) {
      sounds.playClick();
      const prevSet = this.questionSets[this.currentSetIndex - 1];
      this.loadQuestionSet(this.currentSetIndex - 1, true, prevSet.questions.length - 1);
    } else {
      this.showToast('Already on the first question!');
      return;
    }
    this.showToast(`Set ${this.currentSetIndex + 1} · Question ${this.currentQuestionIndex + 1}`);
  }

  nextQuestion() {
    const set = this.questionSets[this.currentSetIndex];
    if (this.currentQuestionIndex < set.questions.length - 1) {
      sounds.playClick();
      this.loadQuestionSet(this.currentSetIndex, true, this.currentQuestionIndex + 1);
    } else if (this.currentSetIndex < this.questionSets.length - 1) {
      sounds.playClick();
      this.loadQuestionSet(this.currentSetIndex + 1, true);
    } else {
      this.showToast('You are on the last question!');
      return;
    }
    this.showToast(`Set ${this.currentSetIndex + 1} · Question ${this.currentQuestionIndex + 1}`);
  }

  // ==========================================
  // ANSWER REVEAL LOGIC (KEYS 1 - 6 & MOUSE)
  // ==========================================
  handleSlotKey(slotNum) {
    if (slotNum < 1 || slotNum > 6) return;
    this.revealSlot(slotNum);
  }

  handleSlotClick(slotNum) {
    this.revealSlot(slotNum);
  }

  revealSlot(slotNum) {
    const slotIdx = slotNum - 1;
    const currentQ = this.currentQuestion();
    if (!currentQ || !currentQ.answers[slotIdx]) return;

    const answer = currentQ.answers[slotIdx];
    const slotEl = document.getElementById(`slot-${slotNum}`);

    // If slot is not revealed yet -> Reveal it!
    if (!this.revealedSlots[slotIdx]) {
      this.revealedSlots[slotIdx] = true;
      slotEl.classList.add('revealed');

      // Play bell ding
      sounds.playDing();

      // Add points to bank
      const prevBank = this.roundBank;
      this.roundBank += answer.points;
      this.updateRoundBankDisplay();

      // Push to Undo Stack
      this.undoStack.push({
        type: 'reveal',
        slot: slotNum,
        points: answer.points,
        prevBank: prevBank
      });

      // Update Host Sheet
      this.renderHostCheatSheet();
    } else {
      // If already revealed and user clicks it, let host know
      this.showToast(`Option ${slotNum} already revealed! (Press U to Undo)`);
    }
  }

  unrevealSlot(slotNum, points) {
    const slotIdx = slotNum - 1;
    this.revealedSlots[slotIdx] = false;
    const slotEl = document.getElementById(`slot-${slotNum}`);
    if (slotEl) {
      slotEl.classList.remove('revealed');
    }
    this.roundBank = Math.max(0, this.roundBank - points);
    this.updateRoundBankDisplay();
    this.renderHostCheatSheet();
  }

  // ==========================================
  // STRIKE WORKFLOW (1st: X, 2nd: XX, 3rd: XXX, reset to 1 X)
  // ==========================================
  triggerStrikeCycle() {
    const prevStrikes = this.currentStrikes;

    // Workflow rule:
    // 0 -> 1 (1st strike X)
    // 1 -> 2 (2nd strike XX)
    // 2 -> 3 (3rd strike XXX)
    // 3 -> 1 (resets back to 1 X)
    if (this.currentStrikes === 0) {
      this.currentStrikes = 1;
    } else if (this.currentStrikes === 1) {
      this.currentStrikes = 2;
    } else if (this.currentStrikes === 2) {
      this.currentStrikes = 3;
    } else if (this.currentStrikes >= 3) {
      this.currentStrikes = 1; // resets back to 1 X
    }

    // Push action to Undo Stack
    this.undoStack.push({
      type: 'strike_cycle',
      from: prevStrikes,
      to: this.currentStrikes
    });

    // Update bottom strike indicator
    this.updateStrikeIndicators();

    // Play loud buzzer
    sounds.playStrike(this.currentStrikes);

    // Show Dramatic Strike Overlay
    this.showStrikeOverlay(this.currentStrikes, `STRIKE ${this.currentStrikes}`);
  }

  // Single Steal Strike (Shift + X)
  triggerSingleStealStrike() {
    // Push action to Undo Stack
    this.undoStack.push({
      type: 'steal_strike'
    });

    // Play Steal Buzzer
    sounds.playStealBuzzer();

    // Show Dramatic Strike Overlay with ONLY 1 X
    this.showStrikeOverlay(1, 'STEAL STRIKE');
  }

  showStrikeOverlay(count, label) {
    if (this.strikeDismissTimer) {
      clearTimeout(this.strikeDismissTimer);
    }

    // Generate HTML for 1, 2, or 3 Xs
    let xHtml = '';
    for (let i = 0; i < count; i++) {
      xHtml += '<div class="giant-red-x">X</div>';
    }
    this.strikeXDisplay.innerHTML = xHtml;
    this.strikeSubtext.textContent = label;

    // Display overlay
    this.strikeOverlay.classList.remove('hidden');

    // Add screen shake effect
    this.screenGame.classList.remove('screen-shake');
    void this.screenGame.offsetWidth; // trigger reflow
    this.screenGame.classList.add('screen-shake');

    // Auto-dismiss overlay after 1.8 seconds (while retaining strike status in footer)
    this.strikeDismissTimer = setTimeout(() => {
      this.dismissStrikeOverlay();
    }, 1800);
  }

  dismissStrikeOverlay() {
    if (this.strikeDismissTimer) {
      clearTimeout(this.strikeDismissTimer);
      this.strikeDismissTimer = null;
    }
    this.strikeOverlay.classList.add('hidden');
    this.screenGame.classList.remove('screen-shake');
  }

  updateStrikeIndicators() {
    this.sDot1.classList.toggle('active', this.currentStrikes >= 1);
    this.sDot2.classList.toggle('active', this.currentStrikes >= 2);
    this.sDot3.classList.toggle('active', this.currentStrikes >= 3);
  }

  // ==========================================
  // FALL BACK / UNDO OPERATION (KEY U)
  // ==========================================
  performUndo() {
    if (this.undoStack.length === 0) {
      this.showToast('Nothing to undo!');
      return;
    }

    const lastAction = this.undoStack.pop();
    sounds.playUndo();

    switch (lastAction.type) {
      case 'reveal':
        this.unrevealSlot(lastAction.slot, lastAction.points);
        this.showToast(`↩ Undid: Option ${lastAction.slot} hidden (-${lastAction.points} pts)`);
        break;

      case 'strike_cycle':
        this.currentStrikes = lastAction.from;
        this.updateStrikeIndicators();
        this.dismissStrikeOverlay();
        this.showToast(`↩ Undid: Strikes reverted to ${lastAction.from}`);
        break;

      case 'steal_strike':
        this.dismissStrikeOverlay();
        this.showToast('↩ Undid: Steal strike dismissed');
        break;

      case 'award_bank':
        if (lastAction.team === 1) {
          this.team1Score = Math.max(0, this.team1Score - lastAction.amount);
        } else {
          this.team2Score = Math.max(0, this.team2Score - lastAction.amount);
        }
        this.roundBank = lastAction.amount;
        this.updateScoreDisplay();
        this.updateRoundBankDisplay();
        this.showToast(`↩ Undid: Reverted ${lastAction.amount} pts awarded to ${lastAction.teamName}`);
        break;

      case 'score_adjust':
        if (lastAction.team === 1) {
          this.team1Score = Math.max(0, this.team1Score - lastAction.delta);
        } else {
          this.team2Score = Math.max(0, this.team2Score - lastAction.delta);
        }
        this.updateScoreDisplay();
        this.showToast(`↩ Undid: Reverted score adjustment`);
        break;

      case 'score_reset':
        if (lastAction.team === 1) {
          this.team1Score = lastAction.prevScore;
        } else {
          this.team2Score = lastAction.prevScore;
        }
        this.updateScoreDisplay();
        this.showToast(`↩ Undid: Restored ${lastAction.teamName} score to ${lastAction.prevScore}`);
        break;

      default:
        console.warn('Unknown undo action', lastAction);
    }
  }

  // ==========================================
  // SCORING LOGIC & TEAM CONTROLS
  // ==========================================
  adjustTeamScore(team, delta) {
    sounds.playClick();
    const prev = team === 1 ? this.team1Score : this.team2Score;
    if (prev + delta < 0) return; // already at 0, nothing to undo
    if (team === 1) {
      this.team1Score = prev + delta;
    } else {
      this.team2Score = prev + delta;
    }
    this.undoStack.push({
      type: 'score_adjust',
      team: team,
      delta: delta
    });
    this.updateScoreDisplay();
  }

  resetTeamScore(team) {
    sounds.playClick();
    const prev = team === 1 ? this.team1Score : this.team2Score;
    const name = team === 1 ? this.team1Name : this.team2Name;
    if (prev === 0) return;

    if (team === 1) this.team1Score = 0;
    else this.team2Score = 0;

    this.undoStack.push({
      type: 'score_reset',
      team: team,
      prevScore: prev,
      teamName: name
    });
    this.updateScoreDisplay();
    this.showToast(`${name} score reset to 0 (Press U to undo)`);
  }

  awardBankToTeam(team) {
    if (this.roundBank === 0) {
      this.showToast('Round bank is currently 0 pts!');
      return;
    }

    const amount = this.roundBank;
    const name = team === 1 ? this.team1Name : this.team2Name;

    if (team === 1) {
      this.team1Score += amount;
    } else {
      this.team2Score += amount;
    }

    // Push undo
    this.undoStack.push({
      type: 'award_bank',
      team: team,
      amount: amount,
      teamName: name
    });

    // Reset round bank
    this.roundBank = 0;
    this.updateRoundBankDisplay();
    this.updateScoreDisplay();

    // Play fanfare / applause
    sounds.playApplause();
    this.showToast(`🎉 Awarded +${amount} PTS to ${name}!`);
  }

  updateScoreDisplay() {
    // Team 1 Digits
    const t1Formatted = String(this.team1Score).padStart(2, '0');
    if (t1Formatted.length === 2) {
      this.t1Digit1.textContent = t1Formatted[0];
      this.t1Digit2.textContent = t1Formatted[1];
    } else {
      this.t1Digit1.textContent = t1Formatted.slice(0, -1);
      this.t1Digit2.textContent = t1Formatted.slice(-1);
    }

    // Team 2 Digits
    const t2Formatted = String(this.team2Score).padStart(2, '0');
    if (t2Formatted.length === 2) {
      this.t2Digit1.textContent = t2Formatted[0];
      this.t2Digit2.textContent = t2Formatted[1];
    } else {
      this.t2Digit1.textContent = t2Formatted.slice(0, -1);
      this.t2Digit2.textContent = t2Formatted.slice(-1);
    }

    this.updateScoreboardModal();
  }

  updateRoundBankDisplay() {
    this.roundBankDisplay.textContent = this.roundBank;
  }

  // ==========================================
  // SET SELECTION GRID
  // ==========================================
  renderSetSelectionGrid() {
    this.setCardsGrid.innerHTML = '';
    this.questionSets.forEach((set, index) => {
      const card = document.createElement('div');
      card.className = `set-card ${index === this.currentSetIndex ? 'active-set' : ''}`;

      card.innerHTML = `
        <div class="set-card-top">
          <span class="set-number-tag">SET ${index + 1}</span>
        </div>
        <div class="set-title-text">${set.title || `Round ${index + 1}`}</div>
        <div class="set-question-preview">${set.questions.length} questions</div>
        <button class="set-card-btn">SELECT SET ${index + 1}</button>
      `;

      card.addEventListener('click', () => {
        sounds.playClick();
        this.loadQuestionSet(index, true);
      });

      this.setCardsGrid.appendChild(card);
    });
  }

  // ==========================================
  // HOST CHEAT SHEET DRAWER
  // ==========================================
  toggleHostCheatSheet(forceState) {
    const isHidden = this.hostCheatSheet.classList.contains('hidden');
    const targetState = forceState !== undefined ? !forceState : isHidden;
    this.hostCheatSheet.classList.toggle('hidden', !targetState);
    if (targetState) {
      this.renderHostCheatSheet();
    }
  }

  renderHostCheatSheet() {
    const currentQ = this.currentQuestion();
    if (!currentQ) return;

    this.cheatSheetItems.innerHTML = '';
    currentQ.answers.forEach((ans, i) => {
      const isRevealed = this.revealedSlots[i];
      const item = document.createElement('div');
      item.className = `cheat-item ${isRevealed ? 'revealed' : ''}`;
      item.innerHTML = `
        <span><b>#${i + 1}</b> ${ans.text}</span>
        <b>${ans.points} pts</b>
      `;
      item.addEventListener('click', () => {
        this.revealSlot(i + 1);
      });
      this.cheatSheetItems.appendChild(item);
    });
  }

  // ==========================================
  // FULL SCOREBOARD MODAL
  // ==========================================
  openScoreboardModal() {
    sounds.playClick();
    this.updateScoreboardModal();
    this.modalScoreboard.classList.remove('hidden');
  }

  updateScoreboardModal() {
    this.sbT1Tag.textContent = this.team1Name;
    this.sbT2Tag.textContent = this.team2Name;
    this.sbT1Score.textContent = this.team1Score;
    this.sbT2Score.textContent = this.team2Score;

    // Progress bar ratio
    const total = this.team1Score + this.team2Score;
    if (total === 0) {
      this.sbProgressT1.style.width = '50%';
      this.sbProgressT2.style.width = '50%';
    } else {
      const p1 = Math.round((this.team1Score / total) * 100);
      const p2 = 100 - p1;
      this.sbProgressT1.style.width = `${p1}%`;
      this.sbProgressT2.style.width = `${p2}%`;
    }

    // Sets completed dots
    this.sbCompletedCount.textContent = `${this.playedSets.size} / ${this.questionSets.length}`;
    this.sbSetsDots.innerHTML = '';
    for (let i = 1; i <= this.questionSets.length; i++) {
      const dot = document.createElement('div');
      dot.className = `set-dot ${this.playedSets.has(i) ? 'played' : ''}`;
      dot.textContent = i;
      this.sbSetsDots.appendChild(dot);
    }
  }

  celebrateWinner() {
    sounds.playFanfare();
    sounds.playApplause();

    let winnerText = 'It’s a TIE!';
    if (this.team1Score > this.team2Score) {
      winnerText = `🏆 ${this.team1Name} is LEADING with ${this.team1Score} PTS!`;
    } else if (this.team2Score > this.team1Score) {
      winnerText = `🏆 ${this.team2Name} is LEADING with ${this.team2Score} PTS!`;
    }

    this.showToast(winnerText);
    this.launchConfetti();
  }

  resetAllScores() {
    if (confirm('Are you sure you want to reset all team scores and played rounds?')) {
      this.team1Score = 0;
      this.team2Score = 0;
      this.playedSets.clear();
      this.undoStack = [];
      this.updateScoreDisplay();
      this.showToast('All scores reset to 0');
    }
  }

  // ==========================================
  // QUESTION MANAGER / EDITOR MODAL
  // ==========================================
  openEditorModal() {
    sounds.playClick();
    this.editingSetIndex = this.currentSetIndex;
    this.editingQuestionIndex = this.currentQuestionIndex;
    this.renderEditorTabs();
    this.loadEditorFormData(this.editingSetIndex);
    this.modalEditor.classList.remove('hidden');
  }

  renderEditorTabs() {
    this.editorSetTabs.innerHTML = '';
    this.questionSets.forEach((set, i) => {
      const tab = document.createElement('button');
      tab.className = `editor-tab-btn ${i === this.editingSetIndex ? 'active' : ''}`;
      tab.textContent = `Set ${i + 1}`;
      tab.addEventListener('click', () => {
        this.saveCurrentEditorTabState();
        this.editingSetIndex = i;
        this.editingQuestionIndex = 0;
        this.renderEditorTabs();
        this.loadEditorFormData(i);
      });
      this.editorSetTabs.appendChild(tab);
    });

    this.editorQuestionTabs.innerHTML = '';
    this.questionSets[this.editingSetIndex].questions.forEach((q, qi) => {
      const tab = document.createElement('button');
      tab.className = `editor-tab-btn ${qi === this.editingQuestionIndex ? 'active' : ''}`;
      tab.textContent = `Q${qi + 1}`;
      tab.addEventListener('click', () => {
        this.saveCurrentEditorTabState();
        this.editingQuestionIndex = qi;
        this.renderEditorTabs();
        this.loadEditorFormData(this.editingSetIndex);
      });
      this.editorQuestionTabs.appendChild(tab);
    });
  }

  loadEditorFormData(index) {
    const set = this.questionSets[index];
    if (!set) return;

    const q = set.questions[this.editingQuestionIndex];
    this.editSetTitle.value = set.title || `Set ${index + 1}`;
    this.editSetQuestion.value = q.question;

    this.editorAnswersGrid.innerHTML = '';
    let totalPts = 0;

    q.answers.forEach((ans, i) => {
      totalPts += parseInt(ans.points, 10) || 0;
      const row = document.createElement('div');
      row.className = 'answer-edit-row';
      row.innerHTML = `
        <span class="answer-edit-index">${i + 1}</span>
        <input type="text" class="form-input answer-edit-text" id="edit-ans-text-${i}" value="${ans.text}">
        <input type="number" class="form-input answer-edit-pts" id="edit-ans-pts-${i}" value="${ans.points}" min="0" max="100">
      `;
      this.editorAnswersGrid.appendChild(row);
    });

    this.editTotalPts.textContent = `Total Points: ${totalPts}`;
  }

  saveCurrentEditorTabState() {
    const set = this.questionSets[this.editingSetIndex];
    if (!set) return;

    const q = set.questions[this.editingQuestionIndex];
    set.title = this.editSetTitle.value.trim() || `Set ${this.editingSetIndex + 1}`;
    q.question = this.editSetQuestion.value.trim();

    for (let i = 0; i < 6; i++) {
      const textInput = document.getElementById(`edit-ans-text-${i}`);
      const ptsInput = document.getElementById(`edit-ans-pts-${i}`);
      if (textInput && ptsInput) {
        q.answers[i].text = textInput.value.trim().toUpperCase();
        q.answers[i].points = parseInt(ptsInput.value, 10) || 0;
      }
    }
  }

  saveEditorChanges() {
    this.saveCurrentEditorTabState();
    saveQuestionSets(this.questionSets);
    this.closeModal(this.modalEditor);
    this.loadQuestionSet(this.currentSetIndex, false, this.currentQuestionIndex);
    this.renderSetSelectionGrid();
    this.showToast('✅ Question sets saved successfully!');
  }

  resetDefaultQuestions() {
    if (confirm('Reset all questions back to factory defaults?')) {
      this.questionSets = resetToDefaultQuestions();
      this.editingQuestionIndex = 0;
      this.loadEditorFormData(this.editingSetIndex);
      this.renderEditorTabs();
      this.loadQuestionSet(this.currentSetIndex, false);
      this.showToast('Reset to default questions');
    }
  }

  exportQuestionsJSON() {
    this.saveCurrentEditorTabState();
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.questionSets, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', 'family_feud_questions.json');
    dlAnchorElem.click();
    this.showToast('📥 Questions exported to JSON');
  }

  handleImportJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported) && imported.length > 0 && imported.every(s => Array.isArray(s.questions) && s.questions.length > 0)) {
          this.questionSets = imported;
          saveQuestionSets(this.questionSets);
          this.editingSetIndex = 0;
          this.editingQuestionIndex = 0;
          this.loadEditorFormData(0);
          this.renderEditorTabs();
          this.loadQuestionSet(0, false);
          this.showToast('📤 Questions imported successfully!');
        } else {
          alert('Invalid JSON format: expected an array of question sets, each with a "questions" list.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }

  // ==========================================
  // SHORTCUTS MODAL & UTILITIES
  // ==========================================
  openShortcutsModal() {
    sounds.playClick();
    this.modalShortcuts.classList.remove('hidden');
  }

  closeModal(modalEl) {
    modalEl.classList.add('hidden');
  }

  toggleSound() {
    const isMuted = sounds.toggleMute();
    this.topSoundIcon.textContent = isMuted ? '🔇' : '🔊';
    this.startSoundLabel.textContent = isMuted ? '🔇 Sound: OFF' : '🔊 Sound: ON';
    this.showToast(isMuted ? 'Sound Muted' : 'Sound Enabled');
  }

  toggleFullscreen() {
    sounds.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Error attempting to enable fullscreen: ${err.message}`);
      });
      this.showToast('Fullscreen Mode (Press F or Esc to exit)');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2500);
  }

  // ==========================================
  // CONFETTI ENGINE FOR WINNERS
  // ==========================================
  resizeConfettiCanvas() {
    if (!this.confettiCanvas) return;
    this.confettiCanvas.width = window.innerWidth;
    this.confettiCanvas.height = window.innerHeight;
  }

  launchConfetti() {
    this.confettiParticles = [];
    const colors = ['#f59e0b', '#38bdf8', '#22c55e', '#ef4444', '#ec4899', '#ffffff', '#ffd700'];
    const count = 120;

    for (let i = 0; i < count; i++) {
      this.confettiParticles.push({
        x: window.innerWidth * Math.random(),
        y: window.innerHeight * -0.2 - Math.random() * 200,
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 5 + 4,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10
      });
    }

    if (!this.confettiAnimationId) {
      this.animateConfetti();
    }
  }

  animateConfetti() {
    this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

    for (let i = 0; i < this.confettiParticles.length; i++) {
      const p = this.confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;

      this.confettiCtx.save();
      this.confettiCtx.translate(p.x, p.y);
      this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
      this.confettiCtx.fillStyle = p.color;
      this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.confettiCtx.restore();
    }

    // Filter particles still on screen
    this.confettiParticles = this.confettiParticles.filter(p => p.y < window.innerHeight + 50);

    if (this.confettiParticles.length > 0) {
      this.confettiAnimationId = requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.confettiAnimationId = null;
      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
    }
  }
}

// Instantiate on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  window.gameApp = new FamilyFeudApp();
});
