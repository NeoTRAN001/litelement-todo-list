import { html } from 'lit-html';
import '../src/todo-list-lit.js';

export default {
  title: 'todo-list-lit',
};

export const App = () =>
  html`
    <todo-list-lit></todo-list-lit>
  `;
