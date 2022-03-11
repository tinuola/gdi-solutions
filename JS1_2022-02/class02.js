/**** Compound Assignment Operators ****/
let age = 2;
age += 7 // Increase the value of age by 7
age -= 3 // Then decrease value by 3
age *= 15 // Then multiple it by 15
age /= 9 // Then divide it by 9
age++ // Then increment it by 1
age--// Then decrement it by 1
console.log(age) // Final answer should be 10.



/**** String Methods ****/
// Using the reference docs, find the string methods to perform the tasks below
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// W3Schools: https://www.w3schools.com/jsref/jsref_obj_string.asp

// Repeat the variable 4 times
let parrot = "Hello polly "
parrot.repeat(4)
console.log(  parrot.repeat(4)  )

// Join the two variables
let speed = "slow"
let method = "roast"
speed.concat(method)
console.log( speed.concat(method)  )

// Turn this loud variable into lowercase
let allCaps = 'USING ALL CAPS IS LIKE SHOUTING!'
allCaps.toLowerCase()
console.log(  allCaps.toLowerCase()  )

// Extract the substring 'zzzz' from the first variable and save it to the second variable
// There are two methods we can use; try them both
// Careful: There is a deprecated method also; do not use it
let cheatMeal = 'pizzzza!'
let postCheatMeal1 = cheatMeal.slice(2,6)
let postCheatMeal2 = cheatMeal.substring(2,6)
console.log( postCheatMeal1 )
console.log( postCheatMeal2 )

// Find the string method that will return the [hint] 'character' found at a specified index
// In the string variable below, the index value we want is the 3rd position
// What value is returned?
let spanish = 'Buenos Dias'
spanish.charAt(2)
console.log(  spanish.charAt(2)  ) // Returns 'e'