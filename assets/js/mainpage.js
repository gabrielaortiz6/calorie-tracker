const APP_ID = "2197e613";
const APP_KEY = "49154045da302b5e11705006dfe3dfa6";
var enterBtn = document.getElementById("enter-btn");
var submitBtn = document.getElementById("submit-btn");
var foodInput = document.getElementById("food-type");
console.log(foodInput);
var currentDateText = $("#currentDay");
var unitOptions = document.getElementById("unit-options");
var foodIdFetch;

// Selectors
var enterBtn = document.getElementById("enter-btn");
var proteinAppend = document.getElementById("protein-list");
var carbAppend = document.getElementById("carbs-list");
var fatAppend = document.getElementById("fats-list");
var calorieAppend = document.getElementById("calories-list");
var proteinTotalElement = document.getElementById("protein-total");
var carbsTotalElement = document.getElementById("carbs-total");
var fatsTotalElement = document.getElementById("fats-total");
var caloriesTotalElement = document.getElementById("calories-total");
var unitInput = document.getElementById("unit-input");
var proteinAppend = document.getElementById("protein-total");
var carbAppend = document.getElementById("carbs-total");
var fatAppend = document.getElementById("fats-total");
var calorieAppend = document.getElementById("calories-total");

// Total nutrition count variables and get storage
var totalProtein = localStorage.getItem("totalProtein")
  ? Number(localStorage.getItem("totalProtein"))
  : 0;
var totalCarbs = localStorage.getItem("totalCarbs")
  ? Number(localStorage.getItem("totalCarbs"))
  : 0;
var totalFat = localStorage.getItem("totalFats")
  ? Number(localStorage.getItem("totalFats"))
  : 0;
var totalCalories = localStorage.getItem("totalCalories")
  ? Number(localStorage.getItem("totalCalories"))
  : 0;

// Get arrays for meals from storage
var breakfastArray = JSON.parse(localStorage.getItem("breakfast")) || [];
var lunchArray = JSON.parse(localStorage.getItem("lunch")) || [];
var dinnerArray = JSON.parse(localStorage.getItem("dinner")) || [];
var snackArray = JSON.parse(localStorage.getItem("snack")) || [];
//TODO tie our arrays to both our display columns and local storage

// DAYJS
var currentDate = dayjs().format("dddd, MMMM D, YYYY");
currentDateText.text(currentDate);

// Initialize nutrient total elements
var proteinTotalElement = document.getElementById("protein-total");
proteinTotalElement.textContent = "Protein: " + totalProtein + "g";

var carbsTotalElement = document.getElementById("carbs-total");
carbsTotalElement.textContent = "Carbs: " + totalCarbs + "g";

var fatsTotalElement = document.getElementById("fats-total");
fatsTotalElement.textContent = "Fats: " + totalFat + "g";

var caloriesTotalElement = document.getElementById("calories-total");
caloriesTotalElement.textContent = "Calories: " + totalCalories;

//retrieving name
function updateName() {
  var storedName = localStorage.getItem("name");
  document.querySelector("#user-name").textContent = storedName;
}
updateName();

function setMealColumns() {
  // Breakfast Array Loop and create an item for each string in the breakfast column
  for (var x = 0; x < breakfastArray.length; x++) {
    var breakfastGroup = document.getElementById("breakfast-group");
    var breakfastLI = document.createElement("li");
    var breakfastArrayLoop = breakfastArray[x];
    var breakfastTextNode = document.createTextNode(breakfastArrayLoop);
    breakfastLI.appendChild(breakfastTextNode);
    breakfastGroup.appendChild(breakfastLI);
  }
  for (var x = 0; x < lunchArray.length; x++) {
    var lunchGroup = document.getElementById("lunch-group");
    var lunchLI = document.createElement("li");
    var lunchArrayLoop = lunchArray[x];
    var lunchTextNode = document.createTextNode(lunchArrayLoop);
    lunchLI.appendChild(lunchTextNode);
    lunchGroup.appendChild(lunchLI);
  }
  for (var x = 0; x < dinnerArray.length; x++) {
    var dinnerGroup = document.getElementById("dinner-group");
    var dinnerLI = document.createElement("li");
    var dinnerArrayLoop = dinnerArray[x];
    var dinnerTextNode = document.createTextNode(dinnerArrayLoop);
    dinnerLI.appendChild(dinnerTextNode);
    dinnerGroup.appendChild(dinnerLI);
  }
  for (var x = 0; x < snackArray.length; x++) {
    var snackGroup = document.getElementById("snack-group");
    var snackLI = document.createElement("li");
    var snackArrayLoop = snackArray[x];
    var snackTextNode = document.createTextNode(snackArrayLoop);
    snackLI.appendChild(snackTextNode);
    snackGroup.appendChild(snackLI);
  }
}

setMealColumns();

