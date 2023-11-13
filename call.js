console.log("start");

function myfunction (callback){
setTimeout(() => {
    callback("hapyyy done")
   
},3000)
}

function myfunction2 (callback){
    setTimeout(() => {
        callback("I am callback 2")
       
    },)
}



 myfunction ((value)=>{
    console.log(value);
    myfunction2((adding)=>{
        console.log(adding);
    })
 })