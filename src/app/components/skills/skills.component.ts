import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section-padding" aria-label="Skills Section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-badge"><i class="bi bi-cpu-fill"></i> Technical Expertise</span>
          <h2 class="section-title">Skills &amp; <span class="gradient-text">Proficiencies</span></h2>
          <p class="section-subtitle">
            Comprehensive skill matrix covering programming languages, frontend frameworks, backend architectures, embedded IoT systems, and professional soft skills.
          </p>
        </div>

        <div class="row g-4">
          <!-- 3 Primary Technical Categories -->
          @for (cat of portfolio.skillCategories; track cat.title) {
            <div class="col-lg-4 col-md-6">
              <div class="glass-card skill-card">
                <div class="skill-category-header">
                  <div class="skill-cat-icon">
                    <i class="bi" [ngClass]="cat.icon"></i>
                  </div>
                  <div>
                    <h3 class="h5 mb-0">{{ cat.title }}</h3>
                    <span class="text-muted small">{{ cat.subtitle }}</span>
                  </div>
                </div>

                @for (item of cat.items; track item.name) {
                  <div class="skill-item">
                    <div class="skill-item-header">
                      <span class="skill-name">
                        <i class="bi" [ngClass]="[item.icon, item.iconColor]"></i> {{ item.name }}
                      </span>
                      <span class="skill-status-tag" [ngClass]="item.statusClass">{{ item.status }}</span>
                    </div>
                    <div class="custom-progress">
                      <div class="progress-bar" [ngClass]="item.progressBarClass || ''" [style.width.%]="item.percentage"></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }

          <!-- 4. Embedded Systems & IoT (ECS) Section -->
          <div class="col-12">
            <div class="glass-card p-4">
              <div class="skill-category-header mb-3">
                <div class="skill-cat-icon">
                  <i class="bi bi-cpu-fill"></i>
                </div>
                <div>
                  <h3 class="h5 mb-0">Embedded Systems &amp; IoT (ECS)</h3>
                  <span class="text-muted small">Hardware-Software Integration &amp; Sensor Systems</span>
                </div>
              </div>
              <div class="row g-3">
                @for (skill of portfolio.ecsSkills; track skill.name) {
                  <div class="col-md-4 col-sm-6">
                    <div class="skill-item mb-0">
                      <div class="skill-item-header">
                        <span class="skill-name">
                          <i class="bi" [ngClass]="[skill.icon, skill.iconColor]"></i> {{ skill.name }}
                        </span>
                        <span class="skill-status-tag" [ngClass]="skill.statusClass">{{ skill.status }}</span>
                      </div>
                      <div class="custom-progress">
                        <div class="progress-bar" [ngClass]="skill.progressBarClass || ''" [style.width.%]="skill.percentage"></div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- 5. Soft Skills Highlight Section -->
          <div class="col-12">
            <div class="glass-card p-4">
              <h3 class="h5 mb-3 d-flex align-items-center gap-2">
                <i class="bi bi-people-fill text-info"></i> Key Soft Skills &amp; Professional Attributes
              </h3>
              <div class="d-flex flex-wrap gap-3">
                @for (soft of portfolio.softSkills; track soft.name) {
                  <div class="soft-skill-chip">
                    <i class="bi" [ngClass]="[soft.icon, soft.colorClass]"></i> {{ soft.name }}
                  </div>
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  portfolio = inject(PortfolioService);
}

