const items = [
    {
        product : "mouse",
        price: 450
    },

    {
        product : "keybor",
        price: 1500
    },

    {
        product : "stand",
        price: 400
    }

]

// const totalamount = items.reduce((totalamount,items) =>{
//     return totalamount +items.price;

// },0);

// console.log(totalamount);


const totalamount = items.reduce(Myfunction,0);
 
function Myfunction(totalamount,items){

    return totalamount + items.price;

}

console.log(totalamount);



//  var totalamount= 0;

//  for(var i=0;i<items.length;i++){
//      var totalamount = totalamount + items[i].price;
//  }

//  console.log(totalamount);




// reduce 

const numberArray = [23,34,8,63,98,90,54];


// let total = 0;

// for(let i=0;i<numberArray.length;i++){
//     total += numberArray[i];
// }
// console.log(total);
 


const newArray = numberArray.reduce((total,value) => total + value,0);

console.log(newArray);






 