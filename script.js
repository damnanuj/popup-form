


// document.addEventListener("DOMContentLoaded", function () {
//     const logBtn = document.querySelector(".btn");
//     const formContainer = document.querySelector(".formContainer");

//     logBtn.addEventListener("click", () => {
//         formContainer.classList.toggle("hidelogin");
//         console.log("harry");
//     });
// });


const logBtn = document.querySelector(".btn");
const formContainer = document.querySelector(".formContainer");
const hider =document.querySelector(".xmark");
logBtn.addEventListener("click", () => {
    formContainer.classList.toggle("hidelogin");
});

// hider.addEventListener ("click", () => logBtn.click())

hider.addEventListener("click", () => {
    formContainer.classList.toggle("hidelogin")
})