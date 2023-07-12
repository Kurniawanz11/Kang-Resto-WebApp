class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
      <ul>
        <li>Copyright © <span id="copyrightYear"></span>- Kang Resto</li>
        <li>Made with <i class="fa-sharp fa-solid fa-heart fa-bounce"></i></i> me - by<cite><b> Kurniawan</b></cite></i></li>
      </ul>
    </footer>
        `;
  }
}

customElements.define('custom-footer', CustomFooter);
