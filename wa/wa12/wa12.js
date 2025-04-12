const newQuote = document.querySelector("#js-new-fact");
const newAnswer = document.querySelector("#js-new-image");

newQuote.addEventListener("click", () => getQuote());
newAnswer.addEventListener("click", () => getImage());

const apiFact = "https://catfact.ninja/fact";
const apiImage = "https://api.thecatapi.com/v1/images/search";

window.onload = function(){
    getQuote();
    getImage();
}

function getQuote(){
   fetch(apiFact)
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
        })
    .then((text) => {
        displayQuote(text.fact)
        })
    .catch((error) => {
        console.log("Error fetching data")
        alert("Error fetching data")
    });
}

function displayQuote(text){
    const quoteText = document.getElementById("js-fact-text");
    quoteText.textContent = text;
}

function getImage(){
    fetch(apiImage)
     .then((response) => {
         if (!response.ok) {
         throw new Error(`HTTP error: ${response.status}`);
         }
         return response.json();
         })
     .then((text) => {
        displayImage(text[0].url)
         })
     .catch((error) => {
         console.log("Error fetching data")
         alert("Error fetching data")
     });
 }
 
 function displayImage(text){
     const quoteText = document.getElementById("js-cat-image");
     quoteText.src = text;
 }
