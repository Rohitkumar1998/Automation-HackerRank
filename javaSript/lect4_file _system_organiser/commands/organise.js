const { doesNotReject } = require("assert");
let fs= require("fs");
let  path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function organiseFn(dirPath){
    // dirpath pass krna padega
    
dirPath = dirPath!=undefined ?dirPath:process.cwd();
organiseHelper(dirPath)
}
function organiseHelper(dirPath){
// //create an origin in dirPath
let dirPathJoin=path.join(dirPath,"organise_dir");
// isase nyi folder organised_dir  ka path milega 
let dirExistOrNot=fs.existsSync(dirPathJoin);
// iase check hoga exit hota hai ya nhi 
if(dirExistOrNot==false){
    // agar nhi hota then bn jaega 
    fs.mkdirSync(dirPathJoin);
}
// //read content of this dirPath
let names =fs.readdirSync(dirPath);
// dir ka given path by user
for(let i=0;i<names.length;i++){
    let assetPath=path.join(dirPath,names[i])
    let ans=isfile(assetPath);
    if(ans==true){
        let type=getType(assetPath);
        // thino cheje pass krni padei
         copyToThatType(assetPath,type,dirPathJoin)

        // isase paa chalega file hai ya  nhi hai 
        // console.log(names[i],"isfile",ans);
    }

}
//// only get the file
function isfile(assetPath){   
     //folder ke ander file ka path pass kiya rha hai
   
    let ans=fs.lstatSync(assetPath).isFile();
    // existence of file 
    return ans;

}
////3 check the extname 
function getType(assetPath){
    // path.extename gives the last of that name 
    // and then we use the last slice(1)means removes the doot of the given data

    let extensionName=path.extname(assetPath);
    extensionName= extensionName.slice(1);
    for(let key in types){
        // value of media ,achives ,document,app type[key]
        let totalextension=types[key];

        for(let i=0;i<totalextension.length;i++){
            
            if(totalextension[i]==extensionName){
                // console.log(key);
                // use of return for not exexcute the  beolw that code  return from the function
                return key;
            }
        }

    }
    return "others";

    
    

}

//// 4 copy the file from cutter to one of the file folder inside the organise dir
function copyToThatType(assetPath,type,dirPathJoin){
    // organise dir bnao
    // type vala folder create
let destinationPath=path.join(dirPathJoin,type)
if(fs.existsSync(destinationPath)==false){
    fs.mkdirSync(destinationPath);
}
let  originalName=path.basename(assetPath)
let  desinationFilePath=path.join(destinationPath,originalName);
fs.copyFileSync(assetPath,desinationFilePath);
console.log(originalName,"file copy to that",type)

}
}
module.exports={
    organiseFn:organiseFn
    // same value pass krke bhi call kr skte hai

    
}