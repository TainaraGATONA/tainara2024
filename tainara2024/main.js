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
            const contadores = document.querySelectorAll(".contador");
            const tempoobjetivo1 = new Date("2024-10-05t00:00:00");
            contadores[0].textcontent = calculatempo(tempoobjetivo1);
            contadores[0].textcontent = tempoobjetivo1;
            let tempoatual = new Date();
            contadores[0].textcontent = tempoobjetivo1 - tempoatual;
        }  
        botoes[i].classList.add("ativo");
        textos[I].classList.add("ativo")  
}}
