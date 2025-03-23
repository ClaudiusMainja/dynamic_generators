  // Animation configuration
  const animConfig = {
    // Animation speed (in seconds)
    animationSpeed: 0.8
  };
  
  // Initialize animations only
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Add parallax effect
    initParallax();
  });
  
  // Animation sequence
  function initAnimations() {
    const tl = gsap.timeline();
    
    tl.to('#hero-title', {
      opacity: 1,
      y: 0, 
      duration: animConfig.animationSpeed,
      ease: 'power2.out'
    })
    .to('#hero-description', {
      opacity: 1,
      y: 0,
      duration: animConfig.animationSpeed,
      ease: 'power2.out'
    }, '-=0.3')
    .to('#hero-cta', {
      opacity: 1,
      y: 0,
      duration: animConfig.animationSpeed,
      ease: 'power2.out'
    }, '-=0.3');
    
    // Mouse movement effect on hero elements
    const heroContent = document.querySelector('#hero .container');
    
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      gsap.to(heroContent, {
        x: (x - 0.5) * 20,
        y: (y - 0.5) * 20,
        duration: 1,
        ease: 'power2.out'
      });
    });
  }
  
  // Parallax effect for background
  function initParallax() {
    const bgImage = document.getElementById('hero-background');
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      // Move background slightly slower than scroll
      gsap.to(bgImage, {
        y: scrollPosition * 0.5,
        duration: 0.3,
        ease: 'none'
      });
    });
  }
  
  // Function to trigger animations when changing pages without changing content
  function refreshAnimations() {
    // Reset opacity to 0
    document.getElementById('hero-title').style.opacity = 0;
    document.getElementById('hero-description').style.opacity = 0;
    document.getElementById('hero-cta').style.opacity = 0;
    
    // Re-run animations
    initAnimations();
    
    // Add a pulse effect to the CTA button
    gsap.to('#hero-cta a', {
      scale: 1.1,
      duration: 0.4,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });
  }

  //services section
  document.addEventListener('DOMContentLoaded', function() {
    const serviceColumns = document.querySelectorAll('[data-aos]');
    
    // Apply initial styles
    serviceColumns.forEach((column, index) => {
      column.style.opacity = '0';
      column.style.transform = 'translateY(20px)';
      
      // Staggered animation delay
      setTimeout(() => {
        column.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        column.style.opacity = '1';
        column.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  });
  

  //services hero
   // Enhanced animation for service items visibility
   document.addEventListener('DOMContentLoaded', function() {
    const serviceColumns = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }, index * 150);
        }
      });
    }, { threshold: 0.2 });
    
    serviceColumns.forEach(column => {
      column.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(column);
    });
  });