// API key for calories burned API
//var exerciseAPIKey = 'BN9muUJAIB/KbJBS1hPo0g==sL04lBW2RLHAQr7Q';
var userExerciseInput = $('#exercise-input');
var userDurationInput = $('#duration-input');
var submitExerciseBtn = $('#exercise-btn');
var exerciseTable = document.querySelector('#exercise-table');
var tableBody = $('.table-body');
//variable for current date
var currentDateText = $('#currentDay');

//code for current date to apply on page

// DAYJS
var currentDate = dayjs().format('dddd, MMMM D, YYYY');
currentDateText.text(currentDate);

//empty variables
var caloriesBurned = "";
//empty array of objects in order to store exercise and duration inputs
var exercisesArray = [];

$(document).ready(function () {

    // function for drop down list
    // function autocomplete() {
    //     var availableExercises= [

    //       "Baseball",
    //       "Basketball",
    //       "Boxing",
    //       "Climbing",
    //       "Dancing",
    //       "Football",
    //       "Frisbee",
    //       "Golf",
    //       "Handball",
    //       "High"
    //       "Horseback riding",
    //       "Lifting",
    //       "Martial Arts",
    //       "Ping Pong",
    //       "Pushup",
    //       "Run",
    //       "Sailing",
    //       "Situp",
    //       "Skii",
    //       "Soccer",
    //       "Surfing",
    //       "Tennis",
    //       "Track",
    //       "Volleyball",
    //       "Walking",
    //       "Water skii"
    //     ];

    // //     $( "#tags" ).autocomplete({
    // //       source: availableExercises
    // //     });
    // //   };

    //function for retrieving user input from storage
    function retrieveStorage() {

        //retrieves stored user inputs and parses them
        var storedData = JSON.parse(localStorage.getItem("user inputs"));

        //if there is something to retrieve in local storage, make it the value of exercise array
        if (storedData !== null) {
            exercisesArray = storedData;
        };

        //loop through each object in the exercisesArray
        exercisesArray.forEach((obj) => {
            addRow(obj.exercise, obj.duration, obj.calories);
        });
    };

    function addRow(exercise, duration, calories) {
           // Create a new table row
           var newRow = document.createElement('tr');
           newRow.classList.add("table-row");
           var exerciseCell = document.createElement('td');
           var durationCell = document.createElement('td');
           var caloriesBurnedCell = document.createElement('td');
           caloriesBurnedCell.classList.add('calories-burned');

           // Add the data from local storage to the new row
           exerciseCell.textContent = exercise;
           durationCell.textContent = duration;
           caloriesBurnedCell.textContent = calories;

           //Append text content to new row
           newRow.appendChild(exerciseCell);
           newRow.appendChild(durationCell);
           newRow.appendChild(caloriesBurnedCell);

           // Check if the data is already in the table (source: Stack Overflow)
           var exerciseInTable = Array.from(exerciseTable.querySelectorAll('td:first-child'))
               .map((cell) => cell.textContent)
               .includes(exercise);

           // Skip adding the data if it already exists
           if (exerciseInTable) {
               return;
           }

           // Append the new row to the table
           exerciseTable.appendChild(newRow);
    }

    //function to append fetched data to table
    function appendCaloriesBurned(data) {

        var caloriesBurnedCell = $('.calories-burned');
        //target cells we created
        caloriesBurnedCell.each(function () {

            if (caloriesBurnedCell.text() === "") {
                //set value of new cell to parameter
                caloriesBurnedCell.text(data);
            }

        });
    }

    //function for processing and storing the inputs
    function processInput(event) {
        event.preventDefault();

        //var exercise and var duration are the values of user inputs
        var exercise = userExerciseInput.val();
        var duration = userDurationInput.val();

        if (exercise && duration) {
            //retrieves storage
            getCaloriesBurnedApi(exercise, duration);
            //console.log(exercise + " " + duration)
        } else if (!exercise || !duration || exercise == " " || duration == " ") {
            window.alert("Error! Please properly enter the name of your exercise activity and the duration");
            return;
        }

        //empties the user input area after submitting input with click
        userExerciseInput.val("");
        userDurationInput.val("");

    }

    // exercise and duration will be parameters
    var getCaloriesBurnedApi = function (exercise, duration) {

        var exerciseAPIUrl = 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + exercise + '&duration=' + duration

        fetch(exerciseAPIUrl, {
            headers: {
                'X-Api-Key': 'BN9muUJAIB/KbJBS1hPo0g==sL04lBW2RLHAQr7Q'
            }
        }).then(function (response) {
            //creates an error if response from API is not 200
            if (response.status != 200) {
                window.alert("Error! Please enter a valid city")
                return
            }
            else if (response.ok) {
                return response.json();
            }
        }).then(function (data) {
            console.log(data);
            var caloriesBurned = data[0].total_calories;
            console.log(caloriesBurned);
             //stack overflow helped me here. creating objects out of inputs to add to the empty array
             exercisesArray.push({ exercise: exercise, duration: duration, calories: caloriesBurned });

             console.log(exercisesArray);
 
             //sets local storage with array
             localStorage.setItem("user inputs", JSON.stringify(exercisesArray));
             retrieveStorage();
            //appendCaloriesBurned(caloriesBurned);
        });
    };

    submitExerciseBtn.on('click', processInput);
});