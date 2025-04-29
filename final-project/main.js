var nums = [];

window.onload = function() { //https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
    const gridDoc = document.getElementById("number-grid");

    const colAmt = Math.floor(gridDoc.clientWidth / 80);
    const rowAmt = Math.floor(gridDoc.clientHeight / 80);

    var grid = [];

    for (var r = 0; r <= rowAmt; r++){
        for (var c = 0; c <= colAmt; c++){
            grid.push({row: r, col: c});
        }
    }

    console.log(grid);

    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    nums = [];
    
    for(var i = 0; i < 10; i++){
        var currNum = document.getElementById("num" + i);
        nums[i] = currNum;
        var tempRand = getRandom(0, grid.length);
        var gridPoint = grid[tempRand];

        currNum.style.gridRow = gridPoint.row;
        currNum.style.gridColumn = gridPoint.col;

        grid.splice(tempRand, 1);
    }
}

const glowLight = document.getElementById("glow-cursor");

cursorPos = {x: 0, y: 0};

document.addEventListener("mousemove", (e) => {
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

        console.log(glowLight.style.top);

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
    if(e.target.className === "nums"){
        console.log(number.textContent.length)
        if(number.textContent.length < 12){
            if(number.textContent.length === 3 || number.textContent.length === 7){
                number.textContent += "-"
            }
            number.textContent += e.target.textContent;
        }
    }
    if(e.target === submitButton){
        if(number.textContent.length === 12){
            alert("Submitted number: " + number.textContent);
            number.textContent = "";
        }
        else{
            alert("Unable to submit number, please ensure length is correct!");
        }
    }
    if(e.target === deleteButton){
        number.textContent = number.textContent.slice(0, -1);
        if(number.textContent.at(number.textContent.length - 1) === "-"){
            number.textContent = number.textContent.slice(0, -1);
        }
    }
});











