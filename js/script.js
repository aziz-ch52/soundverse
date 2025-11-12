// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Find the menu toggle button and the navigation links
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Check if both elements exist
  if (menuToggle && navLinks) {
    // Add a click event listener to the menu toggle button
    menuToggle.addEventListener('click', () => {
      // Toggle the 'active' class on the nav-links
      navLinks.classList.toggle('active');
    });
  }
});
