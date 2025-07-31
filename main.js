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

// AI Demo functionality
document.addEventListener('DOMContentLoaded', function() {
    const startDemoBtn = document.getElementById('startDemoBtn');
    const demoInterface = document.getElementById('demoInterface');
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    
    if (startDemoBtn) {
        startDemoBtn.addEventListener('click', function() {
            // Show the chat interface
            demoInterface.style.display = 'block';
            startDemoBtn.style.display = 'none';
            
            // Enable input elements
            userInput.disabled = false;
            sendBtn.disabled = false;
            
            // Add welcome message
            addMessage("Hi there! I'm Jayanth's AI assistant. Ask me anything about his AI skills, projects, or experience!", 'ai');
            
            // Focus input
            userInput.focus();
        });
    }
    
    // Send message functionality
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, 'user');
        
        // Clear input
        userInput.value = '';
        
        // Disable input while "processing"
        userInput.disabled = true;
        sendBtn.disabled = true;
        
        // Simulate typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message ai-message typing-indicator';
        typingIndicator.textContent = '...';
        chatMessages.appendChild(typingIndicator);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate AI response after delay
        setTimeout(() => {
            // Remove typing indicator
            chatMessages.removeChild(typingIndicator);
            
            // Process response
            const response = getAIResponse(message);
            addMessage(response, 'ai');
            
            // Re-enable input
            userInput.disabled = false;
            sendBtn.disabled = false;
            userInput.focus();
        }, 1500);
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getAIResponse(message) {
        message = message.toLowerCase();
        
        // Simple response logic
        if (message.includes('project') || message.includes('work')) {
            return "Jayanth has worked on several innovative AI projects including developer assistants powered by LLMs, agent-based systems for automated workflows, and GenAI content platforms. His most recent work involves building AI systems that help developers write better code and understand complex codebases.";
        }
        else if (message.includes('skill') || message.includes('expertise')) {
            return "Jayanth specializes in AI and ML technologies including LLM fine-tuning, RAG systems, agent frameworks, and prompt engineering. He's also proficient in Python, React, and cloud architecture for scalable AI applications.";
        }
        else if (message.includes('experience') || message.includes('background')) {
            return "Jayanth is currently a Software Engineer 2 at Microsoft, where he works on AI-driven developer tools. His background includes expertise in developing GenAI applications and designing multi-agent systems that solve complex problems.";
        }
        else if (message.includes('contact') || message.includes('hire') || message.includes('email')) {
            return "You can contact Jayanth via email at jayanthjayadevan98@gmail.com or connect with him on LinkedIn. He's currently open to discussing exciting opportunities in AI development and engineering leadership roles.";
        }
        else {
            return "Thanks for your interest! Jayanth is passionate about creating AI systems that are both powerful and user-friendly. Is there something specific about his AI work or software development experience you'd like to know?";
        }
    }
});
