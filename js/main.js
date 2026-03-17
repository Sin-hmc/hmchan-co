/* ============================================================
   H.M. Chan & Co. — Main JavaScript
   ============================================================ */

function hmcInit() {

  /* --- Navbar scroll behaviour --- */
  const navbar = document.getElementById('navbar');
  const isHeroPage = !!document.getElementById('hero'); // only homepage has a full hero

  if (navbar) {
    const updateLogo = () => {
      const logoWhite = document.getElementById('logo-white');
      const logoBlue = document.getElementById('logo-blue');
      // On hero page: show white logo when transparent, blue when scrolled
      // On inner pages: always show blue logo
      if (isHeroPage && navbar.classList.contains('transparent')) {
        if (logoWhite) logoWhite.style.display = 'block';
        if (logoBlue) logoBlue.style.display = 'none';
      } else {
        if (logoWhite) logoWhite.style.display = 'none';
        if (logoBlue) logoBlue.style.display = 'block';
      }
    };

    const onScroll = () => {
      // On homepage: transparent over hero, then scrolled (dark)
      // On inner pages: always scrolled (dark) since page-hero is dark navy
      if (isHeroPage) {
        const scrolled = window.scrollY > 60;
        if (scrolled) {
          navbar.classList.add('scrolled');
          navbar.classList.remove('transparent');
        } else {
          navbar.classList.remove('scrolled');
          navbar.classList.add('transparent');
        }
      } else {
        // Inner pages: always dark navy navbar
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
      }
      updateLogo();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Mobile nav toggle --- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* --- Active nav link --- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage) {
      a.classList.add('active');
    }
  });

  /* --- Hero parallax --- */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.25}px)`;
    }, { passive: true });
  }

  /* --- Scroll reveal animation --- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* --- Counter animation --- */
  const counters = document.querySelectorAll('.count-up');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          let current = 0;
          const increment = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current + suffix;
          }, 25);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  /* --- Contact form submit (placeholder) --- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent';
      btn.disabled = true;
      btn.style.background = '#1a7a3c';
      btn.style.borderColor = '#1a7a3c';
    });
  }

}

// Run immediately if DOM is ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hmcInit);
} else {
  hmcInit();
}
