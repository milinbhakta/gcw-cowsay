import { html, render } from 'lit';
import '../m-wc-figlet.js';

const demo = document.getElementById('demo');

const update = () => {
  const text = document.getElementById('ctext').value;
  const font = document.querySelector('#font option:checked').value;
  render(
    html` <m-wc-figlet .text=${text} .font=${font}> </m-wc-figlet> `,
    demo
  );
};

document.querySelector('#font').addEventListener('change', update);
document.querySelector('#ctext').addEventListener('keyup', update);

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

update();
