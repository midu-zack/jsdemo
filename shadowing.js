var a = 98;
let b =32;  //vere oru scop l aan idh save cheyyunnadh

{

    var a=23;   // redfine cheyyum  / global object nde value  replace cheydhirikugayan
    let b =93;
    const c = 89;


    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);


// shadowing

var z=200;
{
    var z=400;
    
}
console.log(z);


// illegal shadowing

// let x =100;

// {
//     var x =500;

// }