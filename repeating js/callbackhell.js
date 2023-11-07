 console.log("start");

    function message(callback){
        setTimeout(()=>{
            callback("heyy zack");
        
        },3000)
    }

    function message1(callback){
        setTimeout(()=>{
            callback("heyy MIdlaj");
        
        },3000)
    }


    function message2(callback){
        setTimeout(()=>{
            callback("heyy Midu");
        
        },3000)
    }


    function message3(callback){
        setTimeout(()=>{
            callback("heyy zacky");
        
        },3000)
    }


    message((value)=>{
        console.log(value);
        message1((value)=>{
            console.log(value);
            message2((value)=>{
                console.log(value);
                message3((value)=>{
                    console.log(value);
                })
            })
        })
    })


 console.log("end");