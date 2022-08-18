import { TestBed } from '@angular/core/testing';
import { PokemonRepository } from '../../domain/pokemon.repository';
import { MockPokeApiService } from '../../infrastucture/mock/mock-poke-api.service';

import { GetAllPokemonsUseCaseService } from './get-all-pokemons-use-case.service';

describe('GetAllPokemonsUseCaseService', () => {
  let service: GetAllPokemonsUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PokemonRepository, useClass: MockPokeApiService }],
    });
    service = TestBed.inject(GetAllPokemonsUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('execute() should return an array of pokemos greater than 0', (done) => {
    service.execute().subscribe((result) => {
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });
});
