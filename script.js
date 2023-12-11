const moon = document.querySelector('.fa-moon');
const body = document.querySelector('body');
const img = document.getElementById('img');

moon.addEventListener('click', () => {
    body.classList.toggle('active');
})

img.addEventListener('click', () => {
    window.location.href = './index1.html'
})