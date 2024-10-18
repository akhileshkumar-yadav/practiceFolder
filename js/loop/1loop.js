// for(let i=0;i<=10;i++){
//     console.log(i);
// };
// console.log(i);

for(let i = 1 ; i<=20 ; i++){
    if(i===5){
        console.log(`5 is detected`);
        continue;
    }
    console.log(`this is a natural number ${i}`);
    
}

for (let i = 1; i <= 20; i++) {
    for(let j = 1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    if(i===6){
        console.log(`6 is detected ${i}`)
        break;
    }
}


//  arrow function 
// let variableName = (Passparameter) => {
//  consol.log("code execute")
//  }

// for of loop 
 let array = [1,2,3,4,5];
 let count = null;
 for (const element of array) {
    if(count==3){
        console.log(`3 is detected`);
        break;
    }
    console.log(element);
    count++
    
 }


//   for each loop
//  let isFallow = true; 
// ( isFallow===true) ? console.log("is fallow") : console.log("isNotFallow");
// ternary operater
// let isFallow = true;




