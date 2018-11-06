function calculateDuraçãoSérie(qtd, duraçãoMin) {
    return qtd * duraçãoMin;
}
function horaParaMinuto(hora) {
    return hora * 60;
}
function minutosToHora(minutos) {
    const horasInteiras = Math.trunc(minutos);
    const horaQuebrada = (minutos - horasInteiras * 60) / 60;
    return horasInteiras + horaQuebrada;
}

function horaParaDias(horas) {
    const horasNew = Math.trunc(horas / 24);
    const minutos = horaParaMinuto((horas / 24) - horasNew);
    return horas + minutosToHora(minutos);
}
function diasParaHora(dias) {
    return dias * 24;
}
function horasExcedentesParaHoraFinal(numHoras, horaInicio) {
    const horas = horaInicio + numHoras;
    if (horas > 24) {
        return { dias: 1, totalHoras: horas - 24 }
    }
    return { dias: 0, totalHoras: horas };
}
function calculateHoraDeFim(qtd, duraçãoMin, horaInicio) {
    const duraçãoHora = minutosToHora(calculateDuraçãoSérie(qtd, duraçãoMin));
    const horaInicioSPlit = parseInt(horaInicio.split(":")[0]);
    const minutosInicioSplit = parseInt(horaInicio.split(":")[1]);
    const horasInicio = horaInicioSPlit + minutosToHora(minutosInicioSplit);
    console.log("HorasInicio é", horasInicio);
    //////////////////////
    const duraçãoDias = horaParaDias(duraçãoHora + horasInicio);
    let numDias = Math.trunc(duraçãoDias);
    const numHoras = diasParaHora(duraçãoDias - numDias);
    console.log("DUraçãoHora é", duraçãoDias);
    console.log("Num dias é",numDias);
    const { dias, totalHoras } = horasExcedentesParaHoraFinal(numHoras, horasInicio);
    numDias = numDias + dias;
    const horaFinalString = `${Math.trunc(totalHoras)}:${horaParaMinuto(totalHoras - Math.trunc(totalHoras))}`
    console.log("Hora final é", horaFinalString)
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
let horarioDoc = document.getElementById("horario");
horarioDoc.value = horario;


