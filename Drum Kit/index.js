//Detecting Clicks
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function() {
    playAudio(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//Detecting button presses
document.addEventListener("keydown", function(event) {
  playAudio(event.key);
  buttonAnimation(event.key);
});

//Playing Audio when appropriate button is clicked or pressed

function playAudio(event) {
  switch (event) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:

  }
}

function buttonAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function (){
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
