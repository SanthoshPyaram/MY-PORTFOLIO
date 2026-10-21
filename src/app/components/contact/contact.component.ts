import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section-padding bg-black-subtle" aria-label="Contact Section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-badge"><i class="bi bi-chat-dots-fill"></i> Get in Touch</span>
          <h2 class="section-title">Contact <span class="gradient-text">Me</span></h2>
          <p class="section-subtitle">
            Have a question, an opportunity, or a collaborative engineering project? Let's connect!
          </p>
        </div>

        <div class="row g-4">
          <!-- Left Column: Contact Details & Channels -->
          <div class="col-lg-5">
            <div class="glass-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 class="h5 mb-3 text-white">Direct Communication Channels</h3>
                <p class="text-secondary small mb-4">
                  Feel free to reach out via phone, direct email, or connect with me on LinkedIn. I am actively available for technical discussions and internship roles.
                </p>

                <div class="d-flex flex-column gap-3">
                  <!-- Phone -->
                  <div class="d-flex align-items-center gap-3 p-3 rounded bg-black-subtle border border-secondary">
                    <div class="achievement-icon-box text-success" style="width: 44px; height: 44px; font-size: 1.25rem;">
                      <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <span class="text-muted small d-block">Phone Number</span>
                      <a [href]="'tel:' + portfolio.phone" class="text-white fw-bold text-decoration-none">
                        {{ portfolio.phone }}
                      </a>
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="d-flex align-items-center gap-3 p-3 rounded bg-black-subtle border border-secondary">
                    <div class="achievement-icon-box text-info" style="width: 44px; height: 44px; font-size: 1.25rem;">
                      <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <span class="text-muted small d-block">Email Address</span>
                      <a [href]="'mailto:' + portfolio.email" class="text-white fw-bold text-decoration-none">
                        {{ portfolio.email }}
                      </a>
                    </div>
                  </div>

                  <!-- LinkedIn -->
                  <div class="d-flex align-items-center gap-3 p-3 rounded bg-black-subtle border border-secondary">
                    <div class="achievement-icon-box text-primary" style="width: 44px; height: 44px; font-size: 1.25rem;">
                      <i class="bi bi-linkedin"></i>
                    </div>
                    <div>
                      <span class="text-muted small d-block">LinkedIn Profile</span>
                      <a href="https://www.linkedin.com/in/pyaram-santhosh" target="_blank" rel="noopener noreferrer" class="text-white fw-bold text-decoration-none">
                        linkedin.com/in/pyaram-santhosh
                      </a>
                    </div>
                  </div>

                  <!-- Location -->
                  <div class="d-flex align-items-center gap-3 p-3 rounded bg-black-subtle border border-secondary">
                    <div class="achievement-icon-box text-danger" style="width: 44px; height: 44px; font-size: 1.25rem;">
                      <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <span class="text-muted small d-block">Current Location</span>
                      <span class="text-white small fw-bold">{{ portfolio.location }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Social Links Footer -->
              <div class="mt-4 pt-3 border-top border-secondary">
                <span class="text-muted small d-block mb-2">Connect Across Platforms:</span>
                <div class="d-flex gap-2">
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
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive TypeScript Form -->
          <div class="col-lg-7">
            <div class="glass-card p-4">
              <h3 class="h5 mb-3 text-white">Send a Direct Message</h3>

              @if (submitSuccess()) {
                <div class="alert alert-success d-flex align-items-center gap-2 mb-4" role="alert">
                  <i class="bi bi-check-circle-fill fs-5"></i>
                  <div>
                    <strong>Thank you!</strong> Your message has been received successfully. I will get back to you promptly.
                  </div>
                </div>
              }

              <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="senderName" class="form-label text-muted small">Your Name *</label>
                    <input 
                      type="text" 
                      class="form-control bg-black-subtle text-white border-secondary" 
                      id="senderName" 
                      name="senderName" 
                      [(ngModel)]="formData.name" 
                      required 
                      placeholder="e.g. Alex Johnson">
                  </div>

                  <div class="col-md-6">
                    <label for="senderEmail" class="form-label text-muted small">Email Address *</label>
                    <input 
                      type="email" 
                      class="form-control bg-black-subtle text-white border-secondary" 
                      id="senderEmail" 
                      name="senderEmail" 
                      [(ngModel)]="formData.email" 
                      required 
                      placeholder="e.g. alex@example.com">
                  </div>

                  <div class="col-12">
                    <label for="subject" class="form-label text-muted small">Subject</label>
                    <input 
                      type="text" 
                      class="form-control bg-black-subtle text-white border-secondary" 
                      id="subject" 
                      name="subject" 
                      [(ngModel)]="formData.subject" 
                      placeholder="Project Inquiry / Opportunity">
                  </div>

                  <div class="col-12">
                    <label for="message" class="form-label text-muted small">Message *</label>
                    <textarea 
                      class="form-control bg-black-subtle text-white border-secondary" 
                      id="message" 
                      name="message" 
                      rows="5" 
                      [(ngModel)]="formData.message" 
                      required 
                      placeholder="Share your requirements or thoughts here..."></textarea>
                  </div>

                  <div class="col-12">
                    <button 
                      type="submit" 
                      class="btn-primary-gradient w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                      [disabled]="!contactForm.form.valid || isSubmitting()">
                      @if (isSubmitting()) {
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span>Sending Message...</span>
                      } @else {
                        <i class="bi bi-send-fill"></i>
                        <span>Send Message</span>
                      }
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  portfolio = inject(PortfolioService);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal<boolean>(false);
  submitSuccess = signal<boolean>(false);

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.isSubmitting.set(true);
    // Simulate async submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.formData = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.submitSuccess.set(false), 6000);
    }, 800);
  }
}

