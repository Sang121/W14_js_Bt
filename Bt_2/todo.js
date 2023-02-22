var Todo = /** @class */ (function () {
    function Todo(date) {
        this.work = [];
        this.date = date;
    }
    Todo.prototype.addWork = function (works) {
        this.work.push(works);
        console.log("Added ".concat(works, " to ").concat(this.date));
    };
    Todo.prototype.getWorks = function () {
        return this.work;
    };
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.addTodoList = function (todo) {
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var t = _a[_i];
            if (t.date == todo.date) {
                console.log("add \t ".concat(todo.date, " ").concat(todo.getWorks(), "\t  error,tr\u00F9ng date:").concat(t.date, "  "));
                return;
            }
        }
        this.todos.push(todo);
        console.log("Added Todo: ".concat(todo.date));
        console.log("Works: ".concat(todo.getWorks().join(', '), " "));
    };
    TodoList.prototype.displayTodos = function () {
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var todo = _a[_i];
            console.log("Các việc cần phải làm :");
            console.log(todo.date);
            console.log(todo.getWorks());
        }
    };
    return TodoList;
}());
var todo1 = new Todo("1/1/2023");
todo1.addWork("Chơi game");
todo1.addWork("Ngủ");
console.log(todo1);
var todo2 = new Todo("2/1/2023");
todo2.addWork("Chơi game");
todo2.addWork("Ăn");
var todo3 = new Todo("2/1/2023");
todo3.addWork("Ngủ");
todo3.addWork("Ăn");
var todoList = new TodoList();
todoList.addTodoList(todo1);
todoList.addTodoList(todo2);
todoList.addTodoList(todo3);
console.log(todoList.displayTodos());
