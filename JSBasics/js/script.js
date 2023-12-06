/*
    Author: clumsy
    Date: 10/3/2023
    Purpose: To demonstrate the basic functionality of JS
*/

// Display methods
// Displays text in dialog box (pop up)
alert("Hello, World!");
// Displays text in the console (inspect element console)
console.log("Hello again, world!");
// Writes the text into the current location of this code.
document.write("<h2>Hello Webpage</h2>");

// Create a variable and constants
let radius;

// Ask user to prove radius
radius = parseFloat(prompt("Enter the radius: "));

// Calculate area
let area = radius ** 2 * Math.PI;

document.write("The area is ", area);