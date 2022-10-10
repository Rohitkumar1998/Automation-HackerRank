// file System
// deals with folder and files
let fs=require("fs")
console.log("before")
// file-> read,write,create ,delete ,update all thesee is called crud
// read we have to use for text utf 8 otherwise ot write in binary 
let content =fs.readFileSync("newfile.txt","utf-8")  
// ye file ke andar ka conet padega 
console.log(content) 
// write
// (file name,what want to write)
// if file already exist then rewrite the content
// fs.writeFileSync("newfile.txt","")
// rewrite in the newfile
// fs.writeFileSync("newfile.txt","hiii")
// update in file 
// add on in the folder
// fs.appendFileSync("newfile.txt","kya hal hai bro")
// delete we haveto used unlink
// fs.unlinkSync("readme.txt")

