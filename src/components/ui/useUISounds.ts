"use client";

import { useEffect, useRef } from "react";

class UIAudio {
  context: AudioContext | null = null;

  init() {
    if (typeof window !== "undefined" && !this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  playHover() {
    if (!this.context) return;
    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(800, this.context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, this.context.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0, this.context.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, this.context.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    oscillator.start();
    oscillator.stop(this.context.currentTime + 0.05);
  }

  playClick() {
    if (!this.context) return;
    const oscillator = this.context.createOscillator();
    const gainNode = this.context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(200, this.context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(50, this.context.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0, this.context.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, this.context.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(this.context.destination);

    oscillator.start();
    oscillator.stop(this.context.currentTime + 0.1);
  }
}

export const uiAudio = new UIAudio();

export function useUISounds() {
  useEffect(() => {
    // We bind it to user interaction to unlock the AudioContext
    const unlockAudio = () => {
      uiAudio.init();
      if (uiAudio.context && uiAudio.context.state === "suspended") {
        uiAudio.context.resume();
      }
      document.removeEventListener("pointerdown", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
    };

    document.addEventListener("pointerdown", unlockAudio);
    document.addEventListener("keydown", unlockAudio);

    return () => {
      document.removeEventListener("pointerdown", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  return {
    playHover: () => uiAudio.playHover(),
    playClick: () => uiAudio.playClick(),
  };
}
