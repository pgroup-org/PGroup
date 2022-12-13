const attachButton = document.getElementById("attach");
var file, input = null;

const sendButton = document.getElementById("send-chat-message");
const chatMessageField = document.getElementById("chat-message");
const chatBox = document.getElementById("chatbox");
var lastMsgNum = chatBox.querySelectorAll(".msg-bubble").length;

attachButton.addEventListener("click", (e)=> {
  input = document.createElement('input');
  input.type = 'file';

  input.addEventListener("change", (e)=> {
    file = e.target.files[0]; 
  
    // if(file !== null){ // display file information
    //   console.log(file.name);

    //   var size = (file.size / 1024).toFixed(2);
    //   var sizeLen = size.length - 3;
    //   if(sizeLen <= 3){
    //     console.log(`${Number(size)} KB`);
    //   } else if(sizeLen > 3 && sizeLen <= 6){
    //     console.log(`${Number(size / 1024).toFixed(2)} MB`);
    //   } else if(sizeLen > 6 && sizeLen <= 9){
    //     console.log(`${Number(size / 1024).toFixed(2)} GB`);
    //   } else {
    //     console.log(`file is too big`);
    //   }
    //   console.log(file.type);
    // }
  });
  
  input.click();
});

sendButton.addEventListener("click", (e)=> {
  e.preventDefault();
  var val = chatMessageField.value;
  if(val.length !== 0){
    chatBox.insertAdjacentHTML("afterbegin", `
      <div class="msg-bubble this-user" id="m${++lastMsgNum}">
        <div class="reply"></div>
        <div class="msg">${val}</div>
      </div>
    `)
    chatMessageField.value = "";
  }
});

document.addEventListener("keyup", (e)=> {
  if(e.key === "Enter"){
    chatMessageField.value = "";
  }
})

