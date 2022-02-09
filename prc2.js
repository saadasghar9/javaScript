//Que 3 Write a function  Dec2Binary that Converts given number from decimal to binary?
// Input:13
// Output:1101

function Dec2Binary (param){
    let converts = param.toString(2);
    console.log(converts)
}

Dec2Binary(13)


// Q Given a array first=[1,2,3,4,5];
//  Write a JavaScript program that fill second array in reverse order of first
//  ?
// narr=[5,4,3,2,1]


let first = [1,2,3,4,5];

let narr = first.reverse();

console.log(narr)

// Q Write a JavaScript program to compute the union of two arrays using push pop without using extra space.
// Input arr1= [1, 2, 3]
// arr2= [100, 2, 1,10]
// Output: [1,2,3,100,10]

let arr1 = [1,2,3]
let arr2 = [100,2,1,10]

arr1.push(100,10)

console.log(arr1)


