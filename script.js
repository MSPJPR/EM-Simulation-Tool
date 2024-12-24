// Initialize WebGL Canvas
const container = document.getElementById("simulation-container");
const canvas = document.createElement("canvas");
canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;
container.appendChild(canvas);

const gl = canvas.getContext("webgl");
if (!gl) {
    alert("WebGL not supported!");
} else {
    console.log("WebGL initialized!");
}

// Simulation parameters
let frequency = 10; // Default frequency
let amplitude = 50; // Default amplitude
let time = 0;

// Set up controls
const frequencySlider = document.getElementById("frequency");
const frequencyValue = document.getElementById("freq-value");
const amplitudeSlider = document.getElementById("amplitude");
const amplitudeValue = document.getElementById("amp-value");

// Update frequency and amplitude based on user input
frequencySlider.addEventListener("input", (event) => {
    frequency = event.target.value;
    frequencyValue.textContent = frequency;
});

amplitudeSlider.addEventListener("input", (event) => {
    amplitude = event.target.value;
    amplitudeValue.textContent = amplitude;
});

// Draw a simple sine wave to simulate electromagnetic behavior
function drawWave() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let x = 0; x < canvas.width; x++) {
        const y =
            canvas.height / 2 +
            amplitude * Math.sin((2 * Math.PI * frequency * (x / canvas.width)) + time);
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Animation loop
function animate() {
    time += 0.05; // Adjust for wave speed
    drawWave();
    requestAnimationFrame(animate);
}

// Start animation
animate();
