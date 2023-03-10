var currentDateText = $("#currentDay");
var nameInput = $("#name");
var submitBtn = $("#submit-btn");

// DAYJS
var currentDate = dayjs().format("dddd, MMMM D, YYYY");
currentDateText.text(currentDate);

//Saving Name Input to Local Storage

function storeName(event) {
  event.preventDefault();

  var nameInputText = nameInput.val();
  localStorage.setItem("name", nameInputText);


}

//Redirects to next page
function redirect() {

  // set the URL of the new page

   

  window.location.href = "./mainpage.html";
}

//click listeners

submitBtn.on("click", storeName);
submitBtn.on("click", redirect);

//


