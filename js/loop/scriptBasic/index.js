//DOM in html

// window object reprisentan open window object,it is a brouser object(not javascript)
//  created by brouser.


// it is a globle object stores multiple method and properties


// when web  page is loaded brouser create an dom in our page.

// let head = document.getElementById("heading");
// console.log(head);

// let parm = document.getElementById("para");
// console.log(parm);

// let C = document.getElementsByClassName("pra");
// console.log(C);


// let nodelistReturn = document.querySelector("p");
// console.log(nodelistReturn);
// console.dir(nodelistReturn);


//                                                                                   element create 

// let newelement = document.createElement("div");
//  newelement.innerText = "hello I am Akhilesh";
//   console.log(newelement);
//   let p =  document.querySelector("h1");
//   p.append(newelement);


// let s = document.createElement("h1");
// s.innerHTML = "<i> I love javascript</i>";
// console.log(s);
// document.querySelector("p").after(s);

//                                                                                     Remove Element 

// let s = document.querySelector("p");
//  s.remove();

//  let h = document.querySelector("h1");
//  h.remove();



//                                                                                       To get Attribute value


// let h = document.querySelector("h1");

// console.log(h.getAttribute("id"));

// console.log(h.setAttribute("id","head"))

// h.style.backgroundColor = "red";
// h.style.fontSize = "50px";
// h.style.color = "white";
// h.innerText = "Hello";



// let btn  = document.createElement("button");
// btn.innerText = "Click Me!";
// console.log(btn);
// let but = document.querySelector("body");
//  but.prepend(btn);
// let b = document.querySelector("button");
// b.style.padding = "10px";
// b.style.marginLeft = "20px";
// b.style.backgroundColor = "blue";
// but.style.backgroundColor = "green";

// let parag = document.querySelector("p");
// parag.innerText = "hello guys Iam Akhilesh Yadav";
// console.log(parag);

// // console.log(parag.getAttribute("class"));
// let set = parag.setAttribute("class","P");
// console.log(set);


// let h = document.querySelector("h1");
// console.log(h);

// h.classList.add("he","s","q","r");
// h.classList.replace("pra","st");

// h.classList.add("he","s","q","r");
// h.classList.toggle("s");


let btn = document.querySelector("#btn1");

// btn.onclick = () => {
//     console.log("clicked!!");
// }

btn.onclick = () => {
    console.log("Hover");
    
}
// let h = document.querySelector("card");

//  let h = document.querySelector(".head");
//     h.innerText = "YADAV";
//     h.style.backgroundColor = "red";
//     h.style.color = "white";
//     console.log(h);

//     let New = document.createElement("h1");
//     New.innerText = "Create first heading using js";
//     let b = document.querySelector(".head");
//     // b.before(New);
// b.onclick = (evt) => {
//     console.log('btn is clicked');
//     console.log(evt.type);
//     console.log(evt);
    
    
// }

// let h = document.querySelector(".head");
// h.addEventListener("click", () => {
//     console.log("btn is clicked using ad event listener 1");
// })
// const lis = () => {
//     console.log("btn is clicked using ad event listener 2");
// }
// h.addEventListener("click",lis);
// h.removeEventListener("click",lis);
// h.addEventListener("click", () => {
//     console.log("btn is clicked using ad event listener 3");
// })
// h.addEventListener("dblclick", () => {
//     console.log("dbl event listener ");
    
// });
// h.addEventListener("mouseover", () => {
//     console.log("mouse over");
    
// })

// let h = document.querySelector(".btn");
// let current = "light";
// let bo = document.querySelector("body")
// h.addEventListener("click", () => {
//         if(current==="light"){
//             current = "dark";
//             bo.style.backgroundColor = "white";
//         }
//         else{
//             current ="light";
//             bo.style.backgroundColor = "blue";
//         }
//         console.log(current);
// })

















     

  

  

















































































// let age = 24;
// let num = 100;
// console.log(age+num);
// variable in java script
// variable are  container for storing data. we can declare a variable by using keywords..
// let, const, var
// 1 var variable canbe redecleare and update it is use globle scop variable.
// 2 let variable can be redeclare but can not be update it is use block scop variable.
// 3 const variable can not be redeclare and update it is use block scop variable.
// variable declaration name
// variable name can be any starting of character but it should not start with number and it should not
// contain any special character except underscore and dollar sign.
// let age = prompt("Enter the age");
// take input throw promt function
// console.log(age);
// alert("hello guys")
// let age =24;
// age = 23;
// console.log(age);
// console.log("Akhilesh Yadav");




