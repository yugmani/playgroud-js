// Import stylesheets
import './style.css';

const greet = 'Hello World';

// Creating a string
let myString = new String(greet);
console.log(myString);
//String {0: "H", 1: "e", 2: "l", 3: "l"…}

console.log(myString.toString());
//Hello World

// String.charCodeAt()
console.log(greet.charCodeAt(0)); //72
console.log(greet.charCodeAt(1)); //101

const str = 'Hello World';

// String.indexOf(string)
console.log(str.indexOf('World')); //6
console.log(str.indexOf('pop')); //-1

// String.lastIndexOf(string);
console.log(str.lastIndexOf('o')); //7
console.log(str.lastIndexOf('P')); //-1

// /SPREAD OPERATOR
const arr = [7, 8, 9];
const myArr = [1, 2, 3, ...arr];
console.log(myArr); //[1, 2, 3, 7, 8, 9]

console.log(['a', ...arr, 'b']); //["a", 7, 8, 9, "b"]

console.log([...arr, 11, 22]); //[7, 8, 9, 11, 22]

const restaurant = {
  mainMenu: ['rice', 'beans', 'chicken'],
};

const finalMenu = [...restaurant.mainMenu, 'fish'];
console.log(finalMenu);
// ["rice", "beans", "chicken", "fish"]

//function using spread OPERATOR
function testing(a, b, c, d) {
  console.log([a,b,c,d]); //["a1", "b2", "c3", "d4"]
  console.log(a, b); //a1 b2
  console.log(a, b, c); //a1 b2 c3
  console.log(a, d); //a1 d4
  console.log(c, d); //c3 d4
}

const arr1 = ['b2', 'c3'];
testing('a1', ...arr1, 'd4');
//["a1", "b2", "c3", "d4"]
