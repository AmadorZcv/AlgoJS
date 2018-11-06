//Entrando com o numero de 1s iremos retornar o resultado da soma e a quantidade de 1s que carregam
function sum1s(N) {
  //O resto da divisão por 2 nos diz se o resultado é 1 ou 0
  const result = N % 2;
  //O resultado inteiro da divisão nos retorna quantos 1 vão subir
  const carry = Math.trunc(N / 2);
  return { result, carry };
}
//Crescente pelo tamanho da string
function sort(a, b) {
  return b.length - a.length;
}
function equalStrings(nums) {
  //Converter o array de numeros para strings
  let strings = nums.map(num => String(num));
  strings.sort(sort);
  //Adicionar 0 até as strings ficarem de tamanho igual
  strings = strings.map(string => string.padStart(strings[0].length, "0"))
  return strings;
}
//Gerar Strings para multiplicar
function generateStrings(num1, num2) {
  const strings = [];
  //Reverter a string que vai multiplicar
  num1 = num1.split("")
    .reverse()
    .join("");
  //Percorrer o numero 1(O que vai multiplicar)
  for (let index = 0; index < num1.length; index++) {
    const element = num1.charAt(index);
    //Se for 1 devemos criar uma nova string com 0s no fim
    if (element === "1") {
      const newString = num2.padEnd(num2.length + index, "0");
      strings.push(newString);
    }
  }
  return strings;
}
//Multiplicar 2 numeros binários
function productBinary(num1, num2) {
  const strings = generateStrings(String(num1), String(num2));
  return sumBinary(strings);
}

function sumBinary(nums) {
  //Igualar o tamanho das strings para facilitar os calculos
  const strings = equalStrings(nums);
  //Começar os numeros "carregados" em 0
  let outerCarry = 0;
  //Inicializar String de resultado
  let resultFinal = "";
  //Loop ao contrario devido a natureza da soma
  for (let index = strings[0].length - 1; index >= 0; index--) {
    let N = 0;
    //Contar 1s naquela posição
    strings.forEach(string => {
      if (string.charAt(index) === "1") {
        N++;
      }
    });
    const { result, carry } = sum1s(N + outerCarry);
    resultFinal = resultFinal + result;
    outerCarry = carry;
  }
  //Em caso  de ainda restar algo para somar,devemos continuar
  while (outerCarry != 0) {
    const { result, carry } = sum1s(outerCarry);
    resultFinal = resultFinal + result;
    outerCarry = carry;
  }
  //Reverter a String
  return resultFinal
    .split("")
    .reverse()
    .join("");
}
//Função para converter para binário
function decimalToBin(decimal) {
  return parseInt(decimal, 10).toString(2);
}
function binToDecimal(bin) {
  return parseInt(bin, 2);
}
//Valores dos inputs base
let input1 = 0;
let input2 = 0;
//Valores binarios dos inputs
let input1BinValue = 0;
let input2BinValue = 0;
//Valor da soma e do produto
let sum = 0;
let product = 0;
//Valor binario da soma e do produto
let sumBin = 0;
let productBin = 0;
//Documentos do input1
let input1Doc = document.getElementById("input1");
input1Doc.value = input1;
//Doc input bin1
let input1Bin = document.getElementById("input1Bin");
input1Bin.value = input2BinValue;
//Doc das somas e da multiplicações
let sumBinDoc = document.getElementById("sumBin");
sumBin.value = sumBin;
let sumDoc = document.getElementById("sum");
sum.value = sum;
let productBinDoc = document.getElementById("productBin");
productBin.value = productBin;
let productDoc = document.getElementById("product");
product.value = product;
//Função que lida com o input do usuario e realiza os calculos a cada mudança
function input1Change() {
  const value = input1Doc.value;
  input1BinValue = decimalToBin(value);
  input1Bin.value = input1BinValue;
  sumBin = sumBinary([input1BinValue, input2BinValue]);
  sumBinDoc.value = sumBin;
  sum = binToDecimal(sumBin);
  sumDoc.value = sum;
  productBin = productBinary(input1BinValue, input2BinValue);
  productBinDoc.value = productBin;
  product = binToDecimal(productBin);
  productDoc.value = product;
}
// -------------
let input2Doc = document.getElementById("input2");
input2Doc.value = input2;
let input2Bin = document.getElementById("input2Bin");
input2Bin.value = input2BinValue;
function input2Change() {
  const value = input2Doc.value;
  input2BinValue = decimalToBin(value);
  input2Bin.value = input2BinValue;
  sumBin = sumBinary([input1BinValue, input2BinValue]);
  sumBinDoc.value = sumBin;
  sum = binToDecimal(sumBin);
  sumDoc.value = sum;
  productBin = productBinary(input1BinValue, input2BinValue);
  productBinDoc.value = productBin;
  product = binToDecimal(productBin);
  productDoc.value = product;
}
