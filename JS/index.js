
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    //stop game if escape
    if(playerPressed === 'Escape'){
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){



        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;

        setTextElementValueById('current-score', updatedScore)






        // update score
        // 1. get the current score

        // 3. show the update score

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);


        // 2. increase the score
        // const newScore = currentScore + 1 ;
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        const currentLife = getTextElementValueById('current-life');
        

        const newLife = currentLife - 1;

         setTextElementValueById('current-life', newLife);

         if(newLife === 0){
            
            gameOver();
            
            
         }
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent )

function continueGame(){
//  1. Generate a random Alphabet
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}



function play(){
    // document.getElementById('home-screen').classList.add('hidden');
    // document.getElementById('play-ground').classList.remove('hidden');

    hideElementById('home-screen');
    hideElementById('final-score')
    ShowElementById('play-ground');

    // reset life and score
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);


    continueGame();

}

function gameOver(){
    hideElementById('play-ground');
    ShowElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);


    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

