// function declare
function message(){
    console.log("heyy zack");
}
message();




// function expresstion
let newfun = function(){
    console.log("how are you");
}
newfun();





// arrow function
let result = ()=>{
    console.log("sorry i am very perfect");
}

result();



// pure function
function sum(a,b){
    return a+b
}
console.log(sum(89,22));


// highorderfunction 
function high(value){
    value()

}
function order(){
    console.log("yes i am high order function");
}
high(order)






//anounymouse function
const array = [8,2,4,25,266,787,90]

 const answer = array.findIndex((value,index,array)=>{
    return value > 4
 })
 console.log(answer);