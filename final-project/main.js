function getRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

var grid = [];

function createGrid(){
    grid = [];

    const gridDoc = document.getElementById("grid");

    const colAmt = Math.floor(gridDoc.clientWidth / 80);
    const rowAmt = Math.floor(gridDoc.clientHeight / 80);

    for (var r = 0; r < rowAmt; r++){
        for (var c = 0; c < colAmt; c++){
            grid.push({row: r + 1, col: c + 1});
        }
    }
}

var nums = [];
var tempGrid;

function placeNumsInGrid(){
    nums = [];
    tempGrid = grid.slice(); //make a temp copy of the grid so we do not alter the original when placing
    
    for(var i = 0; i < 10; i++){
        var currNum = document.getElementById("num" + i);
        nums[i] = currNum;
        var tempRand = getRandom(0, tempGrid.length);
        var gridPoint = tempGrid[tempRand];

        currNum.style.gridRow = gridPoint.row;
        currNum.style.gridColumn = gridPoint.col;

        tempGrid.splice(tempRand, 1);
    }
}

var buttons = document.getElementsByClassName("button");

function placeButtonsInGrid(){
    for(var button of buttons){
        var tempRand = getRandom(0, tempGrid.length);
        var gridPoint = tempGrid[tempRand];

        button.style.gridRow = gridPoint.row;
        button.style.gridColumn = gridPoint.col;

        tempGrid.splice(tempRand, 1);
    }
}

window.onload = function() { //https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
    createGrid();
    placeNumsInGrid();
    placeButtonsInGrid();
}

var cursorPos = {x: 0, y: 0};
const hoverRadius = 30;

function hoverOnNumbers(){
    for(var num of nums){
        var rect = num.getBoundingClientRect();

        var hoverLeft = rect.left - hoverRadius;
        var hoverRight = rect.right + hoverRadius;
        var hoverTop = rect.top - hoverRadius;
        var hoverBottom = rect.bottom + hoverRadius;

        if (cursorPos.x >= hoverLeft && cursorPos.x <= hoverRight && cursorPos.y >= hoverTop && cursorPos.y <= hoverBottom){
            num.style.color = "#d3e874";
            num.style.textShadow = "0px 0px 20px #d3e874";
        } 
        else{
            num.style.color = "black";
            num.style.textShadow = "none";
        }
    }
}

function hoverOnButtons(){    
    for(var button of buttons){
        var rect = button.getBoundingClientRect();
    
        var hoverLeft = rect.left - hoverRadius;
        var hoverRight = rect.right + hoverRadius;
        var hoverTop = rect.top - hoverRadius;
        var hoverBottom = rect.bottom + hoverRadius;
    
        if (cursorPos.x >= hoverLeft && cursorPos.x <= hoverRight && cursorPos.y >= hoverTop && cursorPos.y <= hoverBottom){
            button.style.visibility = "visible";
        } 
        else{
            button.style.visibility = "hidden";
        }
    }
}

const glowLight = document.getElementById("glow-cursor");

function moveGlowLight(){
    glowLight.style.left = cursorPos.x + 17 + "px";
    glowLight.style.top = cursorPos.y - 1 +"px";

    if(cursorPos.y <= 80){
        glowLight.style.visibility = "hidden";
    }
    else{
        glowLight.style.visibility = "visible";
    }
}

var hideNumbersOnMove = false;

document.addEventListener("mousemove", (e) => {
    if(hideNumbersOnMove){return;}

    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    moveGlowLight();
    hoverOnNumbers();
    hoverOnButtons();
})

function moveObjectsAfterClick(){
    hideNumbersOnMove = true;
    setTimeout(() => { //we need to delay the new random placement after clicking because the mousemove will show the new spawning of the clicked number if not
        placeNumsInGrid();
        placeButtonsInGrid();
        hideNumbersOnMove = false;
    }, 200);
}

const submitButton = document.getElementById("submit-button");
const deleteButton = document.getElementById("delete-button");
const number = document.getElementById("number");

document.addEventListener("click", (e) => {
    var clickedObject = e.target;
    if(clickedObject.className === "nums"){
        console.log(number.textContent.length)
        if(number.textContent.length < 12){
            if(number.textContent.length === 3 || number.textContent.length === 7){
                number.textContent += "-"
            }
            number.textContent += clickedObject.textContent;
            clickedObject.style.color = "black";
            clickedObject.style.textShadow = "none";
            moveObjectsAfterClick();
        }
    }
    if(clickedObject === submitButton){
        if(number.textContent.length === 12){
            alert("Submitted number: " + number.textContent);
            number.textContent = "";
        }
        else{
            alert("Unable to submit number, please ensure length is correct!");
        }
        clickedObject.style.visibility = "hidden";
        moveObjectsAfterClick();
    }
    if(clickedObject === deleteButton){
        number.textContent = number.textContent.slice(0, -1);
        if(number.textContent.at(number.textContent.length - 1) === "-"){
            number.textContent = number.textContent.slice(0, -1);
        }
        clickedObject.style.visibility = "hidden";
        moveObjectsAfterClick();
    }
});











