"use strict";

const textInput = document.getElementById("ftext");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (textInput.value.trim() === "") {
        window.alert("Você não digitou nada");
        return;
    } 
    
    const listItem = document.createElement("li");
    listItem.textContent = textInput.value;
    
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "\u00D7";
    listItem.appendChild(deleteButton);
    
    listContainer.appendChild(listItem);
    saveData();
    
    textInput.value = "";
}


listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadTasks() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
}

loadTasks();
