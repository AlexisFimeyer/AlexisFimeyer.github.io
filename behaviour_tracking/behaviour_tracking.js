// this is a script that tracks some user data
// Number of mouse clicks
// Total time spent
// Total key presses
// Total number of characters typed

// checks whether the user has submitted
var allowSubmit = true;

// when page is loaded get the start time
window.onload = function () {
    // get the time at load and store it in the behaviour div
    const d = new Date();
    var startTime = d.getTime();
    let tracker = document.getElementById("behaviour").children[2];
    tracker.textContent = startTime;
}

// when the window is clicked it should add one click
window.onclick = function () {
    // stop when the form is submitted
    if (allowSubmit) {
        // get the number of clicks
        let clickTracker = document.getElementById("behaviour").children[0];
        let clickAmount = clickTracker.textContent;
        let numClicks = Number(clickAmount);
        // add one click
        numClicks++;
        clickTracker.textContent = String(numClicks);
    }
}


// when a key is pressed it should add one key press
window.onkeydown = function () {
    // stop when the form is submitted
    if (allowSubmit) {
        // get the number of keyPresses
        let keyTracker = document.getElementById("behaviour").children[1];
        let keyPresses = keyTracker.textContent;
        let numKeys = Number(keyPresses);
        // add one key press
        numKeys++;
        keyTracker.textContent = String(numKeys);
    }
}

// if button is clicked everything should be displayed
function buttonClicked() {
    // Check if it has been submitted before
    if (allowSubmit) {
        // it now has been submitted so set this to false
        allowSubmit = false;

        // get all the trackers
        let behaviourList = document.getElementById("behaviour");
        let clickTracker = behaviourList.children[0];
        let keyPresses = behaviourList.children[1];
        let startTime = behaviourList.children[2];
        let startingTime = startTime.textContent;

        // get the end time and calculate how many minutes and second have elapsed
        const d = new Date()
        let endTime = d.getTime();
        let timeElapsed = endTime - startingTime;
        let secondsElapsed = parseInt(timeElapsed/1000);
        let minutes = parseInt(secondsElapsed/60);
        let seconds = secondsElapsed%60;

        // turn the data into strings
        clickTracker.textContent = "You have clicked " + clickTracker.textContent + " times!";
        keyPresses.textContent = "You have pressed a key " + keyPresses.textContent + " times!";
        startTime.textContent = "You have spent " + minutes + " minutes " + seconds + " seconds on this page!";

        // Show the trackers
        behaviourList.style.display = "block";
    }
}

function charTyped(){
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var zipCode = document.getElementById("ZIP code").value;
    var language = document.getElementById("Language").value;
    var about = document.getElementById("About").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var usernameLength = username.length;
    var nameLength = name.length;
    var addressLength = address.length;
    var countryLength = country.length;
    var zipCodeLength = zipCode.length;
    var languageLength = language.length;
    var aboutLength = about.length;
    var emailLength = email.length;
    var passwordLength = password.length;
    var confirmPasswordLength = confirmPassword.length;
    document.getElementById("behaviour").children[3].textContent = "number of characters typed for username : " + usernameLength;
    document.getElementById("behaviour").children[4].textContent = "number of characters typed for name : " + nameLength;
    document.getElementById("behaviour").children[5].textContent = "number of characters typed for address : " + addressLength;
    document.getElementById("behaviour").children[6].textContent = "number of characters typed for country : " + countryLength;
    document.getElementById("behaviour").children[7].textContent = "number of characters typed for zipCode : " + zipCodeLength;
    document.getElementById("behaviour").children[8].textContent = "number of characters typed for language : " + languageLength;
    document.getElementById("behaviour").children[9].textContent = "number of characters typed for about : " + aboutLength;
    document.getElementById("behaviour").children[10].textContent = "number of characters typed for email : " + emailLength;
    document.getElementById("behaviour").children[11].textContent = "number of characters typed for password : " + passwordLength;
    document.getElementById("behaviour").children[12].textContent = "number of characters typed for confirmPassword : " + confirmPasswordLength;
    
}