import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/base/useCase';

import { PokemonEntity } from '../../domain/pokemon.entity';
import { PokemonRepository } from '../../domain/pokemon.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllPokemonsUseCaseService
  implements UseCase<void, PokemonEntity[]>
{
  constructor(private readonly pokemonRespository: PokemonRepository) {}
  execute(params: void): Observable<PokemonEntity[]> {
    return this.pokemonRespository.getAllPokemons();
  }
}
