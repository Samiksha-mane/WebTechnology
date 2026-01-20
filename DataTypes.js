// String = A text of characters enclosed in quotes
let color = "Red";
let lastName = "Mane";
console.log(color);
console.log(lastName);
let str = "ShoYO";
console.log(str);
console.log(typeof(str));

//string interpoletion
console.log(`Hello Dear ${str}`);
let goruri = "Heyyyy";
console.log(`${goruri}`);

//use of new create = create a new object
const g = new String("abc");
console.log(g.length);

console.log(g.toLowerCase());
console.log(g.toUpperCase());

//CharAT() = find char at position
//INdexof() = find postion of the char 


// Number = A number representing a mathematical value
let length = 16;
console.log(length);
let weight = 7.5;
console.log(weight);

// BigInt = A number representing a large integer
let s = 1234567890123456789012345n;
console.log(s);
let p = BigInt(1234567890123456789012345)
console.log(p);

// Boolean = A data type representing true or false
let a = true;
let b = false;

// Object = A collection of key-value pairs of data(non primitive)
const person = {firstName:"Samiksha", lastName:"Mane"};
console.log(person);
console.log(person.firstName);

// Array object
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
const Heroes = ['a','b','c'];
console.log(Heroes);
const num = [1,2,3,4];
console.log(num);

// Date object
const date = new Date("2025-10-25");
console.log(date);

// Undefined = A primitive variable with no assigned value
let q;
let r;

// Null = A primitive value representing object absence
let t = null;
let k = null;

// Symbol = A unique and primitive identifier usend in react
const x = Symbol();
const y = Symbol();
const anothrid = Symbol("123");
console.log(anothrid);
const id = 123;
console.log(id === anothrid);
console.log(x);
console.log(y);

//Function
function name()
{
    console.log("Sam");
    
}
console.log(name());


