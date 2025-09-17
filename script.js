'use strict'; //Ajuda a evitar erros comuns no JavaScript

const inputNome = document.getElementById('nome');
//Campo de texto do nome
const inputAno = document.getElementById('ano');
//Campo de numerico do ano
const botaoCalcular = document.getElementById('btn-calcular');
//Botão para calcular a idade
const resultado = document.getElementById('resultado');
//paragrafop onde aparece o resultado 

//descobrir o ano atual
const anoAtual = new Date().getFullYear();

//ler o que  usuario colocou
botaoCalcular.addEventListener('click', () => {
    const nome = inputNome.value.trim(); //.trim tira os espaços do começo e do fim
    const anoNascStr = inputAno.value.trim();
    const anoNasc = Number(anoNascStr);
    const anoValido = Number.isInteger(anoNasc) && anoNasc >= 1900 && anoNasc <= anoAtual;

    if(!anoValido) {
        resultado .textContent = 'Por favor, coloque um ano valido';
        return; //sai da função sem continuar
    }

    const idade = anoAtual - anoNasc;
    resultado.textContent = `${nome}, você tem ${idade} anos.`;
}) 


