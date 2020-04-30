//this will define a web component
//this will be the class definition
//in a vanilla development we would have exended HTMLElemment
import {LitElement, html, css} from 'lit-element';
import './AppHeader';
import './AppContent';
import './AppFooter';



export class AppMain extends  LitElement {

    render() {
        return html`
        <app-header title="MyApp">A</app-header>
        <app-content>B</app-content>
        <app-footer year="2020"></app-footer>
        `;
    }

}