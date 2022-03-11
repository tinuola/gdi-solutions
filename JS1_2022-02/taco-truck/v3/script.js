console.log('test')

// Variables
let customerOrder = document.getElementById('order-input')

let halfDozenTacos = document.getElementById('taco-half-dozen')

let dozenTacos = document.getElementById('taco-dozen')

let orderQuantity = document.getElementById('order-quantity')

let orderBtn = document.getElementById('submit-btn')

let msg = ''

let displayMsg = document.getElementById('display-msg')

// Event Listener
orderBtn.addEventListener('click', function () {

  let tacoType = customerOrder.value;

  let tacoQuantity = orderQuantity.value

    if (halfDozenTacos.checked){

      let calc = tacoQuantity * 7;

      msg = `You ordered ${tacoQuantity} half-dozen ${tacoType} tacos; your total is $${calc}.`
      
      displayMsg.innerHTML = msg;
      
      displayMsg.style.display = 'block';
  
  } else if(dozenTacos.checked){

    let calc2 = tacoQuantity * 10
    
    msg = `You ordered ${tacoQuantity} dozen ${tacoType} tacos; your total is $${calc2}.`
    
    displayMsg.innerHTML = msg;
    
    displayMsg.style.display = 'block';

  } else {

    msg = `Something's wrong, please try again.`
    
    displayMsg.innerHTML = msg;
    
    displayMsg.style.display = 'block';

  }

});