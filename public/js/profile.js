(function () {
    const $ = document;
    const tabs = $.querySelector(".menu > .bottom > .tabs");
    const tab = tabs.querySelectorAll(".tab");
    const pages = $.querySelector(".content > .into ");
    const page = $.querySelectorAll(".content > .into > .page");

    function showSelectedPage(name) {
        for (const item of page) {
            item.classList.remove("focus");
        }
        for (const item of tab) {
            item.setAttribute("data-focus", "false");
        }
        pages.querySelector(`.page[data-name="${name}"]`).classList.add("focus");
        tabs.querySelector(`.tab[data-target="${name}"]`).setAttribute("data-focus", "true");
    }

    showSelectedPage("basket")

    for (const item of tab) {
        item.addEventListener("click", ()=>{
            const pageName = item.getAttribute("data-target");
            showSelectedPage(pageName);
        });
    }
})()