function toggleBlueGreen() {
    const box = document.getElementById('section1');
    const isGreen = box.classList.toggle('green');
    box.setAttribute('aria-pressed', isGreen);
}
document.getElementById('section1').addEventListener('keydown', function (e) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleBlueGreen();
    }
});

function calculateGrade() {
    let marks = Number(document.getElementById('grade-marks').value);
    const output = document.getElementById('grade-output');
    if (Number.isNaN(marks) || marks < 0 || marks > 100) {
        output.textContent = 'Please enter a valid marks number between 0 and 100.';
        return;
    }
    let grade;
    if (marks >= 90) grade = "A+";
    else if (marks >= 80) grade = "A";
    else if (marks >= 70) grade = "B";
    else if (marks >= 60) grade = "C";
    else if (marks >= 50) grade = "D";
    else grade = "F (Fail)";
    output.textContent = `Grade: ${grade}`;
}

function performOperations() {
    let a = 8;
    let b = 3;
    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = (a / b).toFixed(2);
    let modulus = a % b;
    let isGreater = a > b;
    let logicalCheck = (a > 5 && b < 10);
    let outputText =
        `Results:\n` +
        `Addition (a + b) = ${addition}\n` +
        `Subtraction (a - b) = ${subtraction}\n` +
        `Multiplication (a * b) = ${multiplication}\n` +
        `Division (a / b) = ${division}\n` +
        `Modulus (a % b) = ${modulus}\n\n` +
        `Is 'a' greater than 'b'? ${isGreater}\n` +
        `Logical AND (a > 5 && b < 10): ${logicalCheck}`;
    document.getElementById('operators-output').textContent = outputText;
    document.getElementById('operators-output').focus();
}

function displayValues() {
    const name = document.getElementById('name-input').value.trim();
    const number = Number(document.getElementById('number-input').value);
    const output = document.getElementById('variables-output');
    if (!name) {
        output.textContent = 'Please enter your name.';
        return;
    }
    if (Number.isNaN(number)) {
        output.textContent = 'Please enter a valid number.';
        return;
    }
    output.textContent = `Hello, ${name}! You entered the number: ${number}`;
    output.focus();
}

function generateTable() {
    const num = Number(document.getElementById('table-num').value);
    const output = document.getElementById('table-output');
    if (Number.isNaN(num)) {
        output.textContent = 'Please enter a valid number.';
        return;
    }
    let table = `Multiplication Table for ${num}:\n`;
    for (let i = 1; i <= 10; i++) {
        table += `${num} × ${i} = ${num * i}\n`;
    }
    output.textContent = table;
    output.focus();
}

function showWelcomeAlert() {
    alert('Welcome!');
}

function handleLoopActivities() {
    const num = Number(document.getElementById('even-odd-input').value);
    const outputDiv = document.getElementById('loop-output');
    if (Number.isNaN(num)) {
        outputDiv.textContent = "Please enter a valid number.";
        outputDiv.focus();
        return;
    }
    let evenOdd = (num % 2 === 0) ? "even" : "odd";
    let numbersOneToTen = "Numbers from 1 to 10 (for loop):\n";
    for (let i = 1; i <= 10; i++) {
        numbersOneToTen += i + " ";
    }
    numbersOneToTen = numbersOneToTen.trim() + "\n";
    let countdown = "Countdown from 5 to 1 (while loop):\n";
    let count = 5;
    while (count > 0) {
        countdown += count + " ";
        count--;
    }
    countdown = countdown.trim() + "\n";
    let fullOutput = `Number ${num} is ${evenOdd}.\n\n` + numbersOneToTen + countdown;
    outputDiv.textContent = fullOutput;
    outputDiv.focus();
}

