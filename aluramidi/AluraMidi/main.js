const listaDeTeclas = document.querySelectorAll('.tecla');

let count = 0;

function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

while(count < listaDeTeclas.length) {

    
    
    listaDeTeclas[count].onclick = function (){
        tocaSom();
    };
    
    count = count + 1;
    console.log(count);
}