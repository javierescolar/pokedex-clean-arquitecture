import { TestBed } from '@angular/core/testing';
import { PokemonRepository } from '../../domain/pokemon.repository';
import { MockPokeApiService } from '../../infrastucture/mock/mock-poke-api.service';
import { GetPokemonByNameUseCaseService } from './get-pokemon-by-name-use-case.service';

describe('GetPokemonUseCaseService', () => {
  let service: GetPokemonByNameUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: PokemonRepository, useClass: MockPokeApiService }],
    });
    service = TestBed.inject(GetPokemonByNameUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPokemon(name:string) should return a pokemon', (done) => {
    service.execute('pikachu').subscribe((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });
});
