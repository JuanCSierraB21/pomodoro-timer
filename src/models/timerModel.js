export default class TimerModel {
    constructor() {
      this.pomodoro = 25 * 60; // 25 minutos en segundos
      this.shortBreak = 5 * 60; // 5 minutos en segundos
      this.longBreak = 15 * 60; // 15 minutos en segundos
      this.cycles = 0;
      this.maxCycles = 4;
      this.currentMode = 'pomodoro';
      this.timeLeft = this.pomodoro;
      this.isActive = false;
      this.listeners = [];
    }
  
    subscribe(listener) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter(l => l !== listener);
      };
    }
  
    notify() {
      this.listeners.forEach(listener => listener(this));
    }
  
    start() {
      this.isActive = true;
      this.notify();
    }
  
    pause() {
      this.isActive = false;
      this.notify();
    }
  
    reset() {
      this.timeLeft = this[this.currentMode];
      this.isActive = false;
      this.notify();
    }
  
    tick() {
      if (!this.isActive) return;
      
      if (this.timeLeft > 0) {
        this.timeLeft -= 1;
        this.notify();
      } else {
        this.completeTimer();
      }
    }
  
    completeTimer() {
      this.isActive = false;
      
      if (this.currentMode === 'pomodoro') {
        this.cycles += 1;
        
        if (this.cycles % this.maxCycles === 0) {
          this.currentMode = 'longBreak';
        } else {
          this.currentMode = 'shortBreak';
        }
      } else {
        this.currentMode = 'pomodoro';
      }
      
      this.timeLeft = this[this.currentMode];
      this.notify();
    }
  
    setMode(mode) {
      if (['pomodoro', 'shortBreak', 'longBreak'].includes(mode)) {
        this.currentMode = mode;
        this.timeLeft = this[mode];
        this.isActive = false;
        this.notify();
      }
    }
  
    updateSettings(settings) {
      if (settings.pomodoro) this.pomodoro = settings.pomodoro * 60;
      if (settings.shortBreak) this.shortBreak = settings.shortBreak * 60;
      if (settings.longBreak) this.longBreak = settings.longBreak * 60;
      if (settings.maxCycles) this.maxCycles = settings.maxCycles;
      
      this.timeLeft = this[this.currentMode];
      this.notify();
    }
  }