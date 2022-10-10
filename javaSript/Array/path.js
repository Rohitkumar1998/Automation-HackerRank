let path=require("path")
// directory path of folder 
// console.log("`````````````````````````")
// console.log(__dirname)
// console.log("`````````````````````````")
// // path of folder
// console.log(__filename)
// console.log("`````````````````````````")
// // process.cwd used for globally in app
// console.log(process.cwd())
// console.log("`````````````````````````")
// path join function
let folderC="java"
let folderD="javsript"
let file="runwcomand"
let rohit ="join.mp4"
let content=path.join(folderC,folderD,file,rohit)
console.log(content)
// console.log("````````````````````")
// take input from user
// let inputArr=process.argv.slice(2)
// console.log(inputArr)
// basename gve last of given file path;
let address=process.cwd();
let requrieBase =path.basename(address)
// gives the last of  goiven path
console.log(requrieBase)
// extname give from(.last to path of last file or folder)of given 
let requrieExtname=path.extname(content);
console.log(requrieExtname)


