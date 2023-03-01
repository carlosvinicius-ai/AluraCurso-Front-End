const listaDeTeclas = document.querySelectorAll('.tecla');


function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

for (let count = 0; count < listaDeTeclas.length; count++) {

    const tecla = listaDeTeclas[count];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function() {
        tecla.classList.add('ativa');
    }
    
}