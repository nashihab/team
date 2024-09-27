document.addEventListener("DOMContentLoaded", function() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    // Preloader removal
    window.onload = function() {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    };
});
