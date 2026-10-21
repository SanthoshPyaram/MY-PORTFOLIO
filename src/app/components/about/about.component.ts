import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section-padding" aria-label="About Santhosh">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-badge"><i class="bi bi-person-bounding-box"></i> Profile &amp; Background</span>
          <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
          <p class="section-subtitle">
            My background, software engineering aspirations, and technical focus areas.
          </p>
        </div>

        <!-- 2-Column Layout: Photo Showcase & About Narrative -->
        <div class="row g-4 align-items-stretch">
          <!-- Left Column: Photo Showcase Card -->
          <div class="col-lg-5">
            <div class="glass-card about-photo-card">
              <div class="about-photo-wrapper">
                <img src="assets/profile.jpg" alt="Santhosh Reddy Pyaram" class="about-photo-img" id="aboutProfilePhoto">
              </div>

              <h3 class="h4 mb-1">{{ portfolio.developerName }}</h3>
              <p class="text-info small fw-bold mb-3">Integrated M.Tech CSE &bull; VIT-AP UNIVERSITY</p>

              <!-- Direct Profile Links -->
              <div class="d-flex justify-content-center gap-2 mb-3">
                <a href="https://www.linkedin.com/in/pyaram-santhosh" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info btn-sm fw-bold">
                  <i class="bi bi-linkedin me-1"></i> LinkedIn
                </a>
                <a href="https://leetcode.com/u/SanthoshPyaram/" target="_blank" rel="noopener noreferrer" class="btn btn-outline-warning btn-sm fw-bold">
                  <i class="bi bi-code-slash me-1"></i> LeetCode
                </a>
                <a href="https://github.com/SanthoshPyaram" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm fw-bold">
                  <i class="bi bi-github me-1"></i> GitHub
                </a>
              </div>
              
              <div class="row g-2 text-start">
                <div class="col-6">
                  <div class="p-2 rounded bg-black-subtle border border-secondary small">
                    <span class="text-muted d-block" style="font-size: 0.75rem;">Program</span>
                    <strong>Int. M.Tech CSE</strong>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-2 rounded bg-black-subtle border border-secondary small">
                    <span class="text-muted d-block" style="font-size: 0.75rem;">Current CGPA</span>
                    <strong class="text-success">9.68 / 10</strong>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-2 rounded bg-black-subtle border border-secondary small">
                    <span class="text-muted d-block" style="font-size: 0.75rem;">Intermediate</span>
                    <strong class="text-primary">982 / 1000 (98.2%)</strong>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-2 rounded bg-black-subtle border border-secondary small">
                    <span class="text-muted d-block" style="font-size: 0.75rem;">Secondary (SSC)</span>
                    <strong class="text-info">589 / 600 (98.17%)</strong>
                  </div>
                </div>
                <div class="col-12 mt-2">
                  <div class="p-2 rounded border border-warning-subtle small text-center" style="background: rgba(245,158,11,0.12);">
                    <i class="bi bi-award-fill text-warning me-1"></i>
                    <strong class="text-warning">100% Attendance Award</strong>
                    <span class="text-white-50 d-block" style="font-size: 0.72rem;">Academic Year 2024–2025 &bull; VIT-AP University</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Narrative & Detailed Education Cards -->
          <div class="col-lg-7">
            <div class="glass-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 class="h4 mb-3 d-flex align-items-center gap-2">
                  <i class="bi bi-journal-code text-primary"></i> Academic Profile &amp; Technical Mission
                </h3>
                <p class="text-secondary leading-relaxed">
                  I am an Integrated M.Tech in Computer Science and Engineering student at <strong>VIT-AP UNIVERSITY</strong> with a current CGPA of <strong>9.68</strong>. Recipient of the prestigious <strong>100% Attendance Award for the Academic Year 2024–2025</strong> at the 8th University Day Celebrations, demonstrating my continuous discipline, regularity, and commitment to learning. I have maintained a track record of academic excellence throughout my schooling and higher secondary education, scoring <strong>982 / 1000 (98.2%)</strong> in Intermediate and <strong>589 / 600 (98.17%)</strong> in SSC.
                </p>
                <p class="text-secondary leading-relaxed">
                  My technical interests span modern full-stack web applications with Angular &amp; TypeScript, distributed ledger systems via Hedera Hashgraph, and embedded system engineering with hardware-software integration for assistive and environmental applications.
                </p>
              </div>

              <!-- Education Timeline Cards -->
              <div class="mt-4">
                <h4 class="h5 mb-3 d-flex align-items-center gap-2">
                  <i class="bi bi-mortarboard-fill text-success"></i> Academic Milestones
                </h4>

                <div class="d-flex flex-column gap-3">
                  @for (edu of portfolio.educationList; track edu.degree) {
                    <div class="p-3 rounded bg-black-subtle border border-secondary">
                      <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
                        <div>
                          <strong class="text-white">{{ edu.degree }}</strong>
                          <div class="text-info small fw-bold">{{ edu.institution }} &bull; {{ edu.streamOrFocus }}</div>
                        </div>
                        <span class="badge" [ngClass]="edu.scoreBadgeClass">{{ edu.score }}</span>
                      </div>
                      <p class="text-secondary small mb-0 mt-2">{{ edu.details }}</p>
                    </div>
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  portfolio = inject(PortfolioService);
}

