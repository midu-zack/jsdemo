// const promise = new Promise((resolve,rejects) =>{
//     rejects("Failed");
// });

// promise.then((response)=> {
//     console.log(response);
// })

// .catch((error) =>{
//     console.log(error);
// });






console.log("1 product settup");

function myfunction( ){
    console.log("2 project settup");
    console.log("3 product settup");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("timer 4 product");
             reject(" 404")
        },3000);

    })
   
}
  function displayon(){
    console.log("5555 project settup"); 
  }
  function mypass(){
    console.log("30323007");
    return new Promise((resolve,reject)=>{
         resolve("pass");
    },2000)
  }
  function addingcallback(){
    console.log("all callback function ");
    return new Promise((resolve,reject)=>{
        resolve("passed");
   },2000)
  }
  function hell(){
    console.log("callbackhell");
    return new Promise((resolve,reject)=>{
        resolve("just pass");
   },2000)
  }
 function showerror(){
    console.log("sorry not fount");

 }

//    let promise = myfunction()
//   console.log(promise);
    // promise.then(hell)
    // promise.then(addingcallback)
    // promise.then(mypass)
    // promise.catch(showerror) // mugal lladh onnum working aavilla ellam error aaydh kond catch work aavum
    // promise.finally(mypass)

 
    console.log("5 product settup");


//  async /await

async function  allfunction(){
    try{
     await hell()
     await addingcallback()
     await mypass()
    }catch{
        
    }
}

