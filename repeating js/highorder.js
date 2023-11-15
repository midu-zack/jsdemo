// function message (heyy ){
//     heyy()
 
// }

// function chatt(){
//     console.log("wow wonderfull");
// }

// message(chatt);




function square(i) {
    let result = 5 + 5;
    i(result)
}

function display(k) {
    console.log(k);
}

square(display)


// square((d)=>{
//     console.log(d);
// })



let array = [23,42,52,52,90,23,42];

const sample =array.filter((value,index,array)=>{
return array.indexOf(value)===index
});

console.log(sample);

 


