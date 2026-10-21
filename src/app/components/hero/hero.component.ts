import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section" aria-label="Introduction and Hero">
      <div class="container">
        <div class="row align-items-center g-5">
          <!-- Left Column: Introduction & Call-to-Actions -->
          <div class="col-lg-7 text-center text-lg-start">
            <!-- Availability Pill -->
            <div class="status-pill mb-3">
              <span class="status-indicator"></span>
              <span class="status-text">Available for Software Engineering Internships</span>
            </div>

            <!-- Main Heading with Modern Gradient Accent -->
            <h1 class="hero-title">
              Hi, I'm <span class="gradient-text">{{ portfolio.developerName }}</span>
            </h1>

            <!-- Subtitle with Role & Academic Standing -->
            <p class="hero-subtitle">
              Integrated M.Tech Student in Computer Science &amp; Engineering at 
              <span class="text-white fw-bold">VIT-AP UNIVERSITY</span> (CGPA: 9.68). 
              Passionate about building scalable web applications, embedded sensor systems, and algorithmic problem-solving.
            </p>

            <!-- Key Highlight Chips -->
            <div class="hero-highlights justify-content-center justify-content-lg-start">
              <span class="highlight-chip">
                <i class="bi bi-mortarboard-fill text-success"></i> 9.68 CGPA &bull; VIT-AP
              </span>
              <span class="highlight-chip">
                <i class="bi bi-award-fill text-warning"></i> 100% Attendance Award (2024–2025)
              </span>
              <span class="highlight-chip">
                <i class="bi bi-patch-check-fill text-info"></i> Hedera Hashgraph Certified
              </span>
              <span class="highlight-chip">
                <i class="bi bi-code-square text-warning"></i> LeetCode Solver
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="hero-cta-group justify-content-center justify-content-lg-start">
              <a href="#projects" class="btn-primary-gradient">
                <i class="bi bi-folder-check"></i> Explore Projects
              </a>
              <button type="button" class="btn-outline-glass" data-bs-toggle="modal" data-bs-target="#resumeModal">
                <i class="bi bi-file-earmark-person-fill"></i> View Resume
              </button>
              <a href="#contact" class="btn-outline-glass">
                <i class="bi bi-envelope"></i> Contact Me
              </a>
            </div>

            <!-- Social Media & Profile Links -->
            <div class="hero-social-links justify-content-center justify-content-lg-start">
              <span class="text-muted small me-2">Profiles:</span>
              @for (item of portfolio.socialProfiles; track item.platform) {
                <a [href]="item.url" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="social-link-btn" 
                   [class.btn-leetcode]="item.platform === 'LeetCode'" 
                   [title]="item.title" 
                   [attr.aria-label]="item.title">
                  <i class="bi" [ngClass]="[item.icon, item.colorClass]"></i>
                </a>
              }
            </div>
          </div>

          <!-- Right Column: Animated Circle Portrait with Rotating Tech Halo -->
          <div class="col-lg-5">
            <div class="profile-wrapper">
              <div class="profile-glow-ring" aria-hidden="true"></div>
              <div class="profile-card">
                <img src="assets/profile-headshot.jpg" alt="Developer portrait of Santhosh Reddy Pyaram" class="profile-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  portfolio = inject(PortfolioService);
}

