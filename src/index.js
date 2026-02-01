import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import "./index.css";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

const container = document.querySelector("#content");

homeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    container.replaceChildren();
    home(container);
})

menuButton.addEventListener('click', (e)=>{
    e.stopPropagation();
    container.replaceChildren();
    menu(container);
})

aboutButton.addEventListener('click', (e)=>{
    e.stopPropagation();
    container.replaceChildren();
    about(container);
})

home(container);