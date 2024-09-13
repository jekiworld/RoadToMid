const input = document.getElementById('input');
const button = document.getElementById('button');
const tasks = document.getElementById('tasks');


button.addEventListener('click', function () {
    let task = document.createElement('div');
    task.className = "task";
    task.innerHTML = `${input.value}`;


    let button_delete = document.createElement('button');
    button_delete.className = "delete";
    button_delete.innerHTML = "Удалить";

    button_delete.addEventListener('click', function(){
        task.remove();
        button_delete.remove();
    })


    // document.body.tasks.append(task);
    tasks.append(task);

    tasks.append(button_delete);

    input.value = '';



})




