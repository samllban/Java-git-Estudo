//Parametro geral para algo geral
/*function tocaSom (idElementoAudio) {
    document.querSelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// variavel que vai receber sempre um valor novo
let contador = 0;
// listaDeTeclas.lenght(= tamanho) são a quantidades de teclas(9) 
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador]
    //texto dinamicos - as variaveis do instrumentos do som
    const instrumento = tecla.classList[1];
    
    //template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    //funçao anonima - 
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador)
}*/

// USANDO O FOR, codigo mais limpo agora e depois 

function tocaSom(seletorAudio) {
    const elemento = document.querSelector(seletorAudio); 

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento não econtrado')
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
