// const resetBtn = document.querySelector(".btn_reset");
// const newgameBtn = document.querySelector(".btn_newgame");
// const allTdTags = document.querySelectorAll('td');
// const result = document.getElementById("result");
// let turnO = true;

// const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// allTdTags.forEach((box) => {
//     box.addEventListener("click", (e) => {
//         if (!box.innerText) { // Check if the box is empty
//             if (turnO) {
//                 box.innerText = "O";
//                   turnO = false; 
//             } else {
//                 box.innerText = "X";
//                   turnO = true; 
//             }
//             // turnO = !turnO; // Toggle the turn

//             box.disabled = true; // Disable the box after the first click
//         };
//             checkWinner();
//     });
// });

// const disabledBoxes = () =>{
//     for (const box of allTdTags) {
//          box.disabled = true
//     }
// }
// function showresult (text){
//     result.innerText = text;
//     disabledBoxes()
// }

// const resetButton = () =>{
//     turnO = true
// }

// const checkWinner = () =>{
//     for (let patten of winningCombinations) {
//         // console.log(patten[0],patten[1],patten[2])

//         let pos1Val = allTdTags[patten[0]].innerText; 
//         let pos2Val = allTdTags[patten[1]].innerText; 
//         let pos3Val = allTdTags[patten[2]].innerText; 

//         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if(pos1Val === pos2Val && pos2Val === pos3Val){
//                 showresult(" 🏆 The Winner is 🎉  : " + " " + pos1Val)
//             }
//         }
        
//     }
// }


const resetBtn = document.querySelector(".btn_reset");
const newgameBtn = document.querySelector(".btn_newgame");
const allTdTags = document.querySelectorAll('td');
const result = document.getElementById("result");
let turnO = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

allTdTags.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.innerText && !result.innerText) { // Check if the box is empty and the result is not shown
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }

            box.disabled = true; // Disable the box after the first click
            checkWinner();
        }
    });
});

const disabledBoxes = () => {
    allTdTags.forEach((box) => {
        box.disabled = true;
    });
};

const showResult = (text) => {
    result.innerText = text;
    disabledBoxes();
};

const resetGame = () => {
    allTdTags.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    result.innerText = "";
    turnO = true;
};

resetBtn.addEventListener("click", resetGame);
newgameBtn.addEventListener("click", resetGame);
const checkWinner = () => {
    let isDraw = true;

    for (let pattern of winningCombinations) {
        let pos1Val = allTdTags[pattern[0]].textContent;
        let pos2Val = allTdTags[pattern[1]].textContent;
        let pos3Val = allTdTags[pattern[2]].textContent;

        if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
            showResult(" 🏆 The Winner is 🎉  : " + " " + pos1Val);
            return; // Exit early if a winner is found
        }
    }

    // Check for a draw
    for (let box of allTdTags) {
        if (!box.textContent) {
            // If there is an empty box, the game is not a draw
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        showResult("It's a draw!");
    }
};
