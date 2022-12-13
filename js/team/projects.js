const newProjectDialog = document.querySelector(".container .dialog-bg");
const newProjectButton = document.getElementById("new-project");
const newProjectCreateButton = document.getElementById("create");
const cancelButton = document.getElementById("cancel");
const projectList = document.querySelector(".container .cont-wrap .projects-list");


newProjectButton.addEventListener("click", (e)=>{
  newProjectDialog.querySelector("input[type=text]").value = "";
  newProjectDialog.querySelector("textarea").value = "";
  newProjectDialog.style.display = "flex";
});

newProjectCreateButton.addEventListener("click", (e)=>{
  var val = newProjectDialog.querySelector("input[type=text]").value;
  if(val.length !== 0){
    projectList.insertAdjacentHTML("beforeend", `
      <li class="list-item">          
        <a href="${'./projects/project.html'}">${newProjectDialog.querySelector("input[type=text]").value}</a>
      </li>
    `);
    newProjectDialog.style.display = "none";
  } else {
    newProjectDialog.querySelector("input[type=text]").style.border = "2px solid red";
  }
});
cancelButton.addEventListener("click", (e)=>{
  newProjectDialog.style.display = "none";
});

// filter / search 
document.addEventListener("click", (e) => {
  if(e.target.matches(".container .cont-wrap .upper-row form input[type=submit]")){
    e.preventDefault();
    var input, filter, div, ul, li, a, i;
    input = document.getElementById("search-field");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".container .cont-wrap .projects-list");
    li = ul.querySelectorAll("li");
    for (i = 0; i < li.length; i++) {
      var item = li[i].querySelector("a");
      var txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
});