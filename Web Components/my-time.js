export class MyTime extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        //  this.hour12 = this.attributes[0];
        this.hour12 = JSON.parse(this.getAttribute("hour12"))
        console.log(this.hour12);

        this.timerId = setInterval(() => {
            this.innerHTML = `<h1>
            ${new Date()
            .toLocaleTimeString("en-US", { hour12: this.hour12 })}</h1>  <hr>`;
        }, 995);
    }


    disconnectedCallback() {
        clearInterval(this.timerId);
    }
}