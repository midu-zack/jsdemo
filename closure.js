function x (){
    var a=200;
    function z(){
   
        console.log(a);
        

    }

        return z;
}



// let result = x();

// console.log(result);

console.log(x());





function j(){
    var outer=45;
     f()
    function f(){
        console.log(outer);
        return f;
                    
    }
 }
 j();





 function outer(){
    var e=78;
    inner();
    function inner(){
        console.log(e);
      
    }
    return inner;

 }
 outer();


//  data hiding

function incres(){
    var counter=0;
    return function countering(){
        counter++;
        console.log(counter);
    }
}


var calling =  incres();

 calling();
calling()





// garbage collectore

function a(){
    var a=23;
    var z=90;   // not defind ,reason this value deleting to garbage collectore 

    return function m(){
        console.log(a);
    }
}

const heep = a();
heep();