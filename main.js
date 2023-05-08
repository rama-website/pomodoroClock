const pomodoroDuration = 25 * 60; // in seconds
const breakDuration = 5 * 60; // in seconds

function updateTimerDisplay(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const display = `${displayMinutes}:${displaySeconds}`;
    document.getElementById("timerDisplay").textContent = display;
  }

  let timeRemaining;
let intervalId;

function startTimer(duration) {
  timeRemaining = duration;
  intervalId = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay(timeRemaining);
    if (timeRemaining === 0) {
      clearInterval(intervalId);
      alert("Time's up!");
    }
  }, 1000);
}

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", () => {
  startTimer(pomodoroDuration);
});

pauseButton.addEventListener("click", () => {
  clearInterval(intervalId);
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  updateTimerDisplay(pomodoroDuration);
});

let isPomodoro = true;

function startTimer(duration) {
  timeRemaining = duration;
  intervalId = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay(timeRemaining);
    if (timeRemaining === 0) {
      clearInterval(intervalId);
      alert("Time's up!");
      if (isPomodoro) {
        isPomodoro = false;
        startTimer(breakDuration);
      } else {
        isPomodoro = true;
        startTimer(pomodoroDuration);
      }
    }
  }, 1000);
}

