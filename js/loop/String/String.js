// // String is a sequence of charecters used to represent text.
// let name = "Akhikesh yadav"
// console.log(name);
// // String literals
// let age = 24;
// let lit = `akhilesh yadav \n ${age}\n${name}`
// console.log(lit);
// //string interpoletion
// let af = 12;
// let inter = `I Love JS:\t ${af*2}`;
// console.log(inter);


 //string methods
//  1. toupperCase()  String convert in capital latters
//  2. tolowerCase() String convert in Small latters
//  3. camelCase() starting latter in small and adding new string first latters capital like firstName
//  4. trim( ) removing whitespace from starting and ending 
//  5. Slice(start,end) it is a method to give a part of string 
//  6. str1 conact str2.
//  7.Replace(serchvel,newvel) or allreplace
//  8. charAt(inx) to find out given string specific charecter or latter
//  9. indexOf() to find out given string specific charecter or latter
// 10. lastIndexOf() to find out given string specific charecter or latter

let fullName = "akhileshyadav"
// let lastName = "kumar   "
// let t = lastName.trim();
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(t);
// console.log(fullName.slice(1,8));
// console.log(fullName.concat(lastName));
// console.log(fullName.replace("akhi","vim"));
// console.log(fullName.charAt(5));
// console.log(fullName.indexOf('y'));
// console.log(fullName.lastIndexOf('a'));
// let len = fullName.length;
// console.log(len);
// let name = prompt("Enter the name")
// console.log("@".concat(name,(name.length)));



// let str = "akhilesh";
// for(let i = 0; i<str.length;i++){
 
    
//     console.log(str[i]);
    
// }

let count = 0;
let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i<arr.length;i++){
    count += arr[i]
    console.log(count);
    
}











