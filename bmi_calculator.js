/*BMI calculator

The aim of this project is to create a BMI calculator that estimates the body fat. This is used to calculate the risk of heart disease

The formular is weight divided by height squared
*****************************/
//Create your function below this line.

alert("Welcome to BMI Calculator.");
height = prompt("What's your height in m?");
weight = prompt("What's your weight in kg?");

function bmiCalculator (weight, height) {

var bmi = weight/(Math.pow(height, 2));

return Math.round(bmi);

}


alert("You have a bmi of " + bmi + ". ");
