
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
            age:90
            },
            {
                id :0,
                name:"midlaj",
                age:90
                }

];

// const newArray =[]
// for(let i=0;i<gamingplay.length;i++){
//     newArray.push(gamingplay[i].name)
// }

// console.log(newArray);




const newArray = gamingplay.filter((value,index,array) => value.age===90 && value.id=== 0);

console.log(newArray);
