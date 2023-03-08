// API key for calories burned API
var exerciseAPIKey = "BN9muUJAIB/KbJBS1hPo0g==sL04lBW2RLHAQr7Q";

//var exercise has to be user input - must target the element
var exercise = "";

//var duration is how many minutes user exercised - also must target the element
var duration = "";

// exercise and duration will be parameters
var exerciseAPIUrl =
  "https://api.api-ninjas.com/v1/caloriesburned?activity=" +
  exercise +
  "&duration=" +
  duration;

//
// window.onload = function () {
//   var nameElement = document.getElementById("user-name");
//   nameElement.innerHTML = "David";
// };
// function updateName() {
//   var nameElement = document.getElementById("name");
//   var nameInput = document.getElementById("nameInput");
//   nameElement.innerHTML = nameInput.value;
// }
//
function updateName() {
  var nameInput = document.getElementById("nameInput");
  localStorage.setItem("name", nameInput.value);
  updateNameElement();
}
function updateNameElement() {
  var nameElement = document.getElementById("name");
  var name = localStorage.getItem("name");
  if (name) {
    nameElement.innerHTML = name;
  }
}

window.onload = function () {
  updateNameElement();
};
