const todoList = [];

function addTodoList(text) {
    todoList.push(text);
}

function deleteTodo() {
    todoList.pop();
}

deleteTodo();

addTodoList('밥먹기');
addTodoList('운동하기');