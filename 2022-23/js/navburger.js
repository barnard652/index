// Nav Burger antimatiom function
<script>
  function NavBurger(x) {
x.classList.toggle("NavBurgerAnimation");
}  

// When the user scrolls down 50px from the top of the document, resize the header's font size
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById("header").style.display = "block";
    } else {
      document.getElementById("header").style.display = "none";
    }
  }
  </script>

  <script>
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
