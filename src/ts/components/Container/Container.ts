import { Component as IntfceComponent } from "../../types/interfaces.js";
import Component from "../Component/Component.js";

/* const apiUrl = "https://pokeapi.co/api/v2/pokemon/"; */

class Container extends Component implements IntfceComponent {
  constructor(parent: HTMLElement) {
    super(parent, "container", "section");

    this.render();
  }

  render(): void {
    const html = `
    <h1 class="title">Pokemon List</h1>
    <ul class="main-list"></ul>
    `;
    this.element.innerHTML = html;
    /*     new KittenList(this.element.querySelector(".main-content"), this.kitten); */
  }
}

export default Container;
