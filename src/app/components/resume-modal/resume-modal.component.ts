import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal fade" id="resumeModal" tabindex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered resume-modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title h5" id="resumeModalLabel">
              <i class="bi bi-file-earmark-person-fill text-info me-2"></i>Resume — {{ portfolio.developerName }}
            </h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body p-3 p-md-4">
            <!-- Professional Printable Resume Container -->
            <div class="resume-paper" id="resumePrintableArea">
              
              <!-- Header with Headshot Photo & Contact Details -->
              <div class="resume-header">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <div class="flex-grow-1">
                    <h1 class="resume-name">{{ portfolio.developerName | uppercase }}</h1>
                    <div class="resume-role">
                      Integrated M.Tech in Computer Science &amp; Engineering | Software Developer &bull; 
                      <strong>{{ portfolio.institution }}</strong> (CGPA: 9.68)
                    </div>

                    <!-- Contact Pills -->
                    <div class="resume-contact-bar mt-2">
                      <span class="resume-contact-item">
                        <i class="bi bi-telephone-fill text-success"></i> {{ portfolio.phone }}
                      </span>
                      <span class="resume-contact-item">
                        <i class="bi bi-envelope-fill text-info"></i> {{ portfolio.email }}
                      </span>
                      <a href="https://www.linkedin.com/in/pyaram-santhosh" target="_blank" rel="noopener noreferrer" class="resume-contact-item text-decoration-none">
                        <i class="bi bi-linkedin text-info"></i> linkedin.com/in/pyaram-santhosh
                      </a>
                      <span class="resume-contact-item">
                        <i class="bi bi-geo-alt-fill text-danger"></i> Anantapur, Andhra Pradesh, India
                      </span>
                      <a href="https://github.com/SanthoshPyaram" target="_blank" rel="noopener noreferrer" class="resume-contact-item text-decoration-none">
                        <i class="bi bi-github text-primary"></i> github.com/SanthoshPyaram
                      </a>
                      <a href="https://leetcode.com/u/SanthoshPyaram/" target="_blank" rel="noopener noreferrer" class="resume-contact-item text-decoration-none" style="border-color: rgba(255,161,22,0.5);">
                        <i class="bi bi-code-slash text-warning"></i> leetcode.com/u/SanthoshPyaram
                      </a>
                    </div>
                  </div>

                  <!-- Headshot Photo in Resume -->
                  <div class="resume-photo-box text-center">
                    <img src="assets/profile-headshot.jpg" alt="Santhosh Reddy Pyaram Headshot" class="resume-photo-img">
                  </div>
                </div>
              </div>

              <!-- 1. Professional Objective -->
              <div class="mb-4">
                <div class="resume-section-title title-cyan">
                  <i class="bi bi-bullseye"></i> Professional Summary &amp; Objective
                </div>
                <p class="small text-secondary mb-0">
                  Ambitious and disciplined Integrated M.Tech in Computer Science &amp; Engineering student at <strong>VIT-AP UNIVERSITY</strong> with an exceptional academic record (<strong>9.68 CGPA</strong>), robust foundations in object-oriented programming, data structures, algorithms, and Angular/TypeScript full-stack web architectures. Proven problem-solving ability through competitive programming on <strong>LeetCode</strong> and collaborative project building in the <strong>Smart India Hackathon</strong>. Certified in <strong>Hedera Hashgraph Blockchain</strong> with hands-on experience developing web platforms, machine learning applications, and embedded sensor systems. Seeking software developer internships to build robust, scalable applications.
                </p>
              </div>

              <!-- 2. Education (3 Complete Tiers) -->
              <div class="mb-4">
                <div class="resume-section-title title-indigo">
                  <i class="bi bi-mortarboard-fill"></i> Education &amp; Academic Excellence
                </div>
                
                @for (edu of portfolio.educationList; track edu.degree) {
                  <div class="resume-entry">
                    <div class="resume-entry-header">
                      <span class="resume-entry-title">{{ edu.degree }}</span>
                      <span class="resume-entry-date">{{ edu.period }}</span>
                    </div>
                    <div class="resume-entry-sub text-info">
                      <strong>{{ edu.institution }}</strong> &bull; Score: <span class="badge text-white fw-bold" [ngClass]="edu.scoreBadgeClass">{{ edu.score }}</span> &bull; Status: {{ edu.status }}
                    </div>
                    <div class="small text-secondary">
                      <strong>Focus:</strong> {{ edu.details }}
                    </div>
                  </div>
                }
              </div>

              <!-- 3. Technical & Soft Skills -->
              <div class="mb-4">
                <div class="resume-section-title title-emerald">
                  <i class="bi bi-tools"></i> Technical &amp; Soft Skills
                </div>
                
                <!-- Programming Languages -->
                <div class="resume-skill-group">
                  <span class="resume-skill-label text-primary">Languages:</span>
                  <span class="resume-pill pill-lang">Java</span>
                  <span class="resume-pill pill-lang">Python</span>
                  <span class="resume-pill pill-lang">TypeScript</span>
                  <span class="resume-pill pill-lang">JavaScript (ES6+)</span>
                  <span class="resume-pill pill-lang">SQL</span>
                </div>

                <!-- Frontend Web Development -->
                <div class="resume-skill-group">
                  <span class="resume-skill-label text-cyan">Frontend:</span>
                  <span class="resume-pill pill-front">Angular (v21)</span>
                  <span class="resume-pill pill-front">HTML5</span>
                  <span class="resume-pill pill-front">CSS3</span>
                  <span class="resume-pill pill-front">Bootstrap 5</span>
                  <span class="resume-pill pill-front">React (Familiar)</span>
                </div>

                <!-- Backend & Databases -->
                <div class="resume-skill-group">
                  <span class="resume-skill-label text-success">Backend &amp; DB:</span>
                  <span class="resume-pill pill-back">Node.js</span>
                  <span class="resume-pill pill-back">Express.js</span>
                  <span class="resume-pill pill-db">MongoDB</span>
                  <span class="resume-pill pill-db">SQL Server</span>
                  <span class="resume-pill pill-db">RESTful APIs</span>
                </div>

                <!-- Developer Tools -->
                <div class="resume-skill-group">
                  <span class="resume-skill-label text-warning">Developer Tools:</span>
                  <span class="resume-pill pill-tool">Git &amp; GitHub</span>
                  <span class="resume-pill pill-tool">Visual Studio Code</span>
                  <span class="resume-pill pill-tool">Angular CLI</span>
                  <span class="resume-pill pill-tool">MongoDB Compass</span>
                  <span class="resume-pill pill-tool">Chrome DevTools</span>
                </div>

                <!-- Embedded Systems & IoT (ECS) -->
                <div class="resume-skill-group">
                  <span class="resume-skill-label" style="color: #06b6d4;">Embedded &amp; ECS:</span>
                  @for (s of portfolio.ecsSkills; track s.name) {
                    <span class="resume-pill pill-front">{{ s.name }}</span>
                  }
                </div>

                <!-- Soft Skills -->
                <div class="resume-skill-group">
                  <span class="resume-skill-label" style="color: #ec4899;">Soft Skills:</span>
                  @for (soft of portfolio.softSkills; track soft.name) {
                    <span class="resume-pill pill-soft">{{ soft.name }}</span>
                  }
                </div>
              </div>

              <!-- 4. Academic Projects -->
              <div class="mb-4">
                <div class="resume-section-title title-amber">
                  <i class="bi bi-code-square"></i> Key Academic Projects
                </div>

                <!-- Project 1 -->
                <div class="resume-entry">
                  <div class="resume-entry-header">
                    <span class="resume-entry-title">1. Smart Agriculture System</span>
                    <span class="resume-entry-date">Python, MongoDB, Data Analysis, Prediction Models</span>
                  </div>
                  <ul class="small text-secondary mb-0 ps-3">
                    <li>Architected a data-driven agriculture decision platform exploring crop data, weather metrics, and demand cycles.</li>
                    <li>Implemented predictive regression algorithms for crop market price forecasting to assist farmers in timing market sales.</li>
                    <li>Designed schema in MongoDB to track warehouse storage logistics, soil parameters, and transit schedules.</li>
                  </ul>
                </div>

                <!-- Project 2 -->
                <div class="resume-entry">
                  <div class="resume-entry-header">
                    <span class="resume-entry-title">2. COOPNEX — Cooperative Services Platform</span>
                    <span class="resume-entry-date">HTML5, CSS3, JavaScript, React, Node.js, MongoDB</span>
                  </div>
                  <ul class="small text-secondary mb-0 ps-3">
                    <li>Designed a digital cooperative services marketplace connecting tradespeople, clients, and society administration.</li>
                    <li>Engineered worker profile discovery, slot booking schedules, transparent fee breakdowns, and automated booking dispatch.</li>
                    <li>Constructed modular responsive frontend interfaces with Bootstrap 5 and interactive client-side validations.</li>
                  </ul>
                </div>

                <!-- Project 3 -->
                <div class="resume-entry">
                  <div class="resume-entry-header">
                    <span class="resume-entry-title">3. Smart Shoes for Blind Persons (ECS Project)</span>
                    <span class="resume-entry-date">Embedded Systems, Sensor-Based Systems, Assistive Technology</span>
                  </div>
                  <ul class="small text-secondary mb-0 ps-3">
                    <li>An assistive-technology project designed to help visually impaired individuals detect obstacles and navigate their surroundings more safely.</li>
                    <li>Implemented sensor-based obstacle detection and hardware-software integration for real-time surroundings navigation guidance.</li>
                  </ul>
                </div>

                <!-- Project 4 -->
                <div class="resume-entry">
                  <div class="resume-entry-header">
                    <span class="resume-entry-title">4. Smart Air Purification System (ECS Project)</span>
                    <span class="resume-entry-date">Embedded Systems, IoT Fundamentals, Environmental Technology</span>
                  </div>
                  <ul class="small text-secondary mb-0 ps-3">
                    <li>An engineering project focused on improving indoor air quality through a smart air-purification system.</li>
                    <li>Integrated sensor-based air quality monitoring with automated response controls for continuous purification.</li>
                  </ul>
                </div>
              </div>

              <!-- 5. Certifications & Hackathons -->
              <div>
                <div class="resume-section-title title-violet">
                  <i class="bi bi-patch-check-fill"></i> Certifications &amp; Honors
                </div>
                <ul class="small text-secondary ps-3 mb-0">
                  @for (cert of portfolio.certifications; track cert.title) {
                    <li class="mb-1"><strong>{{ cert.title }}:</strong> {{ cert.description }}</li>
                  }
                  @for (ach of portfolio.achievements; track ach.title) {
                    <li class="mb-1"><strong>{{ ach.title }}:</strong> {{ ach.description }}</li>
                  }
                </ul>
              </div>

            </div>
          </div>

          <div class="modal-footer">
            <span class="text-muted small me-auto">
              <i class="bi bi-info-circle me-1"></i> Formatted for high-quality standard A4 print and PDF saving
            </span>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary-gradient btn-sm" (click)="printResume()">
              <i class="bi bi-printer-fill me-1"></i> Print / Save as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ResumeModalComponent {
  portfolio = inject(PortfolioService);

  printResume(): void {
    if (typeof window !== 'undefined') {
      window.print();
    }
  }
}

