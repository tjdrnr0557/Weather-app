const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    gretting = document.querySelector(".btn");
    
const bodyy=doucment.querySelector("body");
console.log(bodyy);

  function init() {
      if(greeting)
      {
          console.log("true");
      }
      else
      {
          console.log("false");
      }
      console.log(bodyy);
  }
  init();
// const USER_LS = "currentUser",
//     SHOWING_CN = "showing";

// function saveName(text) {
//     localStorage.setItem(USER_LS, text);
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     const currentValue = input.value;
//     paintGretting(currentValue);
//     saveName(currentValue);
// }

// function askForName() {
//     form.classList.add(SHOWING_CN);
//     form.addEventListener("submit", handleSubmit);
// }

// function paintGretting(text) {
//     form.classList.remove(SHOWING_CN);
//     gretting.classList.add(SHOWING_CN);
//     gretting.innerText = `${text}`;
// }

// function loadName() {
//     const currentUser = localStorage.getItem(USER_LS);
//     if (currentUser === null) {
//         askForName();
//     } else {
//         paintGretting(currentUser);
//     }
// }


// function init() {
//     loadName();
// }

// init();
