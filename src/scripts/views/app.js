import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, hero,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    let url = UrlParser.parseActiveUrlWithCombiner();
    if (!(url in routes)) {
      window.location.hash = '#/404';
      url = UrlParser.parseActiveUrlWithCombiner();
    }
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
