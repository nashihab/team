window.onload = function () {
    // Hide preloader
    document.getElementById('preloader').style.display = 'none';
    
    // Initialize particles.js
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
};
