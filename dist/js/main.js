document.addEventListener("DOMContentLoaded", () => {
    const minWidth = 1200; // Kích thước tối thiểu để hiển thị nội dung
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