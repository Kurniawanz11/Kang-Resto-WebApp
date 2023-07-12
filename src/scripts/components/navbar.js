class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="navigasi-menu">
      <div class="navigasi__content bd-grid">
          <a href="#" class="navigasi__profile">    
              <div class="navigasi__name">Kang<span> Resto</span>
              </div>
          </a>
          <div class="navigasi__menu">
              <ul class="navigasi__list">
                  <li class="navigasi__item"><a href="/" class="navigasi__link active">Home</a></li>
                  <li class="navigasi__item"><a href="#/favorite" class="navigasi__link">Favorite</a></li>
                  <li class="navigasi__item"><a href="https://www.serieswans.com/" class="navigasi__link">Blog</a></li>
                  <li class="navigasi__item"><a href="https://www.linkedin.com/in/mr-kurniawan/" class="navigasi__link">About</a></li>
              </ul>
          </div>
      </div>
  </nav>
        `;
  }
}

customElements.define('nav-bar', Navbar);
