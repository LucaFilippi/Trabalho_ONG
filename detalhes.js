function loadCardDetails() {
    const cardId = parseInt(new URLSearchParams(window.location.search).get("id"), 10);
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
  
    // Encontra o card pelo ID
    const card = cards.find((c) => c.id === cardId);
  
    if (card) {
      const detailsContainer = document.getElementById("details-container");
  
      detailsContainer.innerHTML = `
        <div class="details-header">
          <h1>${card.title}</h1>
          <p>Publicado em ${new Date().toLocaleDateString()}</p>
          <p>${card.description}</p>
          <p><strong>${card.location}</strong></p>
        </div>
        <div class="details-body">
          <h2>Sobre a Oportunidade</h2>
          <p>${card.description}</p>
        </div>
      `;
    } else {
      document.getElementById("details-container").innerHTML = `
        <p>Detalhes não encontrados para este ID.</p>
      `;
    }
  }
  
  // Carrega os detalhes ao carregar a página
  document.addEventListener("DOMContentLoaded", loadCardDetails);
  