let centerX = 450;
let centerY = 450;
let totalPoints = 0;
let hits = 0;

function setup() {
    let cnv = createCanvas(900, 900);
    cnv.parent('canvas');
    cnv.mousePressed(checkHit);
    noLoop();
}

function draw() {
    clear();
    drawTarget(width / 2, height / 2, 600);
}

function drawTarget(x, y, size) {
    let colors = ['white', 'grey', 'blue', 'red', 'yellow'];
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

    if (d < 60) {
        score = 35;
        feedback = "Bravo! Hai fatto centro, +35pt";
        hits++; 
    } else if (d < 120) {
        score = 25;
        feedback = "Ci sei quasi, +25pt";
    } else if (d < 180) {
        score = 15;
        feedback = "Non mollare, +15pt";
    } else if (d < 240) {
        score = 10;
        feedback = "Devi allenarti di più, +10pt";
    } else if (d < 300) {
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

    if (d < 300) { // Se il clic è dentro il cerchio
        stroke(0);
        strokeWeight(7);
        line(mouseX - 7, mouseY, mouseX + 7, mouseY); // Linea orizzontale
        line(mouseX, mouseY - 7, mouseX, mouseY + 7); // Linea verticale
    }
}
