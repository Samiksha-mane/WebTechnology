const superHerores = ["a","b","c","d","e"];
const home = ["s","M","G","J"];
superHerores.push(home);
console.log(superHerores);

console.log(superHerores[3]);
console.log(superHerores[5][2]);

//array concat
const me = [superHerores.concat(home)]
console.log(me);

const you = [1,2,3,[4,[5],6],7,[6,7],8,[8,9]];//nested array
console.log(you);

const y = you.flat(Infinity);//how deep a nested array should be flatened
//deaflut value is 1
console.log(y);
// infinity = flantens all levels no matter hoe deep it

const y1 = you.flat(1);
console.log(y1);
// flat does not change original array ---> it returns new array
//useful when working with nested data

//Data scripting using this methiod
console.log(Array.isArray("Samu"));//-->false
// it checks given value is array or not
console.log(Array.isArray(home));//--->true

console.log(Array.from("Gouri"));
//it converts an iteratbale objects like string,set,map

console.log(Array.from({name : "Sidd"}));

//console.log(Object.keys{sidd});


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
// create new array from given value..converts value
//array from = convetrs iteratbles








