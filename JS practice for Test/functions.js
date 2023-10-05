// Exercise 1 - Normal Functions

// Write a JavaScript function named calculateArea that takes two parameters, 
// width and height, and returns the area of a rectangle. Then, call this 
// function with different sets of values to calculate the area of rectangles 
// with varying dimensions.

function calculateArea(width, height) {
    let rectangle_area = width * height;
    return rectangle_area;
}
const result1 = calculateArea(2, 6);
const result2 = calculateArea(3, 11);
document.getElementById("functions-1normal").innerHTML = "functions-1normal: " + result1;
console.log(result1);

// Exercise 2 - Normal Functions

// Create a function called calculateAverage that accepts an array of numbers 
// as a parameter and returns the average of those numbers. Test the function 
// with an array of your choice.

const array = [2, 5, 3, 7, 4, 9];
let average = 0;
let total = 0;
console.log(array.length);


function calculateAverage (array){
    for (i=0; i< array.length; i++){
        total += array[i];
        console.log(total);
    }
    average = (total / array.length);
    console.log(average);
    return average;
}

document.getElementById("functions-2normal").innerHTML = "functions-2normal: " + calculateAverage(array);
console.log(calculateAverage(array));

// Exercise 3 - Normal Functions

// Write a JavaScript function named printPattern that takes a number as an 
// argument and prints a pattern of that many asterisks (*) on the console. 
// For example, if you call printPattern(5),
/* 
it should print:
*
**
***
****
*****
*/
//let print = " ";

function printMultiplicationTable (){
    for (let i = 1; i <= 10; i++){
        for (let j = 1; j <= 10; j++){
            let result = i * j;
            console.log(`${i} * ${j} = ` + result);
        }
    }

    return;
}

document.getElementById("functions-3normal").innerHTML = printPattern(3);

