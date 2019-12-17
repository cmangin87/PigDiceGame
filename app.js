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

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (game) {
        scores[currentPlayer] += roundScore;

        document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];

        if (scores[currentPlayer] >= 100) {
            document.querySelector('#name-' + currentPlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
            game = false;
        } else {
            nextPlayer();
        }
    }
});