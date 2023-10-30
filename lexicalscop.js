function a(){
    b();
    function b(){
        console.log(x);
    }
}

var x=23;
a();