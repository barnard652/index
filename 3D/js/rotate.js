document.addEventListener("mousemove", function (event) {
	const x = event.pageX
	const y = event.pageY
	
	const midX = x - window.innerWidth / 2
	const midY = y - window.innerWidth / 2
	
	const box = document.querySelector("div.book")
 //  \/ used to chand position of book \/		
 //	box.style.left = x + "px"
 //	box.style.top = y + "px"
 //	 /\ used to chand position of book /\	
	box.style.transform = "rotateX(" + ( midY * 0.2 ) +  "deg) rotateY(" + ( midX * 0.5 ) + "deg)"
	
	
})
