var input_list = document.getElementById('newTask');
var mylist = document.getElementById('in_list');

function add(){
    mylist.insertAdjacentHTML('beforeend', '<li>' + input_list.value + '<span class="click" onclick="remove(this)">X</span> </li>');
}

function remove(task){
    task.parentElement.style.textDecoration = "line-through";
}