// function statemnt
// function statemnenrt can call out side the before funchtion statemtne while function expression and
// and arrow function is can not call before intilization
fn()
function fn(){
    console.log("i am funntion statement");
}
fn();
// function expression
// fnadderess(); can not call before insialisation
let fnadderess=function(){
    console.log("I am functional expression ")
}
fnadderess();
// IIFE -> immdeate invoke function expression
(function iife(){
    console.log("i am IIFE ");
})();
// iife(); can not call
// IIIFE can not access ouside the function 
// arrow -> function expression (sytax sugar)
// aarFn();can nnot call before initsaliation
let aarFn=()=>{
    console.log("I am aarfun here");
}
aarFn();