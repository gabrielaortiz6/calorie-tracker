#  Calorie Tracker

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

Our calorie tracker is a web or mobile application that helps users track their daily calorie intake and expenditure. Upon opening the application, users will be prompted to enter their name.
Once the user has entered their name, they can begin tracking their calorie intake by searching for foods in the app's database. The user can input the quantity of each food they consume, and the app will calculate the number of calories and Macros consumed based on the food's nutritional information.
In addition to tracking calorie intake, the app also allows users to track their exercise and physical activity. Users can select from a list of common exercises. The app will deduct the number of calories burned during the exercise from the user's daily calorie intake, providing an accurate representation of the user's net calorie intake for the day.
Our motivation for this project was to promote to promote a healthy lifestyle.  We wanted to make an app that we could keep on building upon to add more features in the future.
We built this project because we wanted to make a real world app that focus' on an important issue (healthy lifestyle).
This program lets the user input their daily total of foods and then lets them add in their exercise for the day.  In turn, they will be able to
add calories through food intake and deduct calories via exercise to obtain a daily total calorie count.
The biggest take away from this project was how to install an API in our website and how to write code to let us navigate through the 
API.


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

[Link to Deployed Site](https://gabrielaortiz6.github.io/calorie-tracker/)

### Authors
* Jason Lewis
* Johnny Bonee
* David Rodriguez
* Gabriela Oriz

