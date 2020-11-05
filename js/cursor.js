// function to change cursor - designe for new website 2020

document.addEventListener("mousemove", function (event) {
	const x = event.pageX
	const y = event.pageY
	
	const midX = x - window.innerWidth / 2
	const midY = y - window.innerWidth / 2
	
	const box = document.querySelector(".cursor")	
	box.style.left = x + "px"
	box.style.top = y + "px"
})
