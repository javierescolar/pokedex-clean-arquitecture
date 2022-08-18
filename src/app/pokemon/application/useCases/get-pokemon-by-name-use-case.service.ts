import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/base/useCase';
import { PokemonEntity } from '../../domain/pokemon.entity';
import { PokemonRepository } from '../../domain/pokemon.repository';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonByNameUseCaseService
  implements UseCase<string, PokemonEntity>
{
  constructor(private readonly pokemonRespository: PokemonRepository) {}
  execute(params: string): Observable<PokemonEntity> {
    //Toda la lógica
    return this.pokemonRespository.getPokemonByName(params.toLowerCase());
  }
}
