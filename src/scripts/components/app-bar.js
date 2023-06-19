class HeaderApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
    <header>
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaQX8gfCF0U5AStvcJiH2ad52U6eb7DIRLnRhxBIpPpoYiUbk6UZUJNsUg9zyyP0K-yOqYXXvTbZd2--zh8MEe5jNPEH4-FRBo3XzJmP69RdTQJu2udIM-YsHLhHbMNn7Nv_BBvyOt3SZUYcGs7EF9IgVENvjV-sS54wliMz6Jtr8cPVntQAmqjZtXVA/s1600/logos.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>Sampahku</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto"><a class="btn btn-primary btn-sm" href="#" role="button">Get Started</a></div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
        
        `;
  }
}
customElements.define('app-bar', HeaderApp);
