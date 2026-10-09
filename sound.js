// Web Audio API Sound Synthesizer for Family Feud Game Show
// 100% offline, procedural sound effects - no external audio files required!

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  // Initialize or resume AudioContext on first user interaction
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // 1. Board Reveal Bell / Ding
  playDing() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // Harmonic bell frequencies
    const freqs = [587.33, 1174.66, 1760.00, 2349.32]; // D5, D6, A6, D7
    const gains = [0.45, 0.28, 0.15, 0.08];

    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = i === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, t);

      // Fast attack, smooth exponential decay
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(gains[i], t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 1.35);
    });
  }

  // Helper to create raw strike buzzer tone
  _createBuzzerBurst(startTime, duration) {
    if (!this.ctx) return;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    // Detuned harsh low square & sawtooth waves (classic game show dissonant buzz)
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(126, startTime);

    osc2.type = 'square';
    osc2.frequency.setValueAtTime(133, startTime);

    // Warm analog low-pass filtering
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, startTime);
    filter.Q.setValueAtTime(3, startTime);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(0.55, startTime + 0.02);
    gain.gain.setValueAtTime(0.55, startTime + duration - 0.04);
    gain.gain.linearRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.02);
    osc2.stop(startTime + duration + 0.02);
  }

  // 2. Strike Buzzers (1, 2, or 3 buzzes)
  playStrike(count = 1) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    if (count === 1) {
      this._createBuzzerBurst(t, 0.65);
    } else if (count === 2) {
      this._createBuzzerBurst(t, 0.35);
      this._createBuzzerBurst(t + 0.45, 0.45);
    } else if (count >= 3) {
      this._createBuzzerBurst(t, 0.28);
      this._createBuzzerBurst(t + 0.35, 0.28);
      this._createBuzzerBurst(t + 0.70, 0.60);
    }
  }

  // Single Steal Strike (Shift + X)
  playStealBuzzer() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    this._createBuzzerBurst(this.ctx.currentTime, 0.55);
  }

  // 3. Sad Face / Wrong Buzzer / Aww
  playAww() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    // Sliding pitch down ("womp...")
    osc.frequency.setValueAtTime(280, t);
    osc.frequency.exponentialRampToValueAtTime(140, t + 0.5);
    osc.frequency.exponentialRampToValueAtTime(90, t + 1.1);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 1.25);
  }

  // 4. Happy Face / Crowd Cheering & Applause
  playApplause() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 2.2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Filtered noise with clapping bursts
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      const envelope = Math.sin((i / bufferSize) * Math.PI);
      // add rhythmic clapping flutter
      const flutter = 0.7 + 0.3 * Math.sin(i * 0.015);
      data[i] = white * envelope * flutter * 0.3;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100, t);
    filter.Q.setValueAtTime(1.2, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.5, t + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 2.2);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
    noise.stop(t + 2.25);
  }

  // 5. Victory Fanfare
  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [
      { f: 523.25, d: 0.15, gap: 0.0 }, // C5
      { f: 659.25, d: 0.15, gap: 0.16 }, // E5
      { f: 783.99, d: 0.15, gap: 0.32 }, // G5
      { f: 1046.50, d: 0.50, gap: 0.48 } // C6
    ];

    const t = this.ctx.currentTime;

    notes.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, t + note.gap);

      gain.gain.setValueAtTime(0.001, t + note.gap);
      gain.gain.linearRampToValueAtTime(0.4, t + note.gap + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + note.gap + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + note.gap);
      osc.stop(t + note.gap + note.d + 0.05);
    });
  }

  // 6. Quick Click
  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(400, t + 0.05);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.07);
  }

  // 7. Undo Whoosh
  playUndo() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(250, t);
    osc.frequency.exponentialRampToValueAtTime(750, t + 0.18);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.25, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.22);
  }
}

const sounds = new SoundEngine();
