const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-button");
const menuCloseBtn = document.querySelector("#close-menu-button");
const mq = window.matchMedia("(max-width: 1024px)");
const mb = window.matchMedia("(max-width: 600px)");


menuBtn.addEventListener(`click`, () => {
    menu.style.display = "flex";
    menuCloseBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

menuCloseBtn.addEventListener(`click`, () => {

    menuCloseBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
    menu.style.display = "none";
});


if (mq.matches) {
    window.addEventListener("scroll", () => {

        menuCloseBtn.style.display = "none";
        menu.style.display = "none";
        menuBtn.style.display = "inline-block";
    });
}

if (mb.matches) {
    window.addEventListener("scroll", () => {

        menuCloseBtn.style.display = "none";
        menu.style.display = "none";
        menuBtn.style.display = "inline-block";
    });
}