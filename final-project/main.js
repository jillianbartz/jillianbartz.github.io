var nums = [];
var grid = [];

var hideNumbersOnMove = false;

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function createGrid(){
    const gridDoc = document.getElementById("number-grid");

    const colAmt = Math.floor(gridDoc.clientWidth / 80);
    const rowAmt = Math.floor(gridDoc.clientHeight / 80);

    for (var r = 0; r < rowAmt; r++){
        for (var c = 0; c < colAmt; c++){
            grid.push({row: r + 1, col: c + 1});
        }
    }
}

function placeNumsInGrid(){
    nums = [];
    var tempGrid = grid.slice(); //make a temp copy of the grid so we do not alter the original when placing
    
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

window.onload = function() { //https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
    createGrid();
    placeNumsInGrid();
}

const glowLight = document.getElementById("glow-cursor");

cursorPos = {x: 0, y: 0};

document.addEventListener("mousemove", (e) => {
    if(hideNumbersOnMove){return;}

    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    const hoverRadius = 30;

    for(var num of nums){
        var rect = num.getBoundingClientRect();

        var hoverLeft = rect.left - hoverRadius;
        var hoverRight = rect.right + hoverRadius;
        var hoverTop = rect.top - hoverRadius;
        var hoverBottom = rect.bottom + hoverRadius;

        glowLight.style.left = cursorPos.x + 17 + "px";
        glowLight.style.top = cursorPos.y - 1 +"px";

        if(cursorPos.y <= 80){
            glowLight.style.visibility = "hidden";
        }
        else{
            glowLight.style.visibility = "visible";
        }

        if (cursorPos.x >= hoverLeft && cursorPos.x <= hoverRight && cursorPos.y >= hoverTop && cursorPos.y <= hoverBottom){
            num.style.color = "#d3e874";
            num.style.textShadow = "0px 0px 20px #d3e874";
        } 
        else{
            num.style.color = "black";
            num.style.textShadow = "none";
        }
    }
})

const number = document.getElementById("number");
const submitButton = document.getElementById("submit-button");
const deleteButton = document.getElementById("delete-button"); 

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
            hideNumbersOnMove = true;
            setTimeout(() => { //we need to delay the new random placement after clicking because the mousemove will show the new spawning of the clicked number if not
                placeNumsInGrid();
                hideNumbersOnMove = false;
            }, 200);
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
    }
    if(clickedObject === deleteButton){
        number.textContent = number.textContent.slice(0, -1);
        if(number.textContent.at(number.textContent.length - 1) === "-"){
            number.textContent = number.textContent.slice(0, -1);
            console.log(number.textContent.length)
        }
    }
});











