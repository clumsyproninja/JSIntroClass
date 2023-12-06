var counter = 1

document.getElementById("node1").addEventListener("click", displayAction, true) // Capture
document.getElementById("node2").addEventListener("click", nodeFunction) //Bubbling
document.getElementById("target").addEventListener("click", targetFunction) //Bubbling

function displayAction(e){
    let element = e.target
    document.getElementById("desc").textContent = element.nodeName
    console.log("BODY - The counter is: " + counter)
    counter++
}

function nodeFunction(){
    console.log("MAIN - The counter is: " + counter)
    counter++
}

function targetFunction(){
    console.log("<p>Hello!</p>")
    console.log("BUTTON - The counter is: " + counter)
    counter++
}