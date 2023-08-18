const playButton = document.querySelector('.play-button');
const howToPlayButton = document.querySelector('.how-to-play-button');
const resetButton = document.querySelector('.reset-button');
const headerBackButton = document.getElementById('header-back-button');

//Play button
playButton.addEventListener('click', () => {
    window.location.assign('game.html');
})

//How-to-play button
howToPlayButton.addEventListener('click', () => {
    window.alert("To play the game, click the \"play\" button first. The game will feature riddle questions, scrambled letters to be arranged, a \"hint\" button to provide additional clues, and an input box where you will type your answer. For every correct answer you provide, you will earn 3 points which can be used to buy hints. Each hint costs 5 points. Answer within the given time or you'll lose the game. Good luck!");
});


//Back button
headerBackButton.addEventListener('click', () => {
    window.location.assign('index.html');
})