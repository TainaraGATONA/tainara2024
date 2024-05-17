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
    const tempoObjetivo1 = new Date("2020-10-05t00:00:00");
    const tempoObjetivo2 = new Date("20023-12-05t00:00:00");
    const tempoObjetivo3 = new Date("2023-12-30t00:00:00");
    const tempoObjetivo4 = new Date("2024-02-01t00:00:00");
    const tempos =[tempoobjetivo1,tempoobjetivo2,tempoobjetivo3,tempoobjetivo4];

function calculatempo(tempoobjetivo) {
let tempoatual = new Date();
let tempofinal = tempoObjetivo - tempoatual;
let segundos = Math.floor(tempofinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.flor(horas / 24);
segundos %= 60;
minutos %=60;
horas %= 24;
if (tempoFinal > 0){
return [dias,horas,minutos,segundos];
} else {
return [0,0,0,0];
}
}
function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[1])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[1])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[1])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[1])[3];
    for (let i=0; i<contadores.length;i++){
   // contadores[i].textContent = calculaTempo(tempos[i]);
    }
    }
    function comecaCronometro(){
        atualizaCronometro();
        setInterval(atualizaCronometro,1000); }
        comecaCronometro();  
 