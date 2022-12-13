var submit = document.getElementById("submit");
var pwHide = document.getElementById("pwHide");
var pwShow = document.getElementById("pwShow");

submit.addEventListener("click", (e)=> {
  e.preventDefault();
})

pwHide.addEventListener("click", (e)=> {
  pwHide.parentElement.querySelector("input").setAttribute("type", "text");
  pwHide.style.display = "none";
  pwShow.style.display = "inline";
});

pwShow.addEventListener("click", (e)=> {
  pwShow.parentElement.querySelector("input").setAttribute("type", "password");
  pwShow.style.display = "none";
  pwHide.style.display = "inline";
});
