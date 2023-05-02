//cursor
const cursorTag = document.querySelector("div.cursor")
const balls = cursorTag.querySelectorAll("div")
const ballMessage = cursorTag.querySelector("div span")
const images = document.querySelectorAll("img[data-hover]")

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