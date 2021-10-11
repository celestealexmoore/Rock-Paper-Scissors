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

// This controls the game element's float behavior
let gameEls = document.createElement('div');
gameEls.classList.add('gameEls');

// These are the individual game elements
let rockEl = document.createElement('img');
rockEl.classList.add('images');
rockEl.setAttribute(
    'src',
    './assets/photos/rock.png'
);
rockEl.onclick = function changeContent() {
    rockEl.classList.add('hide');
    return;
}

let paperEl = document.createElement('img');
paperEl.classList.add('images');
paperEl.setAttribute(
    'src',
    './assets/photos/paper.png'
);
paperEl.onclick = function changeContent() {
    paperEl.classList.add('hide');
    return;
}

let scissorsEl = document.createElement('img');
scissorsEl.classList.add('images');
scissorsEl.setAttribute(
    'src',
    './assets/photos/scissors.png'
);
scissorsEl.onclick = function changeContent() {
    scissorsEl.classList.add('hide');
    return;
}

// This sets up the flow of the HTML
bodyEl.appendChild(bannerDiv);
bodyEl.appendChild(gameEls);
bannerDiv.appendChild(bannerEl);
gameEls.appendChild(rockEl);
gameEls.appendChild(paperEl);
gameEls.appendChild(scissorsEl);


// functionality of the game.

// let rock = 0;
// let paper = 1;
// let scissors = 2;

// const consent = confirm("Do you wanna play?");
// let letsPlay;

// if (!consent) {
//     console.log(consent);
// } else {
//     letsPlay = prompt(
//         "Please choose Rock, Paper, or Scissors.",
//         "insert answer here."
//     ); //letsPlay == "rock"
//   startGame(letsPlay.toLowerCase()); //letsPlay.toLowerCase() => "rock"
//   //startGame("rock")
// }

// function verifyAnswer(input) {
//     if (input != "rock" && input != "paper" && input != "scissors") {
//     let newInput = prompt(
//     "Please choose Rock, Paper, or Scissors.",
//     "try again."
//     );
//     newInput = newInput.toLowerCase();
//     startGame(newInput);
//     } else {
//     return;
//     }
// };

//     function startGame(input) {
//       //startGame("rock") => input == "rock"
//     verifyAnswer(input);

//     let computerChoice = Math.floor(Math.random() * 3); //used the number 4, because math.random documentation says it will use 0-3.
//     console.log(computerChoice);

//     if (computerChoice == rock && input == "paper") {
//     alert("I chose rock. You win!");
//     }else if (computerChoice == paper && input == "scissors") {
//     alert("I chose paper. You win!");
//     }else if (computerChoice == scissors && input == "rock") {
//     alert("I chose scissors. You win!");
//     }else if (computerChoice == rock && input == "scissors") {
//     alert("Sorry! I chose rock.");
//     }else if (computerChoice == paper && input == "rock") {
//     alert("Sorry! I chose paper.");
//     }else if (computerChoice == scissors && input == "paper") {
//     alert("Sorry! I chose scissors.");
//     }else {
//     alert("It's a tie!")
//     };
//     return;
// };

//end of game.
  //game is giving me several rounds although I only wanted one.


// 4. Write Algorithm for computer to choose between r, p, or s at random.
// 5. Write if-statement: "if (computer feedback r && user feedback s)":
// 6. else if: "if (computer feedback p && user feedback r)":
// 7. else if: "if (computer feedback s && user feedback p)":
// 8. window.alert Sorry! You lost.
// 9. window.confirm Play again? (Display wins, losses, ties)
//10. Write if-statement: "if (user feedback r && computer feedback s)":
// 11. else if: "if (user feedback p && computer feedback r)":
// 12. else if: "if (user feedback s && computer feedback p)":
// 13. window.alert Nice! You won!
// 14. window.confirm Play again? (Display wins, losses, ties)
//10. Write if-statement: "if (user feedback r && computer feedback r)":
// 11. else if: "if (user feedback p && computer feedback p)":
// 12. else if: "if (user feedback s && computer feedback s)":
// 13. window.alert It's a tie!
// 14. window.confirm Play again? (Display wins, losses, ties)
