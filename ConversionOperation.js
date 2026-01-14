// Convert Number to String
let num = 33;
console.log(typeof(num));
let num_string = String(num);//coverting 
console.log(num_string);
console.log(typeof(num_string));

// convert Number to Boolean


let b = Boolean(num);
console.log(b);
console.log(typeof(b));

//convert number to object
let obj_num = Object(num);
console.log(obj_num);
console.log(typeof(obj_num));

// convert number to undefined = CANNOT convert a number to undefined

//convert number to null = NOT have an automatic conversion from number to null.

// Convert String to Number
let str = "Sam";
let num2 = Number(str);//JavaScript returns NaN
console.log(num2);
console.log(typeof(num2));

// convert string to boolean
let st = Boolean(str);
console.log(st);
console.log(typeof(st));

// convert string into undefined = NOT possible by conversion

// convert string into null = No automatic conversion
//null is intentionally set, not converted

//convert string into object
let obj = Object(str);
console.log(obj);
console.log(typeof(obj));

//convert boolean into number 
let bool_st = true;
let bool_num = Number(bool_st);// true = 1,false = 0
console.log(bool_num);
console.log(typeof(bool_num));

//convert boolean into string
let bool_vr = String(bool_st);
console.log(bool_vr);
console.log(typeof(bool_vr));

//convert boolean into object 
let bool_obj = Object(bool_st);
console.log(bool_obj);
console.log(typeof(bool_obj));

//convert boolean into indefined = Not possible by conversion

//comvert boolean into null = No automatic conversion

//convet object into number
let obj1 = {a : 1};
let no = Number(obj);// gives NaN
console.log(no);
console.log(typeof(no));

// convert object into String
let obj_str = String(obj1);
console.log(obj_str);
console.log(typeof(obj_str));

// convert object into boolean
let boolobj = Boolean(obj1);// All objects are truthy, even empty ones{}
console.log(boolobj);
console.log(typeof(bool_obj));

// convert object into undefined = not possible
//convert object into null = not possible

//When undefined is converted,
//  number is aNaN
// string is a undefined
//  boolean is a false;

// When null is converted,
// number is 0
// string is "null"
// boolean is false

//A Symbol can only be created, not converted from other types.
