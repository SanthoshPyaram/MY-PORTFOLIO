import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="achievements" class="section-padding" aria-label="Achievements and Certifications">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-badge"><i class="bi bi-award-fill"></i> Milestones</span>
          <h2 class="section-title">Achievements &amp; <span class="gradient-text">Certifications</span></h2>
          <p class="section-subtitle">
            Recognitions, professional credentials including Hedera Hashgraph Blockchain, and competitive programming profiles.
          </p>
        </div>

        <!-- 1. Major Hackathons & Competitions -->
        <h3 class="h4 mb-4 d-flex align-items-center gap-2">
          <i class="bi bi-trophy-fill text-warning"></i> Hackathons &amp; Honors
        </h3>

        <div class="row g-4 mb-5">
          @for (ach of portfolio.achievements; track ach.title) {
            <div class="col-lg-6">
              <div class="glass-card achievement-card">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <div class="achievement-icon-box" [attr.style]="ach.iconBoxStyle || null">
                    <i class="bi" [ngClass]="ach.icon"></i>
                  </div>
                  <span class="badge px-3 py-1" [ngClass]="ach.badgeClass">
                    {{ ach.badge }}
                  </span>
                </div>
                <h4 class="h5 mb-2">{{ ach.title }}</h4>
                <p class="text-secondary small mb-3">{{ ach.description }}</p>
                <div class="d-flex flex-wrap gap-2">
                  @for (t of ach.tags; track t) {
                    <span class="badge bg-black-subtle border border-secondary small">{{ t }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>

        <!-- 2. Certifications Grid -->
        <h3 class="h4 mb-4 d-flex align-items-center gap-2">
          <i class="bi bi-patch-check-fill text-info"></i> Professional Certifications
        </h3>

        <div class="row g-4 mb-5">
          @for (cert of portfolio.certifications; track cert.title) {
            <div class="col-lg-4 col-md-6">
              <div class="glass-card cert-card h-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span class="badge px-2 py-1" [ngClass]="cert.badgeClass">
                    <i class="bi" [ngClass]="cert.icon" class="me-1"></i> {{ cert.badge }}
                  </span>
                  <i class="bi bi-patch-check-fill text-info fs-5"></i>
                </div>
                <h4 class="h6 mb-2">{{ cert.title }}</h4>
                <div class="text-info small fw-bold mb-2">{{ cert.issuer }}</div>
                <p class="text-secondary small mb-0">{{ cert.description }}</p>
              </div>
            </div>
          }
        </div>

        <!-- 3. LeetCode & Coding Profiles -->
        <div class="glass-card p-4">
          <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <h4 class="h5 mb-1 d-flex align-items-center gap-2">
                <i class="bi bi-code-slash text-warning"></i> Competitive Programming &amp; Algorithmic Practice
              </h4>
              <p class="text-secondary small mb-0">
                Active problem solver practicing data structures, dynamic programming, and graph algorithms on LeetCode.
              </p>
            </div>
            <div class="d-flex gap-2">
              <a href="https://leetcode.com/u/SanthoshPyaram/" target="_blank" rel="noopener noreferrer" class="btn btn-outline-warning fw-bold btn-sm">
                <i class="bi bi-box-arrow-up-right me-1"></i> View LeetCode
              </a>
              <a href="https://github.com/SanthoshPyaram" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary fw-bold btn-sm">
                <i class="bi bi-github me-1"></i> View GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class AchievementsComponent {
  portfolio = inject(PortfolioService);
}

