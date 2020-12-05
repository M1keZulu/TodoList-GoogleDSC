var input_list = document.getElementById('newTask');
var mylist = document.getElementById('in_list');

function add(){
    mylist.insertAdjacentHTML('beforeend', '<li class="fade-in">' + input_list.value + '<span class="click" onclick="strike(this)">X</span> <span class="remove" onclick="remove(this)">remove</span></li>');
}

function strike(task){
    task.parentElement.style.textDecoration = "line-through";
}

function remove(task){
    task.parentElement.className = "fade-out";
    setTimeout(() => {task.parentElement.style.display = "none";}, 2000);
}