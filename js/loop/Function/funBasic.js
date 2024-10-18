// function fun(){                   ----->   its called function definition  <---------
//     console.log("I Love JS");
//     console.log("Apna College");
// }
// fun(); ------> function call <--------
// fun();
// fun();


// function  fun(a,b){
//         sum = a+b;
//         return sum;
// }
// let res = fun(2,4);
// console.log(res);

// console.log(fun(5,6));



//------------------------------> Arrow function <-----------------------------------------------
//Arrow function is the compact way of writen function


// let arrowsum = (a,b) => {
//     console.log(a+b);
// };

// const arrowMul = (a ,b) => {
//     return(a*b);
// };

// function reVovel(str){
//     for(let i=0;i<length.str;i++){
//         if(str[i] ==='a' || str[i] ==='e' || str[i] ==='i' || str[i] ==='o' || str[i] ==='u') {
//             let a = 0;
//             a++;
//             console.log(a);
            
//         }
//     }
// }
// reVovel("akhiles")

// let count = 0;
// function reVovel(str){
//     for (const element of str) {
//         if(element ==='a' || element ==='e' || element ==='i' || element ==='o' || element ==='u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// reVovel("akhilesh")





//for Each loop
// let arry = ["akhilesh","vimlesh","durgesh","sabhajeet","suhani"];

// arry.forEach(function fun(vel,idx,arry){
//     console.log(vel,arry,idx);
//     console.log(vel.toUpperCase());
// });

// let arry = [1,4,6,5,8,9];
// arry.forEach(function fun(vel){
//     console.log(vel**2);
// })



// arrow function 


     const arry = [12,23,43,45,56,67];
    

    // arry.forEach((vel) => {
    //     if(vel%2==0 || vel%3==0){
    //         console.log(vel);
    //     }
    // })


// Map function

// const newarry = arry.map((vel) => {
//     return vel/2
    
// })
// console.log(newarry);

// Filter function

// const  newarry = arry.filter((vel) => {
//         return vel%3===0 && vel%2===0;
// });
// console.log(newarry);
// let arr = arry.reduce((res,cur) => {
//     if(res>=cur){
//         return res;
//     }
//     else{
//         return cur;
//     }
    
// });
// console.log(arr);


const studentMarks = [86,90,97,56,67,95,92];

studentMarks.forEach((val) => {
    console.log(val*2);
    return
})

let Map = studentMarks.map((val) => {
    return val/2
})
console.log(Map);

let fil = studentMarks.filter((val) => {
    return val>80
})
console.log(fil);


let red = studentMarks.reduce((res,cur) => {
    return res > cur ? res : cur ;
})

console.log(red);  

// console.log(studentMarks);


// let marks = studentMarks.filter((val) => {
//     // return val >=90;
//     return val<=60;
// })
// console.log(marks);
// console.log(studentMarks[2]);
// let sl = (studentMarks.slice(1));
// console.log(sl.length);
// let sp = (studentMarks.splice(0,1,6));
// console.log(sp);

// console.log(studentMarks);


// function fun (a,b) {
//     sum = a + b;
//     return sum;
// }
// let val = fun(2,4);
// console.log(val);




// function f () {
//     let a = 7;
//     let b = 5;
//     sub = a-b;
//     console.log(sub);
//     return
// }
// f();






// let p = studentMarks.push(78);
// console.log(studentMarks);
// console.log(p);



// let n = prompt("Enter the n:");
// let arr= [];
// for(let i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// const A = arr.reduce((res,cur) => {
//     return res * cur;
// });
// console.log(A);














