var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
    playerMove = 'kamień';
} else {
    playerMove = 'nieznany ruch';
}
if (playerInput == '2') {
    playerMove = 'papier';
} else {
    playerMove = 'nieznany ruch';
}
if (playerInput == '3') {
    playerMove = 'nozyce';
} else {
    playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);