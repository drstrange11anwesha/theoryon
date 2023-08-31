const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');


// Function to handle clicking the Help button
function toggleDropdown(event) {
    console.log('Help button clicked');
    const dropdown = this.querySelector('.dropdown');
    dropdown.classList.toggle('show');
    event.stopPropagation(); // Prevent event from propagating to window
}

document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.querySelector('.home-button');
    const helpButton = document.querySelector('.help-button');
    const faqOption = document.querySelector('.faq-option'); // Add this line

    if (window.location.pathname === 'main.html') {
        // Attach the search functionality only on the home page
        const searchButton = document.getElementById('searchButton');
        const searchInput = document.getElementById('searchInput');
        const resultsContainer = document.getElementById('results');

        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query !== '') {
                fetchResults(query);
            }
        });

        function fetchResults(query) {
            // Your fetchResults implementation
        }
    }

    // Navigate to home page when Home button is clicked
    homeButton.addEventListener('click', function() {
        console.log('Home button clicked');
        window.location.href = 'main.html'; // Replace with actual home page URL
    });

    // Navigate to FAQ page when FAQ option is clicked
    faqOption.addEventListener('click', function() {
        console.log('FAQ button clicked');
        window.location.href = 'faq.html'; // Replace with actual FAQ page URL
    });

    // Toggle dropdown when Help button is clicked
    helpButton.addEventListener('click', toggleDropdown);

    // Close dropdown when clicking outside
    window.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    });
});