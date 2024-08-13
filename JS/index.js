
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    console.log('player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet , playerPressed);

    if(playerPressed === expectedAlphabet){
        console.log('You get a point');

        // update score
        // 1. get the current score

        // 3. show the update score

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // 2. increase the score
        const newScore = currentScore + 1 ;
        currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed and you lost a life');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife;
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
    ShowElementById('play-ground');

    continueGame();

}


