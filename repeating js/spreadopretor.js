// *******************************************
// object 
// *******************************************

// cloning in object
var object = {
    a : 1,
    b : 2,
    c: 90
 }

  var object1 = {
    ...object
 }
 
 console.log(object1);


//  next using 
//  ovrate in object
const newone = {
    a: 90,
    b : 89,
    c: 13
 
}

const newsecond = {
    ab : 90,
    b : 23,
    c : 12

}

const newmodel ={
    ...newone,
    ...newsecond
}

console.log(newmodel);   // randum koodim ovrate cheydh tt lla out put labikum


// concactive in object

 const concactiveobj = 
 {
    ...newone,...newsecond
}
console.log(concactiveobj);


// shallow copy in object  
// and adding this one value
var shallow = {
    v : "midlaj",
    h : "muhammed"
}

var shallow2 ={
    ...shallow
}

shallow.hi = 8329

console.log(shallow,shallow2);

// **************************************
// array
// ************************************

// cloning in array
var a = [1,23,44,23,4]

var b = [...a] //all types call in b

 
console.log(b);


//  concactive in array

var ab = [24,53,89,42,12]
var ba = [90,23,13,2,5]

var bs = [...ab,...ba]
console.log(bs);