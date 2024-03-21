const initalText = document.querySelector('textarea');
const resultText = document.querySelector('p');
const criptografarButton = document.querySelector('.criptografar'); 
const descriptografarButton = document.querySelector('.descriptografar'); 

const replacements = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

criptografarButton.addEventListener('click', function() {
    let text = initalText.value;

    for (let key in replacements) {
        text = text.replace(new RegExp(key, 'g'), replacements[key]);
    };

    resultText.textContent = text; 
    resultText.style.display = "flex";
});

descriptografarButton.addEventListener('click', function() {
    let text = initalText.value;

    for (let key in replacements) {
        text = text.replace(new RegExp(replacements[key], 'g'), key);
    };

    resultText.textContent = text; 
    resultText.style.display = "flex";
});