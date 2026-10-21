import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio_theme_mode';
  currentTheme = signal<ThemeMode>('dark');

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(this.STORAGE_KEY) as ThemeMode;
      const initial = saved === 'light' || saved === 'dark' ? saved : 'dark';
      this.setTheme(initial);
    }
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.STORAGE_KEY, theme);
    }
  }

  toggleTheme(): void {
    const next = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }
}

