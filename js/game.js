// Variáveis principais do jogo
let respostaCorreta;
let pontuacao 0; 
let nodoAtual "basico";

// Função que inicia o jogo com o modo escolhido
function IniciarJogo(modo) { 
    modoAtual modo; 
    document.getElementById("area-jogo").style.display="block"; 
    novaPergunta();
}

// Função que gera nova pergunta e mostra na tela
function novaPergunta() {
const numeros gerariumeros (modontual); const operacao escolherOperacao();
const perguntaTexto $(numeros.num1) $(operacao) $(numeros.num2)";
respostaCorreta calcularResposta (numeros.num1, numeros, num2, operacao);
document.getElementById("pergunta").innerText perguntaTexto: document.getElementById("resposta").value = "";
document.getElementById("resultado").innerText = "";
}
// Gera números aleatórios, maiores no modo desafio function gerartiumeros (modo) { let num let num2 Math.floor(Math.random() Math.floor(Math.random() 10) + 1; 10) + 1;
if (modo num1 22 num2 = 3; 'desafio') { }
return (numi, num2);
}
// Escolhe aleatoriamente uma operação: +, ou function escolherOperacao() {
const operacoes['+',',1 return operacoes [Math.floor(Math.random() operacoes.length)];
// Calcula o resultado com base nos números e operação function calcularResposta (n1, n2, op) ( switch (op) case '+': return n1 + n2; case: return nin2; case: return ni 12;