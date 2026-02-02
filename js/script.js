const openBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.menu-close');
const menu = document.querySelector('.menu-overlay');

openBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

// fechar ao clicar em um link
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});