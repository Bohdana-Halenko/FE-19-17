const dino = document.querySelector('.dino');
const player = document.querySelector('.dino__player');
const cactus = document.querySelector('.dino__cactus');
const pointsEl = document.querySelector('.dino__points');
const overlayEl = document.querySelector('.dino__overlay');
const resultsEl = document.querySelector('.dino__results');
const butEl = document.querySelector('.dino__but');

let x = Math.floor(player.getBoundingClientRect().x + player.getBoundingClientRect().width / 2);
let y = Math.floor(player.getBoundingClientRect().y + player.getBoundingClientRect().width / 2);

let points = 0;
let isAnimating = false;
let timer1;
let timer2;
let timer3;

const resetGame = () => {
    player.style.left = '100px';
    player.style.bottom = '15px';
    cactus.style.right = '-70px';
    cactus.style.bottom = '15px';
    points = 0;
}

const cactusRun = () => {
    cactus.style.right = `${Number(cactus.style.right.split('px')[0]) + 8 + points * 0.05}px`;
    x = Math.floor(cactus.getBoundingClientRect().x + cactus.getBoundingClientRect().width / 2);
    y = Math.floor(cactus.getBoundingClientRect().y + cactus.getBoundingClientRect().width / 2);
    if (x < 0) {
        cactus.style.display = 'none';
        cactus.style.right = '-70px';
        setTimeout(() => cactus.style.display = 'block', 200);
    }
}

const checkCollision = () => {
    const playerRect = player.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    const playerX = Math.floor(playerRect.x);
    const playerY = Math.floor(playerRect.y);
    const playerWidth = Math.floor(playerRect.width);
    const playerHeight = Math.floor(playerRect.height);

    const cactusX = Math.floor(cactusRect.x);
    const cactusY = Math.floor(cactusRect.y);
    const cactusWidth = Math.floor(cactusRect.width);
    const cactusHeight = Math.floor(cactusRect.height);

    if (playerX < cactusX + cactusWidth &&
        playerX + playerWidth > cactusX &&
        playerY < cactusY + cactusHeight &&
        playerY + playerHeight > cactusY
    ) {
        overlayEl.style.display = 'flex';
        player.style.display = 'none';
        points.style.display = 'none';
        butEl.style.display = 'flex';

        if (points >= localStorage.getItem('dinoRecord')) localStorage.setItem('dinoRecord', points);
        resultsEl.innerHTML = `
        Game over
        <br>
        ${points} points
        <br>
        Record ${localStorage.getItem('dinoRecord')}`;

        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
        resetGame();

    }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'w' && !isAnimating) {
        isAnimating = true;
        player.style.bottom = '100px';
        setTimeout(() => player.style.bottom = '15px', 400);
        setTimeout(() => isAnimating = false, 600);
    }
});

butEl.addEventListener('click', () => {
    overlayEl.style.display = 'none';
    player.style.display = 'block';
    pointsEl.style.display = 'block';
    timer1 = setInterval(cactusRun, 30);
    timer2 = setInterval(checkCollision, 100)
    timer3 = setInterval(() => {
        points += 1;
        pointsEl.innerHTML = `${points} points`;
    }, 50)
});

const startGame = (e) => {
    if (e.key === 'g') {
        overlayEl.style.display = 'none';
        overlayEl.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        timer1 = setInterval(cactusRun, 30);
        timer2 = setInterval(checkCollision, 100)
        timer3 = setInterval(() => {
            points += 1;
            pointsEl.innerHTML = `${points} points`;
        }, 50);

        document.removeEventListener('keydown', startGame)
    }
};

document.addEventListener('keydown', startGame);

resultsEl.innerHTML = `
Press 'g' to start game
<br>
Press 'w' to jump
<br>
Record ${localStorage.getItem('dinoRecord') === null ? 0 : localStorage.getItem('dinoRecord')}
` 