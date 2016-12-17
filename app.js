// Practical Javascript
// Todo List
// Version 10

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
        
        this.todos.forEach(function(item) {
          if (item.completed === true) completedTodos++;
        });
      
        this.todos.forEach(function( todo ) {
          if (completedTodos === totalTodos) {
            todo.completed = false;
          } else {
            todo.completed = true;
          }
        });
    }
};

// handles buttons, click events, and user input
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
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
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

// only controls what the user sees and nothing else
var view = {
    displayTodos: function () {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
      
        todoList.todos.forEach(function( todo, index ) {
          var todosLi = document.createElement("li");
          var todoTextWithCompletion = "";
            
          if (todo.completed === true) {
            todoTextWithCompletion = "[X] " + todo.todoText;
          } else {
            todoTextWithCompletion = "[  ] " + todo.todoText;
          }
            
          todosLi.id = index;
          todosLi.textContent = todoTextWithCompletion;
          todosLi.appendChild(this.createDeleteButton());
          todosUl.appendChild(todosLi);
        }, this);
    },
    createDeleteButton: function () {
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'deleteButton';
      return deleteButton;
    },
    setupEventListeners: function () {
      var todosUl = document.querySelector('ul');
      
      todosUl.addEventListener('click', function (event) {
      var elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        var position = parseInt(elementClicked.parentNode.id);
        handlers.deleteTodo(position);
        }
      });  
    },
};

view.setupEventListeners();