const clearBtn = document.getElementById('clearBtn');
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const controls = document.getElementById('controls');

clearBtn.addEventListener('click', function(event) {
  document.querySelectorAll('.dot').forEach(dot => dot.remove());
  // Avoid dot on clear button
  event.stopPropagation();
});

document.addEventListener('click', function(event) {
  // Avoid dot in control section
  if (controls.contains(event.target)) {
    return;
  }

  const dot = document.createElement('div');
  dot.className = 'dot';

  // Get size & color values
  const size = parseInt(sizePicker.value, 10) || 8;
  const color = colorPicker.value || '#0000ff';

  dot.style.height = size + 'px';
  dot.style.width = size + 'px';
  dot.style.background = color;

  // Calculate position 
  dot.style.left = (event.pageX - size / 2) + 'px';
  dot.style.top = (event.pageY - size / 2) + 'px';

  document.body.appendChild(dot);
});
