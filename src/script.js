document.addEventListener('DOMContentLoaded', function() {
    console.log('FiscEdge site loaded');
    // Additional interactive features can be added here

    const menuButton = document.querySelector('.menu-button');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeButton = document.querySelector('.menu-overlay .close');
    const minimizeButton = document.querySelector('.menu-overlay .minimize');

    // Open menu
    menuButton.addEventListener('click', () => {
        menuOverlay.classList.add('active');
    });

    // Close menu
    closeButton.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });

    // Minimize menu (you can customize this behavior)
    minimizeButton.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });

    // Handle email submission
    const emailForm = document.querySelector('.email-input');
    const emailInput = emailForm.querySelector('input');
    const submitButton = emailForm.querySelector('.submit-arrow');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (email) {
            console.log('Email submitted:', email);
            emailInput.value = '';
            // Add your email submission logic here
        }
    });

    // Handle enter key in email input
    emailInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitButton.click();
        }
    });
});
