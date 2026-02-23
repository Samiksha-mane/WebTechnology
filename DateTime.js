let MyDate = new Date();
console.log(MyDate.toString());
console.log(MyDate.toISOString());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.toDateString());
console.log(typeof(MyDate));

//timeStamp
//when we crate a pole in application then we used timeStamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date.now());
//compare in mili sec
console.log(Date.now()/1000);
//convert into sec
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getUTCDate());
console.log(newDate.toLocaleString('default',{weekday :"long"}));





