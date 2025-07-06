
        // Create sparkles around the content
function createSparkle() {
    const sparklesContainer = document.getElementById('sparkles');
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    
    // Random position around the center
    const angle = Math.random() * 360;
    const distance = 100 + Math.random() * 100;
    const x = Math.cos(angle * Math.PI / 180) * distance;
    const y = Math.sin(angle * Math.PI / 180) * distance;
    
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
    
    sparklesContainer.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 4000);
}

// Create sparkles periodically
setInterval(createSparkle, 800);

// Add click interaction
document.addEventListener('click', (e) => {
    // Create burst of sparkles at click position
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + (Math.random() - 0.5) * 100 + 'px';
            sparkle.style.top = e.clientY + (Math.random() - 0.5) * 100 + 'px';
            sparkle.style.fontSize = '1.5rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 2000);
        }, i * 100);
    }
});

// Typing effect for greeting
const greeting = document.getElementById('greeting');
const originalText = greeting.textContent;
greeting.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        greeting.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after initial animation
setTimeout(typeWriter, 1500);

// Add mouse move effect
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console message
console.log('👋 Hi there! This is Mariam\'s beautiful page ✨');

 