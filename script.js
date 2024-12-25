document.addEventListener('DOMContentLoaded', () => {
    // Hamburger toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
  
    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', (e) => {
        // If your hamburger is a <button>, default isn't typically an issue, 
        // but if you want to ensure no unintended behavior, uncomment:
        // e.preventDefault();
  
        // Check the current aria-expanded state
        const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        // Toggle to the opposite
        hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
        // Toggle the .show class on the nav
        navLinks.classList.toggle('show');
      });
    }
  
    // Smooth scroll for nav links
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    navAnchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Stop the default jump
  
        // Smooth scrolling
        const targetId = this.getAttribute('href').substring(1);
        const targetElem = document.getElementById(targetId);
  
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
  
        // Close the hamburger menu if it's open
        if (navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  
    // Smooth scroll for "View Services" button
    const viewServicesBtn = document.getElementById('view-services-btn');
    if (viewServicesBtn) {
      viewServicesBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Stop the default anchor jump
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElem = document.getElementById(targetId);
  
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
  