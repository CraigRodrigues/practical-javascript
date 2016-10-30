// PSJ - V4

// V4 Requirements

// todoList.addTodo should add objects
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property

var todoList = {
    todos: ["item1", "item2", "item3"],
    displayTodos: function() {
        console.log("My Todos:", this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newItem) {
        this.todos[position] = newItem;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    }
};