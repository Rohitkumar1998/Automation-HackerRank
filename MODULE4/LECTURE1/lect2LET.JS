// // let can ressagened
// let a=20;
// // REASSING OF A
// a=30;
// console.log(a);
// // But can not redeclear
// let a;
//////////////////////////////////////////////////////////////////
// var a=10;
// function fn(){
//     var a=20;
//     console.log("4",a);
//     // in the case of let the { ke under ke content } ko block ki trah trat kiya jata hai

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
//////////////////////////////
let fruit="kiwi"
function fn(){
let fruit="orange";
console.log("29",fruit);
{
    let fruit="Apple"
    console.log("32",fruit);
    {
        console.log("34",fruit)
    }
}
 console.log("37",fruit);
}
console.log("38",fruit);
fn();
console.log("40",fruit);

// //////////////////////////////////////
// can not acees ouside the let a in case of let
// memory allocate but can not acess undefine is not going to print 
// console.log(a);
// let a=10;