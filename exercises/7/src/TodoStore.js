import { types, getParent, destroy } from 'mobx-state-tree';

export const Todo = types
    .model('Todo', {
        id: types.optional(types.number, () => Math.random()), // pseudo key
        title: '',
        done: false
    })
    .actions(self => ({
        toggle() {
            self.done = !self.done;
        },
        changeTitle(title) {
            self.title = title;
        },
        remove() {
            // actions on a child are not allowed by default to
            // modify anything in a parent,
            // so we delegate this removal up
            getParent(self, 2).removeTodo(self);
        }
    }));

export const TodoStore = types
    .model('TodoStore', {
        todos: types.optional(types.array(Todo), [])
    })
    .views(self => ({
        get unfinishedTodoCount() {
            return self.todos.filter(todo => !todo.done).length;
        }
    }))
    .actions(self => ({
        addTodo(todo) {
            self.todos.push(todo);
        },
        removeTodo(todo) {
            destroy(todo);
        },
        markAllCompleted() {
            self.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }));
