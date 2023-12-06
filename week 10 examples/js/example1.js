let count = 0;

while (count < 5)
{
    document.write("<section id='news'>");
        document.write("<h1>Article Name</h1>");
    document.write("</section>");
    count++;
}

document.write("<p>Good bye</p>");

// Array have multiple values inside of it

let students = [
    "Bryant",
    "Jamil",
    "Angela",
    "Andeivi",
    "Clevis",
    "Mushran",
    "Jonathan"
];
document.write(students.toString());
document.write("<p>The fourth student in the list is:" + students[3]);
document.write("<h1>Individual Students: </h1>");
document.write("<ul>");
for (person of students)
{
    document.write("<li>"+person+"</li>")
}
document.write("</ul>");

let employee = {
    id:123456,
    firstname:"Jeff",
    dob:"1-1-1985"
};

document.write("<p>The employees date of birth is: " + employee["dob"] + "</p>");
document.write("<h1>The fields of Employee are</h1>");
document.write("<ul>");
for (field in employee)
{
    document.write("<li>"+field+"</li>")
}
document.write("</ul>");

document.write("<h1>The values of Employee are</h1>");
document.write("<ul>");
for (field in employee)
{
    document.write("<li>"+employee[field]+"</li>");
}
document.write("</ul>");