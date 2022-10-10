// there  is no size of array
// decration
// collection
let arr=[];
// undefined because it have no value in that
console.log(arr[1])
let b=[[1,2,3],[3,4,5]]
console.log(b)
let a=[1,2,3,4,5];
// traverse
for(let i=0;i<a.length;i++){
    console.log(i+":"+a[i])
}
console.log("`````````````````````````````")
// delete at last
a.pop()
// add at last
a.push(45)
// add at starting
a.unshift(111)
// remove at first
a.shift()
console.log(a);
console.log("````````````````")
c=[1,23,2,8,8,9,0]
// copyed the sub array used slice
// let sliceArray=c.slice(1,5)
// //5 will not include
// console.log("sliceArray",sliceArray)
// console.log("array",c)
console.log("```````````````````")
// indexof element present then give idx of that value>idx/-1
let idx=c.indexOf(9)
console.log(idx)
console.log(c)
// include 
// element present then give otherwise give false 
let ans =c.includes(9)
console.log(ans);
console.log("````````````````")
// (2,3)means in splic from index 2 to 2,3,4
let spliceArray=c.splice(2,3)
console.log(spliceArray)
