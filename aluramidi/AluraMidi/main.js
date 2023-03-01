const listaDeTeclas = document.querySelectorAll('.tecla');

let count = 0

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}



while(count < listaDeTeclas.length) {
    listaDeTeclas[count].onclick = tocaSomPom;
    
    count = count + 1;
    console.log(count)
}