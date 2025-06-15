const images = [
  { src: 'images/cat1.jpg', alt: 'Cat drinking tea', desc: 'Cat 1: A cat enjoying its tea.' },
  { src: 'images/cat2.jpg', alt: 'Cat driving a scooter', desc: 'Cat 2: A cat preparing to ride a scooter!' },
  { src: 'images/cat3.jpg', alt: 'Cat playing CS:GO', desc: 'Cat 3: Gamer cat.' },
  { src: 'images/cat4.jpg', alt: 'Working cat', desc: 'Cat 4: A cat working on its laptop.' },
  { src: 'images/cat5.jpg', alt: 'Prison cat', desc: 'Cat 5: A cat locked up in prison.' }
];

let currentIndex = 0;
let countdown = 4;
let timer;

const slide = document.getElementById('slide');
const desc = document.getElementById('description');
const timerDisplay = document.getElementById('timer');

function updateSlide() {
  const current = images[currentIndex];
  slide.classList.remove('visible');

  setTimeout(() => {
    slide.src = current.src;
    slide.alt = current.alt;
    desc.textContent = current.desc;
    slide.classList.add('visible');
  }, 100); // Slight delay for smoother fade
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
    timerDisplay.textContent = countdown;
    if (countdown === 0) {
      showNext();
    }
  }, 1000);
}

document.getElementById('nextBtn').addEventListener('click', showNext);
document.getElementById('prevBtn').addEventListener('click', showPrev);

// Initialize
slide.classList.add('visible');
updateSlide();
resetTimer();
