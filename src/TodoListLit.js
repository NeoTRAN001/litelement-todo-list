import { LitElement, html, css } from 'lit-element';
import './header-logo';
import './add-todo';
import './table-todo';

export class TodoListLit extends LitElement {
  static get properties() {
    return {
      atodo: { type: String }
    };
  }

  constructor() {
    super();

    this.atodo = ''
    this.addEventListener('AddToDo', (e) => { 
      this.atodo = e.detail.content;
      setTimeout(() => { this.atodo = '' }, 50);
    });
  }
  
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        width: 50%;
        margin: auto;
      }
    `;
  }

  render() {
    return html`
      <header-logo></header-logo>

      <div class="container">
        <add-todo></add-todo>
        <table-todo .todo="${this.atodo}"></table-todo>
      </div>
    `;
  }
}
