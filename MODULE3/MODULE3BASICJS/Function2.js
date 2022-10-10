let obj={
    name:"Jasbir",
    age:25
}
// let key="name";
// console.log(obj[key]);
function getValue(key){
    // we have to use [key ]that means pass the value  
    console.log(obj[key]);

}
getValue("name");
getValue("age")