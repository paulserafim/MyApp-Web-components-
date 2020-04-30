import {LitElement, html, css} from 'lit-element';

class AppFooter extends  LitElement {

    static get styles() {
        return css`
        header {
            background: dodgerblue;
            color:white;
            padding:2rem;
        }
        `;
    }
    static get properties() {
        return {
            title: {type:String},
        };
    }
    render() {
        return html`
            <footer>
             Copyright &copy; ${this.year}
            </footer>
        `;
    }

}

window.customElements.define('app-footer', AppFooter);