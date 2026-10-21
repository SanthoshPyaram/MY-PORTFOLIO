import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer py-5 border-top border-secondary">
      <div class="container">
        <div class="row g-4 align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <h5 class="text-white mb-1">{{ portfolio.developerName }}</h5>
            <p class="text-secondary small mb-2">
              Integrated M.Tech in Computer Science &amp; Engineering &bull; 
              <strong class="text-white">{{ portfolio.institution }}</strong> (Reg: {{ portfolio.registrationNo }})
            </p>
            <p class="text-muted small mb-0">
              Course: {{ portfolio.course }} &bull; Portfolio built with modern Angular &amp; TypeScript.
            </p>
          </div>

          <div class="col-md-6 text-center text-md-end">
            <div class="d-flex justify-content-center justify-content-md-end gap-2 mb-2">
              @for (p of portfolio.socialProfiles; track p.platform) {
                <a [href]="p.url" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="social-link-btn" 
                   [title]="p.title">
                  <i class="bi" [ngClass]="[p.icon, p.colorClass]"></i>
                </a>
              }
            </div>
            <p class="text-muted small mb-0">
              &copy; 2026 {{ portfolio.developerName }}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  portfolio = inject(PortfolioService);
}

