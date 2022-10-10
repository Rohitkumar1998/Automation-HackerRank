// ************************folder***********************************
// create read remove folder 
// create
let path=require("path")
let fs=require("fs")
// fs.mkdirSync("newfolder")
// remove
// fs.rmdirSync("newfolder")
// read content about another folder
// let content=fs.readdirSync("C:\\Users\\Sadashiv\\Desktop\\Learning git\\Module1\\SQL")
// can also use  
// in this methode we ca use the current runnig directory name
// let content=fs.readdirSync(__dirname)

// give the total  
// console.log(content)
// ********************path********************
// when you ARE IN SAME FOLDER TRY TO TRACE THE THE FOLDER GIVE THE FOLDER NAME
// "FOLDERNAME"
// ABSOLUTE PATH USED FOR OTHER FOLDER
// "COPY THE HOLE PATH"
// RELATIVE PATH
// ../ USED FOR HOW MUCH UP
// ../../SQL/Complletjion.sql
// let content=fs.readdirSync
// ("../cao")
// console.log(content)
// lstate gives informamation about file or folder is true or false
// if folder or file prsent then gives the true otherwise gives false
// let pathOfArray="C:\\Users\\Sadashiv\\Desktop\\Learning git\\Module1\\javaSript\\Array"
// let isFilePresent=fs.lstatSync(pathOfArray).isFile();
// let isDirectoryPresent=fs.lstatSync(pathOfArray).isDirectory();
// console.log("file information",isFilePresent,"directory information",isDirectoryPresent);
// // basename
// let pathObj=path.basename(process.cwd());
// // this gives the lat of the 
// console.log(pathObj);

// this gives the last of given path 
// copy /
// in this methode the comntent is copyed
let fsfolderPath = "C:\\Users\\Sadashiv\\Desktop\\Learning git\\Module1\\javaSript\\Array\\fsfolder.js"
let newfoderWantPath="C:\\Users\\Sadashiv\\Desktop\\Learning git\\Module1\\SQL\\fsfolderWant.js"
// folder made in sql
// as you want to change 
fs.copyFileSync(fsfolderPath,newfoderWantPath);