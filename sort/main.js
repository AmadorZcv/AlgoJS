
function calculateHoraDeFim(qtd, duraçãoHora) {
    const duração = qtd * duraçãoHora;
    const restoHoras = duração % 24;
    const dias = Math.trunc(duração / 24);
    return { dias, horaFinal: restoHoras }
}
//Valores dos inputs base
let episodio = 0;
let qtd = 0;
let horario = 0;
//Documentos do episodio
let episodioDoc = document.getElementById("episodio");
episodioDoc.value = episodio;
//Documentos do qtd
let qtdDoc = document.getElementById("qtd");
qtdDoc.value = qtd;
//Documentos do horario
let resultadoDoc = document.getElementById("resultado");
//Documentos dos dias
let dia1Doc = document.getElementById("dia1");
let dia2Doc = document.getElementById("dia2");
let resultadoDiaDoc = document.getElementById("resultadoDia");
function onEpisodioChange() {
    const duração = episodioDoc.value;
    const qtd = qtdDoc.value;
    const { dias, horaFinal } = calculateHoraDeFim(qtd, duração);
    resultadoDoc.value = `Se passaram ${dias} dias e a hora final vai ser ${horaFinal}`
}
function onQtdChange() {
    const duração = episodioDoc.value;
    const qtd = qtdDoc.value;
    const { dias, horaFinal } = calculateHoraDeFim(qtd, duração);
    resultadoDoc.value = `Se passaram ${dias} dias e a hora final vai ser ${horaFinal} horas depois do inicio`
}
function stringToDiaValue(dia) {
    const diaUpper = dia.toUpperCase();
    switch (diaUpper) {
        case "DOMINGO":
            return 0;
        case "SEGUNDA":
            return 1;
        case "TERÇA":
            return 2;
        case "QUARTA":
            return 3;
        case "QUINTA":
            return 4;
        case "SEXTA":
            return 5;
        case "SABADO":
            return 6;
        default:
            return null;
    }
}
function diaValueToString(dia) {
    switch (dia) {
        case 0:
            return "domingo";
        case 1:
            return "segunda";
        case 2:
            return "terça";
        case 3:
            return "quarta";
        case 4:
            return "quinta";
        case 5:
            return "sexta";
        case 6:
            return "sabado";
        default:
            return null;
    }
}
function onDia1Change() {
    const dia1Value = stringToDiaValue(dia1Doc.value);
    const dia2Value = stringToDiaValue(dia2Doc.value);
    const resultado = diaValueToString((dia1Value + dia2Value) % 7);
    console.log(resultado)
    if (resultado !== null) {
        resultadoDiaDoc.value = resultado;
    }
}
function onDia2Change() {
    const dia1Value = stringToDiaValue(dia1Doc.value);
    const dia2Value = stringToDiaValue(dia2Doc.value);
    const resultado = diaValueToString((dia1Value + dia2Value) % 7);
    console.log(resultado);
    if (resultado !== null) {
        resultadoDiaDoc.value = resultado;
    }
}



