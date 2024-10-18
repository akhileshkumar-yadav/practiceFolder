// let array = [67,78,69,80,80,90];
// let lent = array.length;
// let sum = 0;
// for (let inx=0;inx<lent;inx++) {
//     // console.log(array[inx]);
    
//     sum += array[inx];
// }
// let avg =( (sum)/lent)
// console.log( "Average of array is " + avg ,"%");


let items = [568,686,354,246,908,234];
for(let i=0;i<(items.length);i++){
    let offers = items[i]/10;
    items[i] -= offers;
    console.log(items[i]);

}

