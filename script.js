// Você pode adicionar interações ou anima// Remove pré-carregamento depois de 2s
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.preload').style.display = 'none';
  }, 2000);
});

// Rolar para seção ao clicar no botão
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}ções aqui depois :)
