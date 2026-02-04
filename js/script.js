//menu

const openBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.menu-close');
const menu = document.querySelector('.menu-overlay');

function openMenu() {
    menu.classList.add('active');
}

function closeMenu() {
    menu.classList.remove('active');
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// fechar ao clicar em um link
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

//scroll da tela
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (menu.classList.contains('active')) return

    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScroll = currentScroll;
});