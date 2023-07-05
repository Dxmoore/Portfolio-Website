// Change the style of a photo when clicked
const projectImages = document.querySelectorAll('.project img');
projectImages.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle('clicked');
  });
});

// Enable dropdown menus
// Add your dropdown menu code here

// Toggle between light and dark mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark'); // Toggle the 'dark' class on the body element

  // Store the current theme in local storage
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check local storage for the current theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme); // Apply the saved theme to the body element
}

