var squares = document.querySelectorAll("td");
var restartButton = document.querySelector("button");
let gameStatus = true;


function checkMarkedBoxes(x,y,z){
    var zero = document.getElementById(x).textContent;
    var one = document.getElementById(y).textContent;
    var two = document.getElementById(z).textContent;

    if(zero!== "" && one!=="" && two!=="" && zero === one && one === two){
        console.log("Wonn"); 
        document.querySelector("span").textContent = zero+" Won!";
        gameStatus=false;
    }
    else
    {
        console.log("didnt work");
    }
}

// checking for win
function checkForWin(){
    // for referrence of winning conditions
    // var winningConditions = [
    //     [0,1,2],
    //     [0,3,6],
    //     [6,7,8],
    //     [2,5,8],
    //     [1,4,7],
    //     [3,4,5],
    //     [0,4,8],
    //     [2,4,6],
    // ];
    checkMarkedBoxes("0","1","2");
    checkMarkedBoxes("0","3","6");
    checkMarkedBoxes("6","7","8");
    checkMarkedBoxes("2","5","8");
    checkMarkedBoxes("1","4","7");
    checkMarkedBoxes("3","4","5");
    checkMarkedBoxes("0","4","8");
    checkMarkedBoxes("2","4","6");
    
}

function checkForDraw(){
    var zero = document.getElementById("0").textContent;
    var one = document.getElementById("1").textContent;
    var two = document.getElementById("2").textContent;
    var three = document.getElementById("3").textContent;
    var four = document.getElementById("4").textContent;
    var five = document.getElementById("5").textContent;
    var six = document.getElementById("6").textContent;
    var seven = document.getElementById("7").textContent;
    var eight = document.getElementById("8").textContent;
    if(zero!=="" && one!=="" && two!=="" && three!=="" && four!=="" && five!=="" && six!=="" && seven!=="" && eight!=="" && gameStatus === true)
    {
        document.querySelector("span").textContent = "Game Draw!";
    }
    
}



//changing player and fill boxes

var currentPlayer = "X";

function changePlayer(){
    
    if(currentPlayer == "X")
    {
        currentPlayer = "O";
    }
    else
    {
        currentPlayer = "X";
    }
}

function changeMarker(){
    if(this.textContent === "")
    {
        this.textContent = currentPlayer;
        checkForWin();
        checkForDraw();
        if(gameStatus===false)
        {
            for(var i=0;i<squares.length;i++)
            {
                if(squares[i].textContent=="")
                {
                    squares[i].style.cursor="not-allowed";
                    squares[i].removeEventListener("click",changeMarker);
                }
            }
        }

        changePlayer();
    }
    
    
}

function addEventListenerFun(){
    for(var i = 0; i < squares.length ;i++)
    {
        squares[i].addEventListener("click",changeMarker);
    }
}
addEventListenerFun();


//Restarting Game

function clearBoard(){
    for(var i = 0; i < squares.length ;i++)
    {
        squares[i].textContent = "";
    }
    currentPlayer = "X";
    document.querySelector("span").textContent = "";
    addEventListenerFun();
    gameStatus = true;
    for(var i = 0; i < squares.length ;i++)
    {
        squares[i].style.cursor="pointer";
    }
}

restartButton.addEventListener("click",clearBoard);


