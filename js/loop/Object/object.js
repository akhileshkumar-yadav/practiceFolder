// const employe = {
//     fullName : "akhilesh",
//     marks : 90.00,
//     printMarks : function () {
//         console.log("Marks = ", this.marks);
        
//     },
// };

// const employe = {
//     culTax(){
//         console.log("tax is 10%");
//     }
// };

// const karanArjun = {
//     Salary:20000
// }

// karanArjun.__proto__ = employe;

// console.log("----------------------------------------------------------------------------------------------------");

// class car {
//     constructor(brand , mailage) {
//         console.log("This is create constructer");
//         this.brand = brand;
//         this.mailage = mailage;
//     }
//     start() {
//         console.log("start");
//         }
//     stop() {
//         console.log("stop");
//     }
//     setBrand (brand){
//         this.brand = brand;
//     }
// };

// create object

// const fartuner = new car();
// fartuner.setBrand("Fartuner");
 
// const audi = new car();
// audi.setBrand("Audi");
// const fartuner = new car ("Alto",30);
// console.log(fartuner);
// const bolero = new car ("mahindra",30);
// console.log(bolero);


//  inheritence 

// class parent {
//     eat () {
//         console.log("eat the food");
        
//     }
//     sleep () {
//         console.log("sleep at night");
        
//     }
//      work () {
//         console.log("employe work");
        
//      }
// };

// class child extends parent {
//     salary () {
//         console.log("salary");
        
//     }
// };

// const obj = new child ();

class kali {
    constructor(houseNo){
        this.houseNo = houseNo;
    }
    property () {
        console.log("property is 20v");
    }
    member () {
        console.log("totale member is 12");
    }
};

class deleep extends kali {
    familyMember () {
        console.log("totale member is 4");
    }
};
 

const obj = new kali();
console.log(kali);

console.log(obj.property(123));

 