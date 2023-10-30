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

const finding = gamingplay.find((value) => value.name === "zack");
console.log(finding);