var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {
    pincel.fillStyle = document.querySelector("input").value;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 600, 400);
}

var x = 3;
var way = 1;

function atualizaTela() {
    let limitRight = tela.width - 20;
    let limitLeft = tela.offsetLeft;
    //limpaTela();
    desenhaCirculo(x + tela.offsetLeft, 20, 10);
    if (x > limitRight) {
        way = -1;
    } else if (x < limitLeft) {
        way = 1;
    }
    x = x + way;
}

setInterval(atualizaTela, 2);
document.write(x, " ", tela.offsetLeft, " ", tela.width);
