let array = [1, 2, 5, 6, 7, 8, 9];

// console.log(array)

let i = 1

while (i < array.length) {
    console.log("array of ", i, "is", array[i])
    i++
}


// array.push("last value"); // add last
// array.unshift("first value"); // add first

// console.log(array)

// array.pop() //delete last
// array.shift() // delete first
// console.log(array)


// part of an array

// let poa  = array.slice(2,4)
// console.log(poa)

// delete  
array.splice(2, 3)
console.log(array)
