// const num = null;

// // console.log('>>>>>>>>>>>', Boolean(num))

// let value = 10;

// let negative = -value;
// // console.log('>>>>>>>>>>>',negative)

// const grater = 10;
// const smaller = 5;

// console.log("Is grater number", grater < smaller);

// const game = new String("Watch Dogs")

// console.log(game);

const value = 100000;

// console.log(value.toLocaleString('en-US'));

// console.log(Math.PI);

const myDate = new Date();
// console.log()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log()

const myArr = ["apple", "banana", "cat", "dog", "eye"];
const mysecondArr = ["aerospace", "bowl", "cake", "door", "elephant"];

//  const newArr = [...myArr, ...mysecondArr, "hello"]
// //  console.log(newArr)

// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// console.log(text);

const obj1 = { 1: "John", 2: "Doe" };

const obj2 = { 3: "Smith", 4: "Jane" };

const obj3 = Object.assign(obj1, obj2);

// console.log(obj3);

function calculateValues(...num1) {
  return num1;
}

// console.log(calculateValues({name: "John", age: 25}, {name: "Doe", age: 25}));

function addOne(num1) {
  // console.log(num1 + 2)
}

addOne(2);
addTwo(3);

function addTwo(num2) {
  // console.log(num2 + 2)
}

function thisObject() {
  console.log(this);
}

// thisObject();

// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// console.log(materials.map((material) => material.length));

// function call() {
//   console.log("Azeem");
// }
// setTimeout( call,1000);

// (()=> {
//   console.log("Rafique");
// })();

// function callTwo() {
//   console.log("Azeem");
// }
// setTimeout( callTwo,2000);

// ************************************************for loop ********************************
let n = 5;
for (let i = 0; i <= n; i++) {
  const str = "*";
  const space = " ";
  // console.log(space.repeat((n-i)) + str.repeat(i));
}

// ************************************************for of loop ********************************

// const fruits = ["apple", "banana", "cherry"];
// const fruits = "apple banana cookies"
const fruits = [
  { name: "apple", description: "apple" },
  { name: "banana", description: "banana" },
];

for (const fruit of fruits) {
  // console.log(`fruits Name: ${fruit.name}`);
}

// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   // console.log(num);
// }

const word = "Hello";

for (const letter of word) {
  // console.log(letter);
}

// const uniqueNumbers = new Set([1, 2, 3, 3, 4]);

// for (const num of uniqueNumbers) {
//   // console.log(num);
// }

// const map = new Map();
// map.set("IN", "cold");
// map.set("country", "USA");
// map.set("state", "san Francisco");

// console.log(map);

// for (const [key, value] of map) {
//   // console.log(key, value);
// }

const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};
const arrays = ["John", "Doe", "James", "ali"];

// for (const key in arrays) {
//   console.log(key, arrays[key]);
// }

// arrays.forEach((key, value, index) => {
//   // console.log(key, value, index)
// });

const movies = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Dark Knight", year: 2008 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "The Matrix", year: 1999 },
];

// let findMovie = movies.filter(( item )=> item.title === "The Matrix" )

// findMovie = movies.filter((item) => {
//   return item.year === 2008 || item.year === 3000;
// });

// console.log(findMovie);

// const user = {
//   name: "Azeem",
//   age: 12,
// };

// const userToJson = JSON.stringify(user);

// const userToPerson = JSON.parse(userToJson);

// console.table(userToPerson);

// setInterval(()=> {
//   const date = new Date();

//   // console.log(date.toLocaleTimeString());
// }, 1000)

