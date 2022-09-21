class NavbarApp extends HTMLElement {
    constructor() {
        super();
        this.shadowwDOM = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowwDOM.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background-color: white;
                    color: inherit;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    display:flex;
                    justify-content: center;
                    position: fixed;
                    top: 0;
                    z-index:999;
                }
                h2 {
                    padding: 3px;
                }
            </style>
        
            <h2>CockTail App</h2>
        `
    }
}

customElements.define('navbar-app', NavbarApp)