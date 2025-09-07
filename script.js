document.addEventListener('DOMContentLoaded', (event) => {
    
    // --- Magic Cursor Trail ---
    const sparkleColors = ['#ffafcc', '#bde0fe', '#ffc8dd', '#ffd6a5', '#caffbf'];

    document.body.addEventListener('mousemove', (e) => {
        createSparkle(e.pageX, e.pageY);
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);

        // Randomize color
        const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
        sparkle.style.background = color;

        // Position sparkle at cursor with a slight random offset
        const size = Math.random() * 10 + 5; // Sparkle size between 5px and 15px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 20;
        sparkle.style.left = `${x + randomX}px`;
        sparkle.style.top = `${y + randomY}px`;

        // Remove the sparkle after the animation ends
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    // --- 3D Tilt Effect for Project Cards ---
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const midCardX = rect.width / 2;
            const midCardY = rect.height / 2;

            const rotateY = (x - midCardX) / 10; // Adjust divisor for sensitivity
            const rotateX = - (y - midCardY) / 10;

            card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
        });
    });
});
