const blocks = document.querySelectorAll('.block');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const overlay = document.getElementById('overlay');
const levelMessage = document.getElementById('level-message');

let sequence = [];
let playerSequence = [];
let level = 0;
let clickable = false;

function generateSequence() {
    return Math.floor(Math.random() * 4) + 1;
}

function flashBlockWithNumber(block, number) {
    const span = block.querySelector('span');
    span.innerText = number;        
    block.classList.add('active');  
    span.style.display = 'block';  

    
    setTimeout(() => {
        block.classList.remove('active'); 
        span.style.display = 'none';      
    }, 500);
}

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextLevel);

function startGame() {
    sequence = [];
    playerSequence = [];
    level = 0;
    nextLevel();
}

function nextLevel() {
    clickable = false;
    level++;
    document.getElementById('level').innerText = level;
    playerSequence = [];
    sequence.push(generateSequence());
    overlay.style.display = 'none';
    playSequence();
}

function playSequence() {
    let i = 0;
    const interval = setInterval(() => {
        const blockId = sequence[i];
        const block = document.getElementById(`block${blockId}`);
        flashBlockWithNumber(block, i + 1);  
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
            clickable = true;
        }
    }, 1000);
}

blocks.forEach(block => {
    block.addEventListener('click', () => {
        if (!clickable) return;
        const blockId = parseInt(block.id.replace('block', ''));
        playerSequence.push(blockId);

        flashBlockWithNumber(block, playerSequence.length);

        if (!checkSequence()) {
            alert('틀렸습니다!');
            startGame();
        } else if (playerSequence.length === sequence.length) {
            setTimeout(() => {
                showNextLevelOverlay();
            }, 1000);
        }
    });
});

function checkSequence() {
    for (let i = 0; i < playerSequence.length; i++) {
        if (playerSequence[i] !== sequence[i]) {
            return false;
        }
    }
    return true;
}

function showNextLevelOverlay() {
    overlay.style.display = 'flex';
    levelMessage.innerText = `레벨 ${level} 완료!`;
}