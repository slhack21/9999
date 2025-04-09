// script.js - No complex JS needed for this version yet.
// Basic interactivity (like the fade-in animation) is handled by CSS.

// You could add more complex features here later, e.g.,
// - A form submission handler
// - A dynamic service list
// - Image sliders/carousels

console.log("IHL Réparation website loaded.");

// Example: Add subtle hover effect to service list items
document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('#services li');
    serviceItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'var(--primary-color)'; // Change text color on hover
        });
        item.addEventListener('mouseout', () => {
            item.style.color = 'var(--text-color)'; // Revert text color
        });
    });
});

