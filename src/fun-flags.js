import { LitElement, html, css } from 'lit';
import './data/GetData.js';
import './components/MainHeader.js';

class FunFlags extends LitElement {
  static properties = {
    countries: { type: Array },
    filteredCountries: { type: Array },
    inputValue: { type: String },
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--fun-flags-background-color);
    }

    main {
      flex-grow: 1;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.countries = [];
    this.filteredCountries = [];
    this.inputValue = '';
    this.addEventListener('ApiData', e => {
      this.dataFormat(e.detail.data);
    });
  }

  render() {
    return html`
      <get-data url="https://restcountries.com/v3.1/all"></get-data>
      <main-header
        logoURL="https://www.pngall.com/wp-content/uploads/2017/03/Rainbow-Flag.png"
        logoAlt="Rainbow flag"
        headline="Fun with flags"
      ></main-header>
      <main>
        <p>Edit <code>src/FunFlags.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>
    `;
  }
}

customElements.define('fun-flags', FunFlags);
