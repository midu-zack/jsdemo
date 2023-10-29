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