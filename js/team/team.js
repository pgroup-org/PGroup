const menuItems = document.querySelectorAll(".container aside .aside .menu .side-menu li a");
const iframe = document.getElementById("iframe");

menuItems.forEach((item) =>{
  item.addEventListener("click", (e) => {
    iframe.setAttribute("src", `./${item.id}.html`);
    item.parentElement.parentElement.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  });
});

