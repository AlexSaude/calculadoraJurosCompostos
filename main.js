document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcularBotao");
    calcularBotao.addEventListener("click", calcular);
    function calcular(){
        const taxa = parseFloat(document.getElementById("taxa").value);
        const tempo = parseFloat(document.getElementById("tempo").value); 
        const capital = parseFloat(document.getElementById("capital").value); 
        let resultado;
        
        resultado = capital * (taxa + 1) ** tempo;       
        alert("Rendimentos: R$" + Math.trunc(resultado) );
    } 
}) ;