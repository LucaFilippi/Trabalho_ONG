document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const ongId = parseInt(params.get("id"), 10);
    const ongs = JSON.parse(localStorage.getItem("ongs")) || [];
    const ong = ongs.find((o) => o.id === ongId);

    const detailsContainer = document.getElementById("details-container");

    if (ong) {
        detailsContainer.innerHTML = `
            <h1>${ong.name}</h1>
            <p>${ong.description}</p>
            <p>${ong.phone}</p>
        `;
    } else {
        detailsContainer.innerHTML = "<p>ONG não encontrada.</p>";
    }
});
