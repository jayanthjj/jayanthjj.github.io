// Enhanced cursor animation
let cursor = true;
const speed = 500;

function animateCursor() {
    const cursorElement = document.getElementById('cursor');
    if (cursorElement) {
        if (cursor) {
            cursorElement.style.opacity = 0;
            cursor = false;
        } else {
            cursorElement.style.opacity = 1;
            cursor = true;
        }
    }
}

setInterval(animateCursor, speed);

// Enhanced Preloader functionality
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const loaderStatus = document.querySelector('.loader-status');
    const statusTexts = ["Loading amazing stuff...", "Almost there..."];
    let statusIndex = 0;
    
    if (preloader) {
        // Update status text at intervals
        const statusInterval = setInterval(() => {
            if (statusIndex < statusTexts.length - 1) {
                loaderStatus.textContent = statusTexts[++statusIndex];
            } else {
                clearInterval(statusInterval);
            }
        }, 1000);
        
        // Add particle effects to preloader
        createParticles();
        
        // Fade out preloader after animation
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.classList.add('loaded');
            }, 800);
        }, 3000);
    }
});

// Create animated particles in the preloader
function createParticles() {
    const preloader = document.querySelector('.preloader');
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random particle properties
        const size = Math.random() * 5 + 3;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 2;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        preloader.appendChild(particle);
    }
}

// Combine DOMContentLoaded events for better performance
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth hover effects for expertise tags
    const tags = document.querySelectorAll('.tag, .skill-tag');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading states for external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add a subtle loading indicator
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
});
