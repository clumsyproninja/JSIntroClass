function displayUsername()
{
    // retrieve the username
    let username = document.getElementById("username").value;
    // display data into output
    document.getElementById("outUser").textContent = username;
}

function displayPassword()
{
    // retrieve the username
    let password = document.getElementById("myPass").value;
    document.getElementById("outPass").textContent = "";
    count = password.length;
    while (count > 0)
    {
        document.getElementById("outPass").textContent += "*";
        count--;
    }
    document.getElementById("outPass").textContent += " which actually is " + password;

    
}