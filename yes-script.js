// yes-script.js

// Advanced celebration script

// Particle generation system
function generateParticles(count) {
    const particles = [];
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 5 + 2,
            color: getRandomColor()
        });
    }
    return particles;
}

// Confetti burst mechanics
function confettiBurst() {
    const particles = generateParticles(100);
    particles.forEach(particle => {
        animateParticle(particle);
    });
}

// Animation triggers
function animateParticle(particle) {
    // Logic for animating individual particles
    // Example: using requestAnimationFrame for smooth animations
}

// Celebration sound handling
function playCelebrationSound() {
    const audio = new Audio('celebration.mp3');
    audio.play();
}

// DOM manipulation for effect creation
function createCelebrationEffect() {
    const effectDiv = document.createElement('div');
    effectDiv.classList.add('celebration-effect');
    document.body.appendChild(effectDiv);
    // Additional DOM manipulation to enhance effects
}

// Timing functions for sequential animations
function triggerSequentialAnimations() {
    setTimeout(() => {
        confettiBurst();
        playCelebrationSound();
    }, 500);
}

// Randomized particle paths
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Color cycling logic
function cycleColors() {
    const colors = ['#FF0000', '#00FF00', '#0000FF'];
    let index = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
}

// Complete celebration sequence automation
function runCelebration() {
    createCelebrationEffect();
    triggerSequentialAnimations();
    cycleColors();
}

// Trigger celebration sequence
runCelebration();
