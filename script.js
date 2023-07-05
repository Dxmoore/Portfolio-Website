// Change the style of a photo when clicked
const projectImages = document.querySelectorAll('.project img');
projectImages.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('clicked');
  });
});

// Enable dropdown menus
// Add your dropdown menu code here

// Toggle between light and dark mode
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
