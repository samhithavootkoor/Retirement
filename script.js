const frames = document.querySelectorAll('.frame');
let current = 0;

setInterval(() => {
  frames[current].classList.remove('active');
  current = (current + 1) % frames.length;
  frames[current].classList.add('active');
}, 6000);


document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.volume = 0.3;   // soft, dignified volume
  music.play();
}, { once: true });
