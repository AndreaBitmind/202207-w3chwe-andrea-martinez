import { Component as InterfaceComponent } from "../../types/interfaces.js";
import Component from "../Component/Component.js";

class PokemonList extends Component implements InterfaceComponent {
  constructor(parent: HTMLElement) {
    super(parent, "main-list", "ul");
  }
}

export default PokemonList;
