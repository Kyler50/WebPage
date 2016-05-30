function validateContactData()
{
    var email;
    var emailPattern;
    var name;
    var namePattern;
    var message;
    var messagePattern;

    email = document.getElementById("email");
    emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|hu)\b/;
    name = document.getElementById("name");
    namePattern = /[a-zA-Z\-'\s]+/;
    message = document.getElementsByName("message");
    messagePattern = /^([a-zA-Z0-9_-]){20,500}$/;

    if (!emailPattern.test(email.value)) {
        alert("Email address does not exist! Please correct it!");
        email.focus();
        return false;
    }

    else if (!namePattern.test(name.value)) {
        alert("Name must be longer than 3 characters!");
        name.focus();
        return false;
    }

    else if (!messagePattern.test(message.value)) {
        alert("Message must be longer than 20 char but maximum 500!");
        name.focus();
        return false;
    }
}

var button;
button = document.querySelector("buttonSend");

button.addEventListener("click", validateContactData, false);
