// reffence error 

// console.log(a);
// const a =32;


// sytax error

//   message(){

//     console.log("heyyy");
//  }

//  const a;



// type error

// const h =239;
// h();




 function message(){
  setTimeout(() => {
    console.log("heyy");
  },2000);
  
   console.log("hey zack");
}
message()

 

// const pro =new promise ((resolve,reject)=>{
//     let x=23;
//     if(x=23){
//         console.log("success");
//     }
//     else{
//         console.log("reject");
//     }
// })

// pro.then((result) => {
//     console.log(result);
    
// })
// pro.promise.catch((err) => {
//     console.log(result);
// })

const pro = new Promise((resolve, reject) => {
    let x = 23;
    if (x === 23) {
        resolve("Success");
    } else {
        reject("Rejected");
    }
});

pro.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});
