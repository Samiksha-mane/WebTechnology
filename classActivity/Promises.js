//Promises = a promises is an object thst represent future result of an asynchronous opeartion
//Promises means i promis give result later
//real life example =  zomato aplication
//promies has 3 states 
// 1.pending means waiting
//2.resolved means success or fullfilled
//3.rejected means cancle

//example of promise
// let myPromises = new Promise((resolved,rejected) =>
// {
//     let success = true;
//     if(success)
//     {
//         resolved("Data fech succesfully");
//     }
//     else
//     {
//         rejected("Do not resolve");
        
//     }
// });
// //call promise
// myPromises.then((result)=>{
//     console.log(result);
    
// }).catch((error)=>{
//     console.log(error);
// });

// //.catch run when error occurss
// //.then run when success

// //Activity 1 = why promises better than call back
// //Activity 2 = create 4 promises example 
// //1.boolean varibale if true 
// //2.Asysnc with prosmies or functions with promises
// //simple example

// //promise with setTimeout
// const newPro =  new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Asysnc Task completed");
//         resolve();
//     },2000)
// });

// newPro.then(()=>{
//     console.log("Promise consume");
    
// })


// const promis3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({uername : "Sam",id : 12})
//     },3000);
// }
// );
// promis3.then((user)=>{
//     console.log(user);
    
//})

//Fetch = it is build in js method used to make http request
//fetch method return promises
//baisc sysntax
//fetch("url")

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

//Activiy 1 = learn code line by line
//Activity 2 = asunc await with fetch method
//Activity 3 =fetch user display names in http list
//Activity 4 = fetch post show only 1st five
//Acitivity 5 = create fake promise manully resolved after 3sec  and reject after 3 sec

//what is promies in js
//what is promise status
//diiffernt between callback and promies
//what is the fetch menthod
//what does fetch return
//why do we use respnce.json
//diifernt between then and catch and asnyc and await
//What is promise chaining




