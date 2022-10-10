const fs=require("fs");
///////////*******************SET TIME OUT*************** */
// function fn(){
//     console.log("hello rohit")
// }
// console.log("before");
// setTimeout(fn,5000);// call after 5000 millisecond
// console.log("before")
///**********************PROMISE FUCTION*********************** */
// console.log("before");
// // asynchronus function-> return a promise
// let promise=fs.promises.readFile("f1.txt");
// console.log("Promise before",promise);//ye staus dikha ta hai kya abhi pending hai
// console.log("after");
// function fn(){
//     console.log("line number 29",promise);
// }
// setTimeout(fn,5000);
//*************ASYN KEYWORD  FUNCTION***********/
async function myfn(){
    console.log("before");   
    let promise =fs.promises.readFile("f1.txt"); 
    // console.log("Promise is ",promise);    
    console.log("After"); 
    // it   stop the function till promise is fullfill
    // and return value of that promises

    let value =await promise;
    console.log(value+"");
}
myfn();