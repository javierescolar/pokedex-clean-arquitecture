import { TestBed } from '@angular/core/testing';
import { GetPokemonUseCaseService } from '../application/useCases';
import { PokemonRepository } from '../domain/pokemon.repository';
import { MockPokeApiService } from '../infrastucture/mock/mock-poke-api.service';

import { PokemonStoreService } from './pokemon-store.service';

describe('PokemonStoreService', () => {
  let service: PokemonStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetPokemonUseCaseService,
        { provide: PokemonRepository, useClass: MockPokeApiService },
      ],
    });
    service = TestBed.inject(PokemonStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
