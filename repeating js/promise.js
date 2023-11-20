const promise = new Promise( function (resolve,reject){
    setTimeout(()=>{
        resolve("Successfully!");
       
    },3000)

    setTimeout(() => {
        reject("Faiald")
    }, 5000);
   
})
promise.then


// promise.then((Respqonse) => {
    
//     console.log(Response);
    
// }).catch((error) => {
//     console.log(error);
// })





// const promise1 = new Promise( (resolve,reject)=> {
//     resolve([ "midu","andme"])

// });

// const promise2 = new Promise((resolve,reject)=>{
//      resolve(["css","bootstrap"])
// });



// promise1.then(( resolvevalue)=>{
//     console.log(resolvevalue);
// });


// promise2.then((rejectvalue)=>{
//     console.log(rejectvalue);
// });












// const allpormises = Promise.all([promise1,promise2])


// allpormises.then((res)=>{
//     console.log(res.flat());
// })
// .catch((error)=>{
//     console.log(error);
// });