//Shows & Hides The Bookmarks
document.getElementById('circle').addEventListener('click', function() {
  this.style.display = 'block';
});
//Below is the Dragging system for the "circle" being the Popup menu for the bookmarks
var circle = document.getElementById("circle");

var isDragging = false;
var offset = { x: 0, y: 0 };

circle.addEventListener("mousedown", function(e) {
  isDragging = true;
  offset.x = e.clientX - circle.getBoundingClientRect().left;
  offset.y = e.clientY - circle.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function(e) {
  if (isDragging) {
    circle.style.left = e.clientX - offset.x + "px";
    circle.style.top = e.clientY - offset.y + "px";
  }
});

document.addEventListener("mouseup", function() {
  isDragging = false;
});
