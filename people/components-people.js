/* ============================================================
   Shared HTML Components — Nav & Footer (People sub-pages)
   ============================================================ */

const NAV_HTML = `
<nav id="navbar" class="scrolled">
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo">
      <img id="logo-white" src="../assets/logo-white.webp" alt="H.M. Chan & Co." style="display:none;" />
      <img id="logo-blue" src="../assets/logo-blue.webp" alt="H.M. Chan & Co." style="display:block;" />
    </a>
    <ul class="nav-links">
      <li><a href="../index.html">Home</a></li>
      <li><a href="../about.html">About</a></li>
      <li><a href="../practices.html">Practice Areas</a></li>
      <li><a href="../people.html" class="active">Our People</a></li>
      <li><a href="../news.html">News</a></li>
      <li><a href="../careers.html">Careers</a></li>
      <li><a href="../contact.html" class="nav-contact-btn">Contact Us</a></li>
    </ul>
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
        <img src="../assets/logo-white.webp" alt="H.M. Chan & Co." />
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
          <li><a href="../index.html">Home</a></li>
          <li><a href="../about.html">About Us</a></li>
          <li><a href="../practices.html">Practice Areas</a></li>
          <li><a href="../people.html">Our People</a></li>
          <li><a href="../news.html">News</a></li>
          <li><a href="../careers.html">Careers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Practice Areas</h5>
        <ul>
          <li><a href="../practices.html#capital-markets">Capital Markets</a></li>
          <li><a href="../practices.html#mergers-acquisitions">Mergers &amp; Acquisitions</a></li>
          <li><a href="../practices.html#private-equity">Private Equity</a></li>
          <li><a href="../practices.html#investment-funds">Investment Funds</a></li>
          <li><a href="../practices.html#wealth-management">Wealth Management</a></li>
          <li><a href="../practices.html#general-corporate">General Corporate</a></li>
          <li><a href="../practices.html#china-practice">China Practice</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <ul>
          <li>21/F, No. 8 Queen's Road Central</li>
          <li>Hong Kong</li>
          <li><a href="tel:+85237004000">+852 3700 4000</a></li>
          <li><a href="mailto:hongkong@hmchan.com.hk">hongkong@hmchan.com.hk</a></li>
          <li style="margin-top:0.5rem; color: rgba(255,255,255,0.5); font-size:0.8rem;">Mon – Fri: 9:30am – 6:00pm</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 H.M. Chan &amp; Co. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="../disclaimers.html">Disclaimers</a>
        <a href="../disclaimers.html#privacy">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject nav and footer, then run main init
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
  // Trigger main init after injection (fixes reveal animation)
  if (typeof hmcInit === 'function') hmcInit();
});
