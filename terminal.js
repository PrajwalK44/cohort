// terminalClock.js

// Function to format the time with leading zeros if necessary
function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Function to get the current time and display it in the terminal
function displayClock() {
    const now = new Date();
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());
    console.clear();
    console.log(`(${hours}:${minutes}:${seconds})`);
}

// Update the clock every second
setInterval(displayClock, 1000);

// Initial call to display the clock immediately
displayClock();
