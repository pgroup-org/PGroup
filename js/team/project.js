const newPhaseDialog = document.querySelector(".container .dialog1-bg");
const newPhaseButton = document.getElementById("new-phase");
const newPhaseCreateButton = document.querySelector(".container .dialog1-bg #create");
const cancelButton = document.querySelector(".container .dialog1-bg #cancel");
var PhaseListLen = document.querySelectorAll(".container .cont-wrap .teams-list li").length;
const PhaseList = document.querySelector(".container .cont-wrap .teams-list");
const newTaskDialog = document.querySelector(".container .dialog2-bg");
const newTaskCreateButton = document.querySelector(".container .dialog2-bg #create");
const taskCancelButton = document.querySelector(".container .dialog2-bg #cancel");
const confirmDeletePhaseDialog = document.querySelector(".container .dialog3-bg");
const deletePhaseButton = document.querySelector(".container .dialog3-bg #cancel");
const cancelDeletePhaseButton = document.querySelector(".container .dialog3-bg #create");
const confirmDeleteTaskDialog = document.querySelector(".container .dialog4-bg");
const deleteTaskButton = document.querySelector(".container .dialog4-bg #cancel");
const cancelDeleteTaskButton = document.querySelector(".container .dialog4-bg #create");

var [target1, target2, target3, arrow, noi, deletePhase, removeTask] = [null, null, null, null, 0, null, null];
// var label = null;

newPhaseButton.addEventListener("click", (e)=>{
  newPhaseDialog.querySelector("input[type=text]").value = "";
  newPhaseDialog.querySelector("textarea").value = "";
  newPhaseDialog.style.display = "flex";
});

newPhaseCreateButton.addEventListener("click", (e)=>{
  var val = newPhaseDialog.querySelector("input[type=text]").value;
  if(val.length !== 0){
    PhaseList.insertAdjacentHTML("beforeend", `
      <li class="list-item"> 
        <div class="top">
          <h2>${val}</h2>  
          <div class="btns">
            <svg id="phase-dropdown" xmlns="http://www.w3.org/2000/svg" class="ionicon phase-toggle" viewBox="0 0 512 512"><title>Chevron Forward Circle</title><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm257.37 0l-84.68-84.69a16 16 0 0122.62-22.62l96 96a16 16 0 010 22.62l-96 96a16 16 0 01-22.62-22.62z"/></svg>
            <svg id="add-phase-task" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Add Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"/></svg>
            <svg id="delete-phase" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z"/></svg>
          </div>                    
        </div>         
        <div class="bottom">
          <form action="">        
          </form>
        </div> 
      </li>
    `);
    newPhaseDialog.style.display = "none";
  } else {
    newPhaseDialog.querySelector("input[type=text]").style.border = "2px solid red";
  }
});
cancelButton.addEventListener("click", (e)=>{
  // e.preventDefault();
  newPhaseDialog.style.display = "none";
});

