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
    };
  }

  constructor() {
    super();
    this.year = 2020;
  }
  render() {
    return html`
      <app-header title="MyApp">A</app-header>
      <app-content @year-changed=${this._onYearChanged}>B</app-content>
      <app-footer .year=${this.year}></app-footer>
    `;
  }
  _onYearChanged(event) {
    console.log('Hello', event.detail);
    this.year = event.detail.year;
  }
}
