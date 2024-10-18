const arr = [1,4,6,7,8,9];
console.log(arr);

// let N = arr.push(12);
// let n = arr.pop();

// console.log(arr.unshift(12));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
//                                      array ko string me convert karte hai
//  let str = arr.join();
//  console.log(str);

//                                      two array ko add karna ek arry me
const arr1 = [12,34,45,67,87];
// const arr2 = [12,34,45,67,87];
// let addA = arr.concat(arr1,arr2);
// console.log(addA);

// let addspredme = [...arr,...arr1]
// console.log(addspredme);

// let str = Array.isArray("akhilesh");
// console.log(str);
// let a = Array.from("akhilesh");
// console.log(a);

// let fromVariable = Array.of(arr,arr1);
// console.log(fromVariable.flat(Infinity));



//     Object           ooooooooooooooooooooooooooooooooobbbbbbbbbbbbbbbbbbbjjjjjjjjjjjjjjjeeeeeeeeeeccccccccccccctttttttt


// jb kabhi bhi hmm object ko as a litral create karte hai toh usme singaltan nahi hota hai

//  object.create karne me singaltan hota hai

// let sym = Symbol("symb1");
// console.log(typeof sym);

 
let ob = {
    name : "akhilesh",
    symb1 : "value",
    age :20,
    salary : 20000,
    branch : "BCA",
    id : "ak47"
};


function executeValue (getObject) {
    return `this is name ${getObject.name } that is salary ${getObject.salary}`;
};

 console.log(executeValue(ob));

 let array = [1,3,5,7,9,3];
 function fun (getArray){
    return getArray[1];
 }

 console.log(fun(array));
 

// console.log(typeof ob);
// object ke key ko kaise print kraye
// console.log(ob.name);
// console.log(ob.symb1);

// ob.name = "yadavji";
// Object.freeze(ob)
// ob.name = "kumar";
// console.log(ob);

// ob.greeting = function () {
//     console.log("this greeting method refernce");
    
// };
// ob.greetingtwo = function () {
//     console.log(`this greeting method refernce ${ this.branch}  ${this.age}`);
    
// };

// console.log(ob.greeting());
// console.log(ob.greetingtwo());















 




