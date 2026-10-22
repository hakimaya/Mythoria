const menuButton = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", function() {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");

    const isOpen = !menu.classList.contains("hidden");

    menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Icons
lucide.createIcons();