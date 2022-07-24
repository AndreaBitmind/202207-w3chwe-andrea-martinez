import { PokemonList, PokemonInfo } from "../types/interfaces";

const url: string = "https://pokeapi.co/api/v2/pokemon/";

const pokemonsCatch = async (apiUrl: string) => {
  const responseCatch = await fetch(apiUrl);
  const pokemonObject = await responseCatch.json();

  const pokemonInfo: Promise<PokemonInfo>[] = pokemonObject.results.map(
    async (pokemon: PokemonList) => {
      const responsePokemonInfo = await fetch(pokemon.results.url);
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

  return resultPromises;
};

pokemonsCatch(url);
