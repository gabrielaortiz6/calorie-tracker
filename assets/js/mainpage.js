const APP_ID = "2197e613";
const APP_KEY = "49154045da302b5e11705006dfe3dfa6";
var foodInput = document.getElementById("food-input");
console.log(foodInput);
var currentDateText = $('#currentDay');

// DAYJS
var currentDate = dayjs().format('dddd, MMMM D, YYYY');
currentDateText.text(currentDate);

// Total nutrition count variables
var totalProtein = 0;
var totalCarbs = 0;
var totalFat = 0;
var totalCalories = 0;

// Initialize nutrient total elements
var proteinTotalElement = document.getElementById("protein-total");
proteinTotalElement.textContent = "Protein: " + totalProtein + "g";

var carbsTotalElement = document.getElementById("carbs-total");
carbsTotalElement.textContent = "Carbs: " + totalCarbs + "g";

var fatsTotalElement = document.getElementById("fats-total");
fatsTotalElement.textContent = "Fats: " + totalFat + "g";

var caloriesTotalElement = document.getElementById("calories-total");
caloriesTotalElement.textContent = "Calories: " + totalCalories;

// Submit button event listener for searching foods
var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var food = foodInput.value;

  // Fetch API
  fetch(
    `https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var nutrients = data.hints[0].food.nutrients;
      console.log(nutrients);
      var protein = nutrients.PROCNT;
      console.log("Protein: " + protein);
      var carbs = nutrients.CHOCDF;
      console.log("Carbs: " + carbs);
      var fat = nutrients.FAT;
      console.log("Fats: " + fat);
      var calories = nutrients.ENERC_KCAL;
      console.log("Calories for " + food + ": " + calories);
      var breakfast = document.getElementById("breakfast").value;
      var lunch = document.getElementById("lunch").value;
      var dinner = document.getElementById("dinner").value;
      var snack = document.getElementById("snack").value;
      var proteinAppend = document.getElementById("protein-total");
      var carbAppend = document.getElementById("carbs-total");
      var fatAppend = document.getElementById("fats-total");
      var calorieAppend = document.getElementById("calories-total");

      var foodInputTextNode = document.createTextNode(food);
      localStorage.setItem("food-input", food);

      var mealType = document.getElementById("meal-type").value;

      // Conditions for where to put food
      if (mealType === breakfast) {
        var breakfastGroup = document.getElementById("breakfast-group");
        var breakfastLI = document.createElement("li");
        breakfastLI.appendChild(foodInputTextNode);
        breakfastGroup.appendChild(breakfastLI);
      } else if (mealType === lunch) {
        var lunchGroup = document.getElementById("lunch-group");
        var lunchLI = document.createElement("li");
        lunchLI.appendChild(foodInputTextNode);
        lunchGroup.appendChild(lunchLI);
      } else if (mealType === dinner) {
        var dinnerGroup = document.getElementById("dinner-group");
        var dinnerLI = document.createElement("li");
        dinnerLI.appendChild(foodInputTextNode);
        dinnerGroup.appendChild(dinnerLI);
      } else if (mealType === snack) {
        var snackGroup = document.getElementById("snack-group");
        var snackLI = document.createElement("li");
        snackLI.appendChild(foodInputTextNode);
        snackGroup.appendChild(snackLI);
      } else {
        alert("Please choose a meal catagory.");
      }

      // Conditions for filing nutrients
      if (protein >= 0) {
        var proteinListItem = proteinAppend.querySelector("li");
        if (proteinListItem) {
          var proteinValueElement =
            proteinListItem.querySelector("span:last-child");
          var existingProtein = parseFloat(proteinValueElement.textContent);
          var newProtein = existingProtein + protein;
          proteinValueElement.textContent = newProtein + "g";
        } else {
          var proteinLabel = document.createTextNode("Protein: ");
          var proteinValue = document.createTextNode(protein + "g");
          var proteinLI = document.createElement("li");
          var proteinSpan = document.createElement("span");
          proteinSpan.appendChild(proteinLabel);
          proteinSpan.appendChild(proteinValue);
          proteinLI.appendChild(proteinSpan);
          proteinAppend.appendChild(proteinLI);
        }
        totalProtein += protein;
        proteinTotalElement.textContent = "Protein: " + totalProtein + "g";
      }

      if (carbs >= 0) {
        var carbsListItem = carbAppend.querySelector("li");
        if (carbsListItem) {
          var carbsValueElement =
            carbsListItem.querySelector("span:last-child");
          var existingCarbs = parseFloat(carbsValueElement.textContent);
          var newCarbs = existingCarbs + carbs;
          carbsValueElement.textContent = newCarbs + "g";
        } else {
          var carbsLabel = document.createTextNode("Carbs: ");
          var carbsValue = document.createTextNode(carbs + "g");
          var carbsLI = document.createElement("li");
          var carbsSpan = document.createElement("span");
          carbsSpan.appendChild(carbsLabel);
          carbsSpan.appendChild(carbsValue);
          carbsLI.appendChild(carbsSpan);
          carbAppend.appendChild(carbsLI);
        }
        totalCarbs += carbs;
        carbsTotalElement.textContent = "Carbs: " + totalCarbs + "g";
      }

      if (fat >= 0) {
        var fatListItem = fatAppend.querySelector("li");
        if (fatListItem) {
          var fatValueElement = fatListItem.querySelector("span:last-child");
          var existingFat = parseFloat(fatValueElement.textContent);
          var newFat = existingFat + fat;
          fatValueElement.textContent = newFat + "g";
        } else {
          var fatLabel = document.createTextNode("Fats: ");
          var fatValue = document.createTextNode(fat + "g");
          var fatLI = document.createElement("li");
          var fatSpan = document.createElement("span");
          fatSpan.appendChild(fatLabel);
          fatSpan.appendChild(fatValue);
          fatLI.appendChild(fatSpan);
          fatAppend.appendChild(fatLI);
        }
        totalFat += fat;
        fatsTotalElement.textContent = "Fats: " + totalFat + "g";
      }

      if (calories >= 0) {
        var caloriesListItem = calorieAppend.querySelector("li");
        if (caloriesListItem) {
          var caloriesValueElement =
            caloriesListItem.querySelector("span:last-child");
          var existingCalories = parseFloat(caloriesValueElement.textContent);
          var newCalories = existingCalories + calories;
          caloriesValueElement.textContent = newCalories;
        } else {
          var caloriesLabel = document.createTextNode("Calories: ");
          var caloriesValue = document.createTextNode(calories);
          var caloriesLI = document.createElement("li");
          var caloriesSpan = document.createElement("span");
          caloriesSpan.appendChild(caloriesLabel);
          caloriesSpan.appendChild(caloriesValue);
          caloriesLI.appendChild(caloriesSpan);
          calorieAppend.appendChild(caloriesLI);
        }
        totalCalories += calories;
        caloriesTotalElement.textContent = "Calories: " + totalCalories;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
