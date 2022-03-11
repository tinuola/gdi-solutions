/******** Function Return ********/

/* Write a function that returns the length of a string */
function checkStringLength (str){
  return str.length;
}

checkStringLength('pineapple')
console.log(  checkStringLength('pineapple')  )


/* 
Write a function that compares two numbers and returns 
the larger one. If the numbers are equal, print a message 
that says they are equal.
*/
function compareTwoNumbers (num1, num2){

  if (num1 > num2){
    return `${num1} is greater than ${num2}`
  } else if (num1 < num2){
    return `${num2} is greater ${num1}` 
  } else {
  return `These two numbers are equal`
  }

}

compareTwoNumbers(3,5)
console.log(  compareTwoNumbers(3,5)  )



/******** Loops ********/

/* 1.
Write a `for` loop that loops through the numbers 1 to 30 
and prints the results according to the following conditions:

if a number is divisible by 3 and 5, print your name, 
otherwise just print the number
*/

for(let num = 0; num <= 30; num++){

  if(num % 3 === 0 && num % 5 === 0){
    console.log(`Jess`)
  } else {
    console.log(num)
  }

}


/* 2.
Change the counter in the `for` loop below to increase by 2

for (let j = 0; j <=20; ???) {
  console.log(j)
}

*/
for (let j = 0; j <=20; j+=2) {
  console.log(j)
}



/* 3.
Create a `while` loop that counts down to zero and 
runs the following output: 
document.write(`I hate doing dishes<br>`)

Starting condition
let dirtyDishes = 10
*/

let dirtyDishes = 10

while (dirtyDishes > 0){
  document.write(`${dirtyDishes}. I hate doing dishes<br>`)
  dirtyDishes--
}