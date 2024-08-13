function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function ShowElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
    element.classList.add('text-black');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]');
    element.classList.add('text-black');
}

function getARandomAlphabet(){

    // Create a alphabet Array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet
}