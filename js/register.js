var pwHide = document.querySelectorAll("#pwHide");
var pwShow = document.querySelectorAll("#pwShow");

pwHide.forEach((item)=>{
  item.addEventListener("click", (e)=> {
    item.parentElement.querySelector("input").setAttribute("type", "text");
    item.style.display = "none";
    item.parentElement.querySelector("#pwShow").style.display = "inline";
  });
});

pwShow.forEach((item)=>{
  item.addEventListener("click", (e)=> {
    item.parentElement.querySelector("input").setAttribute("type", "password");
    item.style.display = "none";
    item.parentElement.querySelector("#pwHide").style.display = "inline";
  });
});

