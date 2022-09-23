let taskDOM = document.querySelector("#task") 
let listDOM = document.querySelector("#list")
let ulDOM = document.getElementsByTagName("li"); 
let btnDOM = document.querySelector("#liveToastBtn") 
 

for(let index=0; index < ulDOM .length;index++){ 
    let closeButton = document.createElement("span") 
    closeButton.textContent = "\u00D7" 
    closeButton.classList.add("close") 
    closeButton.onclick = removeButton 
    ulDOM[index].append(closeButton)
    ulDOM[index].onclick = check; 
}


btnDOM.addEventListener('click', itemAdd);  


function check(){
  this.classList.toggle("checked"); 
}

function removeButton(){
  this.parentElement.remove();  
}


function itemAdd() {
 
    if (taskDOM.value == "")  {  
    $(".error").toast("show")
  } else {
    $(".success").toast("show")

    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM)
    liDOM.innerHTML = task.value
    taskDOM.value = "";
  
   
    liDOM.onclick = check;
        
     let closeButton = document.createElement("span");
      closeButton.textContent = "\u00D7"
      closeButton.classList.add("close")
      closeButton.onclick = removeButton
        
    liDOM.append(closeButton)
    listDOM.append(liDOM)
    inputElement.value = ("");
      
}
}