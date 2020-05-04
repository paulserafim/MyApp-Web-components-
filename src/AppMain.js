//this will define a web component
//this will be the class definition
//in a vanilla development we would have exended HTMLElemment
import { LitElement, html, css } from 'lit-element';
import './AppHeader';
import './AppContent';
import './AppFooter';

export class AppMain extends LitElement {
  static get properties() {
    return {
      year: { type: Number },
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.year = 2020;
    this.title = "My App";
  }
  render() {
    return html`
      <app-header .title=${this.title}></app-header>
      <app-content @data-changed=${this._onDataChanged}></app-content>
      <app-footer .year=${this.year}></app-footer>
    `;
  }
  _onDataChanged(event) {
    console.log('Hello', event.detail);
    this.year = event.detail.year;
    this.title = event.detail.title;
  }
}
