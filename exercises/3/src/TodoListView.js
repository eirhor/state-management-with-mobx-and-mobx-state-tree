import { observer } from 'mobx-react';
import * as React from 'react';

import { Header } from './Header';

@observer
export class TodoListView extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <div>
                <Header store={store} />
                <ul>{store.todos.map(todo => <TodoView todo={todo} />)}</ul>
            </div>
        );
    }
}

export const TodoView = observer(({ todo }) => (
    <li>
        <input type="checkbox" checked={todo.done} onClick={todo.toggle.bind(todo)} />
        {todo.title}
    </li>
));
