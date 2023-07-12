class CustomHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
      <section class="hero-img">
  <div tabindex="0" class="hero__text">
   <h1 class="hero__title">Kang Resto</h1>
   <p class="hero__sub_title">
    Kang Resto makes a variety of food and drinks with Indonesian flavors that you can enjoy with your family or relatives, anytime!
   </p>
   <a href="#main-content" class="btn">Read More</a>
  </div>
  </section>
  </section>
          `;
  }
}

customElements.define('custom-hero', CustomHero);
