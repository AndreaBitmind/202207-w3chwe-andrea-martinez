import Container from "./components/Container/Container.js";
import PokemonList from "./components/PokemonList/PokemonList.js";
import pokemonsCatch from "./utilities/pokemonAtributes.js";

new Container(document.body);

const container: HTMLElement = document.querySelector(".container");

new PokemonList(container);

pokemonsCatch("https://pokeapi.co/api/v2/pokemon");
