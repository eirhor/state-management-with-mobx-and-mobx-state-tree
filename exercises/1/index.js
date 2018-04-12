import { observable, autorun } from 'mobx';

const todo = observable.box('Learn MobX Basics');
const done = observable.box(false);

const onClick = () => {
    done.set(!done.get())
};

const render = () => {
    document.getElementById('app').innerHTML = `
        <h2>${todo.get()} ${done.get()}</h2>
    `;
};

autorun(render);

document.getElementById('toggle').addEventListener('click', onClick);
