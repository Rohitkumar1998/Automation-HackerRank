const fs=require("fs");
const puppeteer = require("puppeteer");

// https://www.hackerrank.com/auth/login
// import cred from "./cred"
const credObj=require("./cred");
async function fn(){
    const broserRprsentativeObj=await puppeteer.launch({
        headless: false,
        executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",//it give 
        //to opnen in the chrome path
      defaultViewport:null, //that means full page use for opne the url
      args:["--start-maximized"] //this is use for full th e page 
    //   slowMo:100/// this use for slow the speed of execution
    })
    const tab =await broserRprsentativeObj.newPage();
    await tab.goto(" https://www.hackerrank.com/auth/login");
    await tab.type("input[type='text']",credObj.email,{delay:20});
    await tab.type("input[type='password']",credObj.password,{delay:20});
    await tab.keyboard.press("Enter");
    await waitAndcClickTopic("Java",tab);//given by user
    await waitAndcClickQuestion("Java Stdin and Stdout I",tab);
    let code=await fs.promises.readFile("code.java","utf-8")
    await copyPasteQuestion(code,tab);
    await submittTheCode(tab);

    //choose the topic 
    //select the question
    //write the code
    // submit the code
}
fn();
async function waitAndcClickTopic(name,tab){
  await tab.waitForSelector(".topics-list",{visible:true});
  await tab.evaluate(findAndClick,name);
  function findAndClick(name){
 let alltopic =document.querySelectorAll(".topics-list .topic-card a");
 let idx;
 for(idx=0;idx<alltopic.length;idx++){
  let cTopic=alltopic[idx].textContent.trim();//used for remove unessery thing
  if(cTopic==name){
    break;
  }
 } 
 alltopic[idx].click();//it click when the document will work
}
}
async function waitAndcClickQuestion(name,tab){
  await tab.waitForSelector(".challenges-list",{visible:true});
  await tab.evaluate(findAndClick,name);

  function findAndClick(name){
 let allQuestion =document.querySelectorAll(".challenges-list .challengecard-title");
 let idx;
//  let textContent=[]
 for(idx=0;idx<allQuestion.length;idx++){
  let cTopic=allQuestion[idx].textContent.trim();//used for remove unessery thing
  // textContent.push(cTopic);
  if(cTopic.includes(name.trim())){
    break;
  }
 } 
 allQuestion[idx].click();//it click when the document will work
}
}
async function copyPasteQuestion(code,tab){
  await tab.waitForSelector('input[type="checkbox"]',{visible:true});
  await tab.click('input[type="checkbox"]');
  await tab.waitForSelector("textarea[id='input-1']",{visible:true});
  await tab.type("textarea[id='input-1']",code);
  //*************copy and paste   */
  await tab.keyboard.down('ControlLeft');
  await tab.keyboard.press('KeyA');
  await tab.keyboard.press('KeyX');
  await tab.keyboard.up('ControlLeft');
  // ************** monaco editore 
  await tab.waitForSelector(".monaco-editor",{visible:true});
  await tab.click(".monaco-editor");
  await tab.keyboard.down('ControlLeft');
  await tab.keyboard.press('KeyA');
  await tab.keyboard.press('KeyV');
  await tab.keyboard.up('ControlLeft');
}
async function submittTheCode(tab){
  await tab.waitForSelector(".hr-monaco-submit")
  await tab.click(".hr-monaco-submit")

}