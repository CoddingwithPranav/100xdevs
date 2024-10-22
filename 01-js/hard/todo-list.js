class Todo {
    constructor() {
        this.todos = []; // Changed to plural for clarity
    }

    add(todo) {
        this.todos.push(todo);
    }

    remove(indexOfTodo) {
     
          return  this.todos.splice(indexOfTodo, 1);
        
    }

    update(index, updatedTodo) {
      if(index < this.todos.length){
        this.todos[index] = updatedTodo
      }
     }

    getAll() {
        return this.todos;
    }

    get(indexOfTodo) {
     
        return this.todos[indexOfTodo]?this.todos[indexOfTodo] : null ;
    }

    clear() {
        this.todos = [];
    }
}

module.exports = Todo;
