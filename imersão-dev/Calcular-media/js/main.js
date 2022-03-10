function Calcular(){

    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);
    const n4 = parseFloat(document.getElementById("nota4").value);
    const resultado = document.getElementById("resultado");

    let mediaSoma = (n1 + n2 + n3 + n4)/4;

    if (n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10 || n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) {
        resultado.innerHTML = "Escreva um valor entre 0 e 10";
    }else if(mediaSoma >= 7){
        resultado.innerHTML = "Sua media foi: " + mediaSoma.toFixed(2) + " Você está aprovado!";
    }else if (mediaSoma >=5 && mediaSoma <= 7){
        resultado.innerHTML = "Sua media foi: " + mediaSoma.toFixed(2) + " Você está de exame";
    }else{
        resultado.innerHTML = "Sua media foi: " + mediaSoma.toFixed(2) + " Você está reprovado";
    }

}

function Zerar(){

    resultado.innerHTML = "";
    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
    nota4.value = "";

}