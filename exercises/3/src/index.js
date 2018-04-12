import * as React from 'react';
import { render } from 'react-dom';

import { TodoStore } from './TodoStore';
import { TodoListView } from './TodoListView';

const store = new TodoStore();

render(<TodoListView store={store} />, document.getElementById('root'));

store.addTodo('Get Coffee');
store.addTodo('Write simpler code');
