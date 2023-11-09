
 const mark = {
    name : "aslah",
    age : 10,

    givename(){
        console.log(this.name);
    }
    
 }

 
const marklist = {
    name: "Ozil",
    age : 8,
   
}
 
mark.givename.call(marklist)

mark.givename.apply(marklist)
 