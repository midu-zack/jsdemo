console.log("1 projucet settup");

function myfunction(callback ){
    console.log("2 project settup");
    console.log("3 product settup");
    setTimeout(()=>{
        console.log(" 44444pruct settup");
        callback();
    },3000);
   
}
  function displayon(callback){
    console.log("5555 project settup");
    callback()
  }


  function mypass(callback){
    console.log("30323007");
    callback();
  }


  function addingcallback(callback){
    console.log("all callback function ");
    callback()
  }

  
  function hell(){
    console.log("callbackhell");
   
  }

   myfunction( function(){
    displayon(function(){
        mypass(function(){
            addingcallback(function(){
                hell()
            })

        })
    })
    
   })

   



    console.log("5 product settup");
