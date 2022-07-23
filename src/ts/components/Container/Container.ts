import { Component as InterfaceComponent } from "../../types/interfaces.js";
import Component from "../Component/Component.js";

class Container extends Component implements InterfaceComponent {
  constructor(parent: HTMLElement) {
    super(parent, "container", "section");

    this.render();
  }

  render(): void {
    const html = `
    <h1 class="title">Pokemon List</h1>
    `;
    this.element.innerHTML = html;
  }
}

export default Container;
