let sentences = [
    "Practice makes a person perfect",
    "JavaScript is fun to learn",
    "Typing speed improves with time",
    "Coding builds logical thinking"
];

let sentenceElement = document.getElementById("sentence");
let input = document.getElementById("input");
let timeElement = document.getElementById("time");
let wpmElement = document.getElementById("wpm");
let accuracyElement = document.getElementById("accuracy");
let restartBtn = document.getElementById("restart");
let status = document.getElementById("status");

let timer = 0;
let interval = null;
let currentSentence = "";

// Load random sentence
function loadSentence() {
    let randomIndex = Math.floor(Math.random() * sentences.length);
    currentSentence = sentences[randomIndex];
    sentenceElement.textContent = currentSentence;
}

loadSentence();

// Start timer when typing starts
input.addEventListener("input", () => {

    if (!interval) {
        interval = setInterval(() => {
            timer++;
            timeElement.textContent = timer;
        }, 1000);
    }

    let typedText = input.value;

    // Calculate WPM
    let words = typedText.trim().split(" ").length;
    let wpm = Math.floor((words / timer) * 60) || 0;
    wpmElement.textContent = wpm;

    // Calculate Accuracy
    let correctChars = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentSentence[i]) {
            correctChars++;
        }
    }

    let accuracy = Math.floor((correctChars / currentSentence.length) * 100) || 0;
    accuracyElement.textContent = accuracy;

    // Check if sentence completed
    if (typedText === currentSentence) {

        clearInterval(interval);
        interval = null;

        status.textContent = "Completed 🎉";

        input.disabled = true;
    }

});

// Restart button
restartBtn.addEventListener("click", () => {

    clearInterval(interval);
    interval = null;
    timer = 0;

    timeElement.textContent = 0;
    wpmElement.textContent = 0;
    accuracyElement.textContent = 0;

    input.value = "";
    input.disabled = false;

    status.textContent = "";

    loadSentence();
});