class Todo{
    date:string;
    work:Array<string>=[];

    constructor(date:string){
        this.date=date; 
    }
    addWork(works:string){
        this.work.push(works); 
        console.log(`Added ${works} to ${this.date}`);
    }
    getWorks(){
        return this.work;   
    }
}

class TodoList {
    todos: Array<Todo> = [];
  
    addTodoList(todo: Todo) {
        for(let t of this.todos){
        
            if(t.date==todo.date){
                console.log(`add \t ${todo.date} ${todo.getWorks()}\t  error,trùng date:${t.date}  `)
                return;
            }
        }
      this.todos.push(todo);
      console.log(`Added Todo: ${todo.date}`);
      console.log(`Works: ${todo.getWorks().join(', ')} `);
            
        }

    displayTodos(){
        for(let todo of this.todos){
            console.log("Các việc cần phải làm :");
            
            console.log(todo.date);
            console.log(todo.getWorks());
        }
    }
    



  }
let todo1 = new Todo("1/1/2023");
todo1.addWork("Chơi game");
todo1.addWork("Ngủ");
console.log(todo1);

let todo2 = new Todo("2/1/2023");
todo2.addWork("Chơi game");
todo2.addWork("Ăn");
let todo3 = new Todo("2/1/2023");
todo3.addWork("Ngủ");
todo3.addWork("Ăn");

let todoList = new TodoList();
todoList.addTodoList(todo1);
todoList.addTodoList(todo2);
todoList.addTodoList(todo3);
console.log(todoList.displayTodos());

