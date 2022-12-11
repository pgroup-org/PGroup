const newMemberDialog = document.querySelector(".container .dialog-bg");
const newMemberButton = document.getElementById("new-member");
const newMemberAddButton = document.querySelector(".container .dialog-bg #add");
const cancelButton = document.querySelector(".container .dialog-bg #cancel");
const memberListLen = document.querySelectorAll(".container .cont-wrap .teams-list li").length;
const memberList = document.querySelector(".container .cont-wrap .teams-list")
const rollSelect = newMemberDialog.querySelector(".container .dialog-bg select#roll");
var membersList = {
  "username": "Fname Lname",
  "username1": "First User",
  "username2": "Second User",
  "username3": "Third User",
  "username4": "Forth User",
  "username5": "Fifth User",
  "username6": "Sixth User",
  "username7": "Seventh User",
  "username8": "Eighth User",
  "username9": "Ninth User",
  "username10": "Tenth User",
}
memberEdit = null;
const memberEditDialog = document.querySelector(".container .dialog2-bg");
const memberEditSaveButton = document.querySelector(".container .dialog2-bg #save");
const memberEditCancelButton = document.querySelector(".container .dialog2-bg #cancel");
var existingMemberRoll = null;
var existingMemberUsername = null;
var numberOfOwners = 1;
var updateOwner = true;

const memberRemoveDialog = document.querySelector(".container .dialog3-bg");
const memberRemoveButton = document.querySelector(".container .dialog3-bg #cancel");
const memberCancelRemoveButton = document.querySelector(".container .dialog3-bg #create");

function objectKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

newMemberButton.addEventListener("click", (e) =>{
  newMemberDialog.querySelector("input[type=text]#member-username").value = "";
  newMemberDialog.querySelector("select#roll").value = "";
  newMemberDialog.querySelector("input[type=text]#member-username").style.border = "1px solid var(--blue-clr)";
  newMemberDialog.querySelector("select#roll").style.border = "1px solid var(--blue-clr)";
  rollSelect.style.color = "rgb(13 65 89 / 60%)";
  newMemberDialog.style.display = "flex";
});
rollSelect.addEventListener("change", (e)=> {
  if(rollSelect.value.length === 0){
    rollSelect.style.color = "rgb(13 65 89 / 60%)";
  } else {
    rollSelect.style.color = "var(--blue-clr)";
  }
});

function member(member){
  existingMemberUsername = objectKey(membersList, member.querySelector("h2").innerText);
  existingMemberRoll = member.querySelector("strong.owner");
  memberEditDialog.querySelector("input[type=text]#member-username").value = existingMemberUsername;
  if(existingMemberRoll !== null){
    memberEditDialog.querySelector("select#roll").value = "owner";
  } else {
    memberEditDialog.querySelector("select#roll").value = "team-member";
  }
  memberEditDialog.style.display = "flex";
}

