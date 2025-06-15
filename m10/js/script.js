const clearBtn = document.getElementById('clearBtn');
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');

// Clear all dots on button click
clearBtn.addEventListener('click', function(event) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.remove());

  // Stop the click event from appearing in body
  event.stopPropagation();
});

// Add dot on body click
document.body.addEventListener('click', function(event) {
  // Avoid dots within click region
  if (event.target.closest('#controls')) {
    return;
  }

  const dot = document.createElement('div');
  dot.className = 'dot';

  // Get chosen size and color
  const size = parseInt(sizePicker.value, 10);
  const color = colorPicker.value;

  dot.style.height = size + 'px';
  dot.style.width = size + 'px';
  dot.style.background = color;

  // Position dot centered on click
  dot.style.left = (event.pageX - size / 2) + 'px';
  dot.style.top = (event.pageY - size / 2) + 'px';

  document.body.appendChild(dot);
});

