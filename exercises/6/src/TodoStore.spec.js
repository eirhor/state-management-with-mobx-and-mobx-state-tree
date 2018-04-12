import { getSnapshot } from 'mobx-state-tree';
import { TodoStore } from './TodoStore';

test("it should be able to toggle all todo's", () => {
    const store = TodoStore.create({
        todos: [
            {
                id: 1,
                title: 'Get coffee'
            },
            {
                id: 2,
                title: 'Learn MST',
                done: true
            }
        ]
    });

    expect(store.unfinishedTodoCount).toBe(1);
    store.markAllCompleted();
    expect(store.unfinishedTodoCount).toBe(0);
    expect(getSnapshot(store)).toEqual({
        todos: [{ done: true, id: 1, title: 'Get coffee' }, { done: true, id: 2, title: 'Learn MST' }]
    });
    // N.B.: it would be neater to use `.toSnapshot()`, but that doesn't work atm in code sandbox
    // expect(getSnapshot(store)).toMatchSnapshot();
});
