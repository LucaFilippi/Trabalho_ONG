document.addEventListener("DOMContentLoaded", () => {
    loadOngs();

    document.getElementById("add-ong-btn").addEventListener("click", () => {
        document.getElementById("add-ong-modal").style.display = "block";
    });

    document.getElementById("save-ong-btn").addEventListener("click", () => {
        const name = document.getElementById("ong-name").value.trim();
        const description = document.getElementById("ong-description").value.trim();
        const phone = document.getElementById("ong-phone").value.trim();

        if (name && description && phone) {
            const ongs = JSON.parse(localStorage.getItem("ongs")) || [];
            const newOng = { id: Date.now(), name, description, phone };
            ongs.push(newOng);
            localStorage.setItem("ongs", JSON.stringify(ongs));
            loadOngs();
            document.getElementById("add-ong-modal").style.display = "none";
            clearModalFields();
        } else {
            alert("Todos os campos são obrigatórios!");
        }
    });

    document.getElementById("cancel-ong-btn").addEventListener("click", () => {
        document.getElementById("add-ong-modal").style.display = "none";
        clearModalFields();
    });
});

function loadOngs() {
    const ongsContainer = document.getElementById("ongs-container");
    ongsContainer.innerHTML = "";
    const ongs = JSON.parse(localStorage.getItem("ongs")) || [];

    if (ongs.length === 0) {
        ongsContainer.innerHTML = "<p>Nenhuma ONG cadastrada.</p>";
        return;
    }

    ongs.forEach((ong) => {
        const ongCard = document.createElement("div");
        ongCard.className = "ong-card";
        ongCard.innerHTML = `
            <div class="icon"></div>
            <div class="info">
                <h2>${ong.name}</h2>
                <p>${ong.description}</p>
                <p><strong>Contato:</strong> ${ong.phone}</p>
            </div>
        `;
        ongCard.addEventListener("click", () => {
            window.location.href = `detalhes_ong.html?id=${ong.id}`;
        });
        ongsContainer.appendChild(ongCard);
    });
}

function clearModalFields() {
    document.getElementById("ong-name").value = "";
    document.getElementById("ong-description").value = "";
    document.getElementById("ong-phone").value = "";
}
