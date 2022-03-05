function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log ('ErRoR eRrOr 3rR0r!!!!11');
    };
};

// testing 123...
// let xyz = getUserChoice('rock');
// console.log(xyz); 

function getComputerChoice () {
    let def = Math.floor(Math.random() * 3);
    if (def === 0) {
        return 'rock'
    } else if (def === 1) {
        return 'paper'
    } else {
        return 'scissors'
    };
};

// testing 123...
// let abc = getComputerChoice ();
// console.log(abc);

function determineWinner (userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'you win. you are the bomb. congrats.'
    }
    if (userChoice === computerChoice) {
        return 'tie'
    } 
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'you lose'
        } else {
            return 'you win'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'you win'
        } else {
            return 'you lose'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'you win'
        } else {
            return 'you lose'
        }
    }
};

// testing 123...
// let ghi = determineWinner ('scissors', 'paper');
// console.log (ghi);

function playGame () {
    var input = prompt ('Rock, paper, or scissors?').toLowerCase();
    // testing 123
    // console.log (input);
    var jkl = 0;
    while (jkl === 0) {
        if (input === 'rock' || input === 'paper' || input === 'scissors' || input === 'bomb') {
            jkl++
        } else {
            alert ('ErRoR eRrOr 3rR0r!!!!11');
            input = prompt ('Rock, paper, or scissors?').toLowerCase();    
        }
    }
    var userChoice = getUserChoice (input);
    var computerChoice = getComputerChoice ();
    console.log (`You: ${userChoice}`);
    console.log (`Computer: ${computerChoice}`);
    console.log (determineWinner (userChoice, computerChoice));
};

playGame ();
