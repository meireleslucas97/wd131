document.addEventListener("DOMContentLoaded", function() {
    const year = document.querySelector('#currentYear');
    const today = new Date();
    year.textContent = today.getFullYear();

    const lastModified = document.querySelector('#lastModified');
    lastModified.textContent = "Last Modified: " + document.lastModified;

    const hamButton = document.querySelector("#menu-hamburger");
    const ul = document.querySelector("ul");

    hamButton.addEventListener("click", () => {
        ul.classList.toggle("open-ul");
        hamButton.classList.toggle("open");
    });
});
