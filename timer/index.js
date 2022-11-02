const body = document.getElementById("body");

const minInput = document.getElementById("minInput");
const secInput = document.getElementById("secInput");

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

const oneMin = document.getElementById("oneMin");
const fiveMin = document.getElementById("fiveMin");
const tenMin = document.getElementById("tenMin");

const audio = new Audio("./assets/iphone_alarm.mp3");

let isStopped = true;
let timeLeft = 0;

let seconds = 0;
let minutes = 0;

if (localStorage.seconds) {
  seconds = parseInt(localStorage.seconds);
} else {
  localStorage.setItem("seconds", 0);
}
if (localStorage.minutes) {
  minutes = parseInt(localStorage.minutes);
} else {
  localStorage.setItem("minutes", 0);
}
if (!localStorage.isStarted) {
  localStorage.setItem("isStarted", false);
}

const inputsOnChange = (min, sec) => {
  const min1 = parseInt(min);
  const sec1 = parseInt(sec);

  if (min1<10) {
    minInput.value = "0" + min1;
  } else {
    minInput.value = min1;
  }

  if (sec1<10) {
    secInput.value = "0" + sec1;
  } else {
    secInput.value = sec1;
  }

  localStorage.seconds = sec1;
  localStorage.minutes = min1;
}

const onFinish = () => {
  if (localStorage.isStarted === "true") {
    audio.play()
    isStopped = true;
    stopButton.disabled = true;
    resetButton.disabled = false;
    
    minInput.readOnly = false;
    secInput.readOnly = false;

    body.classList.add("onFinish");
  }  
}

const timer = setInterval(() => {
  if (!isStopped && timeLeft >= 0) {
  inputsOnChange(timeLeft/60, timeLeft%60)
  timeLeft -= 1;
  } else if (parseInt(localStorage.minutes) === 0 && parseInt(localStorage.seconds) === 0) {
    onFinish();
  }
}, 1000)

const startTimer = () => {
  timeLeft = parseInt(secInput.value) + parseInt(minInput.value)*60;

  if (timeLeft != 0){
    isStopped = false;

    stopButton.disabled = false;
    resetButton.disabled = true;

    oneMin.disabled = true;
    fiveMin.disabled = true;
    tenMin.disabled = true;
    
    minInput.readOnly = true;
    secInput.readOnly = true;

    localStorage.isStarted = "true";
  }

}

const stopTimer = () => {
  localStorage.isStarted = "false";

  isStopped = true;
  resetButton.disabled = false;
  stopButton.disabled = true;
}

const resetTimer = () => {
  localStorage.isStarted = "false";

  isStopped = true;

  oneMin.disabled = false;
  fiveMin.disabled = false;
  tenMin.disabled = false;

  stopButton.disabled = true;

  minInput.readOnly = false;
  secInput.readOnly = false;

  localStorage.minutes = 0;
  localStorage.seconds = 0;
  
  inputsOnChange(localStorage.minutes, localStorage.seconds);
  body.classList.remove("onFinish");
}

const addMinutes = (mins) => {
  inputsOnChange(parseInt(localStorage.minutes) + mins, localStorage.seconds);
}

const inputChange = () => {
  inputsOnChange(minInput.value, secInput.value);
}

stopButton.disabled = true;
resetButton.disabled = false;

oneMin.disabled = true;
fiveMin.disabled = true;
tenMin.disabled = true;

minInput.readOnly = true;
secInput.readOnly = true;

inputsOnChange(minutes, seconds);

if (localStorage.isStarted === "true") {
  startTimer();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

oneMin.addEventListener("click", () => addMinutes(1));
fiveMin.addEventListener("click", () => addMinutes(5));
tenMin.addEventListener("click", () => addMinutes(10));
