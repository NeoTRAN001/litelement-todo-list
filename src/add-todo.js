import { LitElement, html, css} from 'lit-element';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

export class AddTodo extends LitElement {

    sendValue() {
        let valueInput = this.shadowRoot.querySelector('#inputToDo').value;

        if(valueInput != '') {
            this.dispatchEvent(new CustomEvent('AddToDo', {
                detail: { content: valueInput }, bubbles: true, composed: true
            }));
            this.shadowRoot.querySelector('#inputToDo').value = '';
        }         
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
  
            paper-button {
                color: white;
                background-color: #33ac6d;
                margin-top: 9px;
                width: 96px;
                height: 45px;                
            }
  
            .grid {
                display: grid;
                grid-template-columns: 85% 15%;
            }
        `;
    }

    render() {
        return html`
            <div class="grid">
                <paper-input id="inputToDo" label=":D"></paper-input>
                <paper-button @click="${ this.sendValue }" raised class="indigo">Agregar</paper-button>
            </div>
        `;
      }
}

customElements.define('add-todo', AddTodo);