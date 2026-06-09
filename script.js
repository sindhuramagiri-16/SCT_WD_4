const taskList = document.getElementById("taskList");

function addTask(){

const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");

if(taskInput.value.trim()===""){
alert("Enter a task");
return;
}

const li = document.createElement("li");

li.innerHTML = `
<div>
<strong>${taskInput.value}</strong><br>
<small>${taskDate.value}</small>
</div>

<div class="actions">
<button onclick="completeTask(this)">✔</button>
<button onclick="editTask(this)">✏</button>
<button onclick="deleteTask(this)">🗑</button>
</div>
`;

taskList.appendChild(li);

taskInput.value="";
taskDate.value="";
}

function completeTask(btn){
btn.closest("li").classList.toggle("completed");
}

function editTask(btn){

const task = btn.closest("li").querySelector("strong");

const newTask = prompt("Edit Task",task.innerText);

if(newTask){
task.innerText=newTask;
}
}

function deleteTask(btn){
btn.closest("li").remove();
}