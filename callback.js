setTimeout(function (){
    console.log("timer setting");

},4000)

function x(y){
    console.log("x called");
    y()
}
x(function (){
        console.log(" annon called");
})




// callback 

console.log("start");
function Myfunction(cb){
    // return "center:"
    setTimeout(() => {
        cb ("center:")
        
    }, 3000);
    
}
 Myfunction((value)=>{
    console.log(value);
 })
console.log("end");


// call back function 
function Myfunction (y){
    console.log( "first x display");
    y();
}
 Myfunction(function y(){
    console.log("then y display ");
    
 }
 )


