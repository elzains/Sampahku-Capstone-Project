class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          
    <main>
        <div class="container jumbotron">
            <div class="jumbotron text-center">
                <h2 class="display-4 tagline1"><span>Making</span> Waste Management a Breeze</h2>
                <h2 class="display-4 tagline2">Calculating Your Green <span>Impact</span></h2>
                <p class="lead">Sampahku is a calculator application designed to efficiently<br />measure both organic and inorganic waste.</p>
            </div>
        </div>
    </main>
          
          `;
  }
}
customElements.define('jumbotron-app', Jumbotron);
