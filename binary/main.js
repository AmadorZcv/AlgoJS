//Entrando com o numero de 1s iremos retornar o resultado da soma e a quantidade de 1s que carregam
function sum1s(N) {
  //O resto da divisão por 2 nos diz se o resultado é 1 ou 0
  const result = N % 2;
  //O resultado inteiro da divisão nos retorna quantos 1 vão subir
  const carry = Math.trunc(N / 2);
  return { result, carry };
}

function equalStrings(string1, string2) {
  //Adicionar 0 até as strings ficarem de tamanho igual
  string2 = string2.padStart(string1.length, "0");
  string1 = string1.padStart(string2.length, "0");
  return { string1, string2 };
}
function sumBinary(num1, num2) {
  //Igualar o tamanho das strings para facilitar os calculos
  const { string1, string2 } = equalStrings(String(num1), String(num2));
  //Começar os numeros "carregados" em 0
  let outerCarry = 0;
  //Inicializar String de resultado
  let resultFinal = "";
  //Loop ao contrario devido a natureza da soma
  for (let index = string1.length - 1; index >= 0; index--) {
    let N = 0;
    const char1 = string1.charAt(index);
    const char2 = string2.charAt(index);
    //Contar Numeros de 1
    if (char1 === "1") {
      N++;
    }
    if (char2 === "1") {
      N++;
    }
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
  sumBin = sumBinary(input1BinValue, input2BinValue);
  sumBinDoc.value = sumBin;
  sum = binToDecimal(sumBin);
  sumDoc.value = sum;
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
  sumBin = sumBinary(input1BinValue, input2BinValue);
  sumBinDoc.value = sumBin;
  sum = binToDecimal(sumBin);
  sumDoc.value = sum;
}
