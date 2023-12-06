let person1 = {
    firstName: "haha",
    lastName: "hehe"
}

let person2 = {
    firstName: "Hermione",
    lastName: "Granger"
}
let people = [person1, person2]

let states = [
    {
        name: "New Jersey",
        abbr: "NJ"
    },
    {
        name: "New York",
        abbr: "NY"
    }
]

let person3 = {
    firstName: "Freddy",
    lastName: "Kruegger",
    cars: [
        {
            make: "Ford",
            color: "Red",
            fuelType: "souls"
        },
        {
            make: "Honda",
            color: "Black",
            fuelType: "also souls"
        }
    ]
}

var ulElem = document.createElement("ul")
var body = document.body
body.appendChild(ulElem)

createNewItem("The color of the car1 is: " + car1.color)
createNewItem("The last name of the person1 is: " + person1.lastName)
createNewItem("The first name of the person1 is: " + person1.firstName)
createNewItem("The last name of the person2 through the array is: " + people[1].lastName)
createNewItem("The abbreviation for the 2nd state in the array is: " + states[1].abbr)
createNewItem("The fuel type of the 2nd car for person3 is: " + person3.cars[2].fuelType)

function createNewItem(text){
    let liElem = document.createElement("li")
    let textNode = document.createTextNode(text)
    liElem.appendChild(textNode)
    ulElem.appendChild(liElem)
}
