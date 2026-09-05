const brancosInput = document.getElementById('div__input--brancos');
const nulosInput = document.getElementById('div__input--nulos');
const validosInput = document.getElementById('div__input--validos');
const resultadoInput = document.getElementById('div__p--resultado');

let total, brancos, nulos, validos, mensagem, mensagemPadrao;

mensagemPadrao = `Os percentuais de votos brancos, nulos e válidos aparecerão aqui`;
main();

brancosInput.addEventListener('input', main);
nulosInput.addEventListener('input', main);
validosInput.addEventListener('input', main);

function main()
{
    updateValuesAndMessage();
    writeResult();
}

function writeResult()
{
    resultadoInput.textContent = mensagem;
}

function calculate()
{
    total = brancos + nulos + validos;
    brancos = brancos/total *100;
    nulos = nulos/total *100;
    validos = validos/total *100;
}

function updateValuesAndMessage()
{
    brancos = parseInt(brancosInput.value);
    nulos = parseInt(nulosInput.value);
    validos = parseInt(validosInput.value);

    if ( !Number.isNaN(brancos+nulos+validos) )
    {
        calculate();
        resultadoInput.style.color = "#000";
        mensagem = `Em relação ao total de votos, os percentuais são: brancos – ${brancos.toFixed(2)}%, nulos – ${nulos.toFixed(2)}% e válidos – ${validos.toFixed(2)}%.`;
    }
    else
    {
        resultadoInput.style.color = "#0003";
        mensagem = mensagemPadrao;
    }
}