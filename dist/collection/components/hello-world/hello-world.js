export class HelloWorld {
    render() {
        return (h("div", null,
            "Hello, ",
            this.name,
            "! I'm StencilJS."));
    }
    static get is() { return "hello-world"; }
    static get properties() { return { "name": { "type": String, "attr": "name" } }; }
}
