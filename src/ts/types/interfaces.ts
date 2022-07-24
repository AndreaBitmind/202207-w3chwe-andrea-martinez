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
  height: number;
  moves: string;
  name: string;
  photo: string;
  url: string;
}

export interface PokemonInfo {
  results: {
    name: string;
    url: string;
    photo: string;
    height: number;
    moves: string;
  }[];
}
