'use strict';

//---==== Variables ====--- //

var level = 1,
    timeToDraw = 700,
    readyToDraw = 'false',
    bg = document.querySelector('.game'),
    start_button = document.querySelector('.button-start-game'),
    restart_button = document.querySelector('.button-restart'),
    next_button = document.querySelector('.button-next-level'),
    intro_screen = document.querySelector('.intro-screen'),
    screen = document.querySelector('.screen'),
    creep = document.querySelector('.creep'),
    message = document.querySelector('.message'),
    sfx_game_intro = new Audio('sfx/game-intro.mp3'),
    sfx_intro = new Audio('sfx/intro.mp3'),
    sfx_wait = new Audio('sfx/wait.mp3'),
    sfx_shot = new Audio('sfx/shot.mp3'),
    sfx_fire = new Audio('sfx/fire.m4a'),
    sfx_death = new Audio('sfx/death.mp3'),
    sfx_win = new Audio('sfx/win.mp3');

//---==== Event-listeners ====--- //

start_button.addEventListener('click', startGame);
restart_button.addEventListener('click', restartGame);
next_button.addEventListener('click', nextLevel);

//---==== Functions ====---//

function startGame() {
    sfx_shot.play();
    sfx_game_intro.pause();
    intro_screen.style.display = 'none';
    screen.style.display = 'block';
    creep.classList.add('creep-level-' + level);
    creep.addEventListener('transitionend', prepareForDraw);
    moveCreep();
}  

function restartGame() {
    sfx_death.pause();
    restart_button.style.display = 'none';
    message.innerHTML = '';
    bg.classList.remove('page--dead');
    creep.classList.remove('creep-level-' + level);
    creep.classList.remove('creep-level-' + level + '__standing');
    creep.classList.remove('creep-level-' + level + '__shot');
    setTimeout(function () {
        startGame();
    }, 2000);
}

function nextLevel() {
    if (level < 5) {
        next_button.style.display = 'none';
        message.innerHTML = '';
        creep.classList.remove('creep-level-' + level);
        creep.classList.remove('creep-level-' + level + '__standing');
        creep.classList.remove('creep-level-' + level + '__death');
        level++;
        timeToDraw = 700;
        timeToDraw = timeToDraw - (level * 100);
        console.log(timeToDraw);
        startGame();
    } else {
        message.innerHTML = 'Well Done! You\'ve Killed them All!';
    }
}

function moveCreep() {
    setTimeout(function () {
        creep.classList.add('moving');
        sfx_intro.play();
        sfx_intro.loop = true;
    }, 50);
}

function prepareForDraw() {
    sfx_intro.pause();
    sfx_wait.play();
    sfx_wait.currentTime = 0;
    sfx_wait.loop = true;
    creep.classList.remove('moving');
    creep.classList.add('standing');
    creep.classList.add('creep-level-' + level + '__standing');

    setTimeout(function () {
        sfx_wait.pause();
        message.innerHTML = 'Fire!';
        sfx_fire.play();
        creep.addEventListener('mousedown', playerShootsCreep);
        readyToDraw = true;
        setTimeout(creepShootsPlayer, timeToDraw);
    }, 1000);
}

function creepShootsPlayer() {
    if (readyToDraw) {
        readyToDraw = false;
        creep.classList.remove('standing');
        creep.classList.add('creep-level-' + level + '__shot');

        setTimeout(function () {
            sfx_shot.play();
            message.classList.add('message--dead');
            message.innerHTML = 'You are Dead!';
            bg.classList.add('page--dead');
        }, timeToDraw / 3);

        creep.removeEventListener('mousedown', playerShootsCreep);
        setTimeout(function () {
            sfx_death.play();
            restart_button.style.display = 'block';
        }, 1000);
    }
}

function playerShootsCreep() {
    if (readyToDraw) {
        readyToDraw = false;
        sfx_shot.play();
        creep.classList.remove('standing');
        creep.classList.remove('creep-level-' + level + '__shot');
        creep.classList.add('creep-level-' + level + '__death');
        creep.removeEventListener('mousedown', playerShootsCreep);
        sfx_win.play();
        setTimeout(function () {
            message.innerHTML = 'You Won!';
            next_button.style.display = 'block';
        }, 1000);
    }
}
