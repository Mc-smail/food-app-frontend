document.addEventListener("DOMContentLoaded", () => {

    /* MENU BUTTON (DROPDOWN) */
    const menuBtn = document.querySelector(".menu-btn");
    const dropdown = document.querySelector(".dropdown-menu");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            dropdown.classList.toggle("show");
        });
    }

    /* Close dropdown when clicking outside */
    document.addEventListener("click", (e) => {
        if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove("show");
        }
    });


    /* TABS IN SPEISEKARTE */
    const tabs = document.querySelectorAll(".menu-tab");
    const categories = document.querySelectorAll(".menu-category");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.target;

            tabs.forEach(t => t.classList.remove("active"));
            categories.forEach(c => c.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(target).classList.add("active");

            window.scrollTo({ top: tab.offsetTop - 120, behavior: "smooth" });
        });
    });

    /* AUTO-AKTIVIERUNG beim Scrollen */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tabs.forEach(tab => tab.classList.remove("active"));
                document
                    .querySelector(`.menu-tab[data-target="${entry.target.id}"]`)
                    .classList.add("active");
            }
        });
    }, { threshold: 0.4 });

    categories.forEach(cat => observer.observe(cat));

});
