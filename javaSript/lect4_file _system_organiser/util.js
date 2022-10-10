let fs = require("fs");
// const { extname } = require("path");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function returnFolderName(fileName){
    // path.extename gives the last of that name 
    // and then we use the last slice(1)means removes the doot of the given data

    let extensionName=path.extname(fileName);
    let remainFromFile = extensionName.slice(1);
    for(let key in types){
        // value of media ,achives ,document,app type[key]
        let totalextension=types[key];

        for(let i=0;i<totalextension.length;i++){
            
            if(totalextension[i]==remainFromFile){
                console.log(key);
                // use of return for not exexcute the  beolw that code  return from the function
                return;
            }
        }

    }
    console.log("others");
    
    

}
returnFolderName("resume.docx");
returnFolderName("xyz.abc");
