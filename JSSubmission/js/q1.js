/*
    Author: clumsy
    Date: 10/5/2023
    Purpose: Write a program that requests the length and the width of a room. The program calculates and displays the area of the room based on the user input.
*/

//create variables
let len;
let wid;

//ask user for length and width of room
len = parseInt(prompt("Enter the length of the room"));
wid = parseInt(prompt("Enter the width of the room"));

//calculate area
let area = len * wid;

//display output
document.write("The area is ", area);