let fs=require("fs");
let f1Path="../f1.txt";
let f2Path="../f2.txt";
let f3Path="../f3.txt";
let f4Path="../f4.txt";
console.log("before");
let outputContent="";
fs.readFile(f1Path,f1cb);
function f1cb(err,data){
    if(err){
        console.log(err);
    } 
    else{
        console.log("data "+data);
        outputContent +=data;
        fs.readFile(f2Path,f2cb);
        

    }
}
function f2cb(err,data){
    if(err){
        console.log(err);
    } 
    else{
        console.log("data "+data);
        outputContent +=data;
        fs.readFile(f3Path,f3cb);

    }
}
function f3cb(err,data){
    if(err){
        console.log(err);
    } 
    else{
        console.log("data "+data);
        outputContent +=data;
        fs.writeFile(f4Path,outputContent,wrtfn);
    }


}
function wrtfn(err,data){
    console.log("wrufile is created");

}

console.log("after");