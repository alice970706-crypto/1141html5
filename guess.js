const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const guesses = document.querySelector(".guesses");
const restartBtn = document.querySelector(".restartBtn");

// 初始化遊戲
let randomNumber = Math.floor(Math.random() * 100) + 1;
let countNum = 0;

console.log("觀察隨機的數字：", randomNumber);

// 按下提交按鈕
guessSubmit.addEventListener("click", checkGuess);

//------------------ 主遊戲邏輯 ------------------
function checkGuess() {
    const userGuess = Number(guessField.value);

    if (!userGuess) {
        alert("請輸入有效數字！");
        return;
    }

    // 紀錄次數
    countNum++;
    count.textContent = "猜測次數：" + countNum;

    // 紀錄猜過的數字
    guesses.textContent += userGuess + " ";

    // 判斷大小
    if (userGuess === randomNumber) {
        result.textContent = "猜測結果：恭喜猜對了！";
        result.style.backgroundColor = "lightgreen";
        gameOver();
    } 
    else if (userGuess < randomNumber) {
        result.textContent = "猜測結果：太小了！";
        result.style.backgroundColor = "lightblue";
    } 
    else {
        result.textContent = "猜測結果：太大了！";
        result.style.backgroundColor = "orange";
    }

    guessField.value = "";
    guessField.focus();
}

//------------------ 遊戲結束 ------------------
function gameOver() {
    alert("遊戲結束！");
    guessField.disabled = true;
    guessSubmit.disabled = true;
}

//------------------ 重新開始 ------------------
restartBtn.addEventListener("click", function () {
    // 清空資料
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("新的隨機數字：", randomNumber);

    countNum = 0;
    count.textContent = "";

    guesses.textContent = "";

    result.textContent = "";
    result.style.backgroundColor = "";

    guessField.disabled = false;
    guessSubmit.disabled = false;

    guessField.value = "";
    guessField.focus();
});

