var foodInput = document.getElementById("food-input");
var food = foodInput.value;
console.log(food);

// Fetching nutrition data for api Edamam
fetch(
  "https://api.edamam.com/api/nutrition-data?app_id=854f987e&app_key=0f4fb1521b68e404abe9d3248beeecf1&ingr=1%20mango"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var calories = data.totalNutrients.ENERC_KCAL.quantity;
    console.log(calories);
    var fats = data.totalNutrients.FAT.quantity;
    console.log(fats);
    var protein = data.totalNutrients.PROCNT.quantity;
    console.log(protein);
    var carbs = data.totalNutrients.CHOCDF.quantity;
    console.log(carbs);
    var breakfast = document.getElementById("breakfast").value;
    var lunch = document.getElementById("lunch").value;
    var dinner = document.getElementById("dinner").value;
    var snack = document.getElementById("snack").value;

    //   Submit button event listener for searching foods
    var submitBtn = document.getElementById("submit-btn");
    submitBtn
      .addEventListener("click", function (event) {
        event.preventDefault();
        var foodInputText = foodInput.value;
        var foodInputTextNode = document.createTextNode(foodInputText);
        localStorage.setItem("food-input", foodInput.value);
        console.log(foodInputText);
        var mealType = document.getElementById("meal-type").value;
        console.log(mealType)
        // Conditions for where to put food
        if ((mealType === breakfast)) {
          var breakfastGroup = document.getElementById("breakfast-group");
          var breakfastLI = document.createElement("li");
          breakfastLI.appendChild(foodInputTextNode);
          breakfastGroup.appendChild(breakfastLI);
          } else if ((mealType === lunch)) {
            var lunchGroup = document.getElementById("lunch-group");
            var lunchLI = document.createElement("li");
            lunchLI.appendChild(foodInputTextNode);
            lunchGroup.appendChild(lunchLI);
        } else if ((mealType === dinner)) {
            var dinnerGroup = document.getElementById("dinner-group");
            var dinnerLI = document.createElement("li");
            dinnerLI.appendChild(foodInputTextNode);
            dinnerGroup.appendChild(dinnerLI);
        } else if ((mealType === snack)) {
            var snackGroup = document.getElementById("snack-group");
            var snackLI = document.createElement("li");
            snackLI.appendChild(foodInputTextNode);
            snackGroup.appendChild(snackLI);
        } else {
          alert("Please choose a meal catagory.");
       }
    })
    });

    // Fetch the food database
    fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=c9d85932&app_key=c6152f09f7f2bb59d0bb69193a80d365&ingr=" + food)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        var protein = data
    });