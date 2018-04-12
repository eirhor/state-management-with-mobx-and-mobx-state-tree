import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export class Header extends React.Component {
    @observable inputText = '';

    render() {
        const { store } = this.props;
        return (
            <div>
                <DevTools />
                Tasks left: {store.unfinishedTodoCount}
                <br />
                <button onClick={store.markAllCompleted.bind(store)}>Toggle all</button>
                <br />
                New item: <input value={this.inputText} onChange={this.handleInputChange} />
                <button onClick={this.handleCreateTodo}>Add</button>
                <br />
                <hr />
            </div>
        );
    }

    handleInputChange = e => {
        this.inputText = e.target.value;
    };

    handleCreateTodo = () => {
        this.props.store.addTodo(this.inputText);
        this.inputText = '';
    };
}
