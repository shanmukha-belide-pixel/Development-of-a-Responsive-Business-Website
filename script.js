/* ============================================================
   TEJA SUPPLIERS — Main JavaScript
   Handles: Page loader, Navbar, Mobile menu, Scroll reveal,
            Product filters, Contact form, Back-to-top
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────
     1. PAGE LOADER
  ────────────────────────────────────────── */
  const loader = document.getElementById('page-loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1500);
  });
  // Fallback: hide after 3s regardless
  setTimeout(() => loader.classList.add('hidden'), 3000);


  /* ──────────────────────────────────────────
     2. STICKY NAVBAR + ACTIVE LINK TRACKING
  ────────────────────────────────────────── */
  const navbar      = document.getElementById('navbar');
  const navLinks    = document.querySelectorAll('#navbar .nav-link, #mobile-menu .nav-link');
  const sections    = document.querySelectorAll('section[id]');

  // Scroll handler: navbar style + active link
  const onScroll = () => {
    // Sticky style
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back-to-top button
    const btt = document.getElementById('back-to-top');
    if (window.scrollY > 500) {
      btt.classList.add('visible');
    } else {
      btt.classList.remove('visible');
    }

    // Active link tracking via IntersectionObserver fallback
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 100) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on load


  /* ──────────────────────────────────────────
     3. MOBILE MENU
  ────────────────────────────────────────── */
  const hamburgerBtn  = document.getElementById('hamburger-btn');
  const mobileMenu    = document.getElementById('mobile-menu');
  const mobileClose   = document.getElementById('mobile-close-btn');
  const mobileNavLinks = document.querySelectorAll('#mobile-menu a');

  const openMenu = () => {
    mobileMenu.classList.add('open');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileClose.addEventListener('click', closeMenu);

  // Close menu when a mobile nav link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });


  /* ──────────────────────────────────────────
     4. SMOOTH SCROLL FOR ANCHOR LINKS
  ────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });


  /* ──────────────────────────────────────────
     5. SCROLL REVEAL (IntersectionObserver)
  ────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after animation fires once for performance
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });


  /* ──────────────────────────────────────────
     6. PRODUCT FILTER TABS
  ────────────────────────────────────────── */
  const filterTabs    = document.querySelectorAll('.filter-tab');
  const productCards  = document.querySelectorAll('.product-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');

      // Update active tab styling + ARIA
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Filter product cards with fade animation
      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          // Trigger re-reveal animation
          card.classList.remove('visible');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.classList.add('visible');
            });
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  /* ──────────────────────────────────────────
     7. CONTACT FORM
  ────────────────────────────────────────── */
  const form        = document.getElementById('inquiry-form');
  const submitBtn   = document.getElementById('form-submit-btn');
  const successMsg  = document.getElementById('form-success');

  // Simple field validation helpers
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9+\s\-]{10,15}$/.test(phone.trim());

  const setFieldError = (input, hasError) => {
    if (hasError) {
      input.style.borderColor = 'hsl(0, 70%, 55%)';
      input.style.boxShadow = '0 0 0 3px hsla(0,70%,55%,0.15)';
    } else {
      input.style.borderColor = '';
      input.style.boxShadow = '';
    }
  };

  // Live validation on blur
  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      // Clear error on user typing
      setFieldError(field, false);
    });
  });

  const validateField = (field) => {
    if (field.hasAttribute('required') && !field.value.trim()) {
      setFieldError(field, true);
      return false;
    }
    if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
      setFieldError(field, true);
      return false;
    }
    if (field.type === 'tel' && field.value && !isValidPhone(field.value)) {
      setFieldError(field, true);
      return false;
    }
    setFieldError(field, false);
    return true;
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validate required fields
      const nameInput    = document.getElementById('form-name');
      const phoneInput   = document.getElementById('form-phone');
      const productInput = document.getElementById('form-product');
      const emailInput   = document.getElementById('form-email');

      const isNameValid    = validateField(nameInput);
      const isPhoneValid   = validateField(phoneInput);
      const isProductValid = validateField(productInput);
      const isEmailValid   = emailInput.value ? validateField(emailInput) : true;

      if (!isNameValid || !isPhoneValid || !isProductValid || !isEmailValid) {
        // Shake animation on submit button for invalid form
        submitBtn.style.animation = 'none';
        submitBtn.offsetHeight; // reflow
        submitBtn.style.transform = 'translateX(-6px)';
        setTimeout(() => { submitBtn.style.transform = 'translateX(6px)'; }, 80);
        setTimeout(() => { submitBtn.style.transform = 'translateX(-4px)'; }, 160);
        setTimeout(() => { submitBtn.style.transform = 'translateX(0)'; }, 240);
        return;
      }

      // Simulate form submission (loading state)
      const originalContent = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10" opacity="0.25"/>
          <path d="M12 2a10 10 0 0110 10" stroke-linecap="round"/>
        </svg>
        Sending...
      `;
      submitBtn.disabled = true;

      // Add CSS for spin
      if (!document.getElementById('spin-style')) {
        const style = document.createElement('style');
        style.id = 'spin-style';
        style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
        document.head.appendChild(style);
      }

      // Simulate API call delay
      setTimeout(() => {
        // Hide form, show success
        form.style.display = 'none';
        successMsg.classList.add('show');
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;

        // Reset form
        form.reset();
        form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
          setFieldError(field, false);
        });
      }, 1800);
    });
  }


  /* ──────────────────────────────────────────
     8. BACK TO TOP
  ────────────────────────────────────────── */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ──────────────────────────────────────────
     9. HERO SECTION — Subtle Parallax
  ────────────────────────────────────────── */
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    }, { passive: true });
  }


  /* ──────────────────────────────────────────
     10. PRODUCT CARDS — Initial reveal
  ────────────────────────────────────────── */
  // Mark all visible cards as needing reveal observation
  productCards.forEach(card => {
    if (!card.classList.contains('hidden')) {
      revealObserver.observe(card);
    }
  });

}); // end DOMContentLoaded
