document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-ong-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("ong-name").value.trim();
        const description = document.getElementById("ong-description").value.trim();
        const phone = document.getElementById("ong-phone").value.trim();

        if (name && description && phone) {
            const ongs = JSON.parse(localStorage.getItem("ongs")) || [];
            const newOng = { id: Date.now(), name, description, phone };
            ongs.push(newOng);
            localStorage.setItem("ongs", JSON.stringify(ongs));
            alert("ONG adicionada com sucesso!");
            window.location.href = "Ongs.html";
        } else {
            alert("Todos os campos são obrigatórios!");
        }
    });
});
