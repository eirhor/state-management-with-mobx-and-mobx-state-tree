import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { clone, applySnapshot } from 'mobx-state-tree';

import { Header } from './Header';
import { TodoEditor } from './TodoEditor';

@observer
export class TodoListView extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <div>
                <Header store={store} />
                <ul>{store.todos.map(todo => <Todo key={todo.id} todo={todo} />)}</ul>
            </div>
        );
    }
}

@observer
class Todo extends React.Component {
    @observable editing = false;
    clone;

    render() {
        const { todo } = this.props;
        return (
            <li key={todo.id}>
                {this.editing === false ? (
                    <React.Fragment>
                        <input type="checkbox" checked={todo.done} />
                        {todo.title}
                        <button onClick={this.handleStartEdit}>✏</button>
                    </React.Fragment>
                ) : (
                    <span>Show TodoEditor here</span>
                )}
            </li>
        );
    }

    handleStartEdit = () => {
        this.editing = true;
    };
}
