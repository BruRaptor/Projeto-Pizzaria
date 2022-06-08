'use strict';

// Variáveis 
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let somaCalabacon = 0;
let somaCalamussa = 0;
let somaCarneSeca = 0;
let somaFrangoCatupiry = 0;
let somaBrigadeiro = 0;
let somaMm = 0;

let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;
let vendaCalabacon = 0.00;
let vendaCalamussa = 0.00;
let vendaCarneSeca = 0.00;
let vendaFrangoCatupiry = 0.00;
let vendaBrigadeiro = 0.00;
let vendaMm = 0.00;
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

    }else if(document.getElementById('calabacon').checked)
    {
        somaCalabacon++;
        vendaCalabacon = vendaCalabacon + 35.00;
        document.getElementById('resultadoCalabacon').innerHTML = somaCalabacon;
        document.getElementById('vendaCalabacon').innerHTML = vendaCalabacon.toFixed(2);

    }else if(document.getElementById('calamussa').checked)
    {
        somaCalamussa++;
        vendaCalamussa = vendaCalamussa + 35.00;
        document.getElementById('resultadoCalamussa').innerHTML = somaCalamussa;
        document.getElementById('vendaCalamussa').innerHTML = vendaCalamussa.toFixed(2);
    }else if(document.getElementById('carneSeca').checked)
    {
        somaCarneSeca++;
        vendaCarneSeca = vendaCarneSeca + 35.00;
        document.getElementById('resultadoCarneSeca').innerHTML = somaCarneSeca;
        document.getElementById('vendaCarneSeca').innerHTML = vendaCarneSeca.toFixed(2);
    }else if(document.getElementById('frangoCatupiry').checked)
    {
        somaFrangoCatupiry++;
        vendaFrangoCatupiry = vendaFrangoCatupiry + 35.00;
        document.getElementById('resultadoFrangoCatupiry').innerHTML = somaFrangoCatupiry;
        document.getElementById('vendaFrangoCatupiry').innerHTML = vendaFrangoCatupiry.toFixed(2);
    }else if(document.getElementById('brigadeiro').checked)
    {
        somaBrigadeiro++;
        vendaBrigadeiro = vendaBrigadeiro + 35.00;
        document.getElementById('resultadoBrigadeiro').innerHTML = somaBrigadeiro;
        document.getElementById('vendaBrigadeiro').innerHTML = vendaBrigadeiro.toFixed(2);
    }else if(document.getElementById('mm').checked)
    {
        somaMm++;
        vendaMm = vendaMm + 35.00;
        document.getElementById('resultadomm').innerHTML = somaMm;
        document.getElementById('vendamm').innerHTML = vendaMm.toFixed(2);
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

    }else if(document.getElementById('calabacon').checked)
    {
        somaCalabacon = somaCalabacon - 1;
        vendaCalabacon = vendaCalabacon - 35.00;
        if(somaCalabacon < 0)
        {
            somaCalabacon = 0;
            vendaCalabacon = 0.00;
        }
        document.getElementById('resultadoCalabacon').innerHTML = somaCalabacon;
        document.getElementById('vendaCalabacon').innerHTML = vendaCalabacon.toFixed(2);

    }else if(document.getElementById('calamussa').checked)
    {
        somaCalamussa = somaCalamussa - 1;
        vendaCalamussa = vendaCalamussa - 35.00;
        if(somaCalamussa < 0)
        {
            somaCalamussa = 0;
            vendaCalamussa = 0.00;
        }
        document.getElementById('resultadoCalamussa').innerHTML = somaCalamussa;
        document.getElementById('vendaCalamussa').innerHTML = vendaCalamussa.toFixed(2);

    }else if(document.getElementById('carneSeca').checked)
    {
        somaCarneSeca  = somaCarneSeca - 1;
        vendaCarneSeca = vendaCarneSeca - 35.00;
        if(somaCarneSeca < 0)
        {
            somaCarneSeca = 0;
            vendaCarneSeca = 0.00;
        }
        document.getElementById('resultadoCarneSeca').innerHTML = somaCarneSeca;
        document.getElementById('vendaCarneSeca').innerHTML = vendaCarneSeca.toFixed(2);

    }else if(document.getElementById('frangoCatupiry').checked)
    {
        somaFrangoCatupiry = somaFrangoCatupiry - 1;
        vendaFrangoCatupiry = vendaFrangoCatupiry - 35.00;
        if(somaFrangoCatupiry < 0)
        {
            somaFrangoCatupiry = 0;
            vendaFrangoCatupiry = 0.00;
        }
        document.getElementById('resultadoFrangoCatupiry').innerHTML = somaFrangoCatupiry;
        document.getElementById('vendaFrangoCatupiry').innerHTML = vendaFrangoCatupiry.toFixed(2);

    }else if(document.getElementById('brigadeiro').checked)
    {
        somaBrigadeiro  = somaBrigadeiro - 1;
        vendaBrigadeiro = vendaBrigadeiro - 35.00;
        if(somaBrigadeiro < 0)
        {
            somaBrigadeiro = 0;
            vendaBrigadeiro = 0.00;
        }
        document.getElementById('resultadoBrigadeiro').innerHTML = somaBrigadeiro;
        document.getElementById('vendaBrigadeiro').innerHTML = vendaBrigadeiro.toFixed(2);

    }else if(document.getElementById('mm').checked)
    {
        somaMm = somaMm - 1;
        vendaMm = vendaMm - 35.00;
        if(somaMm < 0)
        {
            somaMm = 0;
            vendaMm = 0.00;
        }
        document.getElementById('resultadomm').innerHTML = somaMm;
        document.getElementById('vendamm').innerHTML = vendaMm.toFixed(2);
    }
}