// Submit button event listener for searching foods
enterBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var quantityInput = document.getElementById("quantity-input");
  var quantity = quantityInput.value;
  var quantityInputNumber = Number(quantity);
  // Fetch API
  // Make POST request to API with retrieved data
  fetch(
    `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${APP_ID}&app_key=${APP_KEY}`,
    {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        ingredients: [
          {
            quantity: quantityInputNumber,
            measureURI: document.getElementById("unit-options").value,
            foodId: foodIdFetch,
          },
        ],
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var protein = parseInt(data.totalNutrients.PROCNT.quantity);
      var carbs = parseInt(data.totalNutrients.CHOCDF.quantity);
      var fat = parseInt(data.totalNutrients.FAT.quantity);
      var calories = parseInt(data.calories);

      // Update total nutrients and UI
      updateNutrientInfo(protein, carbs, fat, calories);
      // Hide food intake section
      document.getElementById("food-intake").style.visibility = "hidden";
      // Reset meal type section
      document.getElementById("meal-type").selectedIndex = 0;
      // Clear food type input field
      foodInput.value = "";
    })

    .catch((error) => console.error(error));
});

// Event listener for Submit button to accept units and quantity of food to accurately calculate nutrients
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var mealType = document.getElementById("meal-type").value;
  var foodInput = document.getElementById("food-type");
  var foodInputFetch = foodInput.value;
  var foodInputTextNode = document.createTextNode(foodInputFetch);

  // Conditions for where to put food
  if (!mealType) {
    alert("Please choose a meal catagory.");
    return;
  }
  if (!foodInputFetch) {
    alert("Please enter a food.");
    return;
  }
  if (mealType === "breakfast") {
    var breakfastGroup = document.getElementById("breakfast-group");
    var breakfastLI = document.createElement("li");
    breakfastLI.appendChild(foodInputTextNode);
    breakfastGroup.appendChild(breakfastLI);
    breakfastArray.push(foodInputFetch);
    localStorage.setItem("breakfast", JSON.stringify(breakfastArray));
  } else if (mealType === "lunch") {
    var lunchGroup = document.getElementById("lunch-group");
    var lunchLI = document.createElement("li");
    lunchLI.appendChild(foodInputTextNode);
    lunchGroup.appendChild(lunchLI);
    lunchArray.push(foodInputFetch);
    localStorage.setItem("lunch", JSON.stringify(lunchArray));
  } else if (mealType === "dinner") {
    var dinnerGroup = document.getElementById("dinner-group");
    var dinnerLI = document.createElement("li");
    dinnerLI.appendChild(foodInputTextNode);
    dinnerGroup.appendChild(dinnerLI);
    dinnerArray.push(foodInputFetch);
    localStorage.setItem("dinner", JSON.stringify(dinnerArray));
  } else if (mealType === "snack") {
    var snackGroup = document.getElementById("snack-group");
    var snackLI = document.createElement("li");
    snackLI.appendChild(foodInputTextNode);
    snackGroup.appendChild(snackLI);
    snackArray.push(foodInputFetch);
    localStorage.setItem("snack", JSON.stringify(snackArray));
  }
  document.getElementById("food-intake").style.visibility = "visible";

  // Fetch the input of the users food
  fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${foodInputFetch}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Retrieve food id, nutrients, and measurement URI from edamam API
      foodIdFetch = data.hints[0].food.foodId;
      console.log(foodIdFetch);
      fillUnitOptions(data.hints[0].measures);
    });
});

// Updating Nutrition Information
function updateNutrientInfo(protein, carbs, fat, calories) {
  if (protein >= 0) {
    var proteinListItem = proteinAppend.querySelector("li");
    if (proteinListItem) {
      var proteinValueElement =
        proteinListItem.querySelector("span:last-child");
      var existingProtein = parseFloat(proteinValueElement.textContent);
      var newProtein = existingProtein + protein;
      proteinValueElement.textContent = newProtein + protein + "g";
    } else if (proteinAppend) {
      //  Add this check to prevent null error
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
    var nutrientListItem = carbAppend.querySelector("li");
    if (nutrientListItem) {
      var nutrientValueElement =
        nutrientListItem.querySelector("span:last-child");
      var existingNutrient = parseFloat(nutrientValueElement.textContent);
      var newCarb = existingNutrient + carbs;
      nutrientValueElement.textContent = newCarb + carbs + "g";
      //  Add this check to prevent null error
    } else if (carbAppend) {
      var nutrientLabel = document.createTextNode("Carbs: ");
      var nutrientValue = document.createTextNode(carbs + "g");
      var nutrientLI = document.createElement("li");
      var nutrientSpan = document.createElement("span");
      nutrientSpan.appendChild(nutrientLabel);
      nutrientSpan.appendChild(nutrientValue);
      nutrientLI.appendChild(nutrientSpan);
      carbAppend.appendChild(nutrientLI);
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
      fatValueElement.textContent = newFat + fat + "g";
      //  Add this check to prevent null error
    } else if (fatAppend) {
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
      caloriesValueElement.textContent = newCalories + calories;
      //  Add this check to prevent null error
    } else if (calorieAppend) {
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
  // Set to local storage
  localStorage.setItem("totalProtein", totalProtein);
  localStorage.setItem("totalFats", totalFat);
  localStorage.setItem("totalCarbs", totalCarbs);
  localStorage.setItem("totalCalories", totalCalories);
}

// Updating the units of measurements
function fillUnitOptions(measures) {
  const unitInput = document.getElementById("unit-options");
  unitInput.innerHTML = "";
  for (let i = 0; i < measures.length; i++) {
    const option = document.createElement("option");
    option.value = measures[i].uri;
    option.text = measures[i].label;
    unitInput.add(option);
  }
}
