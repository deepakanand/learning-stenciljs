import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'search-movie',
  //styleUrl: 'my-component.css',
  shadow: false
})
export class SearchMovie {

  @Prop() url: string;

  @State() searchText: string = '';

  @State() results:string = '0 search results';

  handleSubmit(e) {
    e.preventDefault();
    var searchStr = e.target.querySelector('.search-text').value;
    this.searchText = searchStr;
    var url = this.url;
    fetch(`${url}${searchStr}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        this.results = myJson.Actors;
      }.bind(this));
  }

  render() {
    return (
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input class = "search-text" type = "text" value = {this.searchText}></input>
        <input type = "submit">Search</input>
      </form>
        <div>{this.results}</div>
      </div>
    );
  }
}
