let arr1=[1,2,3]
let arr2=[100,2,1,10];
for(let i=0;i<arr1.length;i++){
    let elementToPut=arr1[i];
    let ispresent=false
    for(let j=0;j<arr2.length;j++){
        if(elementToPut==arr2[j]){
            ispresent =true

        }

    }
    if(ispresent==false){
        arr2.push(elementToPut)
    }
}
console.log(arr2)