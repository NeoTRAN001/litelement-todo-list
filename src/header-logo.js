import { LitElement, html, css } from 'lit-element';

export class HeaderLogo extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
  
            h2 {
                font-family: Arial, Helvetica, sans-serif;
                color: white;
            }
  
            img {
                width: 100px;
            }
        `;
    }

    render() {
        return html`
            <center>
                <img src="https://raw.githubusercontent.com/NeoTRAN001/Svelte-TodoList-build/master/public/img/ico-logo.png" alt="">
                <h2>FrontEnd Test LitElement</h2>
            </center>
        `;
    }
}

customElements.define('header-logo', HeaderLogo);