document.addEventListener("click", (e)=> {
  if(e.target.matches(".teams-list .list-item #member-edit")){
    memberEdit = e.target.parentElement;
    member(memberEdit);
  } else if(e.target.matches(".teams-list .list-item #member-edit *")){
    memberEdit = e.target.parentElement.parentElement;
    member(memberEdit);
  }

  if(e.target === newMemberAddButton){
    var val1 = newMemberDialog.querySelector("input[type=text]#member-username").value;
    var val2 = newMemberDialog.querySelector("select#roll").value;
    newMemberDialog.querySelector("input[type=text]#member-username").style.border = "1px solid var(--blue-clr)";
    newMemberDialog.querySelector("select#roll").style.border = "1px solid var(--blue-clr)";
    if(val1.length !== 0 && val2.length !== 0){
      val1.charAt(0) === "@" ? val1 = val1.slice(1) : null;
      if(val2 === "owner"){
        val2 = '<strong class="owner">&nbsp;&nbsp;(owner)</strong>';
        numberOfOwners++;
        updateOwner = true;
      } else {
        val2 = "";
      }
      if(membersList[val1] !== undefined){ // username is exist
        memberList.insertAdjacentHTML("beforeend", `
          <li class="list-item">
            ${'<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Person Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z"/></svg>'}
            <h2>${membersList[val1]}</h2>${val2}
            <svg id="member-edit" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Settings</title><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <svg id="remove-member" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg>
          </li>      
        `);
        newMemberDialog.style.display = "none";
      } else{ // username is not exist
        alert("The entered username is not exist\nPlease make sure you entered the correct username and try again");
      }
  
    } else if (val1.length === 0){
      if(val2.length === 0){
        newMemberDialog.querySelector("input[type=text]#member-username").style.border = "2px solid red";
        newMemberDialog.querySelector("select#roll").style.border = "2px solid red";
      } else {
        newMemberDialog.querySelector("input[type=text]#member-username").style.border = "2px solid red";
      }    
    } else {
      newMemberDialog.querySelector("select#roll").style.border = "2px solid red";
    }    
  } else if(e.target === memberEditSaveButton){
    var val2 = memberEditDialog.querySelector("select#roll").value;
    if(val2 === "owner"){
      val2 = '<strong class="owner">&nbsp;&nbsp;(owner)</strong>';
      existingMemberRoll !== null ? null: numberOfOwners++;
      updateOwner = true;
    } else {
      if(numberOfOwners > 1){ // check number of owners 
        val2 = "";
        existingMemberRoll !== null ? numberOfOwners--: null;
      } else {
        updateOwner = false;
      }
    }
    var fullname = memberEdit.querySelector("h2").innerText;
      if(updateOwner){
        memberEdit.innerHTML = `
          ${'<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Person Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z"/></svg>'}
          <h2>${fullname}</h2>${val2}
          <svg id="member-edit" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Settings</title><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>     
          <svg id="remove-member" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg>
        `;
        memberEditDialog.style.display = "none";
      } else {
        alert("Sorry, could not change this member roll\nA team must have at least one owner");
      }
  } else if (e.target === memberRemoveButton){
    var isOwner = memberEdit.querySelector("strong.owner") !== null;
    if(numberOfOwners === 1 && isOwner){ // trying to remove the last owner
      alert("Sorry, could not remove this member\nA team must have at least one owner");
    } else if (isOwner) { // removing an owner
      memberEdit.remove();
      numberOfOwners--;
      memberRemoveDialog.style.display = "none";
    } else { // removing an member
      memberEdit.remove();
      memberRemoveDialog.style.display = "none";
    }
  }

  if(e.target.matches(".teams-list .list-item #remove-member")){
    memberEdit = e.target.parentElement;
    memberRemoveDialog.style.display = "flex";
  } else if(e.target.matches(".teams-list .list-item #remove-member *")){
    memberEdit = e.target.parentElement.parentElement;
    memberRemoveDialog.style.display = "flex";
  }

  if(e.target === cancelButton){
    newMemberDialog.style.display = "none";
  } else if(e.target === memberEditCancelButton){
    memberEditDialog.style.display = "none";
  } else if(e.target === memberCancelRemoveButton){
    memberRemoveDialog.style.display = "none";
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
      var item = li[i].querySelector("h2");
      var txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
});

// // filter / search 
// document.addEventListener("keyup", (e) => {
// // document.addEventListener("click", (e) => {
//   if(e.target.matches("#search-field")){
//   // if(e.target.matches(".container .cont-wrap .upper-row form input[type=submit]")){
//     // e.preventDefault();
//     // if name_input_field is empty after keyup 
//     // (that means, user deleted the chosen account_item from dropdown_list)
//     // if(e.target.value === ""){
//     //   if(e.target.parentElement.parentElement.matches(".acc-row.l1")){
//     //     deactivateInput(1);
//     //   } else if(e.target.parentElement.parentElement.matches(".acc-row.l2")){
//     //     deactivateInput(2);
//     //   }
//     // }

//     var input, filter, div, ul, li, a, i;
//     input = e.target;
//     // input = document.getElementById("search-field");
//     filter = input.value.toUpperCase();
//     ul = document.querySelector(".container .cont-wrap .teams-list");
//     li = ul.querySelectorAll("li");
//     for (i = 0; i < li.length; i++) {
//       var item = li[i].querySelector("h2");
//       var txtValue = item.textContent || item.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }
// });


