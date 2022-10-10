function printArrFn(){
let arr=[];
    for(let i=0;i<3;i++){
        function printI(){
            console.log("i",i);
        }
        arr.push(printI);

    }
    return arr;
}
let arrFn=printArrFn();
// arr0 pe jo pda hai use call krr do
arrFn[0]();
arrFn[1]();
arrFn[2]();
////////////////////////////////////
// function fn(){
//     console.log("hello");
// }let anotherfnVar=fn;
// anotherfnVar();//in this case function assgn as variable 
// let emptyArr=[]
// emptyArr[0]=fn
// emptyArr[0]();
// fn(); // all these are same type
// console.log("print",fn);// because her fn act like variable
