
const students = {
    name : "miduzack",
    age: "18",
    place :"malappuram ",

    getname(){
        console.log(this.name);

    }
}
    const students1 ={
        name : "zack"
        
    }
  

students.getname.call(students1)



