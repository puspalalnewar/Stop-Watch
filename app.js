let minuts = document.querySelector(".minuts");
let sec = document.querySelector(".sec");
let msec = document.querySelector(".m-sec");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

let minV = 0;
let secV = 0;
let msecV = 0;

let startTimer = () => {
    msecV++;
    msec.innerHTML = msecV;

    if (msecV === 100) {
        msecV = 0;
        secV++;
        sec.innerHTML = secV;
        if (secV === 60) {
            secV = 0;
            minV++;
            minuts.innerHTML = minV;
        }
    }
}

let myInterval;
btn2.addEventListener("click", () => {
    myInterval = setInterval(() => {
        startTimer();

    }, 1);
    btn2.disabled = true;
});

btn3.addEventListener("click", () => {
    minuts.innerHTML = "00";
    sec.innerHTML = "00";
    msec.innerHTML = "00";
    clearInterval(myInterval);
    minV = 0;
    secV = 0;
    msecV = 0
    btn2.disabled = false;
});

btn1.addEventListener("click", () => {
    clearInterval(myInterval);
    btn2.disabled = false;
});