// add-card.js

document.getElementById("card-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Previne o envio do formulário
  
    // Pega os valores dos campos do formulário
    const title = document.getElementById("title").value;
    const organization = document.getElementById("organization").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
  
    // Cria um objeto para o novo card
    const newCard = {
      id: Date.now(), // Gera um ID único baseado no timestamp
      title,
      organization,
      description,
      location,
    };
  
    // Recupera os cards existentes no localStorage
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push(newCard);
  
    // Salva os cards atualizados no localStorage
    localStorage.setItem("cards", JSON.stringify(cards));
  
    // Mostra uma mensagem de sucesso (opcional)
    alert("Card adicionado com sucesso!");
  
    // Limpa o formulário
    document.getElementById("card-form").reset();
  });
  