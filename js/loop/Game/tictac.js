let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset-box");
let turn0 = true;
let arr = [
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
    boxes.forEach((btn) => {
        btn.addEventListener("click", () => {
            console.log("btn clicked!!");
            if(turn0){
                btn.innerText = "0";
                turn0 = false;
                btn.style.color = "red";

            }
            else{
                btn.innerText = "x";
                turn0 = true;
                btn.style.color = "blue";
            }
            btn.disabled = true;
        });  
    });
    