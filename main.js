/* VARIÁVEIS GLOBAIS */

let desafio;
let resposta;
let diaDesafio;

/* CONFIG GERAL */

function configGame(){

let tentativas = 3;
document.getElementById('tentativas').innerHTML = tentativas;
}

/* CONFIG DATA */

var today = new Date();

var options ={
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
};

//today = today.toLocaleDateString("en", options);
today = "07/27/2022";

/* CONFIG DATABASE */

d3.csv("./desafios.csv", function(data){

    /* LOOP DESAFIOS */
    
    for(var i = 0; i < data.length; i++){
        desafio = data[i].Desafio;
        diaDesafio = data[i].Data;
        resposta = data[i].Resposta;

        if(diaDesafio == today){
            
            document.getElementById('desafio').insertAdjacentHTML('beforeend', desafio);

            break

        }
    }

});

/* TESTA A RESPOSTA */

function enviaResposta(){
    let palpite = document.getElementById('respostaInserir');
    if(Number(palpite.value) == Number(resposta)){
        document.getElementById('resposta').innerHTML = resposta;

        document.getElementById('acertou').style.display = 'block';
        document.getElementById('resposta-final').style.display = 'block';
    }else{
        document.getElementById('resposta').innerHTML = resposta;

        document.getElementById('errou').style.display = 'block';
        document.getElementById('resposta-final').style.display = 'block';
    }
}
