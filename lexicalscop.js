function a(){
    var x=23;
    b();
   
    function b(){
        console.log(x);
    }
}


a();