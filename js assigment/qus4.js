function sum(n){
    var k=0;
    for(let i=1;i<n;i++){
        if(i%2==0)
        k=k+i;
    }
    console.log(k);
 
}
 
//  const result = sum(12);
//  console.log( result);
sum(12);