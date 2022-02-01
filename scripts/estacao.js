//pegar estações do ano com javascript
const data = new Date();
let dia = data.getDate();
let mes = new Intl.DateTimeFormat('pt-br', { month: 'long'}).format(data);
let ano = new Date().getFullYear();

const mesesDoAno = {
    janeiro: {
        dias: 31,
        estacaoDoAno: 'Verão',
    },
    fevereiro: {
        dias: '',
        estacaoDoAno: 'Verão',
        get descobrirDiasFevereiro() {
            let ano = new Date().getFullYear();
            if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
                return this.dias =  29;
            } else {
                return this.dias = 28;
            }
        }
    },
    marco: {
        dias: 31,
        estacaoDoAno: '',
        get estacaoMarco() {
            let dia = data.getDate();
            if (dia >= 20) {
                return this.estacaoDoAno = 'Outono';
            } else {
                return 'Verão';
            }
         }
    },
    abril: {
        dias: 30,
        estacaoDoAno: 'Outono',
    },
    maio: {
        dias: 31,
        estacaoDoAno: 'Outono',
    },
    junho: {
        dias: 30,
        estacaoDoAno: '',
        get estacaoJunho() {
            let dia = data.getDate();
            if (dia >= 20) {
                return this.estacaoDoAno = 'Inverno';
            } else {
                return this.estacaoDoAno = 'Outono';
            }
         }
    },
    julho: {
        dias: 31,
        estacaoDoAno: 'Inverno',
    },
    agosto: {
        dias: 31,
        estacaoDoAno: 'Inverno',
    },
    setembro: {
        dias: 30,
        estacaoDoAno: '',
        get estacaoSetembro () {
            let dia = data.getDate();
            if ( dia >= 22) {
                return this.estacaoDoAno = 'Primavera';
            } else {
                return this.estacaoDoAno = 'Inverno';
            }
        }
    },
    outubro: {
        dias: 31,
        estacaoDoAno: 'Primavera',
    },
    novembro: {
        dias: 31,
        estacaoDoAno: 'Primavera',
    },
    dezembro: {
        dias: 31,
        estacaoDoAno: '',
        get estacaoDezembro () {
            let dia = data.getDate();
            if ( dia >= 21) {
                return this.estacaoDoAno = 'Verão';
            } else {
                return this.estacaoDoAno = 'Primavera';
            }
        }
    },
}

//pega estação do ano usando a variável de referência mes
let estacaoDoAno = '';
switch (mes) {
    case 'janeiro':
        estacaoDoAno = mesesDoAno.janeiro.estacaoDoAno;
        break;
    case 'fevereiro':
        estacaoDoAno = mesesDoAno.fevereiro.estacaoDoAno;
        break;
    case 'março':
        estacaoDoAno = mesesDoAno.marco.estacaoMarco;
        break;
    case 'abril':
        estacaoDoAno = mesesDoAno.abril.estacaoDoAno;
        break;
    case 'maio' :
        estacaoDoAno = mesesDoAno.maio.estacaoDoAno;
        break;
    case 'junho':
        estacaoDoAno = mesesDoAno.junho.estacaoJunho;
        break;
    case 'julho':
        estacaoDoAno = mesesDoAno.julho.estacaoJunho;
        break;
    case 'agosto':        
        estacaoDoAno = mesesDoAno.agosto.estacaoDoAno;
        break;
    case 'setembro':
        estacaoDoAno = mesesDoAno.setembro.estacaoSetembro;
        break;
    case 'outubro':
        estacaoDoAno = mesesDoAno.outubro.estacaoDoAno;
        break;
    case 'novembro':
        estacaoDoAno = mesesDoAno.novembro.estacaoJunho;
        break;         
    case 'dezembro':
        estacaoDoAno = mesesDoAno.dezembro.estacaoDezembro;
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
        mensagemEstacao.innerHTML = 'Estamos na primavera. O que acha de deixar sua piscina pronta para o calor e evitar dor de cabeça na hora da diversão?';
    } else if (estacaoDoAno == 'Verão') {
        mensagemEstacao.innerHTML = 'O Verão chegou! Saiba como aproveitar ao máximo a sua piscina.';
    } else if (estacaoDoAno == 'Outono') {
        mensagemEstacao.innerHTML = 'Já é Outono! Saiba como aproveitar os últimos dias de calor e deixar sua piscina brilhando.';
    }
}

mensagemDaEstacao();