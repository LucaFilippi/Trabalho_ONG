// Obtém os elementos do slider e das setas
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slider li');
const inputs = document.querySelectorAll('.slider input');
let currentIndex = 0;

// Função para mostrar o slide atual
function showSlide(index) {
  // Faz todas as imagens ficarem invisíveis
  slides.forEach((slide, i) => {
    slide.querySelector('img').style.opacity = 0;
    slide.querySelector('img').style.visibility = 'hidden';
  });
  
  // Torna visível o slide atual
  slides[index].querySelector('img').style.opacity = 1;
  slides[index].querySelector('img').style.visibility = 'visible';

  // Marca o input associado ao slide como "checked"
  inputs.forEach((input, i) => {
    input.checked = i === index;
  });
}

// Função para ir para o slide anterior
function prevSlide() {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

// Função para ir para o próximo slide
function nextSlide() {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}

// Evento para a seta "anterior"
prevButton.addEventListener('click', prevSlide);

// Evento para a seta "próxima"
nextButton.addEventListener('click', nextSlide);

// Inicia mostrando o primeiro slide
showSlide(currentIndex);
