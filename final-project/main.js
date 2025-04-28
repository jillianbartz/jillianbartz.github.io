window.onload = function() { //https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
    const gridDoc = document.getElementById("number-grid");

    const colAmt = Math.floor(gridDoc.clientWidth / 80);
    const rowAmt = Math.floor(gridDoc.clientHeight / 80);

    var grid = [];

    for (var r = 0; r <= rowAmt; r++) {
        for (var c = 0; c <= colAmt; c++) {
            grid.push({row: r, col: c});
        }
    }

    console.log(grid);

    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var nums = [];
    
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

    glowLight.style.left = cursorPos.x + "px";
    glowLight.style.top = cursorPos.y + "px";

    console.log(glowLight.style.top);


    if(cursorPos.y <= 80){
        glowLight.style.visibility = "hidden";
        document.body.style.cursor = "default";
    }
    else{
        glowLight.style.visibility = "visible";
        document.body.style.cursor = "none";
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











