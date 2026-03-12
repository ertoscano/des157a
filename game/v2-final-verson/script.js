(function(){
    'use strict';
    console.log('js running');
// audio
    const playBtn = document.getElementById('play');
    const gameMusic = new Audio('sounds/background-music.wav');

    const pinkBtn = document.getElementById('pad1');
    const pinkSound = new Audio('sounds/d.wav');
    const tealBtn = document.getElementById('pad2');
    const tealSound = new Audio('sounds/a.wav')
    const greenBtn = document.getElementById('pad3');
    const greenSound = new Audio('sounds/low-e.wav');
    const redBtn = document.getElementById('pad4');
    const redSound = new Audio('sounds/high-e.wav');
    const blueBtn = document.getElementById('pad5');
    const blueSound = new Audio('sounds/b.wav')
    const yellowBtn = document.getElementById('pad6');
    const yellowSound = new Audio('sounds/g.wav');
    
    gameMusic.volume = .5;
    playBtn.addEventListener('mousedown', function(){
        gameMusic.loop = true;
        gameMusic.play();
    });

    pinkBtn.addEventListener('mousedown', function(){
        pinkSound.currentTime = 0;
        pinkSound.play();
    });
    tealBtn.addEventListener('mousedown', function(){
        tealSound.currentTime = 0;
        tealSound.play();
    });
    greenBtn.addEventListener('mousedown', function(){
        greenSound.currentTime = 0;
        greenSound.play();
    });
    redBtn.addEventListener('mousedown', function(){
        redSound.currentTime = 0;
        redSound.play();
    });
    blueBtn.addEventListener('mousedown', function(){
        blueSound.currentTime = 0;
        blueSound.play();
    });
    yellowBtn.addEventListener('mousedown', function(){
        yellowSound.currentTime = 0;
        yellowSound.play();
    });

    //game screens
    const homeScreen = document.querySelector('#home-screen');
    const gameScreen = document.querySelector('#game-screen');
    const gameOverScreen = document.querySelector('#end-screen')

    function showHome(){
        homeScreen.classList.remove('hide');
        gameScreen.classList.add('hide');
        gameOverScreen.classList.add('hide');
    }
    function startGame(){
        homeScreen.classList.add('hide');
        gameScreen.classList.remove('hide');
        gameOverScreen.classList.add('hide');
    }
    function showEnd(){
        gameScreen.classList.add('hide');
        gameOverScreen.classList.remove('hide');
    }

    const play = document.querySelector('#play');
    const game = document.querySelector('#game-area');
    const currentScore = document.querySelector('#score-display p');
    const levelDisplay = document.querySelector('#level-display p');
    const finalScore = document.querySelector('#final-score-display p');
    const finalLevel = document.querySelector('#final-level-display p');
    const homeBtn = document.querySelector('#home');
    const home2Btn = document.querySelector('#home-2');
    const infoBtn = document.querySelector('#info');
    const howBtn = document.querySelector('#how');
    const infoExplain = document.querySelector('#info-explain');
    const howTo = document.querySelector('#how-to-play');
    const restartBtn = document.querySelector('#restart');

    

    restartBtn.addEventListener('click', function(event){
        resetGame();
        startGame();
        callSequence(gameData.count, gameData.speed);
    });


    infoBtn.addEventListener('click', function(event){
        infoExplain.className = 'show';
    });

    howBtn.addEventListener('click', function(event){
        howTo.className = 'show';
    });

    homeBtn.addEventListener('click', function(event){
        location.reload();
    });

    home2Btn.addEventListener('click', function(event){
        location.reload();
    });

    let pads = document.querySelectorAll('#game-area div')

    let counter = 0;

    const gameData = {
        count: 3,
        increment: 3,
        score: 0,
        speed: 2000,
        sequence: [0, 0, 0],
        match: [1, 1, 1],
        level: 1
    }

    function resetGame(){
        gameData.count = 3;
        gameData.increment = 3;
        gameData.score = 0;
        gameData.level = 1;
        gameData.speed = 2000;
        gameData.sequence = [];
        gameData.match = [];
        

        counter = 0;

        currentScore.innerHTML = 0;
        levelDisplay.innerHTML = 1;
    }

    //game start
        play.addEventListener('click', function(event){
            event.preventDefault();
            startGame();
            gameData.sequence = [];
            gameData.level = 1;
            callSequence(gameData.count, gameData.speed);
        });


    function callSequence(sequenceLength, sequenceSpeed){
        pads = document.querySelectorAll('#game-area div');

        setTimeout( function(){

            for( const eachPad of pads){
                eachPad.removeAttribute('class');
            }

            //generate number
            const num = Math.floor(Math.random()*6)+1;
            //push number
            gameData.sequence.push(num);
            // document.querySelector(`#pad${num}`).className = 'on';
            const pad = document.querySelector(`#pad${num}`);
            pad.className = 'on';

            if(num === 1){
                pinkSound.currentTime = 0;
                pinkSound.play();
            }
            else if(num === 2){
                tealSound.currentTime = 0;
                tealSound.play();
            }
            else if(num === 3){
                greenSound.currentTime = 0;
                greenSound.play();
            }
            else if(num === 4){
                redSound.currentTime = 0;
                redSound.play();
            }
            else if(num === 5){
                blueSound.currentTime = 0;
                blueSound.play();
            }
            else if(num === 6){
                yellowSound.currentTime = 0;
                yellowSound.play();
            }

            counter++;

            if(counter < sequenceLength){
                setTimeout(function(){
                    for( const eachPad of pads) {
                        eachPad.removeAttribute('class');
                    }
                    callSequence(sequenceLength, sequenceSpeed);
                }, sequenceSpeed);
            }
            
            else {
                setTimeout(function(){
                    for(const eachPad of pads){
                        eachPad.removeAttribute('class');
                    }
                    gameData.match = [];
                    captureResponse();
                }, sequenceSpeed);
                console.log(gameData.sequence);
            }
        }, 600);
    }

    function captureResponse(){
        let status = 0;
        for( const eachPad of pads){

            eachPad.onclick = function(event){
                const pad = event.currentTarget;
                const id = pad.id;
                pad.className = 'on';

                setTimeout( function(){
                    pad.removeAttribute('class');
                }, 1000);
                gameData.match.push(parseInt(id.charAt(3)));
                //check same array
                if( gameData.match.length == gameData.sequence.length){
                    console.log(gameData.match);

                    for( let i=0; i<gameData.match.length; i++){
                        //no match lose game
                        if( gameData.match[i] !== gameData.sequence[i]){
                            status = 0;
                            //insert end game screen
                            finalScore.innerHTML = gameData.score;
                            finalLevel.innerHTML = gameData.level;
                            showEnd();
                            console.log('you lose');
                            return;
                        } 
                    }
                    status = 1;
                    console.log('continue');
                    pads.forEach(p => p.onClick = null);
                    setTimeout(setupNextRound, 2000);
                }
            };
        }
    }
    //next game sequence

    function setupNextRound(){
        counter = 0;
        //update score
        gameData.score = gameData.score + gameData.count*5;


        gameData.increment = gameData.increment -1;

        if(gameData.increment == 0){
            gameData.count++;
            gameData.increment = 3;
        }

        //level based on pad count
        gameData.level = gameData.count -2;
        levelDisplay.innerHTML = `${gameData.level}`;
        

        //clear sequence array
        gameData.sequence = [];

        if ( gameData.speed > 600 ){
            gameData.speed = gameData.speed-200;
        }

        //new score set
        currentScore.innerHTML = gameData.score;
        console.log('next round');
        game.innerHTML = `<div id="pad1">
                            <img src="images/pink-off-btn.svg" alt="pink off button" width="150" height="150">
                        </div>
                        <div id="pad2">
                            <img src="images/teal-off-btn.svg" alt="teal off button" width="150" height="150">
                        </div>
                        <div id="pad3">
                            <img src="images/green-off-btn.svg" alt="green off button" width="150" height="150">
                        </div>
                        <div id="pad4">
                            <img src="images/red-off-btn.svg" alt="red off button" width="150" height="150">
                        </div>
                        <div id="pad5">
                            <img src="images/blue-off-btn.svg" alt="blue off button" width="150" height="150">
                        </div>
                        <div id="pad6">
                            <img src="images/yellow-off-btn.svg" alt="yellow off button" width="150" height="150">
                        </div>`;
        pads = document.querySelectorAll('#game-area div');
        document.getElementById('pad1').addEventListener('mousedown', function(){
            pinkSound.currentTime = 0;
            pinkSound.play();
        });
        
        document.getElementById('pad2').addEventListener('mousedown', function(){
            tealSound.currentTime = 0;
            tealSound.play();
        });
        
        document.getElementById('pad3').addEventListener('mousedown', function(){
            greenSound.currentTime = 0;
            greenSound.play();
        });
        
        document.getElementById('pad4').addEventListener('mousedown', function(){
            redSound.currentTime = 0;
            redSound.play();
        });
        
        document.getElementById('pad5').addEventListener('mousedown', function(){
            blueSound.currentTime = 0;
            blueSound.play();
        });
        
        document.getElementById('pad6').addEventListener('mousedown', function(){
            yellowSound.currentTime = 0;
            yellowSound.play();
        });
        callSequence(gameData.count, gameData.speed);
    }

}());