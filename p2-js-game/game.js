const headerBackButton = document.getElementById('header-back-button');
const headerLevel = document.getElementById('header-level');
const headerPoints = document.getElementById('header-points');
const riddleQuestion = document.getElementById('riddle-question');
const hintButton = document.getElementById('hint-button');
const hintP = document.getElementById('hint-p');
const timer = document.getElementById('timer');
const scrambledWords = document.getElementById('scrambled-words');
const playerAnswer = document.getElementById('player-answer');
const submitButton = document.getElementById('submit-button');

//Header Back Button
headerBackButton.addEventListener('click', () => {
    window.location.assign('index.html');
})

//Array of Riddles
const arrayRiddles = [];

class riddle {
    constructor (question, hint, answer) {
        this.question = question;
        this.hint = hint;
        this.answer = answer;
    }
}

//riddle = {question, hint, answer}
const riddle1 = new riddle('What has a head and a tail but no body?', 'Hint: You flip it to make a decision', 'coin');
const riddle2 = new riddle('What is always in front of you but can\'t be seen?', 'Hint: It\'s something that hasn\'t happened yet', 'future');
const riddle3 = new riddle('I am always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?', 'Hint: It\'s not a living thing', 'fire');
const riddle4 = new riddle('What begins with T, ends with T, and has T in it?', 'Hint: It\'s something you use to make tea', 'teapot');
const riddle5 = new riddle('What kind of room has no doors or windows?', 'Hint: It\'s a kind of room that doesn\'t exist in reality', 'mushroom');
const riddle6 = new riddle('What is full of holes but still holds water?', 'Hint: It\'s used for cleaning', 'sponge');
const riddle7 = new riddle('What is so fragile that saying its name breaks it?', 'Hint: It\'s something that can be heard', 'silence');
const riddle8 = new riddle('What has a heart that doesn\'t beat?', 'Hint: It\'s a type of plant', 'artichoke');
const riddle9 = new riddle('What has a neck but no head?', 'Hint: It\'s something you use to store liquids', 'bottle');
const riddle10 = new riddle('I am not alive, but I grow; I don\'t have lungs, but I need air; I don\'t have a mouth, but I need water to live. What am I?', 'Hint: It\'s one of the four elements', 'fire');
const riddle11 = new riddle('What has four legs in the morning, two legs in the afternoon, and three legs in the evening?', 'Hint: It\'s a metaphor for the stages of life', 'human');
const riddle12 = new riddle('What goes up but never comes down?', 'Hint: It\'s something that increases over time', 'age');
const riddle13 = new riddle('The more you take, the more you leave behind. What am I?', 'Hint: It\'s something you leave behind when you walk', 'footsteps');
const riddle14 = new riddle('What has a hole in the middle but is not a wheel? You can dunk me in coffee or eat me for a meal.', 'Hint: It\'s a type of pastry that is often glazed or sprinkled with sugar.', 'donut');
const riddle15 = new riddle('What is black when you buy it, red when you use it, and gray when you throw it away?', 'Hint: It\'s used for drawing or writing', 'charcoal');
const riddle16 = new riddle('I am light as a feather, yet the strongest man cannot hold me for much more than a minute. What am I?', 'Hint: It\'s something you do every few seconds', 'breath');
const riddle17 = new riddle('What has one eye but can\'t see?', 'Hint: It\'s used for sewing', 'needle');
const riddle18 = new riddle('I have keys but I don\'t unlock doors,I have black and white, but I\'m not a zebra.', 'Hint: I\'m often found in music stores.', 'piano');
const riddle19 = new riddle('I\'m a portal without a door, You can see your face in me, for sure.', 'Hint: Found in many bathrooms.', 'mirror');
const riddle20 = new riddle('I have keys but no locks, I have space but no room, You can enter but not exit.', 'Hint: You use me to write and edit.', 'keyboard');


arrayRiddles.push(riddle1, riddle2, riddle3, riddle4, riddle5, riddle6, riddle7, riddle8, riddle9, riddle10, riddle11, riddle12, riddle13, riddle14, riddle15, riddle16, riddle17, riddle18, riddle19, riddle20);

