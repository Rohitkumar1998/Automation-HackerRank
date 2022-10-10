// // how the code is executed
// // whenever a code is executed you will get a global object an 
// console.log("global", global);
// console.log("this", this);
// console.log("hello");
// // the code is not inside any function -/is in global area
// // for the global execution contex created > default exexcution 
// console.log("a",a);
// var a;
// a=10;
// console.log("a",a);
// function fn(){
//     console.log("i am a function");
// }
// // fist memory allocation then -/ for variable undefined and for function memory is allocate
// fn();
// ///////////////////////////////////////////////////////////////////////////////
// fn();
// function fn(){
//     console.log("i am real");
// }
// function fn(){
//     console.log("NO i am real ");
// }
// function fn(){
//     console.log("NO i am real To");
// }
// fn();
// // last function is executed because last function me  aa jayega
//////////////////////////////////////////////////////////////////

// console.log("37",a);
// var a=10;
// function fn(){
//     console.log("41",a);
//     var a=20;
//     console.log("43",a);
// }
// console.log("45",a);
// fn();
// // after call of function new exectution context is created
// // first line 32 then 39 then then 40 then new execution contex is created so value of a is aundefined again
// // then function is execuetd then after execution stack of function will clear then lin 44 is executed  
// // /////////////////////////////////////////////////////
// console.log("47",a);
// var a=10;
// function b(){
//     console.log("3",a);
//     // due to var  is not in function the it look outside the function so a=10 is printed
//     // if a is defined as line 50 then a will print the undefines///example var a=40;
// }
// function c(){
//     var a=20;
//     console.log("8",a);
//     b();
//     console.log("10",a);
// }
// console.log("12",a);

// c();
// ///////////////////////////////////////////////////////////////////////////
// console.log("14",a)
// var a=10;
// function fn(){
//     var a=20;
//     console.log("4",a);
//    
//     if(true){
//         var a=30;
//         a++;
//         console.log("9",a);
//     }
//     a++;
//     console.log("3",a);
// }
// console.log("15",a);
// fn();
// console.log("17",a);
