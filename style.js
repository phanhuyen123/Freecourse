const box1 = document.getElementById("box1");
const box2 = document.getElementsByClassName("box1");
console.log(box2[0].innerText);
console.log(box1);

const btn = document.getElementById("btn1");
let count = 0;
btn.onclick = function(){
    count++;
    if(count % 2 != 0){
        box1.style.backgroundColor = "white";
        box1.style.color = "white";
    } else {
        box1.style.backgroundColor = "red";
        box1.style.color = "black";
        box1.innerText = box2[0].innerText;
    }
}


// bai 2

const box4 = document.querySelector(".box2");
const btn2 = document.querySelector(".btn2");
btn2.onclick = function(){
    let arrayColor = ["yellow" ,'black', 'gray', 'pink' , 'orange'];
    box4.style.backgroundColor = arrayColor[Math.floor(Math.random() * arrayColor.length)]
}


// bai 3

const btn3 = document.querySelector(".btn3");
const box5 = document.querySelector(".box3");
const box6 = document.querySelector(".box4");

btn3.onclick = function(){

        let temp = box5.innerText;
        box5.innerText = box6.innerText;
        box6.innerText = temp;
    
}


const btn4 = document.querySelector(".btn4");
const box7 = document.querySelector(".box5");
let index = 15;
btn4.onclick = function(){
    index += 1;
    box7.style.fontSize = index+"px";
}