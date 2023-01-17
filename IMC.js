
// variavel global//
const calcular = document.getElementById("calcular")




function imc() {

    //variaveis usadas na funcao imc//
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");


    //funcao//
    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = "";

        //condicoes para classificão//
        if (valorIMC < 18.5) {
            classificacao = "Você está abaixo do peso!";

        } else if (valorIMC < 25) {

            classificacao = "Você está no peso ideal!";
        } else if (valorIMC < 30) {
            classificacao = "Você está um pouco acima do peso!";

        } else if (valorIMC < 35) {
            classificacao = "Você está com obesidade grau I!!";

        } else if (valorIMC < 40) {
            classificacao = "Você está com obesidade grau II!";
        } else {
            classificacao = "Você está muito acima do peso,procure ajuda profissional!";
        }

        // templante string //

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e ${classificacao}`;

    } else {


        resultado.textContent = "Preencha todos os campos !!"
    }



}


// botao calcular , chama a funcao e add evento click ao botao//

calcular.addEventListener("click", imc);