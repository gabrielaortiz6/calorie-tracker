// API key for calories burned API
var exerciseAPIKey = 'BN9muUJAIB/KbJBS1hPo0g==sL04lBW2RLHAQr7Q';
var userExerciseInput = $('#exercise-input');
var userDurationInput = $('#duration-input');
var submitExerciseBtn = $('#exercise-btn');

//empty array of objects in order to store exercise and duration inputs
var exercisesArray = [];

//function for retrieving user input from storage
function retrieveStorage() {

    var storedData = JSON.parse(localStorage.getItem("user inputs"));

    //if there is something to retrieve in local storage, make it the value of a variable
    if (storedData !== null) {
        exercisesArray = storedData;
    };

    console.log(exercisesArray);
};

//function for processing and storing the inputs
function processInput(event) {
event.preventDefault();

//var exercise and var duration are the values of user inputs
var exercise = userExerciseInput.val();
var duration = userDurationInput.val();

if (exercise && duration) {
    //getCaloriesBurnedApi(exercise, duration);
    console.log(exercise + " " + duration)
} else if (!exercise || !duration || exercise == " " || duration == " ") {
    window.alert("Error! Please properly enter the name of your exercise activity and the duration");
    return;
}

//stack overflow helped me here. creating objects out of inputs to add to the empty array
 exercisesArray.push({exercise: exercise, duration: duration});

 console.log(exercisesArray);

 //sets local storage with array
 localStorage.setItem("user inputs", JSON.stringify(exercisesArray));

 //empties the user input area after submitting input with click
 userExerciseInput.val("");
 userDurationInput.val("");

//call other functions
retrieveStorage();
}

submitExerciseBtn.on('click', processInput)

// exercise and duration will be parameters
var getCaloriesBurnedApi = function (exercise, duration) {

        var exerciseAPIUrl = 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + exercise + '&duration=' + duration;

        fetch(exerciseAPIUrl, {
            headers: {
                'X-Api-Key': 'BN9muUJAIB/KbJBS1hPo0g==sL04lBW2RLHAQr7Q'
            }
        })
        .then(function (response) {
            //creates an error if response from API is not 200
            if (response.status != 200) {
                window.alert("Error! Please enter a valid city")
                return
            }
            else if (response.ok) {
                return response.json();
            }
        })
            .then(function (data) {
                console.log(data);
            });
    };