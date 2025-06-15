const images = [
  { src: 'images/m08-hotel.jpg', alt: 'Img 1 Desc', desc: 'Test.' },
  { src: 'images/img2.jpg', alt: 'Img 2 Desc', desc: '.' },
  { src: 'images/img3.jpg', alt: 'Img 3 Desc', desc: '.' },
  { src: 'images/img4.jpg', alt: 'Img 4 Desc', desc: '.' },
  { src: 'images/img5.jpg', alt: 'Img 5 Desc', desc: '.' }
];

let currentIndex = 0;
let countdown = 4;
let timer;

const slide = document.getElementById('slide');
const desc = document.getElementById('description');
const timerDisplay = document.getElementById('timer');

function updateSlide() {
  const current = images[currentIndex];
  slide.src = current.src;
  slide.alt = current.alt;
  desc.textContent = current.desc;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
  resetTimer();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  countdown = 4;
  timerDisplay.textContent = countdown;
  timer = setInterval(() => {
    countdown--;
    if (countdown === 0) {
      showNext();
    }
    timerDisplay.textContent = countdown;
  }, 1000);
}

document.getElementById('nextBtn').addEventListener('click', showNext);
document.getElementById('prevBtn').addEventListener('click', showPrev);

// Initialize
updateSlide();
resetTimer();

