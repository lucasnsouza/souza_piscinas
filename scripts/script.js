//javascript para botão do menu mobile
const btnMobile = document.querySelector("#btn-mobile");

//abre o menu mobile
btnMobile.addEventListener("click", function abrirMenuMobile() {
  const navHtml = document.querySelector("#nav");
  navHtml.classList.toggle("active"); //alterna entre ativar ou destivar a classe nas css
});

//javascript para dropdown
const linkDropdown = document.querySelector(".abrir-dropdown");

linkDropdown.addEventListener("click", function abrirDropdown() {
  const tamanhoDaJanela = window.innerWidth;
  const tamanhoDaTela = screen.width;

  const menuDropdown = document.querySelector(".dropdown");
  const listaDropdown = document.querySelector(".dropdown-responsive");

  if (tamanhoDaJanela < 861 || tamanhoDaTela < 861) {
    //abre e fecha dropdown no menu mobile
    listaDropdown.classList.toggle("ative");
  } else if ((menuDropdown.style.visibility = "hidden")) {
    menuDropdown.style.visibility = "visible";
  }
  //aumenta ou diminui height para o dropdown
  const responsiveDropdown = document.querySelector(".abrir-lista-dropdown");
  responsiveDropdown.classList.toggle("ative");
});

//array com o caminho das fotos
const fotos = [
  {
    id: 1,
    descricao: "Manutenção regular",
    src: "./imagens/peneira.png",
    alt: "peneira na água",
    link: "./regular.html",
  },
  {
    id: 2,
    descricao: "Manutenção extra",
    src: "./imagens/filtro-e-pecas.png",
    alt: "filtro e peças",
    link: "./extra.html",
  },
  {
    id: 3,
    descricao: "Produtos e equipamentos",
    src: "./imagens/produtos-equpamentos.png",
    alt: "produtos",
    link: "./produtos.html",
  },
];

//foreach que vai criar na página as divs que populam o slideshow
fotos.forEach((foto) => {
  const slideshow = document.querySelector("#slideshow");
  slideshow.innerHTML += `
    <div class="slides">
      <div class="numero-slide">${foto.id} / 3</div>
        <img src="${foto.src}" alt="${foto.alt}"  style="width: 100%;">
      <div class="serviço"><a href="${foto.link}" class="links-slide" target="_self">${foto.descricao}</a></div>
    </div>
  `;
});

//script para slideshow
let indiceDoSlide = 1;
showSlides(indiceDoSlide);

function showSlides(n) {
  const slides = document.querySelectorAll(".slides");
  //console.log(slides);
  if (n > slides.length) {
    indiceDoSlide = 1;
  }
  if (n < 1) {
    indiceDoSlide = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[indiceDoSlide - 1].style.display = "block";
}

// Next/previous controls
function mudarSlides(n) {
  showSlides((indiceDoSlide += n));
}
