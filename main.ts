const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertx = ["Willy the Goblin","Big Daddy","Father Christmas"];
const inserty = ["the soup kitchen","Disneyland","the White House"];
const insertz = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}
randomize.addEventListener('click', result);


function result() {
  let newStory;
  let itemx,itemy,itemz;
  newStory = storyText;
  itemx=randomValueFromArray(insertx);
  itemy=randomValueFromArray(inserty);
  itemz=randomValueFromArray(insertz);

  newStory=newStory.replace(':insertx:',itemx);
  newStory=newStory.replace(':insertx:',itemx);
  newStory=newStory.replace(':inserty:',itemy);
  newStory=newStory.replace(':insertz:',itemz);

  if(customName.value !== '') {
    let name = customName.value;
    newStory=newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
