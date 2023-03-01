const listaDeTeclas = document.querySelectorAll('.tecla');


function tocaSom(seletorTagAudio) {
    const elemento = document.querySelector(seletorTagAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.error('Elemento ou seletor invalido não encontrado');
    }
}

for (let count = 0; count < listaDeTeclas.length; count++) {

    const tecla = listaDeTeclas[count];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
    
}