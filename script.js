// script.js
const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const body = document.body;

toggleButton.addEventListener('click', function() {
    nav.classList.toggle('active');
    body.classList.toggle('dim');
});
