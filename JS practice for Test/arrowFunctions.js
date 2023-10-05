// Transform the following normal function into an arrow function:
// function greet(name) {
//     return `Hello, ${name}!`;
// }

const greet = (name) => `Hello, ${name}!`;

// Exercise 2: Convert to Arrow Function
// Transform the following normal function into an arrow function:
// function add(a, b) {
//     return a + b;
// }

const add = (a,b) => a+b;

// Exercise 3: Convert to Arrow Function
// Transform the following normal function into an arrow function:
// function square(x) {
//     return x * x;
// }

const square = (x) => x * x;

// Exercise 4: Convert to Arrow Function
// Transform the following normal function into an arrow function:
// function sayHello() {
//     console.log("Hello, world!");
// }


() => console.log("Hello, world!");

// Exercise 5: Convert to Arrow Function
// Transform the following normal function into an arrow function:
// function getEvenNumbers(numbers) {
//     return numbers.filter(function(num) {
//         return num % 2 === 0;
//     });
// }

const getEvenNumbers = (numbers) => {
    return numbers.filter(function(num) {
                 return num % 2 === 0;
             });
}