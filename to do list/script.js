const list=document.getElementById("list");
const para=document.getElementById("para");

const inputTask=document.getElementById("task");
function addTask(){
   
    const li = document.createElement("li");
    li.innerHTML = inputTask.value;
    list.appendChild(li);
    inputTask.value="";

}   