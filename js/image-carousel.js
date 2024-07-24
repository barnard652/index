var carousel = document.querySelector('.footer-project');

// Set the wheel scroll sensitivity (lower numbers = more sensitive)
var scrollSensitivity = 10;

// Add event listeners for mouse wheel scrolling
carousel.addEventListener('wheel', function(event) {
  event.preventDefault();
  carousel.scrollLeft += event.deltaY * scrollSensitivity;
});

// Set the drag scroll sensitivity (lower numbers = more sensitive)
var dragSensitivity = 1.5;

// Initialize variables for click-and-drag functionality
var isMouseDown = false;
var startX, scrollLeft;

// Add event listeners for click-and-drag functionality
carousel.addEventListener('mousedown', function(event) {
  isMouseDown = true;
  startX = event.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', function() {
  isMouseDown = false;
});

carousel.addEventListener('mouseup', function() {
  isMouseDown = false;
});

carousel.addEventListener('mousemove', function(event) {
  if (!isMouseDown) return;
  event.preventDefault();
  var x = event.pageX - carousel.offsetLeft;
  var walk = (x - startX) * dragSensitivity;
  carousel.scrollLeft = scrollLeft - walk;
});

// Add event listener for click events
carousel.addEventListener('click', function(event) {
  // Check if the clicked element is a link
  if (event.target.tagName === 'A') {
    // Allow the default click behavior to occur
    return true;
  } else {
    // Prevent the default click behavior from occurring
    event.preventDefault();
    return false;
  }
});