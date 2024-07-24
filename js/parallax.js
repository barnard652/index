window.addEventListener('scroll', function() {
  const images = document.querySelectorAll('.project-gallery img');
  images.forEach(img => {
      const speed = img.getAttribute('data-speed') || 0.5;
      const yPos = window.scrollY * speed;
      img.style.transform = `translateY(${yPos}px)`;
  });
});