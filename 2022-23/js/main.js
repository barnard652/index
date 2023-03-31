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
})();// JavaScript Document

// Navigating JS \/
// When the user scrolls down 50px from the top of the document, resize the header's font size
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById("header").style.display = "block";
    } else {
      document.getElementById("header").style.display = "none";
    }
  }
  
    window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
// Nav Burger animation
function NavBurger(x) {
   x.classList.toggle("NavBurgerAnimation");
}

// Project image hero changes scale as the user scolls past it \/
window.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.image-container img');

  window.addEventListener('scroll', () => {
const img = document.querySelector('.project-image-hero img');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const imgTop = img.offsetTop;
  const imgHeight = img.offsetHeight;
  const windowHeight = window.innerHeight;
  
  // calculate the scale based on the distance from the top of the image to the top of the viewport
  const distance = scrollTop + windowHeight - imgTop;
  const maxScale = 1.5; // set the maximum scale value
  const scale = Math.min(1 + distance / windowHeight, maxScale); // limit the scale value to the maximum
  
  // apply the scale to the image
  img.style.transform = `scale(${scale})`;
});
});
});

// parallax \/
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
