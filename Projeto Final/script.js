let quadrado = document.getElementById("quadrado");
let posicaoY = +quadrado.style.marginTop.replace("%", "");
let posicaoX = +quadrado.style.marginRight.replace("%", "");
function mover(direcao) {
    if (direcao == 1) {
        quadrado.style.marginTop = ((posicaoY -= 2).toString(10)).concat("%");
    } else if (direcao == 2) {
        quadrado.style.marginLeft = ((posicaoX -= 2).toString(10)).concat("%");
    } else if (direcao == 3) {
        quadrado.style.marginLeft = ((posicaoX += 2).toString(10)).concat("%");
    } else if (direcao == 4) {
        quadrado.style.marginTop = ((posicaoY += 2).toString(10)).concat("%");
    }
}

function comecar() {
    window.location.href = "jogo.html"
}

function MudarCor(cor) {
    quadrado.style.background = cor;
}

function CorCustomizada() {
    let ccor = prompt("Cor Customizada: ");
    MudarCor(ccor);
}

function Jogos() {
    let jogo = prompt("URL do Jogo para Quadrado Simulator: ");
    document.documentElement.appendChild(document.createElement("script")).src = jogo;
}

function degrade1() {
    quadrado.style.background =
        "linear-gradient(45deg, red, blue)";
}

function degrade2() {
    quadrado.style.background =
        "linear-gradient(90deg, yellow, purple)";
}

function degrade3() {
    quadrado.style.background =
        "linear-gradient(135deg, cyan, magenta)";
}

function degrade4() {
    quadrado.style.background =
        "linear-gradient(135deg, fuchsia, orange)";
}

window.onkeydown = function(letra) {
    if (letra.code == "KeyW") {
        mover(1)
    } else if (letra.code == "KeyS") {
        mover(4)
    } else if (letra.code == "KeyA") {
        mover(2)
    } else if (letra.code == "KeyD") {
        mover(3)
    }
}