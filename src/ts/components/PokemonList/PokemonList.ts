import { Component as InterfaceComponent } from "../../types/interfaces.js";
import Component from "../Component/Component.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonList extends Component implements InterfaceComponent {
  constructor(parent: HTMLElement) {
    super(parent, "main-list", "ul");

    const getPokemons = async () => {
      const response = await fetch(apiUrl);
      const pokemonObject = await response.json();
      const pokemonArray = await [...pokemonObject.results];
      return pokemonArray;
    };

    getPokemons();
  }
}
export default PokemonList;
