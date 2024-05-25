const products = [
    { id: "fc-1888", name: "flux capacitor", avg_rating: 4.5 },
    { id: "fc-2050", name: "power laces", avg_rating: 4.7 },
    { id: "fs-1987", name: "time circuits", avg_rating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", avg_rating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", avg_rating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    if (localStorage.getItem("reviewCount") === null) {
        localStorage.setItem("reviewCount", 0);
    }

    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});

if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);

    document.body.innerHTML = `
        <div class="container">
            <h1>Thank you for your review!</h1>
            <p>You have submitted ${reviewCount} reviews.</p>
            <a href="form.html">Submit another review</a>
        </div>
    `;
}
