// these objects create a boolean-like value for the onclick functionality
let boolean = [
    {
    "title" : "rock",
    "value" : false,
    "numAssign" : 0,
    "win" : 0,
    "lose" : 0,
    "tie" : 0
    },
    {
    "title" : "paper",
    "value" : false,
    "numAssign" : 1,
    "win" : 0,
    "lose" : 0,
    "tie" : 0
    },
    {
    "title" : "scissors",
    "value" : false,
    "numAssign" : 2,
    "win" : 0,
    "lose" : 0,
    "tie" : 0
    },
    {
    "title" : "replay",
    "value" : false,
    },
    {
    "title" : "score",
    "win" : 0,
    "lose" : 0,
    "tie" : 0
    }
]

// these variables store values for scoring.
let scoreWin;
let scoreLose;
let scoreTie;

// This controls the body's content
let bodyEl = document.getElementById('bodyEl');

bodyEl.innerHTML = "";

// This control's the banner's float behavior
let bannerDiv = document.createElement('div');
bannerDiv.classList.add('bannerDiv')

let bannerEl = document.createElement('img');
bannerEl.classList.add('banner');
bannerEl.setAttribute(
    'src',
    './assets/photos/banner.png'
);

// This controls the game elements' float behavior
let gameEls = document.createElement('div');
gameEls.classList.add('gameEls');

    // Individual game elements
let rockEl = document.createElement('img');
rockEl.classList.add('images');
rockEl.setAttribute(
    'src',
    './assets/photos/rock.png'
);
let paperEl = document.createElement('img');
paperEl.classList.add('images');
paperEl.setAttribute(
    'src',
    './assets/photos/paper.png'
);
let scissorsEl = document.createElement('img');
scissorsEl.classList.add('images');
scissorsEl.setAttribute(
    'src',
    './assets/photos/scissors.png'
);

let promptDiv = document.createElement('div');
promptDiv.classList.add('gameEls');
let prompt = document.createElement('img');
prompt.setAttribute(
    'src',
    './assets/photos/playAgain.png'
);
prompt.classList.add('resultsImages');

let resultDiv = document.createElement('div');
let result = document.createElement('img');


// This sets up the flow of the HTML
bodyEl.appendChild(bannerDiv);
bodyEl.appendChild(gameEls);
bannerDiv.appendChild(bannerEl);
gameEls.appendChild(rockEl);
gameEls.appendChild(paperEl);
gameEls.appendChild(scissorsEl);
gameEls.appendChild(promptDiv);
promptDiv.appendChild(prompt);


