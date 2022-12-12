const newVoteDialog = document.querySelector(".container .dialog-bg");
const newVoteButton = document.getElementById("new-vote");
const newVoteCreateButton = document.getElementById("create");
const cancelButton = document.getElementById("cancel");
const addVoteChoiceButton = document.getElementById("add-vote-choice");
const newVoteChoicesList = document.querySelector(".container .dialog-bg .middle .vote-choices");
var newVoteChoicesListItems = document.querySelectorAll(".container .dialog-bg .middle .vote-choices .choice-item input");
var newVoteChoicesListItemsLen = newVoteChoicesListItems.length;
var voteListLen = document.querySelectorAll(".container .cont-wrap .teams-list li").length;
const voteList = document.querySelector(".container .cont-wrap .teams-list")

var choicesListcurrentState = newVoteChoicesList.innerHTML;


newVoteButton.addEventListener("click", (e)=> {
  newVoteDialog.querySelector("#vote-title").value = "";
  newVoteDialog.querySelector("#vote-question").value = "";
  newVoteDialog.querySelector("input[type=text]#vote-title").style.border = "1px solid var(--blue-clr)";
  newVoteDialog.querySelector("input[type=text]#vote-question").style.border = "1px solid var(--blue-clr)";
  newVoteChoicesListItems.forEach((item) => {
    item.value = "";
  });

  newVoteDialog.style.display = "flex";
});

newVoteCreateButton.addEventListener("click", (e)=> {
  var val1 = newVoteDialog.querySelector("input[type=text]#vote-title").value;
  var val2 = newVoteDialog.querySelector("input[type=text]#vote-question").value;
  var allChoicesFilled = true;
  newVoteDialog.querySelector("input[type=text]#vote-title").style.border = "1px solid var(--blue-clr)";
  newVoteDialog.querySelector("input[type=text]#vote-question").style.border = "1px solid var(--blue-clr)";
  newVoteChoicesListItems = document.querySelectorAll(".container .dialog-bg .middle .vote-choices .choice-item input");
  newVoteChoicesListItems.forEach((item) => {
    item.style.border = "1px solid var(--blue-clr)";
  });  
  if(val1.length !== 0 && val2.length !== 0){
    for(var i = newVoteChoicesListItems.length - 1; i >= 0; i--){
      if(newVoteChoicesListItems[i].value.length === 0){
        newVoteChoicesListItems[i].style.border = "2px solid red";
        allChoicesFilled = false;
        for(var j = i; j >= 0; j--){
          if(newVoteChoicesListItems[j].value.length === 0){
            newVoteChoicesListItems[j].style.border = "2px solid red";
          }          
        }
        break;
      }
    }
    if(allChoicesFilled){
      voteList.insertAdjacentHTML("beforeend", `
        <li class="list-item">          
          <a href="./votes/vote${++voteListLen}.html">${newVoteDialog.querySelector("input[type=text]").value}</a>
        </li>
      `);
      newVoteDialog.style.display = "none";
    }
  } else if (val1.length === 0){
    if(val2.length === 0){
      newVoteDialog.querySelector("input[type=text]#vote-title").style.border = "2px solid red";
      newVoteDialog.querySelector("input[type=text]#vote-question").style.border = "2px solid red";
    } else {
      newVoteDialog.querySelector("input[type=text]#vote-title").style.border = "2px solid red";
    }    
  } else {
    newVoteDialog.querySelector("input[type=text]#vote-question").style.border = "2px solid red";
  }
});

cancelButton.addEventListener("click", (e)=> {
  newVoteDialog.style.display = "none";
  newVoteChoicesList.innerHTML = choicesListcurrentState;
});

addVoteChoiceButton.addEventListener("click", (e)=> {
  if(newVoteChoicesListItemsLen < 10){
    var lastChoice = document.querySelector(".container .dialog-bg .middle .vote-choices .choice-item svg.last-close");
    lastChoice !== null ? lastChoice.classList.remove("last-close"): null;
    newVoteChoicesList.insertAdjacentHTML("afterbegin", `
    <div class="choice-item">
      <h3 class="order">${++newVoteChoicesListItemsLen}</h3>
      <input type="text" name="" id="" placeholder="Choice Title">
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Information Circle</title><path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M220 220h32v116"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 340h88"/><path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"/></svg>        
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon remove-choice last-close" viewBox="0 0 512 512"><title>Close Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg>
    </div>
    `);
  } else {
    alert("The maximum no. of choices per vote has been reached\nThe maximum no. is 10 choices");
  }
});

document.addEventListener("click", (e)=> {
  if(e.target.matches(".container .dialog-bg .middle .vote-choices .choice-item svg.last-close")){

    var lastChoice = e.target.parentElement.nextElementSibling.querySelector("svg.remove-choice");

    console.log("target", e.target);
    console.log("t parent", e.target.parentElement);
    console.log("t parent sibling", e.target.parentElement.nextElementSibling);

    if(lastChoice !== null){
      lastChoice.classList.add("last-close");
    }
    --newVoteChoicesListItemsLen;
    e.target.parentElement.remove();
  } else if(e.target.matches(".container .dialog-bg .middle .vote-choices .choice-item svg.last-close *")){
    var lastChoice = e.target.parentElement.parentElement.nextElementSibling.querySelector("svg.remove-choice");

    console.log("target", e.target);
    console.log("t parent", e.target.parentElement);
    console.log("t parent parent", e.target.parentElement.parentElement);
    console.log("t parent parent sibling", e.target.parentElement.parentElement.nextElementSibling);

    if(lastChoice !== null){
      lastChoice.classList.add("last-close");
    }
    --newVoteChoicesListItemsLen;
    e.target.parentElement.parentElement.remove();
  }
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
