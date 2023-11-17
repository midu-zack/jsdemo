let object = {
    firstName: "Muhammed",
    lastName : "Midalj",
    age : 18,
    place : "Malappuram",

    id : function (){
        console.log(this.firstName +" "+ this.lastName);  //this keyword using

    }
}
object.id()


let {firstName,lastName,age,place,id} = object   //object destrectering




console.log(firstName);

console.log(object.firstName + " " +  object.lastName);



const sample = {
    id : 9023,
    nickname: "miduzack",
    area : "kondotty"
}
 
sample.id=9222; // value changing in object simple method
console.log(sample.id);

 delete sample.nickname;
 console.log(sample.id);