'use strict';

// Variáveis 
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;

let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;
let totalPedido = 0.00;

// Botões
let btnPedir = document.getElementById('vendas');
let btnEstorno = document.getElementById('estornar');
let btnPlanilha = document.getElementById('export');
let btnFinalizar = document.getElementById('valorTotal');
let btnZerar = document.getElementById('zerar');

// Eventos
btnPedir.addEventListener('click', pedir, false);
btnEstorno.addEventListener('click', estornar, false);
btnPlanilha.addEventListener('click', planilha, false);
btnFinalizar.addEventListener('click', total, false);
btnZerar.addEventListener('click', zerar, false);

// Funções
function pedir(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela++;
        vendaMussarela = vendaMussarela + 32.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);

    }else if(document.getElementById('mista').checked)
    {
        somaMista++;
        vendaMista = vendaMista + 37.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);

    }else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa++;
        vendaCalabresa = vendaCalabresa + 35.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function estornar(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 32.00;

        if(somaMussarela < 0)
        {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);

    }else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 37.00;

        if(somaMista < 0)
        {
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);

    }else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa  = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 35.00;

        if(somaCalabresa < 0)
        {
            somaCalabresa = 0;
            vendaCalabresa = 0.00;
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function total(e)
{
    total = vendaMussarela * somaMussarela + vendaMista * somaMista + vendaCalabresa * somaCalabresa;
    document.getElementById('pedido').innerHTML = total.toFixed(2);
}

function zerar(e)
{
    somaMussarela = 0;
    vendaMussarela = 0.00;
    document.getElementById('resultadoMussarela').innerHTML = 0;
    document.getElementById('vendaMussarela').innerHTML = 0;

    somaMista = 0;
    vendaMista = 0.00;
    document.getElementById('resultadoMista').innerHTML = 0;
    document.getElementById('vendaMista').innerHTML = 0;

    somaCalabresa = 0;
    vendaCalabresa = 0.00;
    document.getElementById('resultadoCalabresa').innerHTML = 0;
    document.getElementById('vendaCalabresa').innerHTML = 0;

    document.getElementById('pedido').innerHTML = 0;
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}