import { html } from 'lit';
import '../m-wc-figlet.js';

export default {
  title: 'MWcFiglet',
  component: 'm-wc-figlet',
  argTypes: {},
};

function Template({ text, font }) {
  return html` <m-wc-figlet .text="${text}" .font="${font}"></m-wc-figlet> `;
}

export const Regular = Template.bind({});
Regular.args = {
  text: 'Hello World',
  font: 'Standard',
};
