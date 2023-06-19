class FooterApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          
    <footer class="footer">
        <div class="container">
            <p>&copy; 2023 Studi Independent Cycle 4 C23-M4095, All Rights Reserved</p>
        </div>
    </footer>
          
          `;
  }
}
customElements.define('foot-bar', FooterApp);
