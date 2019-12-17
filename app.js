var scores, roundScore, currentPlayer, game;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(game) {
        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDisplay = document.querySelector('.dice');
        diceDisplay.style.display = 'block';
        diceDisplay.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + currentPlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }    
});