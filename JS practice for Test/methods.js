array = [2, 3, 4, 5];

array.map(element => { element * element;
})

const shoppingCart = [
    { item: 'T-shirt', price: 20 },
    { item: 'Jeans', price: 50 },
    { item: 'Shoes', price: 80 }
];

const totalPrice = shoppingCart.reduce((accumulator, element) => accumulator + element,price, 0);


const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 22 }
];

const ofAge = people.filter(element => element.age > 21);


const fruits = ['banana', 'apple', 'cherry', 'date'];

const sorted = fruits.sort();


const materials = ['pen', 'notebook', 'pencil', 'eraser'];

const printed = materials.forEach(element => "Item: " + element);

console.log(printed);