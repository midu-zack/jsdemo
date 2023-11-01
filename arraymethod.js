// slice

const number =[23,43,53,53,67,]

const newNumber = number.slice(2,4)
const newsp =number.splice(2,4);
 
console.log(newsp);
console.log(newNumber);


//  map 

const names = ["musk" , "steve","mark"]

names.map((name)=>console.log(name));

const leng = names.length;
console.log( leng);




const datas = [
   {
    name :"elon musk",
    age : 34
   },
   {
    name :"devid",
    age :43

   }
]

datas.map((data) => console.log(data.name));




const count = [98,89,45,54,34,43]

const value = count.map(Myfunction);

function Myfunction(rslt){
    return rslt+2;;
}

console.log(value);




let fruits = ["banana","Orange","apple","mango"]

let frt =fruits.pop();

console.log(fruits);
console.log(frt);