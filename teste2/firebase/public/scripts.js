// scripts.js

// Função que redireciona para a página de detalhes
function redirectToDetails(cardId) {
    // Substituir pela URL real da página de detalhes
    window.location.href = `detalhes.html?id=${cardId}`;
  }
// scripts.js

const cardsData = [
    {
      id: 1,
      title: "Psicopedagogo(a)",
      organization: "ONG1",
      description: "Nós somos uma ONG que atende a comunidade localizada no bairro do Jacaré...",
      location: "Bairro, Cidade, Estado",
    },
    {
      id: 2,
      title: "Analista de Dados",
      organization: "ONG2",
      description: "O Instituto A Corrente do Bem busca voluntário(a) em Análise de Dados...",
      location: "Bairro, Cidade, Estado",
    },
    {
      id: 3,
      title: "XXXXX",
      organization: "ONGX",
      description: "x x x x x",
      location: "Bairro, Cidade, Estado",
    },
  ];
  
  function generateCards(cards) {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; // Limpa o contêiner
  
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.onclick = () => redirectToDetails(card.id);
  
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
  
  function redirectToDetails(cardId) {
    // Substituir pela URL real da página de detalhes
    window.location.href = `detalhes.html?id=${cardId}`;
  }
  
  // Gerar os cards ao carregar a página
  generateCards(cardsData);
  function loadCards() {
    // Recupera os cards do localStorage
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
  
    // Gera os cards na página principal
    generateCards(cards);
  }
  
  // Atualize a função generateCards para garantir que use os dados do localStorage
  function generateCards(cards) {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; // Limpa o contêiner antes de carregar os novos cards
  
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.onclick = () => redirectToDetails(card.id);
  
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
  
  // Chama a função para carregar os cards quando a página principal é carregada
  document.addEventListener("DOMContentLoaded", loadCards);
  