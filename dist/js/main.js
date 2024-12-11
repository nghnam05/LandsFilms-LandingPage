const body = document.querySelector("body")
const app = document.querySelector(".app");
if (window.innerWidth < 1200) {
    app.style.display = "none";
    alert("  Chưa reponsive cho màn hình điện thoại. Vui lòng mở website bằng máy tính.")
} else {
        app.style.display = "block";
}

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