console.log("inside app.js")

const fs = require('fs')
const todos = require("./todo.js")
const _ = require("lodash")
const yargs = require("yargs")

const argv = yargs.argv;
var command = argv._[0];
console.log('Running Command: ', command);

if (command == "addTodo") {
    todos.addTodo(argv.title);
}
else if (command === "deleteTodo") {
    var todoDeleted = todos.deleteTodo(argv.title);
    var msg = todoDeleted ? 'Todo was deleted' : 'Todo not found';
    console.log(msg);

}
else if ( command === "readTodo") {
    var todo = todos.readTodo(argv.title);
    if(todo){
        console.log("To do was found");
        todos.logTodo(todo);
    }
    else{
        console.log("todo not found")
    }
}

else if (command === 'listTodos') {
    var allTodos = todos.listTodos();
    console.log(`Printing ${allTodos.length} todo(s).`);
    allTodos.forEach((todo) => todos.logTodo(todo));
}

else {
    console.log("Invalid command")
}

//console.log(todo.addtodo());

/*
fs.appendFile("file.txt", "writing... ", (error) => {console.log(error)});
console.log("Written succssfully");
*/