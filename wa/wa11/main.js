const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/pic1.jpeg", "images/pic2.jpeg", "images/pic3.jpeg", "images/pic4.jpeg", "images/pic5.jpeg"];

/* Declaring the alternative text for each image file */
const altText = ["picture 1", "picture 2", "picture 3", "picture 4", "picture 5"];

/* Looping through images */
for(let i = 0; i < images.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);


    newImage.addEventListener("click", function () {
        displayedImage.setAttribute('src', images[i]);
        displayedImage.setAttribute('alt', altText[i]);
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => changeColor(btn.getAttribute("class")))

function changeColor(currClass){
    if(currClass == "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
        overlay.style.width = displayedImage.clientWidth + "px";
        overlay.style.height = displayedImage.clientHeight + "px";
    }
    else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}



