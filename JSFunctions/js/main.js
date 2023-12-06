/*
    THE MAIN PROGRAM HAS YOUR MAJOR CODE
*/

//Ask user to provide the radius
let radius = parseFloat(prompt("Whats the radius of the circle"))

//Display results
document.getElementById("radiusTxt").textContent += radius;
document.getElementById("ans1").textContent = ("Diameter: " + calculateArea(radius))
document.getElementById("ans2").textContent = ("Circumference: " + calculateDiameter(radius))
document.getElementById("ans3").textContent = ("Area: " + calculateCircumference(radius))