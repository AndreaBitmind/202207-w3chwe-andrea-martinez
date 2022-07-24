export interface Component {
  element: HTMLElement;
  render?: () => void;
  addListeners?: () => void;
}

export interface PokemonList {
  count: number;
  next: string;
  previous: null | string;
  results: {
    name: string;
    url: string;
  };
}
export type PokemonArray = PokemonList[];

export interface PokemonCard {
  name: string;
  pokeHeight: number;
  photo: string;
}

export interface PokemonInfo {
  results: {
    name: string;
    url: string;
    photo: string;
  }[];
}
