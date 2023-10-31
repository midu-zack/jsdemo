const promise = new Promise((resolve,rejects) =>{
    rejects("Failed");
});

promise.then((response)=> {
    console.log(response);
})

.catch((error) =>{
    console.log(error);
});




function myfunction(num){
    return new Promise ((resolve,rejects)=>{
        setTimeout(()=>{
            resolve(num);
        },3000);
    })
}
function myfunction(num){
    return new Promise ((resolve,rejects)=>{
        setTimeout(()=>{
            resolve(num)
            
        })
    })
}

 