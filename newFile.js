// arrow function 
// const fun2 = () => console.log("zackk all");


// fun2();

// find sum in function

// let sum = (x,y) => console.log(x+y);

// sum(80,20);


// if condition in arrow function

// let number = (num) =>{ if (num<0){
//     console.log("Number is negtive");
// }else{
//     console.log("number is positive");
// }
// }

// number(-23);



// class bike{

// constructor method
// automettycally exicuet and call this constractor method
    // constructor(model_name,color,price){
    //     this.model_name = model_name;
    //     this.color = color;
    //     this.price = price ;
   

    // }

    // prototype method
    // object using at call ,only call and usage
        // bikeDetails(){

        //     console.log("bike: " + this.model_name);
        //     console.log("color: " + this.color);
        //     console.log("price: " + this.price);



        // }


        // showprice(){

        //     console.log("Price of " + this.model_name + " is " + this.price);

        // }
    // static methode
    // only class name call
//     static message(){
//         console.log("Its A static method");

//     }
// }

// inheritance
// base class (parent) - bike
// Derived class (child) - sports bike



// class sportsbike extends bike{

// }


// let bike1 = new bike();
// let bike2 = new bike();

// let b1 = new bike ("Suzuki","red" , 80000);
// let b2 = new bike ("Toyota","Black" , 50000);
// let b3 = new bike ("Honda","blue" , 15000);
// console.log(b1.color);
// console.log(b1);
// console.log(b2);
// console.log(b3);

//  b3.bikeDetails();

//  b1.showprice();



//  bike.message();



//  let sp1 = new sportsbike("Yamaha","rose",99000);

//  sp1.bikeDetails();
//  sp1.showprice();




//  Template literal
//  var a=10;
//  var b=23;

//  console.log( `sum of a and b is : ${a+b}`);


//  multy line possible in template literal
//  console.log("hey zackk");
//  console.log("yesss");

//  console.log(`sorry 
//  Iam full busy do you like to me`);





//  for of loop
//  var array1=["shift","alto","beleno","Spresso","vagner"]


//  for(let x of array1){
//     console.log(x + " car");
//  }


//  var arr=[10,20,30,40,50,60];

//  for(let y of arr){
//     console.log(y*10);
//  }


//  var star = "hey zack";

//  for(let z of star){
//     console.log(z);
//  }


//  rest parameters

// function sum11 (num1,num2, ...nums){
    
 
//     var sum=0;


//     for (let m of nums){
//         sum  += m;   // sum = sum+m;

//     }

//     console.log( num1 + num2 + sum);
// }


// sum11( 23 , 7 , 20 , 40 , 50 );




// spead opretor

// var ar1 = [23,42,53,13];
// var ar2 = [53,90,78,67,45];

// var ar3 = ar1.concat(ar2);
// ar3.push(700);

// let ar3 = [...ar1,...ar2, 70,];
// console.log(ar3);

// console.log(ar3);



// let obj1 = {
//     person : "zack",
//     name : "fidhu"
// }

// let obj2 = {
//     ages : 90
// }


// let obj3 = {
//     place : "Malappuram"
// }

// let obj4= {  ...obj1,...obj2,...obj3 }

// console.log(obj4);








//array destructuring

// let a1=["kerla" , "malayalam ", 8000 ,["kochi","kozhikode","kannoor"]];

// let [state ,languge,population, [aa1,a2,a3,a4] ] = a1;
 

// let state = a1[0]


// console.log(state);
// console.log(languge);
// console.log(population);


// console.log(aa1);
// console.log( a2);
// console.log( a3);






// object destructuring

// let object1 = {
//     font:"output",
//     text:"varible",
//     popul:8942 , 


//     watches : {
//         cc1:"palakkad",
//         cc2:"pathanathitta",
//         cc3:"aalappuzha "
//     }
// }



// let {font,text,popul , watches: {cc1,cc2,cc3} } =  object1;

// let font =object1.font;
// let text = object1.text;
// let popul = object1.popul;


// console.log(font);
// console.log(text);
// console.log(popul);


// console.log(cc1);
// console.log(cc2);
// console.log(cc3);
 
// let frts =["apple","orange","painapple", "watermelone"]

//  let top = frts.slice(1,2);

// console.log(top);







// call back

// setTimeout(  ()=>{
//     console.log("timer");
// },5000)

// function x(y){
//     console.log("x called");

//     y();
// }

// x(function (){
//     console.log("anon called ");
// });



 