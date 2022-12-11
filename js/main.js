const navMenuItems = document.querySelectorAll(".container header .nav-menu li a");
const sections = document.querySelectorAll(".container main section");
const main = document.querySelector(".container main");

// navMenuItems.forEach((item) =>{
//   item.addEventListener("click", (e) => {
//     item.parentElement.parentElement.querySelector(".active").classList.remove("active");
//     item.classList.add("active");
//   });
// });

function activeMenu(){
  // var len = sections.length;

  // console.log("len =", len);

  // console.log("--len:", 0);
  // console.log("window.scrollY:", window.scrollY);
  // console.log("sections[0]:", sections[0]);
  // console.log("len && window.scrollY <= sections[len].offsetTop:", window.scrollY <= sections[1].offsetTop);

  // console.log("0:", sections[0].offsetTop);
  // console.log("1:", sections[1].offsetTop);
  // console.log("2:", sections[2].offsetTop);
  // console.log("3:", sections[3].offsetTop);

  // console.log("AHMED");
  // console.log(sections[0].offsetHeight);
  // console.log("AHMED");
  console.log(main.scrollTop);
  var len = sections.length - 1;
  while(len >= 0){
    if(main.scrollTop < (sections[len].offsetHeight * (len+1))){
      console.log("len =", len);
      console.log("main.scrollTop =", main.scrollTop);
      // console.log("len && window.scrollY =", len && window.scrollY);
      // console.log("sections[len] =", sections[len]);
      console.log("(sections[len].offsetHeight * (len+1)) =", (sections[len].offsetHeight * (len+1)));
      console.log("====================================================");
  
      navMenuItems.forEach((item) => {item.classList.remove("active")});
      navMenuItems[len].classList.add("active");
    }
    len--;
  }

  // for(var len = sections.length - 1; len >= 0 && window.scrollY < (sections[len].offsetHeight * (len+1)); len--){
  //   console.log("len =", len);
  //   console.log("window.scrollY =", window.scrollY);
  //   // console.log("len && window.scrollY =", len && window.scrollY);
  //   // console.log("sections[len] =", sections[len]);
  //   console.log("(sections[len].offsetHeight * (len+1)) =", (sections[len].offsetHeight * (len+1)));
  //   console.log("====================================================");

  //   navMenuItems.forEach((item) => {item.classList.remove("active")});
  //   navMenuItems[len].classList.add("active");
  // }
  // while(--len && window.scrollY < sections[len].offsetTop){

  //   // console.log("--len =", len);
  //   // console.log("window.scrollY =", window.scrollY);
  //   // console.log("--len && window.scrollY =", len && window.scrollY);
  //   // console.log("sections[len] =", sections[len]);
  //   // console.log("sections[len].offsetTop =", sections[len].offsetTop);

  //   navMenuItems.forEach((item) => {item.classList.remove("active")});
  //   navMenuItems[len].classList.add("active");
  //   // len--;
  // }
}

activeMenu();
main.addEventListener("scroll", activeMenu);