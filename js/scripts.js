// Particles.js Configuration
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Preloader Script
$(window).on('load', function() {
    $('body').addClass('loaded'); // Add class to body to hide preloader
});