function updateColor() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    document.getElementById("redValue").innerText = red;
    document.getElementById("greenValue").innerText = green;
    document.getElementById("blueValue").innerText = blue;
    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById("colorBox").style.backgroundColor = rgbColor;
}
document.addEventListener('DOMContentLoaded', () => {
    updateColor();

    // Light Bulb Toggle functionality inside DOMContentLoaded
    const bulbImage = document.getElementById("bulbImage");
    const toggleButton = document.getElementById("toggleButton");
    if (bulbImage && toggleButton) {
        toggleButton.addEventListener("click", function () {
            if (bulbImage.src.includes("pic_bulboff.gif")) {
                bulbImage.src = "https://www.w3schools.com/js/pic_bulbon.gif";
                toggleButton.textContent = "Turn OFF";
            } else {
                bulbImage.src = "https://www.w3schools.com/js/pic_bulboff.gif";
                toggleButton.textContent = "Turn ON";
            }
        });
    }

    // Digital Clock functionality inside DOMContentLoaded
    let clockInterval;
    let isRunning = false;

    function updateClock() {
        let now = new Date();
        let hours = String(now.getHours()).padStart(2, "0");
        let minutes = String(now.getMinutes()).padStart(2, "0");
        let seconds = String(now.getSeconds()).padStart(2, "0");
        document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
    }

    const toggleClockBtn = document.getElementById("toggleClock");
    if (toggleClockBtn) {
        toggleClockBtn.addEventListener("click", function () {
            if (!isRunning) {
                clockInterval = setInterval(updateClock, 1000);
                this.textContent = "Stop Clock";
                updateClock(); // immediate update on start
            } else {
                clearInterval(clockInterval);
                this.textContent = "Start Clock";
            }
            isRunning = !isRunning;
        });
    }
});

// Additional JS Tasks
function calculateSquare() {
    let num = document.getElementById("num").value;
    if (num === '') {
        document.getElementById("output").innerHTML = 'Please enter a number.';
        return;
    }
    let square = num * num;
    document.getElementById("output").innerHTML = `Square of ${num} is ${square}`;
}

function checkEvenOdd() {
    let num = document.getElementById("num").value;
    if (num === '') {
        document.getElementById("output").innerHTML = 'Please enter a number.';
        return;
    }
    let result = (num % 2 === 0) ? "Even" : "Odd";
    document.getElementById("output").innerHTML = `${num} is ${result}`;
}

// Simple Calculator function
function calculateSimple() {
    const num1 = parseFloat(document.getElementById('calc-num1').value);
    const num2 = parseFloat(document.getElementById('calc-num2').value);
    const operation = document.getElementById('calc-operation').value;
    const output = document.getElementById('calc-output');

    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = 'Please enter valid numbers for both inputs.';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                output.textContent = 'Error: Cannot divide by zero.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            output.textContent = 'Invalid operation selected.';
            return;
    }
    output.textContent = `Result: ${result}`;
    output.focus();
}

// Saved Note on page load
window.onload = function () {
    displayNote();
};

// Save note to localStorage
function saveNote() {
    const note = document.getElementById("noteInput").value;
    localStorage.setItem("savedNote", note);
    displayNote();
}

// Clear saved note
function clearNote() {
    localStorage.removeItem("savedNote");
    displayNote();
}

// Display saved note
function displayNote() {
    const saved = localStorage.getItem("savedNote");
    const display = document.getElementById("displayNote");
    if (saved && saved.trim() !== "") {
        display.innerHTML = `<strong>Your Saved Note:</strong><br>${saved}`;
    } else {
        display.innerHTML = "No note saved yet.";
    }
}

// Store name and display welcome message
function storeName() {
    const name = document.getElementById("userName").value.trim();
    const messageDiv = document.getElementById("welcomeMessage");
    if (name) {
        messageDiv.textContent = `Welcome, ${name}!`;
    } else {
        messageDiv.textContent = "Please enter your name.";
    }
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function toggleComplete(element) {
    element.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}

function submitFeedback() {
    const name = document.getElementById("name").value.trim();
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value.trim();

    if (!name || !rating || !feedback) {
        alert("Please fill in all fields.");
        return;
    }

    const card = document.createElement("div");
    card.className = "feedback-card";
    card.innerHTML = `
        <strong>${name}</strong> rated us ${rating}<br>
        <p>${feedback}</p>
      `;

    document.getElementById("feedbackList").appendChild(card);

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("feedback").value = "";
}

// Counter App Functions
let count = 0;

function increaseCounter() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decreaseCounter() {
    count--;
    document.getElementById("counter").innerHTML = count;
}

function resetCounter() {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}

// Show & Hide Password Function
function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleButton = event.target;

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Hide Password";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Show Password";
    }
}
