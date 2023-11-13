const gamingplay = [
    {
    id :0,
    name:"miduzack",
    age:18
    },
    {
        id :0,
        name:"midu",
        age:10
        },
        {
            id :0,
            name:"zack",
            age:89
            },
            {
                id :0,
                name:"midlaj",
                age:90
                }

];


// for(let i=0; i<gamingplay.length;i++){
//     console.log(gamingplay[i].name);
// }


// gamingplay.forEach(function(value,index,array){
//     console.log(value.name);

// });


gamingplay.forEach((value,index,array) => console.log(value.age))



const array = [ 89,2,421,52,52,64];

const newarray = array.map((value,index,array)=>{
    return value + 10
})

console.log(newarray);
 
