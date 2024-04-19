//Window size
let height = 0;
let width = 0;

function adjustGameAreaSize() {
    height = window.innerHeight;
    width = window.innerWidth;
}

adjustGameAreaSize();

//Target position
let positionX;
let positionY;

function randomPosition() {
    positionX = Math.floor(Math.random() * width);
    positionY = Math.floor(Math.random() * height);

    if (positionX > width - 90) {
        positionX = width - 90;
    }
    if (positionY > height - 90) {
        positionY = height - 90;
    }
}

//Create target
let size;//Target size
let side;//Target side(olhando para a direita ou para a esquerda)
let mosca = document.createElement('img');
mosca.src = 'image/mosca.png';
mosca.style.position = 'absolute';

function createMosca() {
    size = Math.floor(Math.random() * 3) + 1;
    side = Math.floor(Math.random() * 2);

    mosca.className = `mosca${size}`;
    randomPosition()
    mosca.style.left = positionX + 'px';
    mosca.style.top = positionY + 'px';
    mosca.style.transform = side ? 'scaleX(-1)' : 'scaleX(1)';
    document.body.appendChild(mosca);
}

let tentativas = 0;
let first = 0;
//Create tarqet every 1s
let interval = setInterval(() => {
    createMosca();

    mosca.onclick = function () {
        this.remove();
        tentativas--;
    }

    if (tentativas > 0 && first > 0) {
        document.getElementById(`v${tentativas}`).src = 'image/coracao_vazio.png';
        console.log(tentativas);
    }

    tentativas++;
    first = 1;
}, 1000);