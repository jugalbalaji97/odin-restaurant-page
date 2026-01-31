import home from "./home.js"

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("menu");
const aboutButton = document.querySelector("about");

const container = document.querySelector("#content");

homeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    container.replaceChildren();
    home(container);
})

home(container);