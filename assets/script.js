// these objects create a boolean-like value for the onclick functionality
let rock = {
    "value" : false,
    "numAssign" : 0
};
let paper = {
    "value" : false,
    "numAssign" : 1
};
let scissors = {
    "value" : false,
    "numAssign" : 2
};
let replay = {
    "value" : false
};

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


// computer chooses a number between 0-1-2.
let computerChoice = Math.floor(Math.random() * 3); //used the number 3, because math.random documentation says it will use 0-2. (which is 3 integers)
console.log(computerChoice);


// rock element's functionality
rockEl.onclick = function playRock() {
    // create a new div to replace rock when clicked
    let resultDiv = document.createElement('div');
    resultDiv.classList.add('gameEls');
    let result = document.createElement('img');
    let resultText = document.createElement('h1');

    // switch the divs
    rockEl.classList.add('hide');
    result.classList.add('resultsImages');
    resultText.classList.add('h1')

    // creates a boolean-like value from object-variable, 'rock'.
    // when rock is clicked, hide paper and scissors & show results.
    rock["value"] = true;
    if (rock["value"] = true) {
        paperEl.classList.add('hide');
        scissorsEl.classList.add('hide');
    }

    if (computerChoice === paper["numAssign"] && rock["value"] == true) {
        console.log("Sorry! I chose paper.");
        result.setAttribute(
            'src',
            './assets/photos/lost.png'
        );
    }else if (computerChoice === scissors["numAssign"] && rock["value"] == true) {
        console.log("I chose scissors. You win!");
        result.setAttribute(
            'src',
            './assets/photos/won.png'
        );
    }else {
        console.log("It's a tie!")
        result.setAttribute(
            'src',
            './assets/photos/tie.png'
        );
    };

    bodyEl.appendChild(resultDiv);
    resultDiv.appendChild(result);
    // resultDiv.appendChild(resultText);
    return;
}

// paper element's functionality
paperEl.onclick = function playPaper() {
    let resultDiv = document.createElement('div');
    resultDiv.classList.add('gameEls');
    let result = document.createElement('img')
    result.setAttribute(
        'src',
        './assets/photos/chosePaper.png'
    );
    paperEl.classList.add('hide');
    result.classList.add('resultsImages');

    paper["value"] = true;
    if (paper["value"] = true) {
        rockEl.classList.add('hide');
        scissorsEl.classList.add('hide');
    }

    if (computerChoice === scissors["numAssign"] && paper["value"] == true) {
        console.log("Sorry! I chose scissors.");
        result.setAttribute(
            'src',
            './assets/photos/lost.png'
        );
    }else if (computerChoice === rock["numAssign"] && paper["value"] == true) {
        console.log("I chose rock. You win!");
        result.setAttribute(
            'src',
            './assets/photos/won.png'
        );
    }else {
        console.log("It's a tie!")
        result.setAttribute(
            'src',
            './assets/photos/tie.png'
        );
    };
    
    bodyEl.appendChild(resultDiv);
    resultDiv.appendChild(result);
    // resultDiv.appendChild(resultText);
    return;
}

// scissor element's functionality
scissorsEl.onclick = function playScissors() {
    let resultDiv = document.createElement('div');
    resultDiv.classList.add('gameEls');
    let result = document.createElement('img')
    result.setAttribute(
        'src',
        './assets/photos/choseScissors.png'
    );

    scissorsEl.classList.add('hide');
    result.classList.add('resultsImages');

    scissors["value"] = true;
    if (scissors["value"] = true) {
        rockEl.classList.add('hide');
        paperEl.classList.add('hide');
    }

    if (computerChoice === rock["numAssign"] && scissors["value"] == true) {
        console.log("Sorry! I chose rock.");
        result.setAttribute(
            'src',
            './assets/photos/lost.png'
        );
    }else if (computerChoice === paper["numAssign"] && scissors["value"] == true) {
        console.log("I chose paper. You win!");
        result.setAttribute(
            'src',
            './assets/photos/won.png'
        );
    }else {
        console.log("It's a tie!")
        result.setAttribute(
            'src',
            './assets/photos/tie.png'
        );
    };

    bodyEl.appendChild(resultDiv);
    resultDiv.appendChild(result);
    // resultDiv.appendChild(resultText);
    return;
}

// This sets up the flow of the HTML
bodyEl.appendChild(bannerDiv);
bodyEl.appendChild(gameEls);
bannerDiv.appendChild(bannerEl);
gameEls.appendChild(rockEl);
gameEls.appendChild(paperEl);
gameEls.appendChild(scissorsEl);


//end of game.

// tell user "you win!, you lost. it's a tie."
// 14. window.confirm Play again? (Display wins, losses, ties)
