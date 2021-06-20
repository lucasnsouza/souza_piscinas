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
    //abre e fecha dropdown no menu mobile
    const menuDropdown = document.querySelector('#dropdown');
    menuDropdown.classList.toggle('ative');

    //aumenta ou diminui height para o dropdown
    const responsiveDropdown = document.querySelector('.abrir-lista-dropdown');
    responsiveDropdown.classList.toggle('ative');

})