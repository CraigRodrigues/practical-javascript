// PSJ - V9

// V9 Requirements

// There should be an li element for every todo
// Each li element should show .todoText
// Each li element should show .completed

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

// handles buttons, click events, and user input
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

// controls what the user sees
var view =  {
    displayTodos: function () {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++) {
            var todosLi = document.createElement("li");
            var todoTextWithCompletion = "";
            var todo = todoList.todos[i]; // to cut down on typing and enchance readability
            
            if (todo.completed === true) {
                todoTextWithCompletion = "[X] " + todo.todoText;
            } else {
                todoTextWithCompletion = "[  ] " + todo.todoText;
            }
            
            todosLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todosLi);
        }
    }
};