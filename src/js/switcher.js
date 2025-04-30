document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('slider');

  const savedTheme = localStorage.getItem('theme') || 'theme-light';
  setTheme(savedTheme);
  toggle.checked = savedTheme === 'theme-dark';
  
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
  });
});

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}