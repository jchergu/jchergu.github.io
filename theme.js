// theme.js - Dark mode functionality

// Initialize theme on DOM load
document.addEventListener('DOMContentLoaded', function() {
  // Set initial theme
  if (localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
  
  // Initialize toggle buttons
  initializeThemeToggle();
});

function initializeThemeToggle() {
  // Get all toggle buttons
  const themeToggleBtns = [
    document.getElementById('theme-toggle'),
    document.getElementById('mobile-theme-toggle')
  ].filter(Boolean); // Remove null elements
  
  // Add event listeners
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
  
  // Set initial icon states
  updateThemeIcons();
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  
  // Toggle desktop icons
  const desktopDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const desktopLightIcon = document.getElementById('theme-toggle-light-icon');
  
  if (desktopDarkIcon && desktopLightIcon) {
    desktopDarkIcon.classList.toggle('hidden', isDark);
    desktopLightIcon.classList.toggle('hidden', !isDark);
  }
  
  // Toggle mobile icons
  const mobileDarkIcon = document.getElementById('mobile-theme-toggle-dark-icon');
  const mobileLightIcon = document.getElementById('mobile-theme-toggle-light-icon');
  
  if (mobileDarkIcon && mobileLightIcon) {
    mobileDarkIcon.classList.toggle('hidden', isDark);
    mobileLightIcon.classList.toggle('hidden', !isDark);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcons();
  
  // Debug log
  console.log('Theme toggled to:', isDark ? 'dark' : 'light');
}