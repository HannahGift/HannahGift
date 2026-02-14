// yes-script.js

// Celebration animations and effects for Hannah

function celebrate() {
    // Create celebration confetti
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);

    // Animation logic here
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

function main() {
    setInterval(celebrate, 1000);
}

main();