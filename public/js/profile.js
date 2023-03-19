(function() {
    const $ = document;
    const menuBtn = $.querySelector(".menu-btn");
    const menu = $.querySelector(".menu");
    const editNameBtn = $.querySelector(".edit-name-btn");
    const tabs = menu.querySelector(".bottom > .tabs");
    const tab = tabs.querySelectorAll(".tab");
    const pages = $.querySelector(".content > .into ");
    const page = $.querySelectorAll(".content > .into > .page");

    // ! form inputs
    const inputFullName = pages.querySelector("#inputFullName");

    function showSelectedPage(name) {
        for (const item of page) {
            item.classList.remove("focus");
        }
        for (const item of tab) {
            item.setAttribute("data-focus", "false");
        }
        pages
            .querySelector(`.page[data-name="${name}"]`)
            .classList.add("focus");
        tabs.querySelector(`.tab[data-target="${name}"]`).setAttribute(
            "data-focus",
            "true"
        );
    }

    showSelectedPage("basket");

    editNameBtn.addEventListener("click", () => {
        showSelectedPage("setting");
        inputFullName.focus()
    });

    for (const item of tab) {
        item.addEventListener("click", () => {
            const pageName = item.getAttribute("data-target");
            showSelectedPage(pageName);
            if (window.innerWidth < "1232") menu.style.right = "-100%";
        });
    }

    menuBtn.addEventListener("click", e => {
        console.log(menu.style.right);
        // menu.style.right = 0;
        menu.style.right = menu.style.right === "0px" ? "-100%" : "0";
    });
})();