/**** Debugging Exercises ****/

// #1
console.log( 'hello' )

// #2
let favoriteColor = 'Tomato'
console.log( favoriteColor )

// #3
let nerdJoke = "Debugging is like being the detective "
let nerdJoke2 = "in a crime novel where you're ALSO the murderer!"
console.log(nerdJoke)
console.log(nerdJoke2)

// #4
let myName = "Rita Loblaw"
let myHobby = "write the Rita Loblaw Law Blog"
console.log("Hello, my name is " + myName + " and I " + myHobby + "!")

// #5
console.log("My console said 'Error!' so I kicked it.")



/**** String Exercises ****/

/* #1 Store a friend's name in a variable. Using any of the four output methods learned, display a greeting using that variable: "Hello <name>, how are you doing today?" */

let friend = 'Jacqueline'
console.log(`Hello ${friend}, how are you doing today?`)
// document.write(`Hello ${friend}, how are you doing today?`)
// alert(`Hello ${friend}, how are you doing today?`)
// prompt(`Hello ${friend}, how are you doing today?`)


/* #2 Reassign the value of the variable to a different friend's name and display a new greeting: "<name>! I didn't realize it was you!" */

friend = 'Michelle'
console.log(`${friend}! I didn't realize it was you!`)
// document.write(`${friend}! I didn't realize it was you!`)
// alert(`${friend}! I didn't realize it was you!`)
// prompt(`${friend}! I didn't realize it was you!`)


/**** Concatenate and Interpolate ****/
// Try the two methods for combining strings

// The final output should read: "My favorite Target store is located at 320 Wilshire Boulevard, Santa Monica, CA 90044."

let stem = "My favorite Target store is located at"
let street = "320 Wilshire Boulevard"
let city = "Santa Monica"
let state = "California"
let zipcode = "90034"

let concatenatedStr = stem + ' ' + street + ', ' + city + ', ' + state + ' ' + zipcode + '.';
console.log(concatenatedStr)

let interpolatedStr = `${stem} ${street}, ${city}, ${state} ${zipcode}.`
console.log(interpolatedStr)
