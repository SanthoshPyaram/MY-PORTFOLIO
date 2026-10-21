import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section-padding bg-black-subtle" aria-label="Projects Section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-badge"><i class="bi bi-folder-check"></i> Featured Creations</span>
          <h2 class="section-title">My <span class="gradient-text">Projects</span></h2>
          <p class="section-subtitle">
            Real-world software architectures, digital marketplaces, and embedded ECS assistive &amp; environmental solutions.
          </p>
        </div>

        <!-- 2-Column Responsive Grid for 4 Projects -->
        <div class="row g-4">
          @for (proj of portfolio.projects; track proj.id) {
            <div class="col-lg-6">
              <article class="glass-card project-card">
                <div class="project-img-wrapper">
                  <img [src]="proj.image" [alt]="proj.title + ' preview thumbnail'" class="project-img">
                  <div class="project-overlay"></div>
                </div>
                <div class="project-body">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge" [ngClass]="proj.categoryBadgeClass">{{ proj.category }}</span>
                    <span class="text-muted small">
                      <i class="bi" [ngClass]="proj.typeBadge.includes('ECS') ? 'bi-cpu me-1' : 'bi-calendar-event me-1'"></i> 
                      {{ proj.typeBadge }}
                    </span>
                  </div>
                  <h3 class="project-title">{{ proj.title }}</h3>
                  <p class="project-description">{{ proj.description }}</p>

                  <!-- Tech Badges -->
                  <div class="tech-badge-container">
                    @for (tag of proj.tags; track tag) {
                      <span class="tech-badge">{{ tag }}</span>
                    }
                  </div>

                  <!-- Action Buttons -->
                  <div class="project-footer">
                    <button type="button" class="btn-project-primary" (click)="portfolio.openProjectModal(proj)">
                      <i class="bi bi-info-circle"></i> View Details
                    </button>
                    <button type="button" class="btn-project-secondary" disabled>
                      <i class="bi" [ngClass]="proj.typeBadge.includes('ECS') ? 'bi-cpu' : 'bi-github'"></i> 
                      {{ proj.typeBadge.includes('ECS') ? 'ECS Project' : 'Source Code' }}
                    </button>
                  </div>
                </div>
              </article>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  portfolio = inject(PortfolioService);
}

