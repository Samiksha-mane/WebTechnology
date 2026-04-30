// Background Color Change
function changeColor() {

    let colors = ["red", "green", "blue", "yellow", "pink"];
    let random = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[random];
}


// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}


// Show / Hide Text
function toggleText() {

    let msg = document.getElementById("message");

    if (msg.style.display === "none") {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
}


// Counter
let count = 0;

function increase() {
    count++;
    document.getElementById("count").textContent = count;
}

function decrease() {
    count--;
    document.getElementById("count").textContent = count;
}


// Character Counter
function countChar() {

    let text = document.getElementById("text").value;
    document.getElementById("charCount").textContent = text.length;
}


// Redirect
function goHome() {
    window.location.href = "index.html";
}