const listaDeTeclas = document.querySelectorAll('.tecla');

let count = 0;

function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

while(count < listaDeTeclas.length) {

    const tecla = listaDeTeclas[count];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function (){
        tocaSom(idAudio);
    };
    
    count = count + 1;
}