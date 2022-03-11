/**** Conditionals - if/elseif/else ****/
// Create a variable called `color`

// Write an if/else-if/statement for the following scenario

// If `color` is blue, yellow, or red, print:
// '`color` is a primary color.'

// If color is orange, purple or green, print:
// '`color` is a secondary color.'

// If `color` is black or white, print:
// '`color` is technically not a color; it's considered a 'Shade'.'

// If `color` is any other color, print:
// 'I need to look up what type of color `color` is.'

let color = 'magenta'

if( color === 'blue' || color === 'yellow' || color === 'red'){
  console.log(`${color} is a primary color.`)
} else if( color === 'orange' || color === 'purple' || color === 'green'){
  console.log(`${color} is a secondary color.`)
} else if( color === 'black' || color === 'white'){
  console.log(`${color} is technically not a color; it's actually considered a 'Shade'.`)
} else {
  console.log(`I need to look up what type of color ${color} is.`)
}


/**** Conditionals - Ternary Operator ****/
// Turn the days-of-the-week conditional chain below into a ternary statement

// let today = 'thursday';

// if( today === 'monday' ){
//   console.log( 'Here we go again....' )
// } else if( today === 'tuesday' ){
//   console.log( 'Are we done yet?' )
// } else if( today === 'wednesday' ){
//   console.log( 'Getting a bit excited...' )
// } else {
//   console.log( 'Weekend is heeereee!' )
// }

let today = 'Sunday';

today === 'monday' ?
console.log( 'Here we go again....' )
: today === 'tuesday' ?
console.log( 'Are we done yet?' )
: today === 'wednesday' || today=== 'thursday'  ?
console.log( 'Getting a bit excited...' )
: console.log( 'Weekend is heeereee!' );
