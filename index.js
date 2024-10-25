// function 1
function reversestr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

const string = "HELLO ";
const reversestri = reversestr(string);
console.log(reversestri);

// function 2
const array = ["1","2",3,4,5];

console.log(array.reverse())

const checkCondition = () => {
  if (0) {
    console.log("The condition is true.");
  } else {
    console.log("The condition is false.");
  }
}

// Calling the function with 0 as argument
checkCondition();