function total(e)
{
    total = (somaMussarela + vendaMussarela) - somaMussarela + (vendaMista + somaMista) - somaMista + (vendaCalabresa + somaCalabresa) - somaCalabresa + (vendaCalabacon + somaCalabacon) - somaCalabacon + (vendaCalamussa + somaCalamussa) - somaCalamussa + (vendaCarneSeca + somaCarneSeca) - somaCarneSeca + (vendaFrangoCatupiry + somaFrangoCatupiry) - somaFrangoCatupiry + (vendaBrigadeiro + somaBrigadeiro) - somaBrigadeiro + (vendaMm + somaMm) - somaMm;

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

    somaCalabacon = 0;
    vendaCalabacon = 0.00;
    document.getElementById('resultadoCalabacon').innerHTML = 0;
    document.getElementById('vendaCalabacon').innerHTML = 0;

    somaCalamussa = 0;
    vendaCalamussa = 0.00;
    document.getElementById('resultadoCalamussa').innerHTML = 0;
    document.getElementById('vendaCalamussa').innerHTML = 0;

    somaCarneSeca = 0;
    vendaCarneSeca = 0.00;
    document.getElementById('resultadoCarneSeca').innerHTML = 0;
    document.getElementById('vendaCarneSeca').innerHTML = 0;

    somaFrangoCatupiry = 0;
    vendaFrangoCatupiry = 0.00;
    document.getElementById('resultadoFrangoCatupiry').innerHTML = 0;
    document.getElementById('vendaFrangoCatupiry').innerHTML = 0;

    somaBrigadeiro = 0;
    vendaBrigadeiro = 0.00;
    document.getElementById('resultadoBrigadeiro').innerHTML = 0;
    document.getElementById('vendaBrigadeiro').innerHTML = 0;

    somaMm = 0;
    vendaMm = 0.00;
    document.getElementById('resultadomm').innerHTML = 0;
    document.getElementById('vendamm').innerHTML = 0;

    document.getElementById('pedido').innerHTML = 0;
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}