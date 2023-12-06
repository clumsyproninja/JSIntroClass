/*
    Author: clumsy
    Date: 10/5/2023
    Purpose: Write a program that asks the user to provide the number of miles and gallons of gas used by the car. Calculate the number of miles per gallon. In addition, convert the input into kilometers and liters, and calculate the Km/L. Display all input variables and output
*/

//create variables
let miles;
let gallons;
let kilometers;
let liters;

//ask user for miles and gallons of gas used
miles = parseFloat(prompt("Enter the number of miles used by the car"));
gallons = parseFloat(prompt("Enter the number of gallons of gas used by the car"));

//calculate miles per gallon
let mPerG = miles * gallons;

//convert and calculate to Km/L
kilometers = miles * 1.609344;
liters = gallons * 3.7854;
let kPerL = kilometers * liters;

//display output
document.write("The miles per gallon is ", mPerG);
document.write("<br>Alternatively, kilometers per liter is ", kPerL);