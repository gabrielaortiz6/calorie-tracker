//var exerciseAPIKey = 'BN9muUJAIB/KbJBS1hPo0g==sL04lBW2RLHAQr7Q';
var userExerciseInput = $('#exercise-input');
var userDurationInput = $('#duration-input');
var submitExerciseBtn = $('#exercise-btn');
var exerciseTable = document.querySelector('#exercise-table');
var tableBody = $('.table-body');
var userNameEl = $('#user-name');
var totalProteinEl = document.querySelector('#protein-total');
var totalFatsEl = document.querySelector('#fats-total');
var totalCarbsEl = document.querySelector('#carbs-total')
var caloriesEl = document.querySelector('#calories');
var storedCalories = 0;
//empty variables
var caloriesBurned = "";
var exercise = "";
var exerciseLabel = "";
//empty array of objects in order to store exercise and duration inputs, and calories burned 
var exercisesArray = [];

//variable for current date
var currentDateText = $('#currentDay');

//code for current date to apply on page
var currentDate = dayjs().format('dddd, MMMM D, YYYY');
currentDateText.text(currentDate);

//autofill options
var availableExercises = [
    {label: "Aerobics", value: "general"},
    {label: "Archery", value: "rcher"},
    {label: "Ballet", value: "allet"},
    {label: "Backstroke (swimming)", value: "ackstrok"},
    {label: "Baseball", value: "baseball"},
    {label: "Basketball", value: "basketball"},
    {label: "Beach Volleyball", value: "each"},
    {label: "BMX", value: "bmx"},
    {label: "Bowling", value: "owling"},
    {label: "Boxing", value: "oxing"},
    {label: "Breaststroke (Swimming)", value: "breakstroke"},
    {label: "Butterfly (Swimming)", value: "butterfly"},
    {label: "Calisthenics", value: "situp"},
    {label: "Canoeing", value: "canoeing"},
    {label: "Circuit Training", value: "train"},
    {label: "Climbing", value: "climbing"},
    {label: "Cricket", value: "cricket"},
    {label: "Croquet", value: "quet"},
    {label: "Cross Country", value: "cross"},
    {label: "Cycling", value: "ycling"},
    {label: "Dancing", value: "dancing"},
    {label: "Diving", value: "platform"},
    {label: "Dodgeball", value: "dodgeball"},
    {label: "Field hockey", value: "field%20hockey"},
    {label: "Football", value: "flag"},
    {label: "Freestyle (Swimming)", value: "freestyle"},
    {label: "Frisbee", value: "frisbee"},
    {label: "Golf", value: "golf"},
    {label: "Handball", value: "andball" },
    {label: "High Jump", value: "high%20jump"},
    {label: "Hiking", value: "iking"},
    {label: "Hockey", value: "ice%20hock"},
    {label: "Horseback Riding", value: "riding"},
    {label: "Hopscotch", value: "hopscotch"},
    {label: "Hurdles", value: "hurdles"},
    {label: "Ice Skating", value: "ce%20skating"},
    {label: "Jazzercise", value: "zerc"},
    {label: "Judo", value: "judo"},
    {label: "Jujitsu", value: "jujitsu"},
    {label: "Jumping Rope", value: "p%20rope"},
    {label: "Karate", value: "karate"},
    {label: "Kayaking", value: "kayak"},
    {label: "Kickboxing", value: "ick%20boxing"},
    {label: "Krav Maga", value: "rav%20maga"},
    {label: "Lacrosse", value: "lacrosse"},
    {label: "Weightlifting", value: "lifting"},
    {label: "Martial Arts", value: "artial"},
    {label: "Mountain Biking", value: "mountain"},
    {label: "Paddleball", value: "addleball"},
    {label: "Ping Pong", value: "pong"},
    {label: "Pole Vault", value: "pole"},
    {label: "Pushups", value: "pushup"},
    {label: "Racquetball", value: "cquet"},
    {label: "Rollerblading", value: "blading"},
    {label: "Rollerskating", value: "skating"},
    {label: "Rowing", value: "owing"},
    {label: "Rugby", value: "ugby"},
    {label: "Running", value: "run"},
    {label: "Sailing", value: "sail"},
    {label: "Scuba diving", value: "scuba"},
    {label: "Situps", value: "situp"},
    {label: "Skateboarding", value: "boarding"},
    {label: "Skiing", value: "skii"},
    {label: "Stair Machine", value: "r machine"},
    {label: "Step Aerobics", value: "step"},
    {label: "Soccer", value: "g%20soccer"},
    {label: "Softball", value: "softball"},
    {label: "Speed Skating", value: "eed%20ska"},
    {label: "Surfing", value: "board%20surf"},
    {label: "Squash", value: "squash"},
    {label: "Tae Kwon Do", value: "kwon"},
    {label: "Tap Dance", value: "dance"},
    {label: "Tennis", value: "g%20tennis"},
    {label: "Tobaggan (sledding)", value: "tobag"},
    {label: "Track and Field", value: "field"},
    {label: "Volleyball", value: "olleyball"},
    {label: "Walking (brisk)", value: "brisk"},
    {label: "Walking (leisurely)",  value: "run"},
    {label: "Water Skiing", value: "water%20sk"},
    {label: "Windsurfing", value: "surfing"},
    {label: "Yoga", value: "yoga"},
  ];

