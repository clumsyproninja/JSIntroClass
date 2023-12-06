
var form = document.getElementById("signup");
var username = document.getElementById("username");
var password = document.getElementById("pass");

username.addEventListener("keyup", validateUsername);
form.addEventListener("submit", validateForm);
form.addEventListener("keyup", validatePassword);

function validateForm(event)
{
    event.preventDefault();
    let formValid = true;
    let status = document.getElementById("status");

    if (!validateUsername())
        formValid = false;
    if(!validatePassword())
        formValid = false;

    if(formValid)
    {
        status.textContent = "Status: The form is VALID! Submitting...";
    }
    else
    {
        status.textContent = "Status: INVALID! ERRORS SOMEWHERE!";
    }
}

function validateUsername()
{
    let size = username.value.length;
    let message = document.getElementById("userError");
    if ( size >= 3 && size <= 20)
    {
        message.textContent = "";
        return true;
    }
    else
    {
        message.textContent = "Characters: " + size + " Username must be be at least 3 characters and no more than 20 characters";
        return false;
    }
}

function validatePassword()
{
    let size = password.value.length;
    let message = document.getElementById("pwError");
    message.textContent = "";
    let isValid = true;
    if ( size < 8)
    {
        message.textContent += "Your password must be at least 8 characters. ";
        isValid = false;
    }
    let lowerCase = /[a-z]/.test(password.value);
    if(!lowerCase)
    {
        message.textContent += "Your password must have at least one lower case character. ";
        isValid = false;
    }

    let upperCase = /[A-Z]/.test(password.value);
    if(!upperCase)
    {
        message.textContent += "Your password must have at least one upper case character. ";
        isValid = false;
    }

    let specialCharacter = /[!@#$%&*]/.test(password.value);
    if(!specialCharacter)
    {
        message.textContent += "Your password must have at least one special character: !@#$%&*. ";
        isValid = false;
    }

   return isValid;



}