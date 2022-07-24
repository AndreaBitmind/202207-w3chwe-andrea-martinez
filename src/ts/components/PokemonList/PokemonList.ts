import {
  Component as InterfaceComponent,
  PokemonArray as InterfacePokemonArray,
} from "../../types/interfaces.js";
import Component from "../Component/Component.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonList extends Component implements InterfaceComponent {
  private pokemonArray: InterfacePokemonArray = [];
  constructor(parent: HTMLElement) {
    super(parent, "main-list", "ul");

    (async () => {
      const response = await fetch(apiUrl);
      const pokemonObject = await response.json();
      this.pokemonArray = await pokemonObject.results;

      this.render();
    })();
  }

  render(): void {
    this.pokemonArray.forEach((pokemonId) => {
      const everyPokemon = document.createElement("li");
      everyPokemon.className = "one-Pokemon";
      this.element.appendChild(everyPokemon);

      const html = `<a href="${pokemonId.results.url}">${pokemonId.results.name}</a>`;

      everyPokemon.innerHTML = html;
    });
  }
}

export default PokemonList;
