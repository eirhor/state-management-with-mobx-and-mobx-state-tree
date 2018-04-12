import * as React from 'react';
import { render } from 'react-dom';
import { onSnapshot } from 'mobx-state-tree';

import { TodoStore } from './TodoStore';
import { TodoListView } from './TodoListView';

const initialState = localStorage.getItem('store');

const store = TodoStore.create(initialState ? JSON.parse(initialState) : {});

onSnapshot(store, snapshot => {
    localStorage.setItem('store', JSON.stringify(snapshot));
});

render(<TodoListView store={store} />, document.getElementById('root'));
