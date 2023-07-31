// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

darkmodeButton = document.getElementById('dark-mode-button');
darkmodeButton.addEventListener('click', function () {
  let htmlClasses = document.querySelector('html').classList;
  if (localStorage.theme == 'dark') {
    htmlClasses.remove('dark');
    localStorage.removeItem('theme');
  } else {
    htmlClasses.add('dark');
    localStorage.theme = 'dark';
  }
});
