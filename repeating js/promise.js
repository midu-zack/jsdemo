// const promise = new Promise( function (resolve,reject){
//     setTimeout(()=>{
        // resolve("Successfully!");
//         reject("Faiald")
//     },3000)
   
// })

// promise.then((Response) => {
    
//     console.log(Response);
    
// }).catch((error) => {
//     console.log(error);
// })



c

const promise1 = new Promise( (resolve,reject)=> {
    resolve([ "midu","andme"])

});

const promise2 = new Promise((resolve,reject)=>{
     resolve(["css","bootstrap"])
});



// promise1.then(( resolvevalue)=>{
//     console.log(resolvevalue);
// });


// promise2.then((rejectvalue)=>{
//     console.log(rejectvalue);
// });

const allpormises = Promise.all([promise1,promise2])


allpormises.then((res)=>{
    console.log(res.flat());
})
.catch((error)=>{
    console.log(error);
});