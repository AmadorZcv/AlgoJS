
function calculateHoraDeFim(qtd, duraçãoHora) {
    const duração = qtd * duraçãoHora;
    const restoHoras = duração%24;
    const dias = Math.trunc(duração/24);
    return {dias,horaFinal:restoHoras}
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
function onEpisodioChange() {
    const duração = episodioDoc.value;
    const qtd =qtdDoc.value;
    const{dias,horaFinal}=calculateHoraDeFim(qtd,duração);
    resultadoDoc.value=`Se passaram ${dias} dias e a hora final vai ser ${horaFinal}`
}
function onQtdChange() {
    const duração = episodioDoc.value;
    const qtd =qtdDoc.value;
    const{dias,horaFinal}=calculateHoraDeFim(qtd,duração);
    resultadoDoc.value=`Se passaram ${dias} dias e a hora final vai ser ${horaFinal} horas depois do inicio`
}



