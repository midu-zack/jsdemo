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

