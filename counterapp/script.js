// Initial count
let count = 0;

// Get elements
const display = document.getElementById("count");
const dateDisplay = document.getElementById("date");
const photo = document.getElementById("photo");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

// Function to update display
function updateDisplay() {
    if (count === 13) {
        display.textContent = "🎉 koho esto chwaak kt 🎉";
        dateDisplay.textContent = "chwwaak haina chameli chwaaak raixe❤️";
        dateDisplay.classList.remove("hidden");
        photo.classList.remove("hidden");
    } else {
        display.textContent = count;
        dateDisplay.classList.add("hidden");
        photo.classList.add("hidden");
    }
}

// Button actions
plus.onclick = function() {
    count++;
    updateDisplay();
}

minus.onclick = function() {
    count--;
    updateDisplay();
}

reset.onclick = function() {
    count = 0;
    updateDisplay();
}

// Initial display
updateDisplay();
