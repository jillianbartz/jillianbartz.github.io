const newQuote = document.querySelector("#js-new-quote");
const newAnswer = document.querySelector("#js-tweet");

newQuote.addEventListener("click", () => getQuote());
newAnswer.addEventListener("click", () => getAnswer());

const api = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

window.onload = function(){
    getQuote();
};

function getQuote(){
   fetch(api)
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
        })
    .then((text) => {
        displayQuote(text.question)
        })
    .catch((error) => {
        console.log("Error fetching data")
        alert("Error fetching data")
    });
}

function displayQuote(text){
    const quoteText = document.getElementById("js-quote-text");
    quoteText.textContent = text;
}

function getAnswer(){
    fetch(api)
     .then((response) => {
         if (!response.ok) {
         throw new Error(`HTTP error: ${response.status}`);
         }
         return response.json();
         })
     .then((text) => {
         displayQuote(text.answer)
         })
     .catch((error) => {
         console.log("Error fetching data")
         alert("Error fetching data")
     });
 }
 
 function displayAnswer(text){
     const quoteText = document.getElementById("js-answer-text");
     quoteText.textContent = text;
 }
