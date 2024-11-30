class SpacerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  setConfig(config) {
    if (config.height === undefined) {
      config.height = '10px';
    }
    this.config = config;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <ha-card style="
        height: ${this.config.height};
        background: none;
        box-shadow: none;
        border: none;
        margin: 0;
        padding: 0;
      ">
      </ha-card>
    `;
  }

  set hass(hass) {
    if (!this.content) {
      this.render();
    }
  }

  getCardSize() {
    return 1;
  }
}

customElements.define('spacer-card', SpacerCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "spacer-card",
  name: "Spacer Card",
  description: "A simple card that adds vertical spacing to your dashboard",
  preview: true
});
