
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


//parallaxing effect \/
(function () {
    const bg_parallax = document.getElementsByClassName("bg_parallax"); Array.prototype.forEach.call(bg_parallax, function (el) {
      let bgPos = {
        x: 50,
        y: 50
      };
      const delta = -0.005;
      let reactToTweenUpdate = () => {
        let winW = window.innerWidth / 2;
        let winH = window.innerHeight / 2;
        el.style.backgroundPosition = `${50 - (bgPos.x - winW) * delta}% ${
          50 - (bgPos.y - winH) * delta
        }%`;;
      };
      let tween = new TweenMax(bgPos, 0.9, {
        onUpdate: () => reactToTweenUpdate(),
        ease: Power4.easeOut    
      });
      el.onmousemove = function (event) {
        tween.updateTo(
          {
            x: event.clientX,
            y: event.clientY
          },
          true
        );
      };
    });
  })();
