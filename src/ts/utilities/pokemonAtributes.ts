import {
  PokemonInfo,
  PokemonCard as InterfacePokemonCard,
} from "../types/interfaces.js";
import PokemonCard from "../components/Card/PokemonCard.js";

const url = "https://pokeapi.co/api/v2/pokemon";

const pokemonsCatch = async (apiUrl: string): Promise<void> => {
  const responseCatch = await fetch(apiUrl);
  const pokemonObject = await responseCatch.json();

  const pokemonInfo: Promise<PokemonInfo>[] = pokemonObject.results.map(
    async (pokemon: InterfacePokemonCard) => {
      const responsePokemonInfo = await fetch(pokemon.url);
      const responsePokemonInfoJson = await responsePokemonInfo.json();

      return {
        ...pokemon,
        photo: responsePokemonInfoJson.sprites.front_default,
        height: responsePokemonInfoJson.height,
        moves: responsePokemonInfoJson.moves[0].move.name,
      };
    }
  );

  const resultPromises = await Promise.all(pokemonInfo);

  resultPromises.forEach((pokemon: any) => {
    new PokemonCard(document.querySelector(".main-list"), pokemon);
  });
};

pokemonsCatch(url);

export default pokemonsCatch;
