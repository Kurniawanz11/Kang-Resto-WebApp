import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/normalize.css';
import '../styles/spinner.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// components
import './components/navbar';
import './components/hero';
import './components/custom-footer';
// json
// import DATA from '../DATA.json';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// draw app
const app = new App({
  button: document.querySelector('.logo_header', '.bx .bx-menu .header__toggle'),
  drawer: document.querySelector('#navigasi-menu', '.navigasi__menu'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// console.log(DATA);

// Copyright Year
const d = new Date();
const n = d.getFullYear();
document.getElementById('copyrightYear').innerHTML = n;

// Menu Navigasi
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      toggle.classList.toggle('bx-x');
    });
  }
};
showMenu('header-toggle', 'navigasi-menu');

// nav toggle
const navLink = document.querySelectorAll('.navigasi__link');

function linkAction() {
  navLink.forEach((nav) => nav.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach((nav) => nav.addEventListener('click', linkAction));

// getRestaurants(DATA);
