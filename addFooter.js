document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <!-- FOOTER -->
  <footer class="site-footer">
    <div class="footer-container">
      <!-- Left area (or full-width on mobile) -->
      <div class="footer-left">
        <p>
          &copy; 2024 Dynamic Mortgage. All Rights Reserved.
          <br />NMLS ID #1797180
        </p>
        <p>
          <a href="privacy.html">Privacy Policy</a> | 
          <a href="terms.html">Terms &amp; Conditions</a>
        </p>
      </div>
  
      <!-- Right area (social icons) -->
      <div class="footer-right">
        <div class="footer-social">
          <!-- Social icons open in new tab -->
          <a 
            target="_blank" 
            href="https://www.facebook.com/DynamicMortgage" 
            aria-label="Facebook" 
            rel="noopener noreferrer"
          >
            <img src="images/icons/facebook.svg" alt="Facebook" />
          </a>
          <a 
            target="_blank" 
            href="https://x.com/DynamicMortgage" 
            aria-label="X / Twitter" 
            rel="noopener noreferrer"
          >
            <img src="images/icons/twitter.svg" alt="X/Twitter" />
          </a>
          <a 
            target="_blank" 
            href="https://www.linkedin.com/company/dynamic-mortgage/" 
            aria-label="LinkedIn" 
            rel="noopener noreferrer"
          >
            <img src="images/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a 
            target="_blank" 
            href="https://www.instagram.com/dynamic.mortgage/" 
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <img src="images/icons/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
    `;

    // Insert the footer at the very end of the <body> element
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  });