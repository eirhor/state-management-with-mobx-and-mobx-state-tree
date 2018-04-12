import React from 'react'
import { render } from 'react-dom'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const todo = observable({
    text: 'Learn MobX Basics',
    done: false,
    toggle() {
        this.done = !this.done;
    }
});

function onTodoClick() {
    todo.toggle();
}

const App = observer(() => (
    <div>
        <h2>
            {todo.text} {todo.done ? '(done)' : '(not done)'}
        </h2>
        <button onClick={onTodoClick}>Toggle</button>
    </div>
))

render(<App />, document.getElementById('root'))
