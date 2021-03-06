//javascript para botão do menu mobile
const btnMobile = document.querySelector('#btn-mobile');

//abre o menu mobile
btnMobile.addEventListener('click', function abrirMenuMobile () {
    const navHtml = document.querySelector('#nav');
    navHtml.classList.toggle('active'); //alterna entre ativar ou destivar a classe nas css
})

//javascript para dropdown
const linkDropdown = document.querySelector('.abrir-dropdown');

linkDropdown.addEventListener('click', function abrirDropdown () {
    const tamanhoDaJanela = window.innerWidth;
    const tamanhoDaTela = screen.width;

    const menuDropdown = document.querySelector('.dropdown');
    const listaDropdown = document.querySelector('.dropdown-responsive');

    if (tamanhoDaJanela < 861 || tamanhoDaTela < 861) {
       //abre e fecha dropdown no menu mobile
      listaDropdown.classList.toggle('ative');
    } else if (menuDropdown.style.visibility = 'hidden') {
        menuDropdown.style.visibility = 'visible'; 
    }
    //aumenta ou diminui height para o dropdown
    const responsiveDropdown = document.querySelector('.abrir-lista-dropdown');
    responsiveDropdown.classList.toggle('ative');

})

//scrip para slideshow
let indiceDoSlide = 1;
showSlides(indiceDoSlide);

// Next/previous controls
function mudarSlides(n) {
  showSlides(indiceDoSlide += n);
}

// Thumbnail image controls
function descobrirSlideAtual(n) {
  showSlides(indiceDoSlide = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");
  if (n > slides.length) {indiceDoSlide = 1}
  if (n < 1) {indiceDoSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[indiceDoSlide-1].style.display = "block";
}