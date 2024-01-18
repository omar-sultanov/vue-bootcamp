const todoText = document.querySelector("#newText")
const addBtn = document.querySelector("#btn")
const list = document.querySelector("#list");

addBtn.addEventListener("click",()=>{
  
    const listElement = document.createElement("li")
    listElement.textContent= todoText.value
      list.append(listElement)
})