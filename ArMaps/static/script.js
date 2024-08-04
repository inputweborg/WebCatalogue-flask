 document.addEventListener('DOMContentLoaded', function() {
            // Initialize the map
            var map = L.map('map').setView([10.8505, 76.2711], 8);

            // Add tile layer to the map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Initial marker
            var marker = L.marker([10.8505, 76.2711]).addTo(map)
                .bindPopup('Kerala, India')
                .openPopup();

            // Show the header and footer initially
            const header = document.querySelector('.header');
            const footer = document.querySelector('.footer');

            // Function to hide the header and footer after a delay
            function hideHeaderFooter() {
                header.classList.add('hidden');
                footer.classList.add('hidden');
            }

            // Function to show the header and footer when the page is viewed
            function showHeaderFooter() {
                header.classList.remove('hidden');
                footer.classList.remove('hidden');
            }

            // Hide the header and footer after 3 seconds
            setTimeout(hideHeaderFooter, 3000);

            // Show the header and footer when the user interacts with the page
            document.addEventListener('mousemove', showHeaderFooter);
            document.addEventListener('scroll', showHeaderFooter);

            // Function to toggle input container visibility
            function toggleInputContainer() {
                var container = document.getElementById('inputContainer');
                if (container.classList.contains('show')) {
                    container.classList.remove('show');
                    container.classList.add('hide');
                    setTimeout(() => {
                        container.style.display = 'none';
                    }, 500); // Wait for the fade-out transition to complete
                } else {
                    container.style.display = 'block';
                    container.classList.remove('hide');
                    setTimeout(() => {
                        container.classList.add('show');
                    }, 10); // Wait a tiny bit to ensure the display change is processed
                }
            }

            // Function to add Google Maps location
            function addGoogleMapsLocation() {
                var url = document.querySelector('#googleMapsUrl').value;

                // Extract latitude and longitude from Google Maps URL
                var coords = extractCoordsFromUrl(url);
                if (coords) {
                    var latlng = [coords.lat, coords.lng];
                    var newName = prompt("Enter a name for this location:");
                    L.marker(latlng).addTo(map)
                        .bindPopup(`<strong>${newName}</strong><br/><a href="${url}" target="_blank">View on Google Maps</a>`)
                        .openPopup();
                    
                    // Center map on the new location
                    map.setView(latlng, 15);
                } else {
                    alert('Invalid Google Maps URL. Please check the URL format.');
                }
                // Hide the input container after adding the location
                toggleInputContainer();
            }

            // Function to extract coordinates from Google Maps URL
            function extractCoordsFromUrl(url) {
                var regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
                var match = url.match(regex);
                if (match) {
                    return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
                }
                return null;
            }

            // Ensure header and footer are initially visible
            showHeaderFooter();

            // Array of Google's colors
            const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

            // Function to change the Google button's color dynamically
            function changeGoogleButtonColor() {
                const googleButton = document.querySelector('.google-button');
                let colorIndex = 0;
                setInterval(() => {
                    googleButton.style.backgroundColor = googleColors[colorIndex];
                    colorIndex = (colorIndex + 1) % googleColors.length;
                }, 1000); // Change color every second
            }

            // Start changing the Google button's color
            changeGoogleButtonColor();
        });