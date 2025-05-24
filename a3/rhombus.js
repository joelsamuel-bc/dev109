document.getElementById('rhombusForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.getElementById('height').value);
  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;
  const symbol = document.getElementById('symbol').value;

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = "";

  let result = "";

  for (let i = 1; i <= height; i++) {
    result += createLine(i, height, symbol, color1, color2) + "\n";
  }
  for (let i = height; i >= 1; i--) {
    result += createLine(i, height, symbol, color1, color2) + "\n";
  }

  outputDiv.innerHTML = result;
});

function createLine(count, height, symbol, color1, color2) {
  let line = "&nbsp;".repeat(height - count);
  for (let j = 1; j <= count; j++) {
    let color = (j % 2 === 0) ? color2 : color1;
    line += `<span style="color:${color}">${symbol}</span>`;
  }
  return line;
}

