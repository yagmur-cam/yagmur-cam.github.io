const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() { // the pen, every drawing command goes through it
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// the animation loop

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 1. update each dot's position
    // 2. draw each dot
    // 3. draw lines between close dots
    requestAnimationFrame(draw); // asks the browser to call draw again before the next screen refresh
}
draw();


