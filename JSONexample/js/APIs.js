var gallery = document.getElementById("gallery")

fetch('https://dummyjson.com/products') //passed the received response to the enxt arrow function
    .then(res => res.json())
    .then(data => displayData(data))

function displayData(d){
    console.log(d)
    for (item of d.products){
        setSection(item)
    }
}

function setSection(item){
    let newArticle = document.createElement("article")
    let newHeading = document.createElement("h1")
    let newImage = document.createElement("img")
    let textNode = document.createTextNode(item.title)
    newImage.src = item.thumbnail

    newHeading.appendChild(textNode)
    newArticle.appendChild(newHeading)
    newArticle.appendChild(newImage)

    gallery.appendChild(newArticle)
}