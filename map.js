const users = [
    {firstname :"muhammed", lastname : "midlaj", age:"18"},
    {firstname :"ahmed",lastname : "shibili" , age :"24"},
    {firstname : "heyyyy", lastname: "hello " ,age:43},
];

const output = users.map((x) => x.firstname + " " + x.lastname);
console.log(output);


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

// const newArray =[]
// for(let i=0;i<gamingplay.length;i++){
//     newArray.push(gamingplay[i].name)
// }

// console.log(newArray);




const newArray = gamingplay.map((value) =>value.age);

console.log(newArray);




