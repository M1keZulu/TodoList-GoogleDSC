var input_list = document.getElementById('newTask');
var mylist = document.getElementById('in_list');

function add(){
    mylist.insertAdjacentHTML('beforeend', '<li class="fade-in" onclick=strike(this)>' + input_list.value + '<span class="remove" onclick="remove(this)">X</span></li>');
    input_list.value = ""
}

function strike(task){
    task.style.textDecoration = "line-through";
}

function remove(task){
    task.parentElement.className = "fade-out";
    setTimeout(() => {task.parentElement.style.display = "none";}, 2000);
}