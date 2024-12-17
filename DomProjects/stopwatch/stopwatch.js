const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

// time variables

let seconds = 0;
let minutes = 0;
let hours = 0;

// leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variable for setInterval and timerstatus

let timerInterval = null;
let timerstatus = "stopped";

//timer function
function timer() {
  seconds++;
  if (seconds / 60 == 1) {
    minutes++;
    seconds = 0;
    if (minutes / 60 == 1) {
      hours++;
      minutes = 0;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let display = document.getElementById("timer");
  console.log(display);
  display.innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(timer, 1000);

play.addEventListener("click", function () {
  if (timerstatus === "stopped") {
    timerInterval = window.setInterval(timer, 10);
    timerstatus = "started";
  }
});

pause.addEventListener("click", function () {
  if (timerstatus === "started") {
    window.clearInterval(timerInterval);
    
    timerstatus = "stopped";
  }
});


reset.addEventListener('click', function(){
    window.clearInterval(timerInterval)
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById('timer').innerText = '00:00:00'
})