let activeLink = "";

window.addEventListener("scroll", () => {
    let ids = ["home", "features", "about", "testimonials", "pricing", "contact"];
    let iteration = 1;

    for (let id of ids) {
        let elem = document.getElementById(id);

        if (Math.floor(getCoords(elem).top) <= scrollY) {
            if (activeLink !== "") {
                activeLink.classList.remove("active");
            }

            let link = document.getElementById("link_" + iteration);
            link.classList.add("active");
            activeLink = link;
        }

        ++iteration;
    }
});

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + scrollY,
        left: box.left + scrollY
    };
}