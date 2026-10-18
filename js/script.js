/**
 * ==========================================================================
 * PERSONAL PORTFOLIO JAVASCRIPT - SANTHOSH REDDY PYARAM
 * Features:
 * - Light/Dark Theme Switching with Persistent LocalStorage
 * - Form Validation with Real-Time Feedback
 * - Mobile Navbar Auto-Collapse on Click
 * - Smooth Back-to-Top Navigation
 * - Resume Print / PDF Trigger
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ----------------------------------------------------------------------
    // 1. DYNAMIC CURRENT YEAR IN FOOTER
    // ----------------------------------------------------------------------
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // ----------------------------------------------------------------------
    // 2. LIGHT / DARK THEME TOGGLE (WITH LOCALSTORAGE PERSISTENCE)
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeToggleBtnMobile = document.getElementById('themeToggleBtnMobile');
    const themeIcon = document.getElementById('themeIcon');
    const themeIconMobile = document.getElementById('themeIconMobile');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('santhosh-portfolio-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'dark');

    function applyTheme(theme) {
        const isLight = theme === 'light';
        if (isLight) {
            htmlElement.setAttribute('data-theme', 'light');
        } else {
            htmlElement.removeAttribute('data-theme');
        }

        const iconClass = isLight ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
        const labelText = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';

        if (themeIcon) themeIcon.className = iconClass;
        if (themeIconMobile) themeIconMobile.className = iconClass;
        if (themeToggleBtn) {
            themeToggleBtn.setAttribute('title', labelText);
            themeToggleBtn.setAttribute('aria-label', labelText);
        }
        if (themeToggleBtnMobile) {
            themeToggleBtnMobile.setAttribute('title', labelText);
            themeToggleBtnMobile.setAttribute('aria-label', labelText);
        }

        localStorage.setItem('santhosh-portfolio-theme', theme);
    }

    applyTheme(initialTheme);

    function handleToggle() {
        const currentTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', handleToggle);
    }
    if (themeToggleBtnMobile) {
        themeToggleBtnMobile.addEventListener('click', handleToggle);
    }

    // ----------------------------------------------------------------------
    // 3. NAVBAR SCROLL EFFECT & MOBILE MENU AUTO-CLOSE
    // ----------------------------------------------------------------------
    const navbar = document.querySelector('.custom-navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarContent');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar?.classList.add('navbar-scrolled');
        } else {
            navbar?.classList.remove('navbar-scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // ----------------------------------------------------------------------
    // 4. BACK TO TOP BUTTON
    // ----------------------------------------------------------------------
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            backToTopBtn?.classList.add('show');
        } else {
            backToTopBtn?.classList.remove('show');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ----------------------------------------------------------------------
    // 5. CONTACT FORM VALIDATION & CLIENT-SIDE SUBMISSION
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('portfolioContactForm');
    const formAlert = document.getElementById('formSuccessAlert');

    if (contactForm) {
        const nameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('emailAddress');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        function validateField(input, condition, errorMessage) {
            const feedbackEl = input.nextElementSibling;
            if (!condition) {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                if (feedbackEl && feedbackEl.classList.contains('invalid-feedback')) {
                    feedbackEl.textContent = errorMessage;
                }
                return false;
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                return true;
            }
        }

        function validateName() {
            const val = nameInput.value.trim();
            return validateField(
                nameInput, 
                val.length >= 2, 
                'Please enter your full name (minimum 2 characters).'
            );
        }

        function validateEmail() {
            const val = emailInput.value.trim();
            return validateField(
                emailInput, 
                emailRegex.test(val), 
                'Please enter a valid email address (e.g., name@domain.com).'
            );
        }

        function validateSubject() {
            const val = subjectInput.value.trim();
            return validateField(
                subjectInput, 
                val.length >= 3, 
                'Please provide a subject line (minimum 3 characters).'
            );
        }

        function validateMessage() {
            const val = messageInput.value.trim();
            return validateField(
                messageInput, 
                val.length >= 10, 
                'Please write a descriptive message (minimum 10 characters).'
            );
        }

        nameInput.addEventListener('input', () => {
            if (nameInput.classList.contains('is-invalid')) validateName();
        });
        emailInput.addEventListener('input', () => {
            if (emailInput.classList.contains('is-invalid')) validateEmail();
        });
        subjectInput.addEventListener('input', () => {
            if (subjectInput.classList.contains('is-invalid')) validateSubject();
        });
        messageInput.addEventListener('input', () => {
            if (messageInput.classList.contains('is-invalid')) validateMessage();
        });

        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        subjectInput.addEventListener('blur', validateSubject);
        messageInput.addEventListener('blur', validateMessage);

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isSubjectValid = validateSubject();
            const isMessageValid = validateMessage();

            if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
                if (formAlert) {
                    formAlert.classList.remove('d-none');
                    formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                contactForm.reset();

                setTimeout(() => {
                    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
                        field.classList.remove('is-valid');
                    });
                }, 4000);
            } else {
                const firstInvalid = contactForm.querySelector('.is-invalid');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });
    }

    // ----------------------------------------------------------------------
    // 6. RESUME PRINT / SAVE TRIGGER
    // ----------------------------------------------------------------------
    const printResumeBtn = document.getElementById('printResumeBtn');
    if (printResumeBtn) {
        printResumeBtn.addEventListener('click', () => {
            window.print();
        });
    }

    console.log("Santhosh.dev portfolio scripts loaded cleanly.");
});
