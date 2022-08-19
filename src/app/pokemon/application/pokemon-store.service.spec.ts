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

  it('Observable should returned pikachu when something called to getPokemon(25)', (done) => {
    service.getPokemon(25);
    service.select().subscribe((result) => {
      expect(result.idPokemon).toEqual(25);
      expect(result.pokemon).toBeTruthy();
      expect(result.pokemon?.name.toLowerCase()).toEqual('pikachu');
      done();
    });
  });

  it('Observable should returned pikachu when something called to getPokemonByName("pikachu")', (done) => {
    service.getPokemonByName('pikachu');
    service.select().subscribe((result) => {
      expect(result.idPokemon).toEqual(25);
      expect(result.pokemon).toBeTruthy();
      expect(result.pokemon?.name.toLowerCase()).toEqual('pikachu');
      done();
    });
  });
});
