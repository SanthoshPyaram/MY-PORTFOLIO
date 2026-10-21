import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar" id="mainNavbar">
      <div class="container">
        <!-- Brand / Identity -->
        <a class="navbar-brand d-flex align-items-center gap-2" href="#home">
          <span class="brand-avatar">SP</span>
          <div class="brand-text">
            <span class="brand-name">{{ portfolio.developerName }}</span>
            <span class="brand-sub">Software Developer &bull; VIT-AP</span>
          </div>
        </a>

        <!-- Mobile Controls: Theme Toggle & Hamburger -->
        <div class="d-flex align-items-center gap-2 d-lg-none">
          <button 
            type="button" 
            class="btn-theme-toggle" 
            (click)="theme.toggleTheme()" 
            [attr.aria-label]="theme.currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            <i class="bi" [ngClass]="theme.currentTheme() === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars-fill'"></i>
          </button>
          <button 
            class="navbar-toggler" 
            type="button" 
            (click)="isMenuOpen.set(!isMenuOpen())"
            [attr.aria-expanded]="isMenuOpen()" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" [class.show]="isMenuOpen()" id="navbarNav">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#home" (click)="closeMenu()">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" (click)="closeMenu()">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills" (click)="closeMenu()">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects" (click)="closeMenu()">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#achievements" (click)="closeMenu()">Achievements</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" (click)="closeMenu()">Contact</a>
            </li>
          </ul>

          <!-- Desktop Theme Switcher & Action CTA -->
          <div class="d-none d-lg-flex align-items-center gap-3">
            <button 
              type="button" 
              class="btn-theme-toggle" 
              (click)="theme.toggleTheme()" 
              [attr.aria-label]="theme.currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
              [attr.title]="theme.currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
              <i class="bi" [ngClass]="theme.currentTheme() === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars-fill'"></i>
            </button>
            <button 
              type="button" 
              class="btn-nav-cta" 
              data-bs-toggle="modal" 
              data-bs-target="#resumeModal">
              <i class="bi bi-file-earmark-person-fill"></i> Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  theme = inject(ThemeService);
  portfolio = inject(PortfolioService);
  isMenuOpen = signal<boolean>(false);

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}