document.addEventListener("click", (e)=> {

  if(e.target.matches("#phase-dropdown")){
    target1 = e.target.parentElement.parentElement.parentElement.querySelector(".bottom");
    // var display = getComputedStyle(target1).display; 
    var height = getComputedStyle(target1).height; 
    noi = target1.querySelectorAll("form input").length;
    if(height === "0px" && noi !== 0){
      target1.style.height = `${(22*noi)+20}px`;
      target1.style.border = "1px solid var(--blue-clr)";
      e.target.style.transform = "rotate(90deg)";
    } else {
      target1.style.height = "0px";
      target1.style.border = "0px solid var(--blue-clr)";
      e.target.style.transform = "rotate(0deg)";
    }
  } else if(e.target.matches("#phase-dropdown *")){
    target1 = e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".bottom");
    // var display = getComputedStyle(target1).display; 
    var height = getComputedStyle(target1).height; 
    noi = target1.querySelectorAll("form input").length;
    if(height === "0px" && noi !== 0){
      target1.style.height = `${(22*noi)+20}px`;
      target1.style.border = "1px solid var(--blue-clr)";
      e.target.parentElement.style.transform = "rotate(90deg)";
    } else {
      target1.style.height = "0px";
      target1.style.border = "0px solid var(--blue-clr)";
      e.target.parentElement.style.transform = "rotate(0deg)";
    }
  }

  if(e.target.matches("#add-phase-task")){

    // const newTaskButton = e.target;
    target2 = e.target.parentElement.parentElement.parentElement.querySelector(".bottom");
    target3 = target2.querySelector("form");
    // var TaskListLen = document.querySelectorAll(".container .cont-wrap .teams-list li").length;
    // const TaskList = document.querySelector(  ".container .cont-wrap .teams-list");
    arrow = e.target.previousElementSibling;
    noi = target2.querySelectorAll("form input").length + 1;



    // newTaskButton.addEventListener("click", (e)=>{
    if(noi <= 10){
      newTaskDialog.querySelector("input[type=text]#task-title").value = "";
      newTaskDialog.querySelector("input[type=text]#assignment").value = "";
      newTaskDialog.querySelector("textarea").value = "";
      newTaskDialog.querySelector("input[type=text]#task-title").style.border = "1px solid var(--blue-clr)";
      newTaskDialog.querySelector("input[type=text]#assignment").style.border = "1px solid var(--blue-clr)";        
      newTaskDialog.style.display = "flex";
    } else {
      alert("The maximum no. of tasks per phase has been reached\nThe maximum no. is 10 tasks");
    }    
    // });
    


  } 
  else if(e.target.matches("#add-phase-task *")){
    target2 = e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".bottom");
    target3 = target2.querySelector("form");
    arrow = e.target.parentElement.previousElementSibling;
    noi = target2.querySelectorAll("form input").length + 1;
    if(noi <= 10){
      newTaskDialog.querySelector("input[type=text]#task-title").value = "";
      newTaskDialog.querySelector("input[type=text]#assignment").value = "";
      newTaskDialog.querySelector("textarea").value = "";
      newTaskDialog.querySelector("input[type=text]#task-title").style.border = "1px solid var(--blue-clr)";
      newTaskDialog.querySelector("input[type=text]#assignment").style.border = "1px solid var(--blue-clr)";      
      newTaskDialog.style.display = "flex";
    } else {
      alert("The maximum no. of tasks per phase has been reached\nThe maximum no. is 10 tasks");
    }
    // var noi = target.querySelectorAll("form input").length + 1;
    // if(noi <= 10){
    //   target.style.height = `${(22*noi)+20}px`;
    //   target.style.border = "1px solid var(--blue-clr)";
    //   e.target.parentElement.previousElementSibling.style.transform = "rotate(90deg)";
    //   target2.insertAdjacentHTML("beforeend", `
    //     <input type="checkbox" id="task3" name="task3" value="Task 3">
    //     <label for="task3">Task 7 <span class="assign">(assigned to <a href="#">@username</a>)</span></label><br>    
    //   `)  
    // } else {
    //   alert("The maximum no. of tasks per phase has been reached\nThe maximum no. is 10 tasks");
    // }
  }

  if(e.target.matches("#delete-phase")){
    deletePhase = e.target.parentElement.parentElement.parentElement;
    confirmDeletePhaseDialog.style.display = "flex";
  } 
  else if(e.target.matches("#delete-phase *")){
    deletePhase = e.target.parentElement.parentElement.parentElement.parentElement;
    confirmDeletePhaseDialog.style.display = "flex";
  }

  if(e.target.matches("#remove-task")){
    removeTask = e.target.parentElement;
    arrow = e.target.parentElement.parentElement.parentElement.previousElementSibling.querySelector("#phase-dropdown");
    confirmDeleteTaskDialog.style.display = "flex";
  } 
  else if(e.target.matches("#remove-task *")){
    removeTask = e.target.parentElement.parentElement;
    arrow = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.querySelector("#phase-dropdown");
    confirmDeleteTaskDialog.style.display = "flex";
  }

  if(e.target.matches(".label")){
    var checkedTask = e.target.previousElementSibling;
    checkedTask.checked ? checkedTask.checked = false : checkedTask.checked = true;
  } 
  else if(e.target.matches(".label *:not(a)")){
    var checkedTask = e.target.parentElement.previousElementSibling;
    checkedTask.checked ? checkedTask.checked = false : checkedTask.checked = true;    
  }
});

