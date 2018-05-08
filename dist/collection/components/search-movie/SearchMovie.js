export class SearchMovie {
    constructor() {
        this.searchText = '';
        this.results = '0 search results';
    }
    handleSubmit(e) {
        e.preventDefault();
        var searchStr = e.target.querySelector('.search-text').value;
        this.searchText = searchStr;
        var url = this.url;
        fetch(`${url}${searchStr}`)
            .then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
            console.log(myJson);
            this.results = myJson.Actors;
        }.bind(this));
    }
    render() {
        return (h("div", null,
            h("form", { onSubmit: (e) => this.handleSubmit(e) },
                h("input", { class: "search-text", type: "text", value: this.searchText }),
                h("input", { type: "submit" }, "Search")),
            h("div", null, this.results)));
    }
    static get is() { return "search-movie"; }
    static get properties() { return { "results": { "state": true }, "searchText": { "state": true }, "url": { "type": String, "attr": "url" } }; }
}
