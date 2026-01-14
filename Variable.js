// primitve = number,string,null,undefined,boolean,symbol,bigint
//non primitive = object

const a = 10;
console.log(a);

//Variables defined with const cannot be Redeclared
//Variables defined with const cannot be Reassigned
//Variables defined with const have Block Scope
// a = 20 --->give errors
  

let b = 20;
console.log(b);
//Variables declared with let have Block Scope
//Variables declared with let must be Declared before use
//Variables declared with let cannot be Redeclared in the same scope

var c = 50;
// Can be re-declared,reassigned avoid using it
{
  let b = 40;
  //Redeclaring a variable with let,var in another block, IS allowed
  var c = 100;
}
  console.log(b);
  console.log(c);

 



  
  