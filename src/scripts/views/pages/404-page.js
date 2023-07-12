const PageNotFound = {
  async render() {
    return `
    <section class="page-eror-container">
    <section class="eror-img"></section>
    <section class="eror-page">
        <h1>Page Not Found</h1>
       <p class="message">
       404 Hai Kak Halaman yang di cari Tidak Ada , kembali ke home ya
       </p>
       <a href="/" class="btn">Go to Homepage</a></section></section>
          `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
  },

};

export default PageNotFound;
