/* ============================================================
   Shared HTML Components — Nav & Footer
   ============================================================ */
const NAV_HTML = `
<nav id="navbar" class="scrolled">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img id="logo-white" src="assets/logo-white.webp" alt="H.M. Chan & Co." style="display:none;" />
      <img id="logo-blue" src="assets/logo-blue.webp" alt="H.M. Chan & Co." style="display:block;" />
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="practices.html">Expertise</a></li>
      <li><a href="people.html">Our People</a></li>
      <li><a href="news.html">News</a></li>
      <li><a href="careers.html">Careers</a></li>
      <li><a href="contact.html" class="nav-contact-btn">Contact Us</a></li>
    </ul>
    <div class="lang-switcher" id="langSwitcher">
      <button class="lang-current" id="langBtn" aria-haspopup="true" aria-expanded="false">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        <span id="langLabel">EN</span>
        <svg class="lang-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <ul class="lang-dropdown" id="langDropdown" role="menu">
        <li role="menuitem" data-lang="en" data-label="EN">English</li>
        <li role="menuitem" data-lang="zh-TW" data-label="繁中">繁體中文</li>
        <li role="menuitem" data-lang="zh-CN" data-label="简中">简体中文</li>
        <li role="menuitem" data-lang="ja" data-label="日本語">日本語</li>
        <li role="menuitem" data-lang="ko" data-label="한국어">한국어</li>
        <li role="menuitem" data-lang="de" data-label="DE">Deutsch</li>
        <li role="menuitem" data-lang="fr" data-label="FR">Français</li>
      </ul>
    </div>
    <button class="nav-toggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
`;
const FOOTER_HTML = `
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/logo-white.webp" alt="H.M. Chan & Co." />
        <p>A premier Hong Kong corporate law firm specialising in cross-border transactions, capital markets, and private equity — delivering commercial solutions with precision and integrity.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/hmchanco/" target="_blank" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="practices.html">Expertise</a></li>
          <li><a href="people.html">Our People</a></li>
          <li><a href="news.html">News</a></li>
          <li><a href="careers.html">Careers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Practice Areas</h5>
        <ul>
          <li><a href="practices.html">Capital Markets</a></li>
          <li><a href="practices.html">Mergers &amp; Acquisitions</a></li>
          <li><a href="practices.html">Private Equity</a></li>
          <li><a href="practices.html">Investment Funds</a></li>
          <li><a href="practices.html">Wealth Management</a></li>
          <li><a href="practices.html">Regulation &amp; Compliance</a></li>
          <li><a href="practices.html">General Corporate</a></li>
          <li><a href="practices.html">China Practice</a></li>
        </ul>
      </div>
      <div class="footer-col footer-contact">
        <h5>Contact</h5>
        <p>21/F, No. 8 Queen's Road Central<br/>Central, Hong Kong</p>
        <p><a href="tel:+85237004000">+852 3700 4000</a></p>
        <p>Fax: +852 3700 4099</p>
        <p><a href="mailto:hongkong@hmchan.com.hk">hongkong@hmchan.com.hk</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 H.M. Chan &amp; Co. All rights reserved.</span>
      <span><a href="disclaimers.html">Disclaimers</a> &nbsp;|&nbsp; <a href="disclaimers.html">Privacy Policy</a></span>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', function () {
  // Inject nav & footer
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Language switcher logic
  setTimeout(initLangSwitcher, 0);

  // Re-run main init after nav is injected (fixes race condition)
  if (typeof hmcInit === 'function') hmcInit();
});

function initLangSwitcher() {
  const btn = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');
  const label = document.getElementById('langLabel');
  if (!btn || !dropdown) return;

  // Restore saved language
  const saved = localStorage.getItem('hmchan-lang') || 'en';
  const savedItem = dropdown.querySelector('[data-lang="' + saved + '"]');
  if (savedItem) {
    label.textContent = savedItem.dataset.label;
    if (saved !== 'en') applyTranslation(saved);
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const open = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  dropdown.querySelectorAll('li').forEach(function (item) {
    item.addEventListener('click', function () {
      const lang = item.dataset.lang;
      label.textContent = item.dataset.label;
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      localStorage.setItem('hmchan-lang', lang);
      applyTranslation(lang);
    });
  });

  document.addEventListener('click', function () {
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
}

function applyTranslation(lang) {
  if (lang === 'en') {
    // Remove Google Translate cookie and reload
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + location.hostname + ';';
    const el = document.getElementById('google_translate_element');
    if (el) el.innerHTML = '';
    location.reload();
    return;
  }
  // Set Google Translate cookie
  const pair = '/en/' + lang;
  document.cookie = 'googtrans=' + pair + '; path=/';
  document.cookie = 'googtrans=' + pair + '; path=/; domain=' + location.hostname;

  // Load Google Translate script if not already loaded
  if (!window.google || !window.google.translate) {
    window.googleTranslateElementInit = function () {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false
      }, 'google_translate_element');
    };
    const s = document.createElement('script');
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(s);
    // Hidden container required by Google Translate
    if (!document.getElementById('google_translate_element')) {
      const div = document.createElement('div');
      div.id = 'google_translate_element';
      div.style.display = 'none';
      document.body.appendChild(div);
    }
  } else {
    location.reload();
  }
}
