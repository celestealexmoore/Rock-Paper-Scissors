// var rock = 1;
// var paper = 2;
// var scissors = 3;

// alert("Do you wanna play?");

var gameEl = document.createElement('div');
gameEl.classList.add('gameImgs')

var rockEl = document.createElement('img');
rockEl.classList.add('images');
rockEl.src = "./photos/rock.png";

var paperEl = document.createElement('img');
paperEl.classList.add('images');
paperEl.setAttribute(
    'src',
    './photos/rock.png'
);

var scissorsEl = document.createElement('img');
scissorsEl.classList.add('images');
scissorsEl.setAttribute(
    'src',
    './photos/rock.png'
);

gameEl.appendChild(rockEl);
gameEl.appendChild(paperEl);
gameEl.appendChild(scissorsEl);


// function startGame() {
//   prompt("Please choose Rock, Paper, or Scissors.", "insert answer here.");

//   if (confirm == true) {
//     console.log("You lose!");
//   }

//   function computerWin() {
//     var computerChoice = Math.random(4); //used the number for, because math documentation says it will use 0-3

//     if (computerChoice == paper && userChoice == "rock") {
//       console.log("Sorry! You lost.");
//       alert("Sorry! You lost.");
//     } else if (computerChoice == rock && userChoice == "scissors") {
//       console.log("Sorry! You lost.");
//       alert("Sorry! You lost.");
//     } else if (computerChoice == scissors && userChoice == "paper") {
//       console.log("Sorry! You lost.");
//       alert("Sorry! You lost.");
//     }
//     computerWin();
//   }
// }

// startGame();

// if (confirm("Let's play Rock, Paper, Scissors!")) {
//   //   txt = "You pressed OK!";
//   // } else {
//   //   txt = "You pressed Cancel!";
//   }

//   var userFeedback = prompt("Please choose Rock, Paper, or Scissors.", "insert answer here.");

// if (userFeedback == null || userFeedback == "") {
//   txt = "User cancelled the prompt.";
// } else {
//   txt = "Sorry, you lost.";
// }

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
