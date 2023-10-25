// arrow function

function message(){
    console.log("good morning");
  }

  message();
  
//   anonymens function


  // defult section parameter
  
          function singn(user = "zack"){
            console.log("welcome " + user);
  
          }
   
          singn("midlaj");
          singn()
  
        const letter = new Set();
         letter.add("bu");
         letter.add("hiw");
         letter.add("woe");
  
         document.getElementById("cr").innerHTML = letter.size;
  
          const vechile = new Map([
            ["benz",3400],
            ["audi",7899],
            ["BMw",288]
          ]);
  
           let value= document.getElementById("fid").innerHTML = vechile.has("benz");
          
            
          
  
        function myhrv(){
          document.getElementById("chek").click();  
        }
  
  
  
        // function chemmadan() {
        //  let lis = document.getElementById("call").classList;
        //   lis.add("myStyle");
        // }
  
        function chemmadan() {
         let lis = document.getElementById("call").classList.toggle("myStyle");
        }
        
  
        let count=document.getElementById("mydiv").childElementCount;
        document.getElementById("tom").innerHTML = count;
  
        function focus(){
          document.getElementById("tin").focus();
        
        }
  
        function blur(){
  
          document.getElementById("tin").blur();
        }
  
  
        document.getElementsByClassName("demo")[0].innerHTML = 56 + 34;
        document.write("A apple");
        // window.alert("Sorry not possible")
        //   alert("Sorry mister");
        console.log(89 + 12);
        document.getElementById("yes").innerHTML =
          "muhammed " + "midlaj" + "pulladan";
  
        z = 23;
        x = 27;
        y = z + x;
        document.getElementById("variables").innerHTML = "Answer is :" + y;
  
        var m = 11;
        var h = 13;
        var F = m + h;
        document.getElementById("var").innerHTML = "ansr" + F;
  
        let car = "BM",
          person = "zack",
          age = 18;
        document.getElementById("details").innerHTML = car + person;
  
        //  let and const not redeclare not possible
        // let carName = "shift";
        // let carName = "shift";
        // let carName = "blackshift"
  
        let $$ = 34;
        let $$$hey = 34;
        document.getElementById("let$").innerHTML = $$ + $$$hey;
  
        const cars = ["BM", "Benz", "audi"];
        cars[0] = "Shift";
        cars.push("maruthi");
  
        document.getElementById("const").innerHTML = cars;
  
        let text1 = 34;
        let text2 = 24;
        let result = text2 < text1;
        document.getElementById("string-opt").innerHTML = result;
        document.getElementById("string-opt").style.backgroundColor = "black";
        document.getElementById("string-opt").style.color = "red";
  
        // assign and plus opretors using
        let contant = "where are you from";
        contant += "iam come to dubai";
  
        document.getElementById("oprts").innerHTML = contant;
  
        let minus = 23;
        minus -= 3;
        document.getElementById("min").innerHTML = minus;
  
        function sampile() {
          console.log("heyyy zckkkkkkkkkkkkk");
          console.log("heyyy zckkkkkkkkkkkkk");
          console.log("heyyy zckkkkkkkkkkkkk");
          console.log("heyyy zckkkkkkkkkkkkk");
          console.log("heyyy zckkkkkkkkkkkkk");
          console.log("heyyy zckkkkkkkkkkkkk");
          console.log("heyyy zckkkkkkkkkkkkk");
        }
        sampile();
  
        const object = {
          person: "zack",
          age: 18,
          job: "full stack developer",
        };
  
        document.getElementById("object").innerHTML =
          "This is object methode " + object.person + object.age + object.job;
  
        // function sum(a,b){
        //    return a + b;
        // }
        //   alert(sum(20,12));
  
        //   exaple = function (c ,d ) {
        //    return c + d;
        //   }
        //   alert(exaple(32,45));
  
        //    sum1 = (n,m) => {
        //       return (n+m);
        //    }
        //    alert(sum1(23,45));
  
        //    sum2 = (s,v) => s+v;
        //    alert(sum2(34,6));
  
        // dome
  
        // let urlprinting = window.document.URL;
        // document.getElementById("dom").innerHTML = urlprinting;
  
        let urlprinting = document.URL;
        document.getElementById("dom").innerHTML = urlprinting;
  
        let b = document.getElementById("btn");
  b.addEventListener("mouseover", zack);
  document.body.addEventListener("mouseover", midu);
  
  
  function zack() {
    b.innerHTML = "sorry";
    b.style.color = "red";
    b.style.backgroundColor = "yellow";
    b.style.paddingLeft = "34px";
    document.body.style.backgroundColor = "red";
  
  }
  
  function midu() {
    document.body.style.backgroundColor = "white"; // Change the background color of the body
  }
  
  
      let event= document.getElementById("eventlist");
      event.addEventListener("mouseover",() =>{
        event.innerHTML = "your see that is girl?";
     event.addEventListener("click",function(){
        event.innerHTML = "Stop";
     event.addEventListener("mouseout",()=>{
        event.innerHTML = "Yes,She is very beutyful";
     });
     });
      });
       
  
      function apnd(){
        let node = document.createElement("h1");
  
        let textnode = document.createTextNode("zackyyy yyyyy howwwwwwww");
  
        node.appendChild(textnode);
  
        document.getElementById("appnd").appendChild( node);
  
      }
  
  
      function myfunction(){
        const node = document.getElementById("list1").lastElementChild;
        document.getElementById("list2").appendChild(node);
      }
  
  
      
  
  