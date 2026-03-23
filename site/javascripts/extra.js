document.addEventListener("DOMContentLoaded", function() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once animated, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target elements to animate on scroll (skipping first few to avoid conflict with CSS animations)
  const allElements = document.querySelectorAll('.md-typeset h2, .md-typeset h3, .md-typeset .admonition, .md-typeset table, .md-typeset img, .md-typeset .highlight');
  
  allElements.forEach((el, index) => {
    // If it's deeper in the page or not a first-level child, use JS reveal
    // For simplicity, we just check if it's not one of the first few items in the typeset
    if (index > 4) {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    }
  });

  // Add a nice "back to top" fade-in/out
  const topButton = document.querySelector('.md-top');
  if (topButton) {
    topButton.style.transition = 'opacity 0.3s, transform 0.3s';
  }
});
