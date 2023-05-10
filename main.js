const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-button");
const menuCloseBtn = document.querySelector("#close-menu-button");
const mq = window.matchMedia("(max-width: 1024px)");
const mb = window.matchMedia("(max-width: 600px)");

const githubHero=document.querySelector("#github-hero");
const linkedinHero=document.querySelector("#linkedin-hero");
const githubFooter=document.querySelector("#github-footer");
const waFooter=document.querySelector("#wa-footer");
const emailFooter=document.querySelector("#email-footer");
const linkedinFooter=document.querySelector("#linkedin-footer");




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

document.addEventListener("DOMContentLoaded", async function(){
    fetchApi("view",new Date);
});


githubHero.addEventListener(`click`, async () => {
    fetchApi("clickGithubHero",new Date);
});

linkedinHero.addEventListener(`click`, async () => {
    fetchApi("clickLinkedinHero",new Date);
});

linkedinFooter.addEventListener(`click`, async () => {
    fetchApi("clickLinkedinFooter",new Date);
});
emailFooter.addEventListener(`click`, async () => {
    fetchApi("clickEmailFooter",new Date);
});
waFooter.addEventListener(`click`, async () => {
    fetchApi("clickWhatsappFooter",new Date);
});
githubFooter.addEventListener(`click`, async () => {
    fetchApi("clickGithubFooter",new Date);
});
//tes
async function fetchApi (body,date){
    const response = await fetch("https://api-web-portofolio.vercel.app/add-count", { //http://192.168.0.19 https://api-web-portofolio.vercel.app
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
        
        },
        body: `{
           "action": "${body}",
           "date":"${date}"
          }`,
        });
        
        response.json().then(data => {
          console.log(data);
        });
}