$(document).ready(function () {

    //retrieving name
    function updateName () {
        var storedName = localStorage.getItem("name");
        userNameEl.text(storedName);
    }

    function retrieveTotalCalories () {
        storedCalories = localStorage.getItem("totalCalories");
        caloriesEl.textContent = "Total Calories: " + storedCalories;
    }

    function retrieveMacros () {
        storedFats = localStorage.getItem("totalFats");
        storedCarbs = localStorage.getItem("totalCarbs");
        storedProtein = localStorage.getItem("totalProtein");

        totalFatsEl.textContent =  "Fats: " + storedFats;
        totalCarbsEl.textContent = "Carbs: " + storedCarbs;
        totalProteinEl.textContent = "Protein: " + storedProtein;
    }
    
    retrieveMacros();
    retrieveTotalCalories();
    updateName();
    retrieveStorage();

    // function for autocomplete
        $('#exercise-input').autocomplete({
           messages: null,
            source: availableExercises,

          options: {
            label: "label"
          },
          select: function( event, ui ) {

            event.preventDefault();

            exerciseLabel = ui.item.label;

            ('#exercise-input').textContent = exerciseLabel;
            exercise = ui.item.value
        },
        focus: function( event, ui) {
            event.preventDefault();
            $('#exercise-input').val(ui.item.label)
          }
        });

    //function for retrieving user input from storage
    function retrieveStorage() {

        //retrieves stored user inputs and parses them
        var storedData = JSON.parse(localStorage.getItem("user inputs"));

        //if there is something to retrieve in local storage, make it the value of exercise array
        if (storedData !== null) {
            exercisesArray = storedData;
        };

        //loop through each object in the exercisesArray and call the add row function
        exercisesArray.forEach((obj) => {
            addRow(obj.exerciseLabel, obj.duration, obj.calories);
        });
    };

    function addRow(exerciseLabel, duration, calories) {
           // Create a new table row
           var newRow = document.createElement('tr');
           newRow.classList.add("table-row");
           var exerciseCell = document.createElement('td');
           var durationCell = document.createElement('td');
           var caloriesBurnedCell = document.createElement('td');
           caloriesBurnedCell.classList.add('calories-burned');

           // Add the data from local storage to the new row
           //change what exercise cell equals so it matches label of array

           exerciseCell.textContent = exerciseLabel;
           durationCell.textContent = duration;
           caloriesBurnedCell.textContent = calories;

           //Append text content to new row
           newRow.appendChild(exerciseCell);
           newRow.appendChild(durationCell);
           newRow.appendChild(caloriesBurnedCell);

           // Check if the data is already in the table (source: Stack Overflow)
           var exerciseInTable = Array.from(exerciseTable.querySelectorAll('td:first-child'))
               .map((cell) => cell.textContent)
               .includes(exerciseLabel);

           // Skip adding the data if it already exists
           if (exerciseInTable) {
               return;
           }

           // Append the new row to the table
           exerciseTable.appendChild(newRow);
    }

    //function for processing and storing the inputs
    function processInput(event) {
        event.preventDefault();
    
        //var exercise = userExerciseInput.val();
        var duration = userDurationInput.val();

        if (exercise && duration) {

            //call API function and use exercise and duration as parameters
            getCaloriesBurnedApi(exercise, duration);

            //if there is no imput, a blank input, or the input for exercise does not match autofill options
        } else if (!exercise || !duration || exercise == " " || duration == " " || !(exercise in availableExercises)) {
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
            var caloriesBurned = data[0].total_calories;

             //creating objects out of inputs to add to the empty array (source: Stack Overflow)
             exercisesArray.push({ exercise: exercise, exerciseLabel: exerciseLabel, duration: duration, calories: caloriesBurned });
 
             //sets local storage with array
             localStorage.setItem("user inputs", JSON.stringify(exercisesArray));
             retrieveStorage();

            //subtracts caloriesBurned from storedCalories
             var totalCalories = storedCalories -= caloriesBurned;
             caloriesEl.textContent = "Total Calories: " + totalCalories;

        });
    };

    //click event
    submitExerciseBtn.on('click', processInput);
});

