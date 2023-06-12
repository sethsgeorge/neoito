console.log("inside todo.js");

const fs = require('fs');

var addTodo = (title) => {
    var todos = [];

    var todo = {
        title
    };

    try {
        var todostring = fs.readFileSync('todos-data.json');
        todos = JSON.parse(todostring)

    }
    catch (e) {

    }

    var duplicatetodo = todos.filter((todo) => todo.title === title)

    if (duplicatetodo.length === 0) {
        todos.push(todo);
        fs.writeFileSync('todos-data.json', JSON.stringify(todos));

    }
};


var deleteTodo = (title) => {
    var todos = fetchTodo();
    var filteredtodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredtodos);
    return todos.length !== filteredtodos.length;

};

var fetchTodo = () => {
    try {
        var todoString = fs.readFileSync('todos-data.json');
        return JSON.parse(todoString)
    }
    catch (e) {
        return [];
    }
};


var saveTodos = (todos) => {
    fs.writeFileSync("todos-data.json", JSON.stringify(todos));
};


var readTodo = (title) => {
    var todos = fetchTodo();
    var filteredtodos = todos.filter( (todo) => todo.title === title)
    return filteredtodos[0]
};

var logTodo = (todo) => {
    console.log('------');
    console.log(`It's title is: ${todo.title}`);
};

var listTodos = () => {
    return fetchTodo();
};

module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    logTodo,
    listTodos
}