// console.log('test')

// PART ONE
// Variables
let nameInput = document.getElementById('famous-name')

let verbInput = document.getElementById('verb-ing')

let adjectiveInput = document.getElementById('adjective')

let nounsInput = document.getElementById('nouns')

let submitBtn = document.getElementById('submit-btn')

let displayMsg = document.getElementById('display-msg')


// Event Listener
submitBtn.addEventListener('click', sillyMadLib)


// PART TWO
// Function to run in the Event Listener
function sillyMadLib(){
  let nameInputValue = nameInput.value
  let verbInputValue = verbInput.value
  let adjectiveInputValue = adjectiveInput.value
  let nounsInputValue = nounsInput.value

  let msg = `The ancient art of ${verbInputValue} was popularized by ${nameInputValue} in 1200BC. It is a very ${adjectiveInputValue} form of creative expression, especially when combined with ${nounsInputValue}.`

  displayMsg.innerHTML = msg;
}

