/**** Bonus: The Taco-Truck app - Version 2! ****/
/*
Let's assume the customer is interested in ordering tacos, that is, they've typed `yes`. Now we want to take their order and process it.

The following steps have been pseudo-coded into the `if` block. Can you turn them into actual code? Good luck!
*/

// Use or set up the instructions/variables from Part 1 of the App practice in Class 1: https://replit.com/@tinuola/class01practice#script.js

alert('Hello and welcome to our taco truck!')

let answer = prompt('Would you like to place an order?')

if( answer === 'yes'){

  let tacoChoice = prompt('Would you like tofu, beef or shrimp taco?');
  
  let tacoQuantity = prompt('How many tacos would you like to order?');
  
  let tacoPrice = 1.5;
  
  let finalOrder = tacoQuantity * tacoPrice;
  
  document.write( `You ordered ${tacoQuantity} ${tacoChoice} tacos. Your bill is $${finalOrder}. Thanks!` )
  
} else if (answer === 'no'){

  alert(`Okay, have a good day then!`)
  
} else {

  alert(`Sorry, our app only understands 'yes' or 'no' responses.`)
  
}
  
  