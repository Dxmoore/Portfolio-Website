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
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
});

// Check local storage for the current theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}
