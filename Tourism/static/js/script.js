// script.js

document.addEventListener('DOMContentLoaded', () => {
    const waterfallBtn = document.getElementById('waterfall-btn');
    const hillBtn = document.getElementById('hill-btn');
    const beautifulBtn = document.getElementById('beautiful-btn');
    const container = document.getElementById('container');
    const description = document.getElementById('description');

    const backgrounds = {
        waterfall: ['images/waterfall/1.jpeg', 'images/waterfall/2.jpg'],
        hill: ['images/hill/1.jpeg', 'images/hill/2.jpeg'],
        beautiful: ['images/beautiful areas/1.jpeg', 'images/beautiful areas/2.jpeg']
    };

    const descriptions = {
        waterfall: "Explore the serene beauty of majestic waterfalls.",
        hill: "Discover breathtaking hill spots and mountain tops.",
        beautiful: "Enjoy picturesque views of beautiful areas."
    };

    function updatePage(buttonId) {
        const backgroundImages = backgrounds[buttonId];
        const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
        container.style.backgroundImage = `url('/static/${randomImage}')`;

        // Fade out the description, update it, and then fade it back in
        description.style.opacity = 0; // Start by hiding the description
        setTimeout(() => {
            description.innerText = descriptions[buttonId];
            description.style.opacity = 1; // Fade in the description
        }, 300); // Delay to ensure opacity change is visible

        // Ensure the container background updates smoothly
        container.style.transition = 'background-image 0.5s ease'; // Smooth transition
    }

    function handleButtonClick(event) {
        const button = event.currentTarget;
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 600); // Remove class after animation
    }

    waterfallBtn.addEventListener('click', () => {
        updatePage('waterfall');
        handleButtonClick(event);
    });

    hillBtn.addEventListener('click', () => {
        updatePage('hill');
        handleButtonClick(event);
    });

    beautifulBtn.addEventListener('click', () => {
        updatePage('beautiful');
        handleButtonClick(event);
    });
});
