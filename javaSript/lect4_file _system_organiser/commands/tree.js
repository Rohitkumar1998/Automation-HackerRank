
     let fs= require("fs");
     let path=require("path");
     function treeFn(dirPath){
    

    // console.log("tree command executed",dirPath!=undefined ?dirPath:process.cwd());
    dirPath=dirPath!=undefined ?dirPath:process.cwd();
    let dirFoderName=fs.readdirSync(dirPath);
    console.log(path.basename(dirPath))
    for(let i=0;i<dirFoderName.length;i++){
        console.log("\t",dirFoderName[i]);
    }
}

module.exports={
    // this used for call in another code
    treeFn:treeFn

}