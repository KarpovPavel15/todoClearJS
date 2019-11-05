import './style.css';
import printMe from './print.js';

function component() {
    const wrapper = document.createElement('div');
    
    const info = document.createElement('div');
    const btn = document.createElement('button');

    info.innerHTML = ['Hello', 'webpack'].join(' ');
    info.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    wrapper.appendChild(btn);
    wrapper.appendChild(info);
    return wrapper;
}

document.body.appendChild(component());