let userSeq = [];
let gameSeq = [];

let started = false;
let level = 0;

let btns = ["red", "blue", "yellow", "green"];

let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
   if (started == false) {
      console.log("Game started")
      started = true;
      levelUp();
   }
})

function gameFlash(btn) {
   btn.classList.add("flash");

   setTimeout(function () {
      btn.classList.remove("flash")
   }, 250);
}

function userFlash(btn) {
   btn.classList.add("userFlash");

   setTimeout(function () {
      btn.classList.remove("userFlash")
   }, 250);
}

function levelUp() {
   userSeq = [];
   level++;
   h3.innerText = `Level ${level}`;

   //choose random colour
   let ranIdx = Math.floor(Math.random() * btns.length);
   let ranCol = btns[ranIdx];
   let ranBtn = document.querySelector(`.${ranCol}`);
   gameSeq.push(ranCol);

   gameFlash(ranBtn);
}
function checkAns(idx) {
   if (userSeq[idx] === gameSeq[idx]) {
      if (userSeq.length == gameSeq.length) {
         levelUp();
      }
   }
   else {
      h3.innerHTML = `Game Over! your score was <b>${level}.</b><br> Please press any key to start`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function () {
         document.querySelector("body").style.backgroundColor = "white";
      }, 150);
      reset();
   }
}
function btnPress() {
   // console.log(this);
   let btn = this;
   userFlash(btn);
   let userCol = btn.getAttribute("id");
   userSeq.push(userCol);

   checkAns(userSeq.length - 1);

}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
   btn.addEventListener("click", btnPress);
}
function reset() {
   started = false;
   userSeq = [];
   gameSeq = [];
   level = 0;
}
