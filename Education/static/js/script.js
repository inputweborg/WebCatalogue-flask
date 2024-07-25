// Add your JavaScript animations and functionalities here

// Example: Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    logo.addEventListener('load', function() {
        // Use a library like Vibrant.js to extract colors from the logo
        const vibrant = new Vibrant(logo);
        const swatches = vibrant.swatches();
        if (swatches['Vibrant']) {
            document.documentElement.style.setProperty('--primary-color', swatches['Vibrant'].getHex());
        }
        if (swatches['LightVibrant']) {
            document.documentElement.style.setProperty('--accent-color', swatches['LightVibrant'].getHex());
        }
        if (swatches['DarkVibrant']) {
            document.documentElement.style.setProperty('--secondary-color', swatches['DarkVibrant'].getHex());
        }
    });
});
