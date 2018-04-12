import * as React from 'react';
import { observer } from 'mobx-react';

import { Header } from './Header';

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

const Todo = observer(({ todo }) => (
    <li key={todo.id}>
        <input type="checkbox" checked={todo.done} onClick={todo.toggle.bind(todo)} />
        {todo.title}
    </li>
));
