const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//used AI to make up a new story
const storyText = "It was 94 fahrenheit outside, so :insertx: decided to have some fun. When they got to :inserty:, they stopped in their tracks for a moment, then :insertz:. Bob watched in shock, but honestly, they should have expected it — :insertx: weighs 300 pounds, and was always full of surprises.";
const insertX = ["Benny the Breakdancing Bear", "Sasha the Sneaky Squirrel", "Toby the Trampoline Toad"];
const insertY = ["the giant fountain", "the ice cream stand", "the duck pond"];
const insertZ = ["did a triple backflip into the water", "stole an entire waffle cone and vanished", "challenged a goose to a dance-off—and won"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem).replace(":inserty:", yItem).replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94 - 32) * 5/9) + " centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature).replace("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}