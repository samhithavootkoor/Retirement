const frames = document.querySelectorAll('.frame');
let current = 0;
const slideDuration = 6000; // 6 seconds per slide

frames[current].classList.add('active');

const slideshow = setInterval(() => {
  frames[current].classList.remove('active');
  current++;

  // STOP when last slide is reached
  if (current >= frames.length) {
    clearInterval(slideshow);
    return;
  }

  frames[current].classList.add('active');
}, slideDuration);



document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.volume = 0.3;   // soft, dignified volume
  music.play();
}, { once: true });
