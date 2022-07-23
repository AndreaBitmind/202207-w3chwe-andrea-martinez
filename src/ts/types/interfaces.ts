export interface Component {
  element: HTMLElement;
  render?: () => void;
  addListeners?: () => void;
}

export interface PokemonList {
  name: string;
  url: string;
}
export type PokemonArray = PokemonList[];
