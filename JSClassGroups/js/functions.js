function displayName(){
    let productName = document.getElementById("productName").value
    return document.getElementById("outName").textContent = productName
}

function displayDesc(){
    let productDesc = document.getElementById("productDesc").value
    return document.getElementById("outDesc").textContent = productDesc
}

function displayPrice(){
    let productPrice = document.getElementById("productPrice").value
    return document.getElementById("outPrice").textContent = productPrice
}

function displayQuantity(){
    let productQuantity = document.getElementById("productQuantity").value
    return document.getElementById("outQuantity").textContent = productQuantity
}

function displayTotalPrice(){
    let price = document.getElementById("productPrice").value
    let quantity = document.getElementById("productQuantity").value
    let calcTotal = price * quantity

    return document.getElementById("totalCost").textContent += calcTotal
}