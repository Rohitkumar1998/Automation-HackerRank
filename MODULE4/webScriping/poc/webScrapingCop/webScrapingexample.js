// npm i request->npm
const request =require('request');
const fs=require("fs");
const jsdom=require("jsdom");
let url='https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard'

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
 // console.log("content recive");
    // google home page 
    // body->html
    extractData(body);
}
}
function extractData(body){
    const JSDOM=jsdom.JSDOM;
      // no meaning
    // 1.pass to new JSDOM
    let dom=new JSDOM(body);
    //2 no meaning
    let document =dom.window.document;
    // let firstbutton=document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
    let firstbutton = document.querySelectorAll(".ds-text-compact-xxs.ds-p-2.ds-px-4 p>span");
    let resF=firstbutton[0];
    let res = resF.textContent;

    console.log(res);
}
console.log("after");