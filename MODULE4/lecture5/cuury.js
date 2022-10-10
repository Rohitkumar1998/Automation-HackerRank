function fn(){
    console.log("External");
    return function internalFn(){
        console.log("I am internal");
    }
}
// let internalFn=fn();
// internalFn();// function ke andar fn tabhi khh skte jbb retun type bhi function ho

fn()()