class RecylatorApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        <div class="container">
    <div class="calculator">
      <h2>Recylator</h2>
      <div class="input-group">
        <label for="Kertas">Kertas/Karton (kg):</label>
        <input class="masuk" type="number" id="Kertas" placeholder="Input the quantity of waste">
      </div>
      <div class="input-group">
        <label for="Plastik">Plastik (kg):</label>
        <input type="number" id="Plastik" placeholder="Input the quantity of waste">
      </div>
      <div class="input-group">
        <label for="Logam">Logam (kg):</label>
        <input type="number" id="Logam" placeholder="Input the quantity of waste">
      </div>
      <div class="input-group">
        <label for="Kaca">Kaca (kg):</label>
        <input type="number" id="Kaca" placeholder="Input the quantity of waste">
      </div>
      <div class="input-group">
        <label for="Elektronik">Elektronik (kg):</label>
        <input type="number" id="Elektronik" placeholder="Input the quantity of waste">
      </div>
      <button onclick="calculatePrice()">Calculate Waste Price</button>
      <p id="result"></p>
    </div>
    <div class="history card">
        <h2>Calculation History</h2>
        <button onclick="clearHistory()">Clear History Calculation</button>
        <table>
          <thead>
            <tr>
              <th>Quantity of Waste (kg)</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody id="historyList"></tbody>
        </table>
      </div>

        `;
  }
}

customElements.define('recylator-bar', RecylatorApp);
