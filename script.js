//Questao 1  

var indice = 13;
var soma = 0;
var k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
  console.log(`k: ${k}, soma: ${soma}`);
}

console.log(`Resultado final: ${soma}`);

//Questao 3
const faturamentoMensal = [1000, 2000, 1400.00, 2500.00, 5000, 3000, 2400.00]

const mediaMensal = faturamentoMensal.reduce((acc, valor) => acc + valor, 0) / faturamentoMensal.length;

const menorValor = Math.min(...faturamentoMensal);
const maiorValor = Math.max(...faturamentoMensal);
const diasAcimaDaMedia = faturamentoMensal.filter(valor => valor > mediaMensal).length;

console.log(`Menor Valor: ${menorValor}`);
console.log(`Maior Valor: ${maiorValor}`);
console.log(`Dias Acima da Media: ${diasAcimaDaMedia}`);

//Questao 4
const dadosFaturamento = {
  "faturamento": {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  }
};

const faturamentoTotal = Object.values(dadosFaturamento.faturamento).reduce((total, valor) => total + valor, 0);

const percentuais = {};
for (const estado in dadosFaturamento.faturamento) {
  const valorEstado = dadosFaturamento.faturamento[estado];
  const percentual = (valorEstado / faturamentoTotal) * 100;
  percentuais[estado] = percentual.toFixed(2); // Arredondando para duas casas decimais
}

console.log("Percentuais:");
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}%`);
}

//Questao 5
let str = "minha string"
let novaString = '';
for (let i = str.length - 1; i >= 0; i--) {
  novaString += str[i];
}
console.log(novaString);