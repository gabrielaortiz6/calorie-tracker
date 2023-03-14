#  Calorie Tracker

## Description

Our motivation for making this project was to help people achieve their nutritional and fitness goals without having to pay.

We built this app because we understand the importance of maintaining or trying to improve your health. 

This Calorie Tracker app helps the user have both calorie/macro intake and calories burned on the same application, which is free to access.

In the process of building this app, we learned to fetch data from various APIs to create more functional webpage that a user can interact with easily. 

## User Story

```
 AS a user
 I WANT to track the nutritional values of the food I eat and calories I burn exercising
 SO THAT I can keep track of nutritional goals
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
![image](https://user-images.githubusercontent.com/117334322/224877506-bd51fad5-c728-4673-a00e-d12f8b348c1c.png)

![image](https://user-images.githubusercontent.com/117334322/224877537-5fe77572-f190-4266-a03b-8991c0314463.png)

### LINK TO DEPLOYED SITE

[Link to Deployed Site](https://gabrielaortiz6.github.io/calorie-tracker/)

### Authors
* Jason Lewis
* Johnny Bonee
* David Rodriguez
* Gabriela Oriz

