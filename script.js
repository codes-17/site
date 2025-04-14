document.addEventListener("DOMContentLoaded", () => {
    // Show More Button Logic
    const showMoreBtn = document.getElementById("show-more-btn");
    const hiddenCards = document.querySelectorAll(".fade-in.hidden");

    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", () => {
            hiddenCards.forEach((card, i) => {
                setTimeout(() => {
                    card.classList.remove("hidden");
                    card.classList.add("fade-in");
                }, i * 100);
            });
            showMoreBtn.style.display = "none";
        });
    }

    // Hamburger Menu Logic
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.contains("open");

            menuBtn.classList.toggle("open");
            mobileMenu.classList.toggle("open");

            menuBtn.setAttribute("aria-expanded", String(!isOpen));
        });
    }
});