const stringQuestions = [];
const stringHints = [];
let stringScrambledAnswers = [];
const stringAnswers = [];

//arrayRiddles[index].question = question
function accessQuestionsInArray() {
    for (let index = 0; index < arrayRiddles.length; index++) {
        let displayQuestion = arrayRiddles[index].question;
        stringQuestions.push(displayQuestion);
    }
    return(stringQuestions);
}
console.log(accessQuestionsInArray());

// //arrayRiddles[index].hint = hint
function accessHintsInArray() {
    for (let index = 0; index < arrayRiddles.length; index++) {
        let displayHints = arrayRiddles[index].hint;
        stringHints.push(displayHints);
    }
    return(stringHints);
}
console.log(accessHintsInArray());

//arrayRiddles[index].answer = answer
function accessAnswersInArray() {
    for (let index = 0; index < arrayRiddles.length; index++) {
        let displayAnswer = arrayRiddles[index].answer;
        stringAnswers.push(displayAnswer);
    }
    return(stringAnswers);
}
console.log(accessAnswersInArray());

//Scrambling a word
function scrambleWord() {
    const scrambledAnswers = accessAnswersInArray().map(answer => {
        const charArray = answer.split('');
        for (let index = 0; index < charArray.length; index++) {
            const jumble = Math.floor(Math.random() * charArray.length);
            [charArray[index], charArray[jumble]] = [charArray[jumble], charArray[index]];
        }
        return charArray.join('');
    });
    stringScrambledAnswers = scrambledAnswers;
    console.log(scrambledAnswers);
}
scrambleWord();

//Global Variables
let setTimer;
let currentIndexOfGame = 0;
let points = 10;
let level = 1;
let timeLeft = 30;
let finalScore = 0;

//To set timer
function startTimer () {
    setTimer = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0) {
            finalScore = level - 1;
            window.alert(`Time's up! You lose the game. Your final score is: ${finalScore} / 20`);
            hintButton.disabled = true;
            playerAnswer.disabled = true;
            submitButton.disabled = true;
        }
    }, 1000)
    
}

//Reset timer
function resetTimer() {
    clearInterval(setTimer);
    timeLeft = 30;
    timer.textContent = timeLeft;
    startTimer();
}

//To display the points and level in the header
function updateHeader() {
    headerPoints.textContent = `${points} points`;
    headerLevel.textContent = `Level ${level}`;
}
updateHeader(); 

// Display riddle and scrambled word
function displayRiddle() {
    riddleQuestion.textContent = stringQuestions[currentIndexOfGame];
    scrambledWords.textContent = stringScrambledAnswers[currentIndexOfGame];
}

// Hint button functionality
hintP.style.display = 'none';
hintButton.addEventListener('click', () => {
    if (points >= 5) {
        points -= 5;
        updateHeader();
        hintP.style.display = '';
        hintP.textContent = arrayRiddles[currentIndexOfGame].hint;
        hintP.style.background = rgba(78, 245, 78, 0.677);
    } else {
        hintP.textContent = 'Insufficient points. You can\'t use the hint button';
    }
});

// Submit button functionality
submitButton.addEventListener('click', () => {
    const playerAnswerValue = playerAnswer.value.toLowerCase();
    const correctAnswer = stringAnswers[currentIndexOfGame].toLowerCase();
  
    if (playerAnswerValue === correctAnswer) {
        window.alert('Congratulations, you got it right!');
        points += 3;
        level += 1;
        updateHeader();
        currentIndexOfGame++;
        displayRiddle();
        hintP.style.display = 'none';
        playerAnswer.value = ''; // Clear input
        resetTimer();
    } else {
        hintP.style.display = '';
        hintP.style.background = 'red';
        hintP.textContent = 'Incorrect. Try again!';
    }
});

// Initialize the game
function startRiddleGame() {
    finalScore = 0;
    startTimer();
    currentIndexOfGame = 0;
    points = 10;
    displayRiddle();
    updateHeader();
}
  
// Call the function to start the game
startRiddleGame();

