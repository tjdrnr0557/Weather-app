const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {

    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //삼항연산자 ? === if 이며, 참이면 첫번째가 실행, 거짓이면 두번째가 실행된다
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
        minutes < 10 ? `0${minutes}` : minutes} : ${
        seconds < 10 ? `0${seconds}` : seconds
        }`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();