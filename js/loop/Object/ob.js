// function Course(Branch,totaleSem,fee,year,college) {
//     this.branch = Branch;
//     this.totaleSem = totaleSem;
//     this.fee = fee;
//     this.year = year;
//     this.college = college;
// }

// const BCA = new Course('BCA',6,40000,3,'S.V.N');
// const  betch = new Course('BETCH',8,80000,4,'S.V.N');
// // console.log(BCA);
// // console.log(betch);
// for (const key in BCA) {
//     console.log( key,':', BCA[key]);
// }

const user = {
    name: 'akhilesh',
    email:'akhilehyadav90863@gmail.com',
    password:1234
}
user.isFallow = true;
console.log(user.name[2]);
console.log(user.password);
console.log(user.email[10]);
// console.log(Object.keys(user),Object.values(user));
// console.log(user.isFallow);
console.log(Object.entries(user));



for (const key in user) {
    console.log(key, ':' , user[key]);
    
}

// let num =30;

// if(num>20){
//     console.log('nice');
//     var mynum = 20;
// }else{
//     console.log('bad');
// }

// console.log(mynum);


// const nums = [1,2,3,4,5];
//  let del = nums.splice(2,3)
// console.log(nums);
// console.log(del);


// const nums = [1,2,3,4,5];

// new_num = nums.map(n => n-1);
// console.log(nums);

// console.log(new_num);


// const num = [1,2,3,4,5];
// const new_num = num.filter((n) => {n !=2
//     return 
// });
// console.log(new_num);






