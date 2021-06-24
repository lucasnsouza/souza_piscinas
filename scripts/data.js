//pegar estações do ano com javascript
const data = new Date();
let dia = data.getDate();
let mes = new Intl.DateTimeFormat('pt-br', { month: 'long'}).format(data);
console.log(`${dia} de ${mes}`);


//pega dia da semana, mês e ano
console.log(new Intl.DateTimeFormat('pt-br', { dateStyle: 'full'}).format(data));

//pega estação do ano usando a variável de referência mes
let estacaoDoAno = '';
switch (mes) {
    case 'dezembro':
    case 'janeiro':
    case 'fevreiro':
        estacaoDoAno = 'Verão';
        break;
    case 'março':
    case 'abril':
    case 'maio' :
        estacaoDoAno = 'Outono';
        break;
    case 'junho':
    case 'julho':
    case 'agosto':        
        estacaoDoAno = 'Inverno';
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        estacaoDoAno = 'Primavera';
        break;            

    default:
        break;
}

console.log(estacaoDoAno)

//função para devolver um texto espcífico para cada estação
function mensagemDaEstacao () {
    const mensagemEstacao = document.querySelector('#mensagem-estacao');
    if (estacaoDoAno == 'Inverno') {
        mensagemEstacao.innerHTML = 'Mesmo no Inverno sua piscina precisa de cuidados. Veja dicas para manter a sua piscina em ordem e porque mesmo sem uso ela ainda precisa de atenção.';
    } else if (estacaoDoAno == 'Primavera') {
        mensagemEstacao.innerHTML = 'Mesmo no Inverno sua piscina precisa de cuidados.';
    } else if (estacaoDoAno == 'Verão') {
        mensagemEstacao.innerHTML = 'O Verão chegou! Saiba como aproveitar ao máximo a sua piscina.';
    } else if (estacaoDoAno == 'Outono') {
        mensagemEstacao.innerHTML = 'Mesmo no Inverno sua piscina precisa de cuidados.';
    }
}

mensagemDaEstacao();