
function inserir(simbolo){
    var visor = document.getElementById("visor"); // getElementById pegar o ID da tag visor
    visor.value = visor.value + simbolo;
}

function limpar(){
    var visor = document.getElementById("visor"); 
    visor.value = "";
}

function calcular(){
    var visor = document.getElementById("visor");
    if(visor.value.length > 0){
        visor.value = eval(visor.value) // a função eval é para calcular.
    } 
}