let centerX = 300;
let centerY = 300;
let targetRadius = 80;
let hits = 0;

function setup() {
    let cnv = createCanvas(600, 600);
    cnv.style('background-color', 'green'); // Imposta il colore di sfondo del canvas
    cnv.mousePressed(checkHit);
    noLoop(); // Disegna solo una volta
}

function draw() {
    clear(); // Rimuove lo sfondo per rendere visibile il bersaglio
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
    if (d < targetRadius) {
        hits++;
        message.textContent = "Bravo! Hai fatto centro!";
    } else {
        message.textContent = "Ritenta, sarai più fortunato!";
    }   
    counter.textContent = "Centri: " + hits;
    }