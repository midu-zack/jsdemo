let person ={
    //key : "value"
    name : "midlaj",
    place: "malappuram",
    age:"18",

}

console.log(person.name);


// modified 
console.log(person.age = 23);

// add key value pair to an object
// *************************************


person.topic = "html"; //string add
console.log(person);
person.topic =["css","bootsrap","javascript"] // array add
// person.details["new array declare"] =" new topic"


// console.log(person)

// console.log(person.topic);


// delete object
// ******************
// delete person.topic

const isanytopic = "sorry not award"
// person[isanytopic] = "no"
person.isanytopic="no"

console.log(person);


const channel={
    nick : "zack",
    nickage:"32",
    nickplace:"kozhikode",
    nickshortname : function(){
            console.log(this.nick);

    }

}

channel.nickshortname();
// console.log("nickplace" in channel);



// Iterations

// for(let key in  channel){
//     console.log(  channel.nickage);
// }
 


// get only keys

// console.log(Object.keys(channel));


// get only value

// console.log(Object.values(channel));


// get key and values

// console.log(Object.entries(channel));



// object refrencing

let isname = "rinus"
let = isname



//copy object 

// let channelcopy = Object.assign(channel)
// console.log("channelcopy",channelcopy);
// console.log("channelcopy",channelcopy);


// object freeze


// let zackfamly = {
//     username : "muhammed midlaj",
//     password : "zack3007"
// }

// Object.freeze(zackfamly)

// let famlyhacked = Object.assign(zackfamly)
// famlyhacked.password ="*****";

// console.log( zackfamly);
// console.log(famlyhacked);


// spreadoprator

const zackbasicinfo ={
    zackname: "midlaj",
    zackage : 34
}

const midiubasicinfo ={
    zackname: "true",
    zackage : "false"
}
// just merging spred l
const aboutzack = {...zackbasicinfo,...midiubasicinfo}
console.log(aboutzack);






