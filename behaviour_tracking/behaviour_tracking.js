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
