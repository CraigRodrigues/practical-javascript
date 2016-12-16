// PSJ - V10

// V10 Requirements

// There should be an li element for every todo
// Each li element should show .todoText
// Each li element should show .completed


// only handles our todo list raw data via an array
var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        var todo = this.todos[position];
        todo.todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
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
    }
};

// only handles user interactions via buttons, click events, and user input
var handlers = {
    addTodo: function () {
        var addTodoInputText = document.getElementById("addTodoInputText");
        todoList.addTodo(addTodoInputText.value);
        addTodoInputText.value = "";
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoInputPosition = document.getElementById("changeTodoInputPosition");
        var changeTodoInputText = document.getElementById("changeTodoInputText");
        
        todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInputText.value);
        
        changeTodoInputPosition.value = "";
        changeTodoInputText.value = "";
        
        view.displayTodos();
    },
    deleteTodo: function () {
        var deleteTodoInputPosition = 0;
        todoList.deleteTodo(deleteTodoInputPosition.valueAsNumber);
        deleteTodoInputPosition.value = "";
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedInputPosition = document.getElementById("toggleCompletedInputPosition");
        todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber);
        toggleCompletedInputPosition.value = "";
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }
};

// only controls what the todo list looks like
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
            
            todoLi.id = i;
            todosLi.textContent = todoTextWithCompletion;
            todosLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todosLi);
        }
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    }
};

var todosUl = document.querySelector("ul");

todosUl.addEventListener(click, function(event) {
    var elementClicked = event.target

    return event.target.parentNode.id;
});