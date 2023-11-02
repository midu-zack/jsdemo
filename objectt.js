const details = {
    name : "midlaj",
    age : "18",
    place: "malappuram",
    collification: "plustwo"
}

delete details.age
console.log(details);
console.log("place" in  details);
for(const key in details){
    console.log(key+ ":"+ details[ key]);
}
console.log(details);
// console.log(details["age"]);
// console.log(details.name);


//lexical enivorment




