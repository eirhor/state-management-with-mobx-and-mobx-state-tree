import {action, computed, observable} from "mobx";

export class TodoStore {
    @observable todos = [];

    @computed
    get unfinishedTodoCount() {
        console.log("Computed amount of todo's left");
        return this.todos.filter(todo => !todo.done).length;
    }

    @action
    addTodo(title) {
        this.todos.push(new Todo(title));
    }

    @action
    markAllCompleted() {
        this.todos.forEach(todo => {
            todo.done = true;
        });
    }
}

class Todo {
    id = Math.random(); // pseudo key
    @observable title;

    @observable done = false;

    constructor(title) {
        this.title = title;
    }

    @action
    toggle() {
        this.done = !this.done;
    }
}
