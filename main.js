/* VARIÁVEIS GLOBAIS */

let desafio;
let resposta;
let diaDesafio;
let resolucao;
let erro;
let tentativas;

/* CONFIG GERAL */

function configGame(){

tentativas = 3;
document.getElementById('tentativas').innerHTML = 3;
erro = 1;
}

/* CONFIG DATA */

let today = new Date();

let options ={
    year: "numeric",
    month: "numeric",
    day: "numeric"
};

today = today.toLocaleDateString("en", options);
//today = "7/28/2022";

/* CONFIG DATABASE */

d3.csv("./desafios.csv", function(data){

    /* LOOP DESAFIOS */
    
    for(var i = 0; i < data.length; i++){
        desafio = data[i].Desafio;
        diaDesafio = data[i].Data;
        resposta = data[i].Resposta;
        resolucao = data[i].Resolve;

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
        document.getElementById('resolucao-resposta').innerHTML = resolucao;
        document.getElementById('resolucao').style.display = 'block';
        document.getElementById('resposta-box').style.display = 'none';
        document.getElementById('tentativa-box').style.display = 'none';

        if(erro == Number(1)){
            document.getElementById('qtd-tentativas').innerHTML = `de primeira`;
        }

    }else{

        

        if(tentativas < 2){
            document.getElementById('resposta').innerHTML = resposta;

            document.getElementById('errou').style.display = 'block';
            document.getElementById('resposta-final').style.display = 'block';
            document.getElementById('resolucao-resposta').innerHTML = resolucao;
            document.getElementById('resolucao').style.display = 'block';
            document.getElementById('tentativas').innerHTML = document.getElementById('tentativas').textContent = 0;
            document.getElementById('resposta-box').style.display = 'none';
            document.getElementById('tentativa-box').style.display = 'none';
        }else{
            tentativas--;
            document.getElementById('lamp'+erro).style.display = 'none';
            erro++;

            document.getElementById('tentativas').innerHTML = document.getElementById('tentativas').textContent = tentativas;
        }
    }
}

function shareAcertou(){
    let copyText = "Eu acertei o desafio de hoje! Tente você também: " + document.URL;
	
        insertShare = "<br><p><b>Copiado para o seu ctrl+c.<br>É só colar no WhatsApp e enviar para seus amigos!</b></p><br><p>" + copyText + "</p>";
        navigator.clipboard.writeText(copyText);
        document.getElementById('share-clicked').style.display = 'block';
        document.getElementById('share-clicked').insertAdjacentHTML('beforeend', insertShare);
}

function shareErrou(){
    let copyText = "O desafio de hoje foi difícil! Tente você também: " + document.URL;
	
        insertShare = "<br><p><b>Copiado para o seu ctrl+c.<br>É só colar no WhatsApp e enviar para seus amigos!</b></p><br><p>" + copyText + "</p>";
        navigator.clipboard.writeText(copyText);
        document.getElementById('share-errou').style.display = 'block';
        document.getElementById('share-errou').insertAdjacentHTML('beforeend', insertShare);
}

function showInfo(){

    document.getElementById('como-funciona').style.display = 'block';

}

function hideInfo(){
    document.getElementById('como-funciona').style.display = 'none';
}