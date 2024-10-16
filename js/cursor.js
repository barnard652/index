// parallax effect \/
const projectGallery = document.querySelector('body');

function parallaxEffect() {
  const scrollPosition = window.pageYOffset;

  const projects = projectGallery.querySelectorAll('.parallax');

  projects.forEach((project) => {
    const speed = project.getAttribute('data-speed');

    const yPos = -(scrollPosition * speed);

    project.style.transform = `translate3d(0, ${yPos}px, 0)`;
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
  } else {
    window.addEventListener('scroll', parallaxEffect);
  }
});


// cursor
const cursorTag = document.querySelector("div.cursor")
const balls = cursorTag.querySelectorAll("div")
const ballMessage = cursorTag.querySelector("div span")
const images = document.querySelectorAll("img[data-hover]")
const links = document.querySelectorAll("a")

let aimX = 0
let aimY = 0

balls.forEach((ball, index) => {
  let currentX = 0
  let currentY = 0

  let speed = 0.3 - index * 0.015

  const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    // Check distance from right edge of the window
    const windowWidth = window.innerWidth || document.documentElement.clientWidth
    const distanceFromRight = windowWidth - currentX
    if (distanceFromRight < 350) {
      cursorTag.classList.add("left")
    } else {
      cursorTag.classList.remove("left")
    }

    requestAnimationFrame(animate)
  }

  animate()
})

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
})

images.forEach((image) => {
  image.addEventListener("mouseover", function () {
    ballMessage.classList.add("visible")
    ballMessage.innerHTML = image.getAttribute("data-hover")
  })

  image.addEventListener("mouseout", function () {
    ballMessage.classList.remove("visible")
  })
})

links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    toggleTheme(true)
  })

  link.addEventListener("mouseout", function () {
    toggleTheme(false)
  })

  link.addEventListener("click", function () {
    toggleTheme(false)
  })
})

function toggleTheme(isHovering) {
  const cursorBall = document.querySelector("div.cursor div")
  if (isHovering) {
    cursorBall.classList.add("solid-fill")
  } else {
    cursorBall.classList.remove("solid-fill")
  }
}
