// help command
// <!-- help:node cli.js help -->
// <! it help Print list of all command->
// <!-- tree:node cli.js tree structure of a given folder -->
// <!- print the tree structure of a given folder ->
// <!-- Organise :node cli.js organise path(optional) -->
// <!-  It will organise a given floder->
let inputArry=process.argv.slice(2);
// call all the fn
let helpObj= require("./commands/help");
let treeObj= require("./commands/tree");
let organiseObj= require("./commands/organise");

// user input
let command = inputArry[0];
let dirPath = inputArry[1];
switch(command){
    case "help":
        helpObj.helpFn();
        break;
    case "tree":
        // same yha call krna pdta hai
    treeObj.treeFn(dirPath);    
    break;
    case "organise":
        organiseObj.organiseFn(dirPath); 
        break;
    case "default":
        console.log("Wrong command input")            
}

