// Mutation of Data in JavaScript

let fruit = "apple";
fruit = fruit.toUpperCase();
console.log("Uppercase fruit:", fruit);

let longerWORD = "ISGFGFCNGVNGGHCMDV";
console.log(longerWORD.substring(0, 4));
console.log(longerWORD.length);

const listOfFruits = ["apples", "banana", "oranges"];
listOfFruits.splice(3, 1, "pineapples", "grapes");
console.log(listOfFruits);

const fruits1 = ["apple", "banana", "cherry"];
console.log(fruits1.splice(1, 1, "pineapples"));

// let cars = ["Lamborghini", "Ferrari", "Bugatti", "Porshe", "Benz", "Toyota"];
// myFavorites = cars.slice(1, 5);
// console.log(myFavorites);

// splice
// array.splice(start, deleteCount, item1, item2, ...)

const breakfast = ["Tea", "Eba", "Garri", "Cereal", "Omlet", "Pancakes"];
console.log(`favorite food: ${breakfast.splice(2, 1, "eggs")}`);
console.log(";;;;;;;;;;");

// The map and filter methods
let cars = ["Lamborghini", "Ferrari", "Bugatti", "Porshe", "Benz", "Toyota"];
cars.forEach((car) => console.log(car));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// numbers.forEach((number) => console.log(`This is loop number ${number}`))

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
