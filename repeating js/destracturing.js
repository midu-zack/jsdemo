
const object1 = {
    name : "muhammed midlaj. ",
    place : " Malappuram.",
    collification : " plus two computer application.",
    age : 18

}
 
function myfunction () {
    const {name,place,collification ,age , ...others} = object1;

    // console.log(" MY name is " +name, "Coming form" + place, "My education "+collification, "I am "+ age + " year old.");

    console.log( name,others);
 
}


myfunction();



const array = [90,12,42,15,52,64]

function fun(){
    const [a,b,c,...also] = array
    console.log(a,b,also);
}
fun()

// defult value printing in array

const mark = [34,24,64,6]

function myfun(){
    const [a,b,c,d,e=false]= mark;
    console.log(a,b,c,d,e);
}
myfun();





 const method = [90,32,41,52] ;

 function justexample([x,y,z,w]){

    console.log(x,y);
 }

justexample(method)
 






const arrayjs = ["midlaj","muhammed","zack"]

const[name,firstname,nickname]=arrayjs

// console.log(firstname);


// console.log(arrayjs.pop());
 console.log(arrayjs.push("midu"));



 console.log(arrayjs.unshift());
 console.log(arrayjs);

