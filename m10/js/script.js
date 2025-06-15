var mybutton = document.querySelector("button");

mybutton.addEventListener("click", function(event) {
  // Remove all dots 
  var elements = document.getElementsByClassName("dot");
  for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode.removeChild(elements[i]);
  }

  // Stop propagation to avoid adding a dot when clicking Clear
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.className = "dot";

  // Set dot styles
  dot.style.width = '8px';
  dot.style.height = '8px';
  dot.style.position = "absolute";
  dot.style.borderRadius = "50%";
  dot.style.backgroundColor = "blue";

  // Position dot 
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";

  document.body.appendChild(dot);
});
