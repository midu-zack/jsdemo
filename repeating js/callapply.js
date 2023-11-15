
 const mark = {
    name : "midlaj",
    age : 10,
    firstname :"Muhammed",

    givename(toatally,keep){

        console.log(`${this.name} - ${toatally}  ${keep}`   );
        console.log(this.firstname +" "+ this.name);

    }
    
 }

 console.log( mark.firstname + " "+ mark.name);

 
const marklist = {
    name: "Ozil",
    age : 8,
   
}
 
mark.givename.call(mark, 450 , "chattiparamb")

mark.givename.apply(marklist, [482,"Malappuram"])

const binding = mark.givename.bind(mark, 900 , " kannor") ;

 binding();