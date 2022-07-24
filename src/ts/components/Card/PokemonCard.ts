import {
  PokemonCard as InterfacePokemonCard,
  Component as IComponent,
} from "../../types/interfaces.js";
import Component from "../Component/Component.js";

class PokemonCard extends Component implements IComponent {
  pokemon;

  constructor(parent: HTMLElement, pokemon: InterfacePokemonCard) {
    super(parent, "pokemon-card", "div");
    this.pokemon = pokemon;
    this.render();
  }

  async render() {
    this.element.innerHTML = `
    <h3>${this.pokemon.name}</h3>
    <ul>
      <li>Moves: ${this.pokemon.moves}</li>
      <li>Height: ${this.pokemon.height}</li>
      <li><img src=${this.pokemon.photo} alt=${this.pokemon.name}></li>
    </ul>`;
  }
}

export default PokemonCard;
