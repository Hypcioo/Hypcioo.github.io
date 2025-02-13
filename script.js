const messages = [
    "T'es sur ?",
    "Vraiment sur ??",
    "Certain ?",
    "Oupi s'il te plait...",
    "Réfléchis !",
    "Si tu dis non, je vais être vraiment triste...",
    "Vraiment triste...",
    "Vraiment beaucoup, beaucoup triste...",
    "Ok c'est bon j'arrête de demander...",
    "Je rigole, dis oui stp ! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}