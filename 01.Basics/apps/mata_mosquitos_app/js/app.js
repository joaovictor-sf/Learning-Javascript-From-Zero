//Window size
let height = 0;
let width = 0;

function adjustGameAreaSize() {
    height = window.innerHeight;
    width = window.innerWidth;
}

adjustGameAreaSize();

//Target position
console.log(height, width);

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

    console.log(positionX, positionY);
}

randomPosition();

//Target size
let size = Math.floor(Math.random() * 3) + 1;

console.log(size);

//Target side(olhando para a direita ou para a esquerda)
let side = Math.floor(Math.random() * 2);

console.log(side);

//Create target
let mosca = document.createElement('img');
mosca.src = 'image/mosca.png';
mosca.style.position = 'absolute';

function createMosca() {
    //mosca.src = 'image/mosca.png';
    mosca.className = `mosca${size}`;
    //mosca.style.position = 'absolute';
    mosca.style.left = positionX + 'px';
    mosca.style.top = positionY + 'px';
    mosca.style.transform = side ? 'scaleX(-1)' : 'scaleX(1)';
    document.body.appendChild(mosca);
}

createMosca();

/*setInterval(() => {
    document.body.appendChild(mosca);
}, 1000);*/