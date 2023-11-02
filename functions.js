// function declareation

function myfun(a,b){
    console.log("hello " + a)
}
myfun(90,89)



// function expresion

let fun = function(){
    console.log("You almost fail in the all section");
}
fun();

// arrow function 

let fun2 = () =>{
    console.log("expet is the arrow function");
}
fun2();


// Anonymous Functions 

 let anoun = function (name){
    console.log(`One day is coming please wait ${name}`);
 } 
 anoun("Midlaj");


//  function scope

function better(){
    console.log("this function scop please see that");
}

better();



// callback function

function message(report){
    console.log("its message function");
    report();

}
 message( function report(){
    console.log("this report function");

 });




//  genrater function
// this topic pending



// invoka function

(function (){
    let time = "its this invoka function"
    console.log(time);

})();



 


