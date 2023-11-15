// for ( let index = 0; index < 10 ; index++)
// console.log(index);

// console.log("start 1");

// console.log("start 2");




// console.log("running 1");


// setTimeout(()=>{
//     console.log("timer in the bomb");
// },4000);

// console.log("running 2");



console.log("start First ");

function getname(callbackfuntion){
setTimeout(() => {
         callbackfuntion ("texting")
    }, 4000)
}

getname((value)=>{
    console.log(value);

 } );

  
//  function value(normally){
//     console.log(normally);
//  }

//  getname(value);

console.log("start End");



console.log("heyy zack i trying");

function callback(callbacktext){
setTimeout(() => {
    // console.log("heyy I waiting for you");
    callbacktext(" i will under stand")
},5000);
}

callback((passing)=>{
    console.log(passing);
})

console.log("sorry  i will end");





function add(cb){
 
   setTimeout(() => {
    
    cb()
   },8000);
}
 
function hell(){
    console.log("success");
    
}
add(hell)




// function message(value){
//     value();
  
// }

// function chatting(){
//     console.log("hey zack");

// }

// message(chatting)




 

 


// proper callback function


console.log("starting my sample work ");

function callbackfunction(cb){

    setTimeout(() => {
        cb();
        console.log("sorry for late ");
        
    },2000);

}

function cb(){
    console.log("i am callback function");
}

callbackfunction(cb);

console.log("okey you countineu");



