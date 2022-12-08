const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const addTaskButton = document.getElementById("add-task-btn");
const listBox = document.getElementById("bookmark_list");
import { FakeConsole } from './console.js'
const form = document.getElementById("bmForm")
const form2 = document.getElementById("bmForm2")
const fConsole = new FakeConsole()

let todoArray = [];

function postBM() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    text.value = text.value.replace(/\s/g, "")
    if(!text2.value.startsWith("https://" || "http://") && text2.value !== "") {text2.value = "https://" + text2.value};
    if(text.value !== "" && text2.value !== "") {todoArray.push(text.value + " " + text2.value);}
    text2.value = ""
    let a = text.value;
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    if(a !== "") {displayTodo();}
    
}

export function encode(string) {
  return __uv$config.prefix + __uv$config.encodeUrl(string)
}

addTaskButton.addEventListener("click", async event => {
    postBM()
   });
form.addEventListener("submit", async event => {
    var text = document.getElementById(`text`); var text2 = document.getElementById(`text2`); if(text.value !== '' && text2.value !== '') {dialog.classList.remove('active')}
    postBM()
   });
   form2.addEventListener("submit", async event => {
    var text = document.getElementById(`text`); var text2 = document.getElementById(`text2`); if(text.value !== '' && text2.value !== '') {dialog.classList.remove('active')}
    postBM()
   });
   function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    let htmlCode = "";
    


    todoArray.forEach((list, ind) => {
        htmlCode += `<div class='bookmark'>
        <a class="bookmark-title" href='${encode(list.split(' ')[1])}'>${list.split(' ')[0]}</a>
        <br>
        <h4 class="bookmark-url">${list.split(' ')[1]}</h4>
        <button onclick='deleteTodo(${ind})' class='bm-delete'><img src="src/assets/images/iconmonstr-trash-can-1.svg"></button>
     </div>`;
    });
    listBox.innerHTML = htmlCode;
}
function deleteTodo(ind) {
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    todoArray.splice(ind, 1);
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
   }
displayTodo()

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
