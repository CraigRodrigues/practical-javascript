// PSJ - V8

// V8 Requirements

// Add working controls for .addTodo
// Add working controls for .changeTodo
// Add working controls for .deleteTodo
// Add working controls for .toggleCompleted

var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log("Your Todo List is Empty!");
        } else {
            console.log("My Todos:");
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log("[X]", this.todos[i].todoText);   
                } else {
                    console.log("[ ]", this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        var todo = this.todos[position];
        todo.todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        
        if (completedTodos === totalTodos) {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

var handlers = {
    displayTodos: function () {
        todoList.displayTodos();
    },
    addTodo: function () {
        var addTodoInputText = document.getElementById("addTodoInputText");
        todoList.addTodo(addTodoInputText.value);
        addTodoInputText.value = "";
    },
    changeTodo: function () {
        var changeTodoInputPosition = document.getElementById("changeTodoInputPosition");
        var changeTodoInputText = document.getElementById("changeTodoInputText");
        
        todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInputText.value);
        
        changeTodoInputPosition.value = "";
        changeTodoInputText.value = "";
    },
    deleteTodo: function () {
        var deleteTodoInputPosition = document.getElementById("deleteTodoInputPosition");
        todoList.deleteTodo(deleteTodoInputPosition.valueAsNumber);
        deleteTodoInputPosition.value = "";
    },
    toggleCompleted: function () {
        var toggleCompletedInputPosition = document.getElementById("toggleCompletedInputPosition");
        todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber);
        toggleCompletedInputPosition.value = "";
    },
    toggleAll: function () {
        todoList.toggleAll();
    }
};