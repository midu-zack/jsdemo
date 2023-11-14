// var text = "muhammed midlaj m";
// var text2 = " zack"

// console.log(text[5]);

// console.log(text.slice(1,3));


// console.log(text.length);

// console.log(text.concat(text2));

// console.log(text.charCodeAt(2));

// console.log(text.indexOf('m'));   

// console.log(text.lastIndexOf('m'));

// console.log(text.replace("muhammed","zack"));

// console.log(text.startsWith("muh"));

// console.log(text.endsWith("m"));

// console.log(text.split('').join("|"));

// console.log(text);

let acess = "Muhammed Midlaj"
let innesiol = /pulladan /  ;
 
console.log( acess.length);    //length searching in this string

// let result = acess.length;
// console.log(result);

console.log(acess.concat(innesiol));  //mergin method


console.log(acess.substring(14,15));  //find valeu text 

console.log(acess.charAt(14)); 

let ansr = acess.replace("Midlaj","zack");  // changed name and new change name add
console.log(ansr);



console.log(acess.toLocaleUpperCase());  //text upper case


// console.log(innesiol.trim());  //first space remove 

// console.log(innesiol.trimEnd());
// console.log(innesiol.trimStart());

console.log(acess.split('').join());

 

const arr=["banana","orange","watermelone","apple"]

let rst =arr.join(" "); //just join id

console.log(rst);


console.log(acess.localeCompare(innesiol)); //string comparison

console.log(acess.charCodeAt(3));  // check number value 
console.log(acess.charAt(3));  // checking number character postion 

 let ans =acess.match(innesiol)
 console.log(ans);
