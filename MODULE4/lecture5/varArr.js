function printArrFn2(){
    let arr=[];
        for(var i=0;i<3;i++){
            function printI(){
                console.log("i",i);
            }
            arr.push(printI);
    
        }
        return arr;

    }
    let arrFn2=printArrFn2();
    // arr0 pe jo pda hai use call krr do
    arrFn2[0]();
    arrFn2[1]();
        arrFn2[2]();
    