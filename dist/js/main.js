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

const filmItems = document.querySelectorAll(".film");
const contentFilm = document.querySelector(".films-content");

