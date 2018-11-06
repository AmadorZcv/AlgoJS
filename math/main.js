function checkDivisores(num) {
    const divisores = [];
    let divisor = num - 1;
    while (divisor > 1) {
        if (num % divisor === 0) {
            divisores.push(divisor)
        }
        divisor--;
    }
    return divisores;
}
function isPerfeito(divisores, num) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const soma = divisores.reduce(reducer);
    console.log("Soma é", soma);
    console.log("Num é", num);
    if (soma + 1 == num) {
        return true;
    }
    return false;
}
//Valores dos inputs base
let input1 = 0;
let input2 = 0;
//Valores binarios dos inputs
let input1BinValue = 0;
let input2BinValue = 0;
//Valor da soma e do produto
let sum = "Não";
let product = "Não";
//Documentos do input1
let input1Doc = document.getElementById("input1");
input1Doc.value = input1;
//Doc das somas e da multiplicações
let sumDoc = document.getElementById("sum");
sum.value = sum;
let productDoc = document.getElementById("product");
product.value = product;
//Função que lida com o input do usuario e realiza os calculos a cada mudança
function input1Change() {
    const values = input1Doc.value.split(",");
    const primos = [];
    const perfeitos = [];
    values.forEach(value => {
        const divisores = checkDivisores(value);
        if (divisores.length === 0) {
            primos.push(value);
        } else {
            if (isPerfeito(divisores, value)) {
                perfeitos.push(value)
            }
        }
    });
    sumDoc.value = primos.join(", ");
    productDoc.value = perfeitos.join(", ")
    /* const divisores = checkDivisores(value);
    console.log("Divisores é",divisores)
    if (divisores.length===0) {
        sumDoc.value="Sim"
        productDoc.value="Não"
    }else{
        sumDoc.value="Não"
        if (isPerfeito(divisores,value)) {
            productDoc.value="Sim";
        }else{
            productDoc.value="Não"
        }
    } */
}
/*   // -------------
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
  } */
