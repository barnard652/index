document.addEventListener('DOMContentLoaded', function() {
    const projectGallery = document.querySelector('body');
const parallaxSections = document.querySelectorAll('.parallax-section');

function parallaxEffect() {
  const scrollPosition = window.pageYOffset;
  const windowHeight = window.innerHeight;

  parallaxSections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionInView = scrollPosition > sectionTop - windowHeight;
    const sectionOutView = scrollPosition > sectionTop + sectionHeight;

    if (sectionInView && !sectionOutView) {
      const projects = section.querySelectorAll('.parallax');

      projects.forEach((project) => {
        const speed = project.getAttribute('data-speed');
        const yPos = -(scrollPosition - sectionTop + windowHeight) * speed;

        project.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    } else {
      // reset transform property to its default value when section is out of view
      projects.forEach(project => {
        project.style.transform = 'none';
      });
    }
  });
}

// Add scroll event listener only when screen width is above 768px
if (window.innerWidth >= 768) {
  window.addEventListener('scroll', parallaxEffect);
}

// Remove scroll event listener when screen width is below 768px
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    window.removeEventListener('scroll', parallaxEffect);
    // reset transform property to its default value when window is resized below 768px
    parallaxSections.forEach(section => {
      const projects = section.querySelectorAll('.parallax');
      projects.forEach(project => {
        project.style.transform = 'none';
      });
    });
  } else {
    window.addEventListener('scroll', parallaxEffect);
  }
});
  });