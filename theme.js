 // toggling light and dark theme
 const toggleSwitch = document.querySelector('input[type="checkbox"]');
 const html = document.querySelector('html');
 
 function toggleTheme() {
   if (toggleSwitch.checked) {
     html.setAttribute('data-theme', 'dark');
   } else {
     html.setAttribute('data-theme', 'light');
   }
 }
 
 toggleSwitch.addEventListener('change', toggleTheme);