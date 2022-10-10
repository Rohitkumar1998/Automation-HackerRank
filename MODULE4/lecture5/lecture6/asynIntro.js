const fs=require("fs");
// asyn intro
console.log("before");
// let ans=fs.readFileSync("intro.txt" ,"utf-8");

// console.log(ans);
// readdfile yha use hogi naki readfilesyn utf-8 dat me add ho jyaga
fs.readFile("intro.txt",fnConfrm);
// ye execute hota rahega but time lgne ki vja se apni mai execute ho jayega 
function fnConfrm(err,data){
    if(err){
        console.log("error",err);
    }else{
        // +data utf _8 ke liye use ho rha hai
        console.log("data"+data)
    }

}
console.log("Aphle mai execute hunga")
