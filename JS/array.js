"use strict";

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position:
const frutis = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🍎", "🍌");
console.log(fruits);

// pop: remove an item from the end
frutis.pop();
frutis.pop();
console.log(fruits);

// unshift: add an item to the benigging
frutis.unshift("🍓", "🍋");
console.log(frutis);

// shift: remove an item from the benigging
frutis.shift();
frutis.shift();
console.log(frutis);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
frutis.push("🍓", "🍑", "🍋");
console.log(frutis);
frutis.splice(1, 1);
console.log(frutis);
frutis.splice(1, 1, "🍎", "🍉");
console.log(frutis);

// combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFrutis = frutis.concat(frutis2);
console.log(newFrutis);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(frutis);
console.log(frutis.indexOf("🍎"));
console.log(frutis.indexOf("🍉"));
console.log(frutis.indexOf("🥥"));

// includes
console.log(frutis.includes("🍎"));
console.log(frutis.includes("🍉"));

// lastIndexOf
console.clear();
frutis.push("🍎");
console.log(frutis);
console.log(frutis.indexOf("🍎"));
console.log(frutis.lastIndexOf("🍎"));
