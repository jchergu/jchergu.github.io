// theme.js - Dark mode functionality

function setInitialTheme() {
  const userTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  // Desktop
  const desktopDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const desktopLightIcon = document.getElementById('theme-toggle-light-icon');
  if (desktopDarkIcon && desktopLightIcon) {
    desktopDarkIcon.classList.toggle('hidden', isDark);
    desktopLightIcon.classList.toggle('hidden', !isDark);
  }
  // Mobile
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
}

function initializeThemeToggle() {
  const themeToggleBtns = [
    document.getElementById('theme-toggle'),
    document.getElementById('mobile-theme-toggle')
  ].filter(Boolean);
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setInitialTheme();
  initializeThemeToggle();
  updateThemeIcons();
});