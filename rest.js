
const person ={
    id:0,
    name:"midlaj",
    age:90

    
}

// console.log(person.id);

const {name,...rest} = person;

console.log(rest);
