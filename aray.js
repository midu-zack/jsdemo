// Array declare

let number = [10,30,40,20,50]

console.log(number);



// array methods


let cars = ["rr","yemaha","m8","scoty"]

// adding to first
cars.unshift("alto", "audi","vagner")
console.log();

// adding to last
cars.push("Spresso")
console.log(cars);

// delete to first value
cars.shift()
console.log(cars);

// delete to laitest value
cars.pop()
console.log(cars);

// another array adding in orginal array 
let model = ["auto","bike"]
let vechile = cars.concat(model)
console.log( vechile);








let numbers =[33,88,99,55,66,33]

// make to new small array 
 let sl= numbers.slice(2,5)
console.log( sl);


// make to array
let sp = numbers.splice(2,5)
console.log(sp);














// Converts the elements of an array into a string
let bikes= ["rr","yemaha","m8","scoty"]
 bikes.join('')
console.log( bikes);


// finds in the index of element into an array 
 const x = bikes.indexOf("yemaha")
 console.log(x);


//  filter
const num = [ 33,55,66,774,24,64,13]
let filternum = num.filter((value,index,array) =>value>49)
console.log(filternum);
 


// map
const contact = [95,67,66,64,20];
const pluscontact= contact.map((value,index,array)=> value + 10)
console.log(contact);
console.log(pluscontact);

// reduce

const numb =[75,85,60,50,100,40]

const newarr=numb.reduce((total,value)=> total+value );
console.log(newarr);


// reduce right
const rightarray = numb.reduceRight((total,value)=>total+value ,0 );
console.log(rightarray);

// foreach
const fruits = ["apple", "banana", "orange"];
console.log(fruits);
fruits.forEach(fruit => console.log(fruit));




// sorting
 const types =["banana","orange","blue","apple"]
//  const sorttype =types.sort()
//  console.log(types);


// reversing array 
 const reversearr =types.reverse()
 console.log(reversearr);


//  every true or false
const newevery = [34,5,48,97,23,90]
const everyarry = newevery.every((value,index,array)=>value >4)
console.log( everyarry);


// some true or false 
const some = [54,89,23,98,67]
const somearray = some.some((value,index,array) => value > 90)
console.log(somearray);



// isArray  ; check if a value in array
const isarray = Array.isArray(some)
console.log(isarray);

