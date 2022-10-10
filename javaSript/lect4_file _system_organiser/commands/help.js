function helpFn(){
    // here we can not use "" (double qoute )bcs multiple line string can ot be excuted sowe use her(`) 
console.log(`List of all command
                1. node cli.js help
                2. node cli.js tree
                3. node cli.js organise`);
}
module.exports={
helpFn:helpFn
}
