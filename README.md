#  Calorie Tracker

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?


## User Story

```
 AS a user
 I WANT to track the nutrional values of the food I eat and calories I burn exercising
 SO THAT I can keep track of nutrional goals
 ```

## Acceptance Criteria

```
GIVEN the need for users to keep track of nutritional goals
WHEN I open the application
THEN I am prompted for my name
WHEN I enter my name
THEN it will be saved and I will be redirected to the next page
WHEN I search for/input a food item
THEN I am presented with nutrional values of the food I chose
WHEN I am presented with the nutritional values of the food I chose
THEN I can see the calories, fats, protein, and carbs breakdown of that food
WHEN I enter a new food
THEN the total nutritional values adjust
WHEN I enter an exercise and its duration length
THEN it is displayed in a table and the calories burned are displayed
WHEN I enter an exercise and its duration length
THEN the calories burned will be subtracted from the total calories amount
```

## Usage

User enters name on landing page and is redirected to the Food Intake page, where they will input the food they ate, the quantity, and if they ate for breakfast, lunch, dinner, or a snack. The user input will then be sorted and displayed into one of the four meal types, and the nutritional values (calories, fats, carbs, and protein) will be displayed at the bottom of the page.

Everytime a new food input is entered, the nutritional values are updated. Once the user is satisfied, they can navigate to the Exercise Page with the button in the top right corner. There,they can begin typing out the exercise they want to input (an autocomplete feature will assist them) and enter the duration of the exercise (in minutes).

Once the user hits the submit button, their input, as well as the calories they burned will display in a table below. The calories burned will be subtracted from the total calories which was saved from the previous page. The user can go back and forth between pages, entering information. 

Please see screenshots/gifs below for further explanation. 

## Credits

APIS used for this project: 

* [Calories Burned API](https://api-ninjas.com/api/caloriesburned) from API Ninjas for the exercise/calories burned values. 
* [Edamam API](https://www.edamam.com/) for the nutritional values.

### SCREENSHOTS
![Screen Shot 2023-02-28 at 9 48 27 PM](https://user-images.githubusercontent.com/122922799/222032766-c28b32e5-7a3f-4384-9997-e9b07ce81b6f.png)

![Screen Shot 2023-02-28 at 9 48 19 PM](https://user-images.githubusercontent.com/122922799/222032463-7fee02f6-895e-462a-8e06-80bce1b76d61.png)

### LINK TO DEPLOYED SITE

### Authors
* Jason Lewis
* Johnny Bonee
* David Rodriguez
* Gabriela Oriz

