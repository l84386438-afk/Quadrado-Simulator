let quadrado = document.getElementById("quadrado");
let posicaoY = +quadrado.style.marginTop.replace("%", "");
let posicaoXp = +quadrado.style.marginRight.replace("%", "");
let posicaoXn = +quadrado.style.marginLeft.replace("%", "");
let pontos = 0
function mover(direcao) {
    if (direcao == 1) {
        quadrado.style.marginTop = ((posicaoY -= 1).toString(10)).concat("%");
        pontos += 1;
    } else if (direcao == 2) {
        quadrado.style.marginRight = ((posicaoXp += 1).toString(10)).concat("%");
        pontos += 1;
    } else if (direcao == 3) {
        quadrado.style.marginLeft = ((posicaoXn += 1).toString(10)).concat("%");
        pontos += 1;
    } else if (direcao == 4) {
        quadrado.style.marginTop = ((posicaoY += 1).toString(10)).concat("%");
        pontos += 1;
    }
}