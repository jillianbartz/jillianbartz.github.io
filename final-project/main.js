cursorPos = {x: 0, y: 0};

var nums = [];

for(var i = 0; i < 10; i++){
    nums[i] = document.getElementById("num"+i);
}

document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    for(var num of nums){
        var rect = num.getBoundingClientRect();
        if (cursorPos.x >= rect.left && cursorPos.x <= rect.right && cursorPos.y >= rect.top && cursorPos.y <= rect.bottom){
            num.style.visibility = "visible";
            console.log("viewing:" + num)
        } 
        else{
            num.style.visibility = "hidden";
        }
    }
})



