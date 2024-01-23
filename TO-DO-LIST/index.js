let AddTodo = document.getElementById('addToDo');
let ToDoContainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('my_input');
let removeTool = document.getElementById('removeTodo');

AddTodo.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputfield.value;
    ToDoContainer.appendChild(paragraph);
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })
    removeTool.addEventListener('click', function(){
        ToDoContainer.removeChild(paragraph);
})
})
