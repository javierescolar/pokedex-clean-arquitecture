import { TestBed } from '@angular/core/testing';
import { PokemonRepository } from '../../domain/pokemon.repository';
import { MockPokeApiService } from '../../infrastucture/mock/mock-poke-api.service';

import { GetPokemonUseCaseService } from './get-pokemon-use-case.service';

describe('GetPokemonUseCaseService', () => {
  let service: GetPokemonUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PokemonRepository, useClass: MockPokeApiService }],
    });
    service = TestBed.inject(GetPokemonUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPokemon(id:number) should return a pokemon', (done) => {
    service.execute(25).subscribe((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });
});
