// assign
// let a=10;
// let b=20;
// a=b;
// copy the value
// console.log(a);
// let arr1=[11,12,13];
// let arr2=[1,2,3];
// arr1=arr2;
// refrence will copy the value

// console.log("arr1",arr1);
///////////////
// function fn(param){
//     console.log("param",param);
// }
// fn(arr1);
// // /////////////////////////
// function fn1(){
//     console.log("hii");
//     let obj ={name:"Rohit"}
    
//     return obj;
// }
// // // this will call the funtion
// fn1();
// // let store 
// this real1 contain refrence of obj object
// let real1=fn1();// isase inside the retunt type can access
// real1(); because we want acess inside the retunr that is not fn 
// // then we have use print inside tha cotent
// console.log("real1",real1);
// //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// assignment
// / // function will also trated as variable in js 
// function fn(){
//     console.log("it is the function");
 
//     return 10;
    
// }
// // you have put adresss of fn in variable anotherFn
// let anotherFn =fn; // it like as another fn which has property of function assign as varible
// thats means varible treat like function
// // then call the another fnction 
// anotherFn();
// console.log("```````````````````````")
// anotherReturnValue=fn();// isi se function ko call lg gyi hai

// // // isme call the full adressed/refrence of return it wil copy all
//  console.log("``````````````````````````````````````")
// console.log("it gives the return value of function",anotherReturnValue);
// ///////////////////////////////////////
// pass to funtion as parameter *************************
// function fn(param){
//     // what does param contain here ??-> contain here refrence of arr1
//     console.log("param",param);
// }
// fn(arr1);
// function can be used as parameter
// here we can see the chotafn is used as parameter in function getfunction so we can see 
// function getFunction(param){
//     console.log("I am rohit here");
//     // this gives information that here param is used as function inas chota function
    
//     // isisde the param is called
//     param()//from this call the the parameter which paas from here
// }
// getFunction(chotaFn);
// function chotaFn(){
//     console.log("i am chota function");
    
// }
// ***************************************
// return from function
// function outer(){
//     console.log("i am outer returing ");
//     return function inner(){
//         console.log("i am outer fn and inner and i will retrun when you will call");
//     }
// }
// let rfn =outer();// from this we call the outer unctio and from rfn store the value of retun value
// console.log("iam upp above the high");
// rfn();// we call rfn() because inside this funcion return type value is also kind of function 
// // we have  to use rfn();
// ********************************
function getFirstName(firstName){
    console.log("firstname id here",firstName);
    return function getLastName(lastName){
        console.log("in lastname",lastName)
        return function fullName(){
            console.log("printfulll neme me",firstName,lastName);
        }
    }
}
let rohit=getFirstName("rohit");
// let rohit me ruen type store hoga  
console.log("````````````````");
let last=rohit("GUPTA");
console.log("`````````````````");
last()
// // what is closer -/ closer is feature of javaScript 
// which inable  the access of variable that are declaair
// outside the current function even if 
// even if fn is remove from stack
// closer attach with removed from stack


