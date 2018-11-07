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
    if (soma + 1 == num) {
        return true;
    }
    return false;
}
function calculatePosição(hash, value, increment) {
    if (hash.some(element => element === null)) {
        const tamanho = hash.length;
        const newValue = parseInt(value) + increment;
        let posiçãoNew = newValue % tamanho;
        if (hash[posiçãoNew] === null) {
            const newHash = hash;
            newHash[posiçãoNew] = value;
            return newHash;
        } else {
            increment++;
            return calculatePosição(hash, value, increment);
        }
    }
    return hash;
}
function buildHash(hash, values) {
    let newHash = hash.map(element => null);
    values.forEach(element => {
        newHash = calculatePosição(newHash, element, 0);
    });
    return newHash;
}
let hashArray = [];
//Valores dos inputs base
let input1 = 0;
let input2 = 0;
//Valores binarios dos inputs
let input1BinValue = 0;
let input2BinValue = 0;
//Valor da soma e do produto
let sum = "";
let product = "";
//Documentos do input1
let input1Doc = document.getElementById("input1");
input1Doc.value = input1;
let hashSizeDoc = document.getElementById("hashSize");
let hashResultDoc = document.getElementById("hash");
//Doc das somas e da multiplicações
let sumDoc = document.getElementById("sum");
let productDoc = document.getElementById("product");
//Função que lida com o input do usuario e realiza os calculos a cada mudança
function input1Change() {
    const values = input1Doc.value.split(",");
    hashResultDoc.value = buildHash(hashArray, values);
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
}

function hashSizeChange() {
    hashArray = [];
    for (let index = 0; index < hashSizeDoc.value; index++) {
        hashArray[index] = null;
    }
}

