function displayUser(){
    //retrieve the username
    let userIn = document.getElementById("username")

    //display data to output
    document.getElementById("outUser").textContent = userIn.value
}

function displayPass(){
    let passIn = document.getElementById("myPass")
    let outPass = document.getElementById("outPass")
    
    outPass.textContent = ""
    let count = passIn.length

    while (count > 0){
        outPass.textContent += "*"
        count--
    }
}