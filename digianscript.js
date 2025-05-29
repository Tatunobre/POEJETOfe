function irparaSobre() {
    const imagem = document.getElementById('isobre');
    const posicaoY = imagem.getBoundingClientRect().top;
    window.scrollTo({
        top: posicaoY,
        behavior: 'smooth'
    });
}
function irparaServ() {
    const imagem = document.getElementById('iServ');
    const posicaoY = imagem.getBoundingClientRect().top;
    window.scrollTo({
        top: posicaoY,
        behavior: 'smooth'
    });
}
function irparaContato() {
    const imagem = document.getElementById('iCont');
    const posicaoY = imagem.getBoundingClientRect().top;
    window.scrollTo({
        top: posicaoY,
        behavior: 'smooth'
    });
}