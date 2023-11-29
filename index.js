let resultado = calcularRankeada(200, 0)


function calcularRankeada(vitoria, derrota) {
    let diferenca = vitoria - derrota 
    return diferenca
}

console.log(resultado)

let ranking = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Diamante" , "Lendário" , "Imortal"]
let nivelHeroiIndex;

if (resultado <= 10) {
  nivelHeroiIndex = 0;
} else if(resultado >= 11 && resultado <= 20) {
  nivelHeroiIndex = 1;
} else if(resultado >= 21 && resultado <= 50) {
    nivelHeroiIndex = 2;
} else if(resultado >= 51 && resultado <= 80) {
  nivelHeroiIndex = 3;
} else if(resultado >= 81 && resultado <= 90) {
  nivelHeroiIndex = 4;
}else if(resultado >= 101) {
  nivelHeroiIndex = 6;
}

console.log("O Herói tem saldo de " + resultado + " E está no nível " + ranking[nivelHeroiIndex])