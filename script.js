const menuButton = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
        let ouvert = !menu.classList.contains("hidden");
        menuButton.setAttribute("aria-expanded", String(ouvert));
    });
}
if (window.lucide) lucide.createIcons();
