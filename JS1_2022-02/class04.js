/******** Conditional Chain 1 ********/
/* Write the following as an if-elseif-else statement

Create a variable called "myDailyRun" and assign it a number value.
Create an if/else-if/else chain for the following scenarios:
myDailyRun is less than 5, display 'I think I'll stick with 5ks for now'
myDailyRun is between 6 and 15, display 'I'm ready to run a 10k'
myDailyRun is between 16 and 25, display 'I can definitely do a half-marathon'
myDailyRun is greater than 25, display 'Marathon time!'

*/
let myDailyRun = 10

if ( myDailyRun <= 5 ){

  console.log( `I think I'll stick with 5ks for now` )

} else if( myDailyRun >= 6 && myDailyRun <= 15 ){

  console.log(`I'm ready to run a 10k`)

} else if( myDailyRun >= 16 && myDailyRun <= 25 ){

  console.log(`I can definitely do a half-marathon`)

} else {

  console.log(`Marathon time!`)

}



/******** Conditional Chain 2 ********/
/* Re-write the if/else-if/else conditional below as a switch statement:

let faveShow = 'insecure';

if (faveShow === 'fleabag'){
  console.log(`Watch ${faveShow.toUpperCase()} on Amazon Prime`)
} else if (faveShow === 'insecure'){
  console.log(`Watch ${faveShow.toUpperCase()} on HBO Max`)
} else if (faveShow === 'bridgerton'){
  console.log(`Watch ${faveShow.toUpperCase()} on NetFlix`)
} else if (faveShow === 'killing eve'){
  console.log(`Watch ${faveShow.toUpperCase()} on BBC America`)
} else {
  console.log(`Maybe this is a new show I should watch?`)
}
*/

let faveShow = 'insecure'

switch(faveShow){
  case 'insecure':
    console.log(`Watch ${faveShow.toUpperCase()} on Amazon Prime`)
    break;
  case 'bridgerton':
    console.log(`Watch ${faveShow.toUpperCase()} on HBO Max`)
    break;
  case 'killing eve':
    console.log(`Watch ${faveShow.toUpperCase()} on BBC America`)
    break;
  default:
    console.log(`Maybe this is a new show I should watch?`)
}


/******** Functions ********/
/*
Declare a function 'oddOrEven' that takes 'num' as a parameter. 
This function checks to see if a number is even or odd, and 
prints a message. Verify that the function works by running 
it with an argument (an actual number).
*/

function oddOrEven(num){
  if(num % 2 === 0){
    console.log(`${num} is an even number`)
  } else {
    console.log(`${num} is an odd number`)
  }
}

oddOrEven(10)
oddOrEven(5)


/*
Declare a function 'trueOrFalse' that takes a boolean value 
and returns 'Yes' if that value is true, or 'No' if the value 
is false, or 'This is not a boolean.' if it's any other value. 
Run the function.
*/

function trueOrFalse (bool){
  if (bool === true){
    console.log('Yes')
  } else if(bool === false){
    console.log('No')
  } else {
    console.log('This is not a boolean')
  }
}

trueOrFalse(false)