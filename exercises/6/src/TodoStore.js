import { observable, computed, action } from 'mobx';
import { types } from 'mobx-state-tree';

export const Todo = types
    .model({
        id: types.identifier(types.number),
        title: types.string,
        done: types.optional(types.boolean, false)
    })
    .actions(self => ({
        toggle() {
            self.done = !self.done;
        }
    }));

export const TodoStore = types
    .model({
        todos: types.optional(types.array(Todo), [])
    })
    .views(self => ({
        get unfinishedTodoCount() {
            console.log("Computed amount of todo's left");
            return self.todos.filter(todo => !todo.done).length;
        }
    }))
    .actions(self => ({
        addTodo(title) {
            self.todos.push({
                id: Math.random(),
                title
            });
        },
        markAllCompleted() {
            self.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }));
