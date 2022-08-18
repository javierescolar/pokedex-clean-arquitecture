import { PokemonEntity } from './pokemon.entity';

export class Pokemon implements PokemonEntity {
  id: number;
  name: string;
  weight: number;
  height: number;
  type: string;
  description: string;
  image: URL;
  stats: { name: string; value: number }[];

  constructor(pokemon: Partial<PokemonEntity>) {
    this.id = pokemon.id!;
    this.name = pokemon.name!;
    this.weight = pokemon.weight!;
    this.height = pokemon.height!;
    this.type = pokemon.type!;
    this.description = pokemon.description!;
    this.image = pokemon.image!;
    this.stats = pokemon.stats!;
  }
}
