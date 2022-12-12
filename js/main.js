const navMenuItems = document.querySelectorAll(".container header .nav-menu li a");
const sections = document.querySelectorAll(".container main section");
const main = document.querySelector(".container main");

function activeMenu(){
  console.log(main.scrollTop);
  var len = sections.length - 1;
  while(len >= 0){
    if(main.scrollTop < (sections[len].offsetHeight * (len+1))){
      console.log("len =", len);
      console.log("main.scrollTop =", main.scrollTop);
      console.log("(sections[len].offsetHeight * (len+1)) =", (sections[len].offsetHeight * (len+1)));
      console.log("====================================================");
  
      navMenuItems.forEach((item) => {item.classList.remove("active")});
      navMenuItems[len].classList.add("active");
    }
    len--;
  }
}

activeMenu();
main.addEventListener("scroll", activeMenu);