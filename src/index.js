import 'babel-polyfill';
import './styles.css';
import { h, app } from 'hyperapp';

const mountPoint = document.getElementById('app');

const state = {
  count: 0
};

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
};

const view = (state, actions) => (
  <div class="app-root">
    <h1>Hyperapp!</h1>
    <h2>state.count: {state.count}</h2>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
);

app(state, actions, view, mountPoint);
