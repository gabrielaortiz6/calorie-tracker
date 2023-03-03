var currentDateText = $('#currentDay');
var nameInput = $('#name');
var submitBtn = $('#submit-btn');

// DAYJS
var currentDate = dayjs().format('dddd, MMMM D, YYYY');
currentDateText.text(currentDate);

//Saving Name Input to Local Storage on Click
submitBtn.click(function (event) {
    event.preventDefault();
    
     var nameInputText = nameInput.val();
     localStorage.setItem("name", nameInputText);
})
