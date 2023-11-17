function example(){
    const array = [90,23,41,44,89,89,98,76,56,34]

    const [a,b,c,d,e,...rest] = array

    console.log(rest);
}
example();



// all of arguments convert to one array  
function toping(...rest){
    console.log(rest);
}
toping(9,2,4,1,4,2,90)