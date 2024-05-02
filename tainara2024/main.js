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
   
    contadores[0].textcontent = calculatempo(tempoobjetivo1);
    contadores[0].textcontent = tempoobjetivo1 - tempoatual;
                  
function calculatempo(tempoobjetivo) {
let tempoatual = new Date();
let tempofinal = tempoobjetivo - tempoatual;
let segundos = math.floor(tempofinal / 1000);
let minutos = math.floor(segundos / 60);
let horas = math.floor(minutos / 60);
let dias = math.flor(horas / 24);
return dias;
}