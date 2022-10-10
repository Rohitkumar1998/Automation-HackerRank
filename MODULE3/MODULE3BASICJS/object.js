// it is non primitive deta type
// collection of key value pair
//  let r={

//  }
//  r is object
// collection isis key value pair
// key:string or value or number
// value is any js data type 

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
console.log(cap)
console.log(cap.address)
// array ke andar value ke  liye [] number dalna padeaga
console.log(cap.work[1])

// iske liye[] lagan padta hai

console.log(cap["last Name"])
// we can use this for traising inside the cap inside of 
console.log(cap.address["pin code"])
// for delete we have to use delete
delete cap.age;
delete cap.address["pin code"]
// add
cap.movies=["race","tubelight","pademan"]
// second methode off add 
let rohit="qualification"
cap[rohit]="enginner"
// update
cap.address.post="rohit"
cap.age=45

console.log(cap)
