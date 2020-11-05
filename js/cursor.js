// function to change cursor - designe for new website 2020

	const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("click");

            setTimeout(() => {
                cursor.classList.remove("click");
            }, 500)
        })
		
		document.addEventListener('scroll', () => {
            cursor.classList.add("scroll");

            setTimeout(() => {
                cursor.classList.remove("scroll");
            }, 1000)
        })
