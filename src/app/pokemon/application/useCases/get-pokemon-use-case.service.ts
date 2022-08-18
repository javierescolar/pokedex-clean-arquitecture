import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/base/useCase';
import { PokemonEntity } from '../../domain/pokemon.entity';
import { PokemonRepository } from '../../domain/pokemon.repository';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonUseCaseService
  implements UseCase<number, PokemonEntity>
{
  constructor(private readonly pokemonRespository: PokemonRepository) {}
  execute(params: number): Observable<PokemonEntity> {
    //Toda la lógica
    return this.pokemonRespository.getPokemon(params);
  }
}