function play() {

    // computer chooses a number between 0-1-2.
    let computerChoice = Math.floor(Math.random() * 3); //used the number 3, because math.random documentation says it will use 0-2. (which is 3 integers)
    console.log(computerChoice);

    // rock element's functionality
    rockEl.onclick = function playRock() {
        // create a new div to replace rock when clicked
        resultDiv = document.createElement('div');
        resultDiv.classList.add('gameEls');
        result = document.createElement('img');

        // switch the divs
        rockEl.classList.add('hide');
        result.classList.add('resultsImages');

        // creates a boolean-like value from object-variable, 'rock'.
        // when rock is clicked, hide paper and scissors & show results.
        boolean[0]["value"] = true;
        if (boolean[0]["value"] = true) {
            paperEl.classList.add('hide');
            scissorsEl.classList.add('hide');
        }

        if (computerChoice === boolean[1]["numAssign"] && boolean[0]["value"] == true) {
            console.log("Sorry! I chose paper.");
            result.setAttribute(
                'src',
                './assets/photos/lost.png'
            );
            scoreLose = boolean[0]["lose"] + 1;
            prompt.classList.remove('hide');
        }else if (computerChoice === boolean[2]["numAssign"] && boolean[0]["value"] == true) {
            console.log("I chose scissors. You win!");
            result.setAttribute(
                'src',
                './assets/photos/won.png'
            );
            scoreWin = boolean[0]["win"] + 1;
            prompt.classList.remove('hide');
        }else {
            console.log("It's a tie!")
            result.setAttribute(
                'src',
                './assets/photos/tie.png'
            );
            scoreTie = boolean[0]["tie"] + 1;
            prompt.classList.remove('hide');

        };

        bodyEl.appendChild(resultDiv);
        resultDiv.appendChild(result);
        return;
    }

    // paper element's functionality
    paperEl.onclick = function playPaper() {
        resultDiv = document.createElement('div');
        resultDiv.classList.add('gameEls');
        result = document.createElement('img')
        result.setAttribute(
            'src',
            './assets/photos/chosePaper.png'
        );
        paperEl.classList.add('hide');
        result.classList.add('resultsImages');

        [1]["value"] = true;
        if ([1]["value"] = true) {
            rockEl.classList.add('hide');
            scissorsEl.classList.add('hide');
        }

        if (computerChoice === [2]["numAssign"] && [1]["value"] == true) {
            console.log("Sorry! I chose scissors.");
            result.setAttribute(
                'src',
                './assets/photos/lost.png'
            );
            scoreLose = boolean[1]["lose"] + 1;
            prompt.classList.remove('hide');
        }else if (computerChoice === [0]["numAssign"] && [1]["value"] == true) {
            console.log("I chose rock. You win!");
            result.setAttribute(
                'src',
                './assets/photos/won.png'
            );
            scoreWin = boolean[1]["win"] + 1;
            prompt.classList.remove('hide');
        }else {
            console.log("It's a tie!")
            result.setAttribute(
                'src',
                './assets/photos/tie.png'
            );
            scoreTie = boolean[1]["tie"] + 1;
            prompt.classList.remove('hide');
        
        };
        
        bodyEl.appendChild(resultDiv);
        resultDiv.appendChild(result);
        return;
    }

    // scissor element's functionality
    scissorsEl.onclick = function playScissors() {
        resultDiv = document.createElement('div');
        resultDiv.classList.add('gameEls');
        result = document.createElement('img')
        result.setAttribute(
            'src',
            './assets/photos/choseScissors.png'
        );

        scissorsEl.classList.add('hide');
        result.classList.add('resultsImages');

        boolean[2]["value"] = true;
        if (boolean[2]["value"] = true) {
            rockEl.classList.add('hide');
            paperEl.classList.add('hide');
        }

        if (computerChoice === boolean[0]["numAssign"] && boolean[2]["value"] == true) {
            console.log("Sorry! I chose rock.");
            result.setAttribute(
                'src',
                './assets/photos/lost.png'
            );
            scoreLose = boolean[2]["lose"] + 1;
            prompt.classList.remove('hide');
        }else if (computerChoice === boolean[1]["numAssign"] && boolean[2]["value"] == true) {
            console.log("I chose paper. You win!");
            result.setAttribute(
                'src',
                './assets/photos/won.png'
            );
            scoreWin = boolean[2]["win"] + 1;
            prompt.classList.remove('hide');
        }else {
            console.log("It's a tie!")
            result.setAttribute(
                'src',
                './assets/photos/tie.png'
            );
            scoreTie = boolean[2]["tie"] + 1;
            prompt.classList.remove('hide');
        };

        bodyEl.appendChild(resultDiv);
        resultDiv.appendChild(result);
        return;
    }
    
    /* just an idea:

    scoreWin = boolean[4]["win"] + boolean[4]["win"] + boolean[4]["win"]
    scoreLose = score + score + score
    scoreTie = score + score + score

    */
};




function playAgain(){
    prompt.classList.add('hide');
    play();

    prompt.onclick = function runPrompt() {
        prompt.classList.add('hide');
        result.classList.add('hide');
        rockEl.classList.remove('hide');
        paperEl.classList.remove('hide');
        scissorsEl.classList.remove('hide');
    }
    return;
}

playAgain();


//end of game.

// need the computer to correctly calculate totals and 

// 14. window.confirm | Play again? (Display wins, losses, ties)
// store variable and use
/* a= win
b= lose
c= tie.
If user lost, add 1 to a variable.
If user won, add 1 to b variable.
If user ties, add 1 to c variable. */
