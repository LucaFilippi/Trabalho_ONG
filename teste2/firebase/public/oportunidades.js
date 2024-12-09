// scripts.js

// Função que redireciona para a página de detalhes
function redirectToDetails(cardId) {
    // Substituir pela URL real da página de detalhes
    window.location.href = `detalhes.html?id=${cardId}`;
  }
// scripts.js
  function generateCards(cards) {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; // Limpa o contêiner antes de carregar os novos cards
  
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
  
      cardElement.onclick = () => redirectToDetails(card.id); // Redireciona ao clicar no card
  
      cardElement.innerHTML = `
        <div class="card-header"></div>
        <div class="card-body">
          <h3>${card.title}</h3>
          <p>Por: ${card.organization}</p>
          <p>${card.description}</p>
          <p><i class="location-icon">📍 ${card.location}</i></p>
          <p>${card.phone}</p>
        </div>
      `;
  
      container.appendChild(cardElement);
    });
  }
  
  
  // Chama a função para carregar os cards quando a página principal é carregada
  document.addEventListener("DOMContentLoaded", loadCards);
  

  function generateCards(cards) {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; // Limpa o contêiner antes de carregar os novos cards
  
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.onclick = () => redirectToDetails(card.id); // Garante que o ID correto seja passado
  
      cardElement.innerHTML = `
        <div class="card-header"></div>
        <div class="card-body">
          <h3>${card.title}</h3>
          <p>Por: ${card.organization}</p>
          <p>${card.description}</p>
          <p><i class="location-icon">📍 ${card.location}</i></p>
        </div>
      `;
  
      container.appendChild(cardElement);
    });
  }
  
  // Função para redirecionar para a página de detalhes
  function redirectToDetails(cardId) {
    window.location.href = `detalhes.html?id=${cardId}`;
  }
  
  // Carrega os cards do localStorage
  function loadCards() {
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    generateCards(cards);
  }
  
  document.addEventListener("DOMContentLoaded", loadCards);
  

// Função para redirecionar para a página de detalhes
function redirectToDetails(cardId) {
  window.location.href = `detalhes.html?id=${cardId}`;
}

// Carrega os cards do localStorage
function loadCards() {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  generateCards(cards);
}

document.addEventListener("DOMContentLoaded", loadCards);
