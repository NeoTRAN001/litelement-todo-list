import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

export class TableTodo extends LitElement {
    static get properties() {
        return {
            list: { type: Array },
            todo: { type: String, reflect: true }
        };
    }

    constructor() {
        super();
        this.todo = '';

        if(localStorage.getItem("ToDoListStorage") && localStorage.getItem("ToDoListStorage") != '[]')
            this.list = (JSON.parse(localStorage.getItem("ToDoListStorage")));
        else 
            this.list = [];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        if(name == 'todo') this._addToDoInList(newVal);
    }

    _addToDoInList(content) {
        if(content != '' && content != null) {
            let newId = -1;
    
            if(!(this.list.length < 1))
                this.list.forEach( aToDo => { if(aToDo['id'] > newId) newId = aToDo['id']; });

            this.list = [ ...this.list, { content, id: newId + 1 }];
        }
    }

    _deleteToDo(todo) {
        if(todo != null) this.list = this.list.filter(e => e !== todo);
        else this.list = [];
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }

            .imgRequired {
                width: 25px;
            }

            paper-card {                
                width: 100%;
            }

            .headerCard {
                display: grid;
                grid-template-columns: 87% 13%;
                background-color: #9adc3b;
            }

            .aToDo {
                display: grid;
                grid-template-columns: 95% 5%;
            }

            .text-content {
                hyphens: auto;
            }

            .buttonDelete {
                border: 2px solid rgb(182, 41, 41);
                border-radius: 40px;
                width: 30px;
                height: 30px;
                cursor: pointer;
                color: white;
                background-color: rgb(182, 41, 41);
                margin-top: 1em;
            }
        `;
    }

    render() {
        return html`
            <paper-card>
                <div class="card-content headerCard">
                    <p>ToDo List by Polymer 2</p>
                    <paper-button  @click=${() => this._deleteToDo(null)}><img class="imgRequired" src="https://raw.githubusercontent.com/NeoTRAN001/Svelte-TodoList-build/master/public/img/reBin.png" alt=""></paper-button>
                </div>
                <div class="card-content">
                    ${ this.list.length <= 0 
                        ? html`
                            <paper-card>
                                <div class="card-content aToDo">
                                    <p class="text-content">No hay ningún ToDo</p>
                                </div>
                            </paper-card>
                        `
                        : this.list.map(item => html`
                                <paper-card>
                                    <div class="card-content aToDo">
                                        <p class="text-content"> ${item.content }</p>
                                        <button value="${item.id}" @click=${() => this._deleteToDo(item)} class="buttonDelete">X</button>               
                                    </div>
                                </paper-card>
                        `)
                    }
                </div>
            </paper-card>
        `;
    }
}

customElements.define('table-todo', TableTodo);