import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable } from 'rxjs';
import { GetPokemonUseCaseService } from '../application/useCases';
import { GetPokemonByNameUseCaseService } from '../application/useCases/get-pokemon-by-name-use-case.service';
import { Pokemon } from '../domain/pokemon.model';

export interface PokemonState {
  idPokemon: number;
  pokemon: Pokemon | null;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonStoreService {
  private state$ = new BehaviorSubject<PokemonState>({
    idPokemon: 1,
    pokemon: null,
  });

  constructor(
    private readonly getPokemonUseCase: GetPokemonUseCaseService,
    private readonly getPokemonByNameUseCase: GetPokemonByNameUseCaseService
  ) {}

  select(): Observable<PokemonState> {
    return this.state$.asObservable();
  }

  getPokemon(id: number): void {
    this.getPokemonUseCase.execute(id).subscribe((result) => {
      this.state$.next({ idPokemon: result.id, pokemon: result });
    });
  }

  getPokemonByName(name: string): void {
    this.getPokemonByNameUseCase.execute(name).subscribe((result) => {
      this.state$.next({ idPokemon: result.id, pokemon: result });
    });
  }
}
