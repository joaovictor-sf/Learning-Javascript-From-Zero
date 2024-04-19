let height = 0;
let width = 0;

let positionX;
let positionY;

let size;//Target size
let side;//Target side(olhando para a direita ou para a esquerda)
let mosca;

let tentativas;
let first;

let time = location.search.charAt(13);

let level = window.location.search.charAt(7);
let targetTime;

if (time === '1') {
    time = 15;
} else if (time === '2') {
    time = 30;
} else if (time === '3') {
    time = 60;
}

if (level === '1') {
    targetTime = 1500;
} else if (level === '2') {
    targetTime = 1000;
} else if (level === '3') {
    targetTime = 750;
}

//Window size
function adjustGameAreaSize() {
    height = window.innerHeight;
    width = window.innerWidth;
}

adjustGameAreaSize();

//Target position
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
mosca = document.createElement('img');
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

tentativas = 0;
first = 0;
//Create tarqet
let interval = setInterval(() => {

    if (tentativas >= 3){
        clearInterval(interval);
        window.location.href = 'game_over.html';
    }else{
        createMosca();
    }

    mosca.onclick = function () {
        this.remove();
        tentativas--;
    }

    if (tentativas > 0 && first > 0) {
        document.getElementById(`v${tentativas}`).src = 'image/coracao_vazio.png';
    }

    tentativas++;
    first = 1;
}, targetTime);

//Countdown
let countDown = setInterval(() => {

    time--;
    document.getElementById('time').innerHTML = time + 1;

    if (time < 0) {
        clearInterval(countDown);
        window.location.href = 'victory.html';
    }
}, 1000);