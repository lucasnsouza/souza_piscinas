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
    if (estacaoDoAno == 'Inverno') {
        console.log('frio');
    } else if (estacaoDoAno == 'Primavera') {
        console.log('flores')
    } else if (estacaoDoAno == 'Verão') {
        console.log('calor')
    } else if (estacaoDoAno == 'Outono') {
        console.log('chuva')
    }
}

mensagemDaEstacao();