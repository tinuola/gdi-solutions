/***** Arrays, Functions & Loops *****/

/* 
Create a function called `sortAndReturnOne` that
takes an array parameter, sorts the array, and
returns the 2nd item in the array.
*/

function sortAndReturnOne(arr){
  arr.sort()
  return arr[1]
}

let drinks = [
  'tea', 
  'mojito', 
  'coffee', 
  'kombucha', 
  'water'
]

sortAndReturnOne(drinks)
// console.log( sortAndReturnOne(drinks) )


/* 
create a function `countSheep` that takes a parameter
(in this case, an array of animals) counts the number of 
'sheep' in the array, and returns the value.
*/
function countSheep(arr){
  
  let count = 0

  for(let animal of arr){
    if(animal === 'sheep'){
      count += 1
    }
  }

  return count
}

let animalArr = [
  'sheep', 'sheep', 'sheep', 'dog',
  'cow', 'horse', 'sheep', 'lion',
  'bear', 'hippo', 'sheep', 'cat'
]

countSheep(animalArr)
// console.log( countSheep(animalArr) )



/* 
Create a function that loops through an
array of strings. If a string contains
'cat', replace 'cat' with 'meow'. Add 
the updated string to a new array called
`catWords`. Return catWords.
*/
function catsMeow(arr){

  let catWords = []

  for(let str of arr){
    if(str.includes('cat')){
      let replacement = str.replace('cat', 'meow')
      catWords.push(replacement)
    }
  }

  return catWords
}

let strArr = [
  'concat', 'argument', 'staccato',
  'jumpy', 'planter', 'education', 
  'catfish', 'kettle'
]

catsMeow(strArr)
// console.log( catsMeow(strArr) )