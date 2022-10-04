//  Home works


let a = "Isakov";
let b = "Muhammadjon";
console.log("hello my name is " + `${a} `  + `${b}` );

//  extra

let pro = document.querySelector(".pro");
let li = document.querySelector(".li")

//  this is variables 

  let spag = " spaghetti 400g";
  let guan =  "guanciale 250g";
  let fresh = "very fresh egg yolks 6";
  let peco = "aged grted Pecorino Romano cheese 50g";
  let raw = "raw black pepper 4g";

  console.log(spag + guan + fresh + peco + raw);

//  Here I add some arrays cause it is better way(my opinion) 
  const myArray = ["spaghetti 400g" , 
  "guanciale 250g" ,
  "very fresh egg yolks 6" ,
 "aged grted Pecorino Romano cheese 50g" ,
 "raw black pepper 4g"];


function ShowPro(){
      pro.innerHTML = myArray
    
    //   li.innerHTML = myArray
      
}