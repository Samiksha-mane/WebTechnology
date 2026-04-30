//1.synchronous = code excute line by line
//each task wait to previous task to finish
//blocking in nature
//js is single threadted and by default synchronus
console.log("Start")
function add(a,b)
{
    return a+b;
}
let result = add(2,3);
console.log(result);
console.log("End");

//Asynchronous = some task take time api call,file read,timer,database
//js does  not wait it moves to next line 
//non blocking behavoiur
//used in fecthing data from server,reading files,set timeout,api calls
setTimeout(() =>
{
    console.log("Inside timeout");
    
},2000);
console.log("End");
//setTimeout is asynchronius ==> it waits 2 sec 
//meanwhile js print a after 2 sec it prints Inside timeout

//Activity 1 = guess the output game
//activty 2 = blocking and non blocking 2 example
//activity 3 = realtime examples
//activity 4 = api fetch 