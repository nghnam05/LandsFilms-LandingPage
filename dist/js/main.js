document.addEventListener("DOMContentLoaded", () => {
    const minWidth = 1200; 
    if (window.innerWidth < minWidth) {
      document.body.style.display = "none";
      alert("Trang web này không khả dụng cho thiết bị có kích thước màn hình < 1200px")

    } else {

      document.body.style.display = "block";
    }
  });


const liMoives = document.querySelectorAll(".li-movies");
const link = document.querySelectorAll(".link");

link.forEach((item) =>{
    item.addEventListener("click", (event) => {
        event.preventDefault();
        link.forEach((link) => {
            link.classList.remove("link-active");
        });
        item.classList.add("link-active");
    });
        
})


liMoives.forEach((liItem) => {
    liItem.addEventListener("click", (event) => {
        event.preventDefault();
        liMoives.forEach((li) => {
            li.classList.remove("li-active");
        });
        liItem.classList.add("li-active");
    });
})

const lg = document.querySelector(".fa-user") 
const loginForm = document.querySelector(".login-form");
const btnSign = document.querySelector(".sign-btn1");
const btnSign1 = document.querySelector(".sign-btn");
const exit =document.querySelector(".exit");
const sigin = document.querySelector(".signForm");
const exit1 = document.querySelector(".exits");
lg.addEventListener("click", () => {
    loginForm.classList.add("login-active");
    exit.addEventListener("click", (e) => {
        loginForm.classList.remove("login-active");
        
    });
});

if(document.body.hasChildNodes(loginForm)) {
    btnSign.addEventListener("click", (e) => {
        loginForm.classList.remove("login-active");
        sigin.classList.add("sign-active");
        exit1.addEventListener("click", (e) => {
            sigin.classList.remove("sign-active");
            
        });
    });
}

btnSign1.addEventListener("click", () => {
    loginForm.classList.remove("login-active");
});