import './sass/index.sass'
import './img/skirt.png'
import './img/girl.png'
import './img/products/1.png'
import './img/products/2.png'
import './img/products/3.png'
import './img/products/4.png'
import './img/products/5.png'
import './img/products/6.png'
import './img/products/7.png'
import './img/products/8.png'
import './img/products/9.png'

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
