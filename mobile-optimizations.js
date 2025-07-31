/* Mobile optimizations for Jayanth's portfolio */

document.addEventListener("DOMContentLoaded", function() {
    // Handle iOS height issues
    function setMobileViewportHeight() {
        // First, get the viewport height and multiply by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Set the height initially
    setMobileViewportHeight();

    // Reset on resize and orientation change
    window.addEventListener('resize', setMobileViewportHeight);
    window.addEventListener('orientationchange', setMobileViewportHeight);

    // Optimize loading on mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // We're on mobile, apply mobile-specific optimizations
        
        // Optimize images for mobile (lazy loading)
        const images = document.querySelectorAll('img:not(.preloaded)');
        images.forEach(img => {
            img.loading = 'lazy';
        });
        
        // Optimize video for mobile
        const video = document.querySelector('video.flipped-video');
        if (video) {
            // Lower resolution for mobile to improve performance
            if (window.innerWidth <= 480) {
                // Try to select a mobile-optimized source if available
                const sources = video.querySelectorAll('source');
                sources.forEach(source => {
                    // Prefer 3gp for older mobile devices
                    if (source.src.includes('.3gp')) {
                        source.setAttribute('media', 'all');
                    }
                });
                
                // Reduce video quality for better performance
                video.setAttribute('playsinline', '');
                video.setAttribute('preload', 'none');
            }
        }

        // Improve touch interactions on mobile
        const tappableElements = document.querySelectorAll('a, button, .skill-tag');
        tappableElements.forEach(element => {
            element.style.touchAction = 'manipulation';
        });

        // Handle scroll performance
        document.body.classList.add('mobile-optimized');
    }
});
