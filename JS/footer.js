const Data = {
    popular: [
        { dark: "Canmore", light: "Pet-friendly rentals", link: "#" },
        { dark: "Benalmades", light: "House rentals", link: "#" },
        { dark: "Marbella", light: "Pet-friendly rentals", link: "#" },
        { dark: "mijas", light: "Pet-friendly rentals", link: "#" },
        { dark: "Prescott", light: "Pet-friendly rentals", link: "#" },
        { dark: "Tuscon", light: "Pet-friendly rentals", link: "#" },
        { dark: "Jasper", light: "Pet-friendly rentals", link: "#" },
        { dark: "Mountains Views", light: "Pet-friendly rentals", link: "#" },
        { dark: "Devonport", light: "Pet-friendly rentals", link: "#" },
        { dark: "Mallacoota", light: "Pet-friendly rentals", link: "#" },
        { dark: "ibiza", light: "Pet-friendly rentals", link: "#" }
    ]
}
function loadContent(category) {
    const grid = document.getElementById('grid');
    grid.innerHTML = "";
    Data[category].forEach(element => {
        const div = document.createElement("div");
        div.className = "grid-element";
        div.innerHTML = `<div class="dark">${element.dark}</div><div class="light"><a href="${element.link}">${element.light}</a></div>`;
        grid.appendChild(div);
    });
}
window.onload = function () {
    loadContent('popular');
};
