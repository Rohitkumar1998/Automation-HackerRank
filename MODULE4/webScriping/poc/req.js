// npm i request->npm
const request =require('request');
const fs=require("fs");
const jsdom=require("jsdom");
let url='http://www.google.com';
// reuest working
//  1. request to given url 
// response -> request function ->cb cal-> data put
request(url,cb);
// error -> if there is any error while executin
// response -> header+body
// body-> html
console.log("before");
function cb(error,response,body){
// console.log('errror:',error) // print the error if one occured
// console.log('statusCode:',responce&& resopnce.statuscode);
// console.log('body',body);

if(error){
    console.log('error:',error.message);

}
else if(response&& response.statusCode==404){
    console.log("page is not found");
}
else{
    // console.log('body',body);// print html for google page
    console.log("content recive");
    // google home page 
    // body->html
    extractData(body);
}
}
function extractData(html){
    const JSDOM=jsdom.JSDOM;
      // no meaning
    // 1.pass to new JSDOM
    let dom=new JSDOM(html);
    //2 no meaning
    let document =dom.window.document;
    let firstbutton=document.querySelectorAll(".lsb");
    let content=firstbutton[0].value;
    console.log(content);
}
console.log("after");