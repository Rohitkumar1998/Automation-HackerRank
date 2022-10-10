console.log('before')
function fn(inp){
    console.log(inp)
    return "ram" 
}
fn("raj")
let rev=fn(10)
// first line 1 is executed then 6 
// and then 7 due to console.log rev return value "ram "thats why line no 11  ravi then line 
// 12,13,14
console.log(rev)
// print the  return value ram

fn("rohit")
console.log("b/w")
fn("hello")
fn("ravi")
