import './sass/index.sass'
import './img/skirt.png'
import './img/girl.png'

const elm = document.querySelector('#range');
console.log(elm);
const container = elm.parentNode;
const values = elm.getAttribute('data-values').split(' ');

values.forEach(function (value, i, values) {
  const rangePart = elm.cloneNode();
  rangePart.type = 'range';
  rangePart.removeAttribute('data-values');
  rangePart.value = value;
  rangePart = container.insertBefore(rangePart, elm);
});

elm.remove();
