const display = document.getElementById("display");

// Cute click sound
const clickSound = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_14d5eb1842.mp3?filename=click-124467.mp3"
);

function appendValue(value) {
  playClick();
  display.value += value;
}

function clearDisplay() {
  playClick();
  display.value = "";
}

function calculate() {
  playClick();
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
    setTimeout(() => (display.value = ""), 1000);
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  playClick();
}

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}
