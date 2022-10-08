//dectecting button press

//adding click button on to every button
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

//when the keybored is clicked, this function invokes the sound and design function
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//detecting keybored press
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds copy/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds copy/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds copy/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds copy/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds copy/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds copy/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds copy/kick-bass.mp3");
      kick.play();
      break;
  };
}

//make the design different
function buttonAnimation(currentKey) {

  
  var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    //setting time to have the button normal again
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