newTaskCreateButton.addEventListener("click", (e)=>{
  var val1 = newTaskDialog.querySelector("input[type=text]#task-title").value;
  var val2 = newTaskDialog.querySelector("input[type=text]#assignment").value;
  newTaskDialog.querySelector("input[type=text]#task-title").style.border = "1px solid var(--blue-clr)";
  newTaskDialog.querySelector("input[type=text]#assignment").style.border = "1px solid var(--blue-clr)";
  if(val1.length !== 0 && val2.length !== 0){


    

      target2.style.height = `${(22*noi)+20}px`;
      target2.style.border = "1px solid var(--blue-clr)";      
      target3.insertAdjacentHTML("beforeend", `        
        <div class="task-item">
          <input type="checkbox">
          <label class="label">${val1}<span class="assign">(assigned to <a href="#">@${val2}</a>)</span></label>
          <svg id="remove-task" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg>
        </div>        
      `);
      arrow.style.transform = "rotate(90deg)";


    // TaskList.insertAdjacentHTML("beforeend", `
    //   <li class="list-item"> 
    //     <div class="top">
    //       <h2>${val}</h2>  
    //       <div class="btns">
    //         <svg id="phase-dropdown" xmlns="http://www.w3.org/2000/svg" class="ionicon phase-toggle" viewBox="0 0 512 512"><title>Chevron Forward Circle</title><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm257.37 0l-84.68-84.69a16 16 0 0122.62-22.62l96 96a16 16 0 010 22.62l-96 96a16 16 0 01-22.62-22.62z"/></svg>
    //         <svg id="add-phase-task" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Add Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"/></svg>
    //       </div>                    
    //     </div>         
    //     <div class="bottom">
    //       <form action="">        
    //       </form>
    //     </div> 
    //   </li>
    // `);
    newTaskDialog.style.display = "none";
  } else if (val1.length === 0){
    if(val2.length === 0){
      newTaskDialog.querySelector("input[type=text]#task-title").style.border = "2px solid red";
      newTaskDialog.querySelector("input[type=text]#assignment").style.border = "2px solid red";
    } else {
      newTaskDialog.querySelector("input[type=text]#task-title").style.border = "2px solid red";
    }    
  } else {
    newTaskDialog.querySelector("input[type=text]#assignment").style.border = "2px solid red";
  }
});

taskCancelButton.addEventListener("click", (e)=>{
  // e.preventDefault();
  newTaskDialog.style.display = "none";
});


deletePhaseButton.addEventListener("click", (e)=>{
  deletePhase.remove();
  confirmDeletePhaseDialog.style.display = "none";
});

cancelDeletePhaseButton.addEventListener("click", (e)=>{
  confirmDeletePhaseDialog.style.display = "none";
});

deleteTaskButton.addEventListener("click", (e)=>{
  var tempTask = removeTask.parentElement.parentElement;
  var h = Number((getComputedStyle(tempTask).height).slice(0, -2));
  if(h > 42){
    removeTask.parentElement.parentElement.style.height = `${h-22}px`;
  } else {
    removeTask.parentElement.parentElement.style.height = `0px`;
    removeTask.parentElement.parentElement.style.border = "0px solid var(--blue-clr)";
    arrow.style.transform = "rotate(0deg)";
  }
  removeTask.remove();
  confirmDeleteTaskDialog.style.display = "none";
});

cancelDeleteTaskButton.addEventListener("click", (e)=>{
  confirmDeleteTaskDialog.style.display = "none";
});

// filter / search 
document.addEventListener("click", (e) => {
  if(e.target.matches(".container .cont-wrap .upper-row form input[type=submit]")){
    e.preventDefault();
    var input, filter, div, ul, li, a, i;
    input = document.getElementById("search-field");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".container .cont-wrap .teams-list");
    li = ul.querySelectorAll("li");
    for (i = 0; i < li.length; i++) {
      var item = li[i].querySelector(".top h2");
      var txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
});