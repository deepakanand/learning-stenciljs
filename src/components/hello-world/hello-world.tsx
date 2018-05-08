import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'hello-world',
  //styleUrl: 'my-component.css',
  shadow: false
})
export class HelloWorld {

  @Prop() name: string;

  render() {
    return (
      <div>
        Hello, {this.name}! I'm StencilJS.
      </div>
    );
  }
}
