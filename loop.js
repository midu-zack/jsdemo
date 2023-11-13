// const cars = ["maruthi",'expresso',"benz","bmw","alto"]


// for(let i =0;i<cars.length;i++){
//     console.log(cars[i]);
// }


// const person ={
//     name : "midlaj",
//     place: "kerla",
//     age : 18
// }

// for(let x in person){
//     console.log(x);
// }

// for (const z of person ){
//     console.log(z);
// }



const array = [ 23,42,53,25,24,90]

const newar = array.reduce((acc,cur,idx)=>{
   return  acc + cur
     
});
console.log(newar);



function call(callback){
    setTimeout(() => {
        callback("heyy zackk")
    },3000 );
}

 call((value)=>{
    console.log(value);
 })
