import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @for (proj of portfolio.projects; track proj.id) {
      <div class="modal fade" [id]="proj.modalId" tabindex="-1" [attr.aria-labelledby]="proj.modalId + 'Label'" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title h5" [id]="proj.modalId + 'Label'">
                <i class="bi me-2" [ngClass]="proj.typeBadge.includes('ECS') ? 'bi-cpu text-info' : 'bi-folder-check text-primary'"></i>
                {{ proj.title }}
              </h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img [src]="proj.image" [alt]="proj.title + ' Architecture'" class="img-fluid rounded-3 mb-3 border border-secondary">
              
              <h4 class="h6">Project Overview</h4>
              <p class="small text-secondary">{{ proj.overview }}</p>

              <h4 class="h6 mt-3">Key Capabilities &amp; Architecture</h4>
              <ul class="small text-secondary">
                @for (cap of proj.capabilities; track cap.title) {
                  <li><strong>{{ cap.title }}:</strong> {{ cap.description }}</li>
                }
              </ul>

              <h4 class="h6 mt-3">Domain &amp; Technologies</h4>
              <div class="d-flex flex-wrap gap-2">
                @for (tech of proj.technologies; track tech.name) {
                  <span class="badge" [ngClass]="tech.badgeClass">{{ tech.name }}</span>
                }
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    }
  `
})
export class ProjectModalComponent {
  portfolio = inject(PortfolioService);
}

