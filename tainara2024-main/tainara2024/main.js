const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");
console.log(botoes)
for (let i=0; i <  botoes.length; i++) {
    console.log(i);
}
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) { 
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
            
        }  
        botoes[i].classList.add("ativo");
        textos[I].classList.add("ativo");
}
}
    const contadores = document.querySelectorAll(".contador");
    const tempoobjetivo1 = new Date("2023-10-05t00:00:00");
    const tempoobjetivo2 = new Date("20023-12-05t00:00:00")
    const tempoobjetivo3 = new date("2023-12-30t00:00:00")
    const tempoobjetivo4 = new date("2024-02-01t00:00:00")
    const tempos =[tempoobjetivo1,tempoobjetivo2,tempoobjetivo3,tempoobjetivo4];
    contadores[0].textContent = tempoObjetivo1 - tempoAtual;
    contadores[1].textContent = tempoObjetivo2 - tempoAtual;
    contadores[2].textContent = tempoObjetivo3 - tempoAtual;             
    contadores[3].textContent = tempoObjetivo4 - tempoAtual;

    let tempoatual = new Date();
let tempofinal = tempoobjetivo - tempoatual;
let segundos = math.floor(tempofinal / 1000);
let minutos = math.floor(segundos / 60);
let horas = math.floor(minutos / 60);
let dias = math.flor(horas / 24);
segundos %= 60;
minutos %=60;
horas %= 24; 
return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";


