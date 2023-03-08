const APP_ID = "2197e613";
const APP_KEY = "49154045da302b5e11705006dfe3dfa6";
var foodInput = document.getElementById("food-input");
console.log(foodInput);

// Total nutrition count variables
var totalProtein = 0;
var totalCarbs = 0;
var totalFat = 0;
var totalCalories = 0;

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
      var proteinAppend = document.getElementById("protein");
      var carbAppend = document.getElementById("carbs");
      var fatAppend = document.getElementById("fats");
      var calorieAppend = document.getElementById("calories");
    
      var foodInputTextNode = document.createTextNode(food);
      localStorage.setItem("food-input", food);
    
      var mealType = document.getElementById("meal-type").value;
    
      // Conditions for filing nutrients
      if (protein >= 0) {
        var proteinLabel = document.createTextNode("Protein: ");
        var proteinValue = document.createTextNode(protein + "g");
        var proteinLI = document.createElement("li");
        proteinLI.appendChild(proteinLabel);
        proteinLI.appendChild(proteinValue);
        proteinAppend.appendChild(proteinLI);
        totalProtein += protein;
      }
      if (carbs >= 0) {
        var carbsLabel = document.createTextNode("Carbs: ");
        var carbsValue = document.createTextNode(carbs + "g");
        var carbsLI = document.createElement("li");
        carbsLI.appendChild(carbsLabel);
        carbsLI.appendChild(carbsValue);
        carbAppend.appendChild(carbsLI);
        totalCarbs += carbs;
      }
      if (fat >= 0) {
        var fatLabel = document.createTextNode("Fats: ");
        var fatValue = document.createTextNode(fat + "g");
        var fatLI = document.createElement("li");
        fatLI.appendChild(fatLabel);
        fatLI.appendChild(fatValue);
        fatAppend.appendChild(fatLI);
        totalFat += fat;
      }
      
      if (calories >= 0) {
        var caloriesLabel = document.createTextNode("Calories: ");
        var caloriesValue = document.createTextNode(calories);
        var caloriesLI = document.createElement("li");
        caloriesLI.appendChild(caloriesLabel);
        caloriesLI.appendChild(caloriesValue);
        calorieAppend.appendChild(caloriesLI);
        totalCalories += calories;
      }
  
      // Running total of nutrients
      var totalProtein = parseFloat(localStorage.getItem("total-protein")) || 0;
      var totalCarbs = parseFloat(localStorage.getItem("total-carbs")) || 0;
      var totalFat = parseFloat(localStorage.getItem("total-fat")) || 0;
      var totalCalories = parseFloat(localStorage.getItem("total-calories")) || 0;
      
      localStorage.setItem("total-protein", totalProtein + protein);
      localStorage.setItem("total-carbs", totalCarbs + carbs);
      localStorage.setItem("total-fat", totalFat + fat);
      localStorage.setItem("total-calories", totalCalories + calories);
      
      var totalProteinValue = document.createTextNode(totalProtein + protein + "g");
      var totalCarbsValue = document.createTextNode(totalCarbs + carbs + "g");
      var totalFatValue = document.createTextNode(totalFat + fat + "g");
      var totalCaloriesValue = document.createTextNode(totalCalories + calories);
      
      document.getElementById("total-protein").textContent = totalProteinValue;
      document.getElementById("total-carbs").textContent = totalCarbsValue;
      document.getElementById("total-fat").textContent = totalFatValue;
      document.getElementById("total-calories").textContent = totalCaloriesValue;
    
      var caloriesTotalLI = document.getElementById("calories-total");
caloriesTotalLI.textContent = "Calories Total: " + caloriesTotal;

// Clear input field
foodInput.value = "";

})
.catch((error) => {
console.log(error);
  });
});