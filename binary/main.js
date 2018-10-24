let input1 = 0;
let input2 = 0;
let input1BinValue = 0;
let input2BinValue = 0;
let input1Doc = document.getElementById("input1");
input1Doc.value = input1;
let input1Bin = document.getElementById("input1Bin");
input1Bin.value = input1;
function input1Change() {
  const value = input1Doc.value;
  input1Bin.value = decimalToBin(value);
}

function decimalToBin(decimal) {
  return parseInt(decimal, 10).toString(2);
}
