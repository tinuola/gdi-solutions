// console.log('test')

// PART ONE
// Variables
let numOfBoxes = document.getElementById('number-of-boxes')

let submitBtn = document.getElementById('submit-btn')

let container = document.getElementById('container')

let displayMsg = document.getElementById('display-msg')


// PART TWO
// Helper functions used inside the Event Listener
const addBox = () => {  
  let newDiv = document.createElement('div')
  newDiv.className = 'box'
  container.appendChild(newDiv)
}

const displayErrorMsg = (msg) => {
  displayMsg.style.display = 'block';
  displayMsg.innerHTML = msg;
}

const clearErrorMsg = () => {
  displayMsg.style.display = 'none';
  displayMsg.innerHTML = '';
}


// PART THREE
// Event Listener
submitBtn.addEventListener('click', function(){

  let num = numOfBoxes.value;

  if( num <= 0 ){

    let error = 'Please enter a positive number'

    displayErrorMsg(error);

  } else {

    for(let i = 1; i <= num; i++){

      addBox();

    }

    clearErrorMsg()
  }

})
