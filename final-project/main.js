var nums = [];

window.onload = function() { //https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
    
    for(var i = 0; i < 10; i++){
        var currNum = document.getElementById("num" + i);
        nums[i] = currNum;
        currNum.style.opacity = "0";
        currNum.style.top = getRandom(0, window.innerHeight - 50) + "px";
        currNum.style.left = getRandom(0, window.innerWidth - 50) + "px";
    }
}

cursorPos = {x: 0, y: 0};

document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    for(var num of nums){
        var rect = num.getBoundingClientRect();
        if (cursorPos.x >= rect.left && cursorPos.x <= rect.right && cursorPos.y >= rect.top && cursorPos.y <= rect.bottom){
            num.style.opacity = "1";
            console.log("viewing:" + num)
        } 
        else{
            num.style.opacity = "0";
        }
    }
})

document.addEventListener("click", (e) => {
    if(e.target.className === "nums"){
        console.log(e.target.textContent)
    }
});


