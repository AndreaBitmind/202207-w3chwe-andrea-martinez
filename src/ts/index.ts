import Container from "./components/Container/Container.js";
import PokemonList from "./components/PokemonList/PokemonList.js";

new Container(document.body);

const container: HTMLElement = document.querySelector(".container");

new PokemonList(container);
