const body = document.querySelector("body");
const IMG_NUMBER = 12;
const title = document.querySelector("title");
title.innerText = "뭐하지...";
const btn=document.querySelector(".btn");

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImg");
    body.prepend(image);
}


function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number
}

// return으로 숫자를 받아 오므로, 변수에 함수를 직접 대입
function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
    console.log("sibal",btn);
}

init();