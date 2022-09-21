class Myfooter extends HTMLElement {


    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="d-flex justify-content-center shadow-lg py-3 text-white mt-5" style="background-color:#25316D">
            <p><small>Copyright &copy; 2022 | Triyono Rifan - SIB Batch 3</small></p>
        </div>
        `
    }
}

customElements.define('my-footer', Myfooter)