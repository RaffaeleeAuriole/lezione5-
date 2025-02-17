let centerX = 300;
let centerY = 300;
let targetRadius = 80;
let hits = 0;
let totalPoints = 0;

function setup() {
    let cnv = createCanvas(600, 600);
    cnv.style('background-color', 'green');
    cnv.mousePressed(checkHit);
    noLoop();
}

function draw() {
    clear();
    drawTarget(width / 2, height / 2, 400);
}

function drawTarget(x, y, size) {
    let colors = ['white', 'black', 'blue', 'red', 'yellow'];
    let rings = colors.length;
    let step = size / rings;
    for (let i = 0; i < rings; i++) {
        fill(colors[i]);
        ellipse(x, y, size - step * i);
    }
}

function checkHit() {
    let d = dist(mouseX, mouseY, centerX, centerY);
    let message = document.getElementById("message");
    let counter = document.getElementById("counter");
    let pointsDisplay = document.getElementById("points");

    let score = 0;
    let feedback = "";

    if (d < 40) {
        score = 35;
        feedback = "Bravo! Hai fatto centro, +35pt";
        hits++; // Aumenta i centri solo se colpisce il giallo
    } else if (d < 80) {
        score = 25;
        feedback = "Ci sei quasi, +25pt";
    } else if (d < 120) {
        score = 15;
        feedback = "Non mollare, +15pt";
    } else if (d < 160) {
        score = 10;
        feedback = "Devi allenarti di più, +10pt";
    } else if (d < 200) {
        score = 5;
        feedback = "Non ci siamo, +5pt";
    }
    
    if (score > 0) {
        totalPoints += score;
        message.textContent = feedback;
    } else {
        message.textContent = "Ritenta, sarai più fortunato!";
    }
    
    counter.textContent = "Centri: " + hits;
    pointsDisplay.textContent = "Punti Totali: " + totalPoints;
}
