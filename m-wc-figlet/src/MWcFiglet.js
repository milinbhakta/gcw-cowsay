import { html, css, LitElement } from 'lit';
import figlet from 'https://jspm.dev/figlet';

figlet.defaults({
  fontPath: 'https://cdn.jsdelivr.net/npm/figlet@1.5.2/fonts',
});

export class MWcFiglet extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  static get properties() {
    return {
      text: { type: String, reflect: true },
      rendered_text: { type: String, reflect: true },
      font: { type: String, reflect: true },
    };
  }

  updated(changed) {
    if (changed.has('text') || changed.has('font')) {
      figlet(this.text, this.font, (err, data) => {
        if (err) {
          this.rendered_text = 'something went wrong...';
          return;
        }
        this.rendered_text = data;
      });
    }
  }

  render() {
    return html`<pre>${this.rendered_text ?? 'Not Loading!!'}</pre>`;
  }
}
