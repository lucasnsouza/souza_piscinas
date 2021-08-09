//pegar estações do ano com javascript
const data = new Date();
let dia = data.getDate();
let mes = new Intl.DateTimeFormat('pt-br', { month: 'long'}).format(data);
let ano = new Date().getFullYear();
console.log(ano);

let dayAndMonth = `${dia} de ${mes}`;

console.log(dayAndMonth);

const mesesDoAno = {
    janeiro: {
        dias: 31,
        estacaoDoAno: 'Verão',
    },
    fevereiro: {
        dias: descobrirDiasFevereiro(),
        estacaoDoAno: 'Verão',
    },
    marco: {
        dias: 31,
        estacaoDoAno: estacaoMarco(),
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
        estacaoDoAno: estacaoJunho(),
    }

}

function descobrirDiasFevereiro() {
     if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
         return 29;
     } else {
         return 28;
     }
}

function estacaoMarco() {
    if (mesesDoAno.marco.dias >= 20) {
        return 'Outono';
    } else {
        return 'Verão';
    }
}

function estacaoJunho() {
    if (mesesDoAno.junho.dias >= 20) {
        return 'Inverno';
    } else {
        return 'Outono';
    }
}

console.log(mesesDoAno);