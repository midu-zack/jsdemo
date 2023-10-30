const gameplay = {

    id : 0,
    name:"bot",
    powerlevel:100
};

const player1 = {...gameplay}; //copy

player1.powerlevel=20;

console.log(gameplay);
console.log(player1);


// string intergers ellam emuteble aan /value change akkan kayiyilla
// but object array ellam muted an means value change aakan kayyum ;




const arr =["midlaj","midu","zack","zackei"];
const ar =["nadhu","kiran","salmu","sibin"];


// const merge = arr.concat(ar);
// console.log(merge);
 


 const merge =[...arr,...ar]
 const push =[...arr,"muhammed"]
 
//  console.log(arr);
//  console.log(ar);

 console.log(merge);
 console.log(push);

