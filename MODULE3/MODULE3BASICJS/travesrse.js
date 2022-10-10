
let cap={
    firstName:"rohit",
    
    "last Name":"kumar",
    work:["mnam","kam"],
    address:{
        // values ke bich me space hai agar aa jaye to usko double qoute me 
        // rkh dete hai usko get krne ke liye [ krte hai]
        "pin code":212401,
        post:"patava"
    },
    age:24,
    year:null


}
for(let key in cap){
    //give all the key value of of object
    console.log(key)
}
console.log("```````````````````")
for(let key in cap){
    // cap[key] means gives the value  of data 
    console.log(key,":",cap[key])

}