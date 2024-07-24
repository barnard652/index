// Colour Scheme changer function to set a given theme/color-scheme - 
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();

// Moblie menu open and closes when clcicked
function toggleNav() {
  var nav = document.getElementById("MoblieNav");
  var menuIcon = document.querySelector(".menu-icon");
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    menuIcon.classList.remove("open");
  } else {
    nav.classList.add("open");
    menuIcon.classList.add("open");
  }
}

// When a link is clicked on the main project tities, it hides the .hero-img and shows the corresponding .project-gallery.
document.addEventListener("DOMContentLoaded", function() {
  const heroImg = document.querySelector('.hero-img');
  const workTypes = document.querySelectorAll('.work-type');
  const galleries = document.querySelectorAll('.project-gallery');

  workTypes.forEach(workType => {
    workType.addEventListener('click', function(event) {
      event.preventDefault();

      // Hide the hero image
      heroImg.style.display = 'none';

      // Hide all galleries
      galleries.forEach(gallery => {
        gallery.style.display = 'none';
      });

      // Show the selected gallery
      const selectedGallery = document.querySelector(`.project-gallery.${event.target.id}`);
      if (selectedGallery) {
        selectedGallery.style.display = 'block';
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const heroImg = document.querySelector('.hero-img');
  const workTypes = document.querySelectorAll('.work-type');
  const galleries = document.querySelectorAll('.project-gallery');
  let selectedWorkType = null; // To track the selected work type

  workTypes.forEach(workType => {
    workType.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove 'selected' class from the previously selected title
      if (selectedWorkType) {
        selectedWorkType.classList.remove('selected');
        selectedWorkType.style.backgroundSize = ''; // Reset background size
        selectedWorkType.style.backgroundPosition = ''; // Reset background position
        selectedWorkType.style.backgroundImage = '';
      }

      // Add 'selected' class to the clicked title
      event.target.classList.add('selected');
      selectedWorkType = event.target;

      // Change background-size and background-position
      event.target.style.backgroundSize = '100% 10%';
      event.target.style.backgroundPosition = '0 72%';
      event.target.style.backgroundImage = 'linear-gradient(120deg, #ee8012 0%, #ee8012 100%)';

      // Fade out the hero image
      heroImg.classList.add('fade-out');

      // Hide all galleries with animation
      galleries.forEach(gallery => {
        gallery.classList.remove('fade-in');
        gallery.classList.add('hidden');
      });

      // Show the selected gallery with animation after a short delay
      setTimeout(() => {
        const selectedGallery = document.querySelector(`.project-gallery.${event.target.id}`);
        if (selectedGallery) {
          selectedGallery.classList.remove('hidden');
          selectedGallery.classList.add('fade-in');
        }
      }, 500); // Duration matches the CSS transition time
    });
  });
});

// parallax \/
window.addEventListener('scroll', function() {
  const breakpoint = 768; // Set your breakpoint here
  if (window.innerWidth >= breakpoint) {
    const images = document.querySelectorAll('.project-gallery img');
    images.forEach(img => {
      const speed = img.getAttribute('data-speed') || 0.5;
      const yPos = window.scrollY * speed;
      img.style.transform = `translateY(${yPos}px)`;
    });
  } else {
    // Reset the transform if below the breakpoint
    const images = document.querySelectorAll('.project-gallery img');
    images.forEach(img => {
      img.style.transform = 'translateY(0px)';
    });
  }
});

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
