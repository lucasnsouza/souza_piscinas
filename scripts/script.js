//javascript para botão do menu mobile
const btnMobile = document.querySelector('#btn-mobile');

const ondeCliquei = document.querySelector('#main');

const menuMobile = document.querySelector('#menu')

btnMobile.addEventListener('click', function abrirMenuMobile () {
    const navHtml = document.querySelector('#nav');
    navHtml.classList.toggle('active'); //alterna entre ativar ou destivar a classe nas css
})

const fecharMenuMobile = () => {
    const navHtml = document.querySelector('#nav');
    navHtml.classList.remove('active');
}

//javascript para fechar menu mobile clicando fora dele
menuMobile.addEventListener('click', function fecharMenu (evento) {
    if (evento.target.id == 'main') {
        console.log('clicou');
    }
})

//javascript para dropdown
const linkDropdown = document.querySelector('.abrir-dropdown');

linkDropdown.addEventListener('click', function abrirDropdown () {
    const tamanhoDaJanela = window.innerWidth;
    const tamanhoDaTela = screen.width;

    const menuDropdown = document.querySelector('.dropdown');
    const listaDropdown = document.querySelector('.dropdown-responsive');

    if (tamanhoDaJanela < 861 || tamanhoDaJanela < 861) {
      listaDropdown.classList.toggle('ative');
    } else {
      if (menuDropdown.style.visibility = 'hidden') {
        menuDropdown.style.visibility = 'visible';
      } else {
        menuDropdown.style.visibility = 'hidden';
      }
    }

    //abre e fecha dropdown no menu mobile

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