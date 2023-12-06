let count = 0

while (count < 10){
    document.write("<p>HELLO!</p>")
    count++
}

document.write("<p>Good bye</p>")

// Array have multiple values inside of it

let students = [
    "Bryant",
    "Jamil",
    "Angela",
    "Andeivi",
    "Clevis",
    "Mushran",
    "Jonathan"
]

document.write(students)
document.write("<p>The fourth student in the array is: " + students[3] + "</p>")
document.write("<h1>Individual Students</h1>")
document.write("<ul>")
for (person of students){
    document.write("<li>"+person+"</li>")
}
document.write("<ul>")

let employee = {
    id:123456,
    firstname:"Jeff",
    dob:"1-1-1985"
}

document.write("<p>The employees date of birth is: "+ employee[2]+ "</p>")
document.write("<h1>The values of Employee are</h1>")

document.write("<h1>The values of Employee are</h1>")
document.write("<ul>")
for (person of students){
    document.write("<li>"+person+"</li>")
}
document.write("<ul>")