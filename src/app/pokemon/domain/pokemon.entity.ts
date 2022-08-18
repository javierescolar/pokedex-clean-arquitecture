export interface PokemonEntity {
  id: number;
  name: string;
  weight: number;
  height: number;
  type: string;
  description: string;
  image: URL;
  stats: {
    name: string;
    value: number;
  }[];
}
