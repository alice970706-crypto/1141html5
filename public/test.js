// I am a Comment. I do Nothing

// How to Declare variables:
let x = 5;
let y = 6; 
// y = 10; 會出現錯誤
// How to Compute values:
let z = x + y;

// How to Output values:
console.log(z);

function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
z = add(40,20);

console.log(z);
console.log(add(400,200));
console.log(multiply(400,200));

//建立自訂函式
function hello(){      
    alert('點!我!幹!嘛!');
}
function hello2(name){  
    let n = prompt("你幾歲");
    alert('不可能!'+name+'你不可能'+n+'歲');
}
function sum(x,y){
    let s = x + y;
    return s;
}
console.log(sum(4,5));


const btn1 = document.getElementById("btn1");  //取得ID
const btn2 = document.getElementById("btn2");  //取得ID
const btn3 = document.getElementById("btn3");  //取得ID
const btn4 = document.getElementById("btn4");  //取得ID
const img = document.getElementById("img");  //取得ID
x = 20;
y = "block";

btn1.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    document.getElementById("demo1").innerHTML = "去看玩偶遊戲!";
})
btn2.addEventListener("click",function(){  //監聽事件，點擊，執行函式
x = x + 10;
document.getElementById("demo2").style.fontSize=x + "px";
})
btn3.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    alert("沒事");
    this.innerText = "沒事";
    this.style.color = pink;
})
btn4.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    y = (y=="none")? "block" : "none";
    document.getElementById("demo1").style.display = y;
    document.getElementById("demo2").style.display = y;
})
img.addEventListener("mouseover",function(){  //監聽事件，滑鼠懸浮上面
    this.src = "images/lala.png";
})
img.addEventListener("mouseout",function(){  //監聽事件，滑鼠懸浮離開
    this.src = "images/shiba.jpg";
})