// npm  i jsdom
const fs= require("fs");
let htmlContent=fs.readFileSync("sample.html","utf-8");
const jsdom=require("jsdom");
const JSDOM=jsdom.JSDOM;
// 1. starting from me -> html content provide
// pass to newJSDOM
let dom=new JSDOM(htmlContent);
// 2
let document =dom.window.document;
// 3. logic -> help to get
// your html element if you pass a slelctor
 document.querySelector("p");
// css selector ->occurence of that html element 
// in the form of array of element 
// elelment vala case
const allPs=document.querySelectorAll("p");
console.log(allPs.length);//this give the length of p type 
// ye hamesh arr me aata hai
let firstPKaContent=allPs[0].textContent;
console.log("first Pkacontent:", firstPKaContent);
let secondPKaContent=allPs[1].textContent;
console.log("first Pkacontent:",secondPKaContent);
let allidsWalaElemt=document.querySelectorAll("#unique");
let content=allidsWalaElemt[0].textContent

console.log(content);




