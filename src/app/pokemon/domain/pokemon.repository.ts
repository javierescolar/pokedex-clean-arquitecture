import { Observable } from 'rxjs';
import { PokemonEntity } from './pokemon.entity';

export abstract class PokemonRepository {
  abstract getAllPokemons(): Observable<PokemonEntity[]>;
  abstract getPokemon(id: number): Observable<PokemonEntity>;
  abstract getPokemonByName(name: string): Observable<PokemonEntity>;
}
