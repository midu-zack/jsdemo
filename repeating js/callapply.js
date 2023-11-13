
 const mark = {
    name : "aslah",
    age : 10,

    givename(toatally,keep){

        console.log(`${this.name} - ${toatally}  ${keep}`   );

    }
    
 }

 
const marklist = {
    name: "Ozil",
    age : 8,
   
}
 
mark.givename.call(mark, 450 , "chattiparamb")

mark.givename.apply(marklist, [482,"Malappuram"])

const binding = mark.givename.bind(mark, 900 , " kannor") ;

 binding();