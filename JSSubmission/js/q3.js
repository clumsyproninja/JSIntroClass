/*
    Author: clumsy
    Date: 10/5/2023
    Purpose: Write a program that asks the user to provide the amount of change in cents. Calculate how many coins(quarters, dimes, nickels and pennies) must be given back to the client so that they have the LEASTamount of coins.
*/

//create variables and constants
const quarterValue = 25;
const dimeValue = 10;
const nickelValue = 5;
const pennyValue = 1
let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;

//ask user for the change in coins
changeAmount = parseFloat(prompt("How much change in coins?"));
let initialAmount = changeAmount

//calculations
quarters = Math.floor(changeAmount / quarterValue);
changeAmount %= quarterValue;

dimes = Math.floor(changeAmount / dimeValue);
changeAmount %= dimeValue;

nickels = Math.floor(changeAmount / nickelValue);
changeAmount %= nickelValue;

pennies = changeAmount;

//display output
document.write("If the change is ", initialAmount, " cents, the client should receive:<br>");
document.write(quarters, " quarters, ", dimes, " dimes, ", nickels, " nickels, ", pennies, " pennies.");