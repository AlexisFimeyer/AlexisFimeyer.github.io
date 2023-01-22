// every method (appart form the regex) is the same that's why i will only comment this one
function checkUsername() {
  // get the element of the form with id : username 
  var username = document.getElementById("username");
  // set the regex to which the element has to comply 
  var usernameRegex = /(^[A-Z])(?:.{4,10})([0-9]|\W)$/;
  // set the variable for the mesage to be displayed in case of good/wrong input
  var message = document.getElementById("username-message");
  // check if the input complies with the regex 
  if (usernameRegex.test(username.value)) {
    // if it does show the logo to indicate that it is good
    username.classList.add("valid-input");
    // make the border of the inputfield green
    username.style.borderColor = "green";
    // make the message null as there is nothing to display since the input is good
    message.innerHTML = null;
  } else {
    // if it does not comply change the message so it indicates it
    message.innerHTML = "Username is not valid.";
    // make the message red
    message.style.color = "red";
    // make the border of the inputfield red
    username.style.borderColor = "red";
    // remove the checkmark
    username.classList.remove("valid-input");
  }
}

function checkName() {
  var name = document.getElementById("name");
  var nameRegex = /^[a-zA-Z]+$/;
  var message = document.getElementById("name-message");
  if (nameRegex.test(name.value)) {
    name.classList.add("valid-input");
    name.style.borderColor = "green";
    message.innerHTML = null;
  } else {
    message.innerHTML = "Name is not valid.";
    message.style.color = "red";
    name.style.borderColor = "red";
    name.classList.remove("valid-input");
  }
}

function checkAddress() {
  var address = document.getElementById("address");
  if (address !== null && address !== "") {
    address.classList.add("valid-input");
    address.style.borderColor = "green";
  } else {
    address.classList.remove("valid-input");
  }
}

function checkCountry() {
  var country = document.getElementById("country");
  if (country !== null && country !== "") {
    country.classList.add("valid-input");
    country.style.borderColor = "green";
  } else {
    country.classList.remove("valid-input");
  }
}

function checkZip() {
  var zip = document.getElementById("ZIP code");
  var zipRegex = /^\d{4,4}[A-Z]{2,2}$/;
  var message = document.getElementById("zip-message");
  if (zipRegex.test(zip.value)) {
    zip.classList.add("valid-input");
    zip.style.borderColor = "green";
    message.innerHTML = null;
  } else {
    message.innerHTML = "Zip is not valid.";
    message.style.color = "red";
    zip.style.borderColor = "red";
    zip.classList.remove("valid-input");
  }
}

function checkLanguage() {
  var language = document.getElementById("Language");
  if (language !== null && language !== "") {
    language.classList.add("valid-input");
    language.style.borderColor = "green";
  } else {
    language.classList.remove("valid-input");
  }
}

function checkAbout() {
  var about = document.getElementById("About");
  if (about !== null && about !== "") {
    about.classList.add("valid-input");
    about.style.borderColor = "green";
  } else {
    about.classList.remove("valid-input");
  }
}

function checkEmail() {
  var email = document.getElementById("email").value;
  var email1 = document.getElementById("email");
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var message = document.getElementById("email-message");
  if (emailRegex.test(email)) {
    email1.style.borderColor = "green";
    email1.classList.add("valid-input");
    message.innerHTML = null;
    
  } else {
    message.innerHTML = "Email is not valid.";
    message.style.color = "red";
    email1.classList.remove("valid-input");
  }
}

function checkPassword() {
  var password = document.getElementById("password");
  var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{12,}$/;
  var message = document.getElementById("password-message");
  if (passwordRegex.test(password.value)) {
    password.classList.add("valid-input");
    password.style.borderColor = "green";
    message.innerHTML = null;
  } else {
    message.innerHTML = "Password is not valid.";
    message.style.color = "red";
    password.style.borderColor = "red";
    password.classList.remove("valid-input");
  }
}
// this method doesn't check if an input complies with a regex but rather if the two passwords (password and confirmPassword are the same) 
function checkPasswords() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var confirmPassword1 = document.getElementById("confirm-password");
  var message = document.getElementById("confirm-password-message");
  // here is the only part that changes, we check the value of both input for the password.
  if (password !== confirmPassword) {
    message.innerHTML = "Passwords do not match";
    message.style.color = "red";
    confirmPassword1.style.borderColor = "red";
    confirmPassword1.classList.remove("valid-input");
    return false;
  } else {
    message.innerHTML = null;
    confirmPassword1.style.borderColor = "green";
    confirmPassword1.classList.add("valid-input");
    return true
  }
}
// this function checks if both passwords entered are the same
function submitForm() {
  // if they aren't the form will not submit
  if (!checkPasswords()) {
    return false;
  }
  // if they are the same then it will redirect the user to the overview page
  window.location.href = 'overview.html';
  return true;
}
