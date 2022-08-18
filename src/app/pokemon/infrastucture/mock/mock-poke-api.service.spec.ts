import { TestBed } from '@angular/core/testing';

import { MockPokeApiService } from './mock-poke-api.service';

describe('MockPokeApiService', () => {
  let service: MockPokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockPokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllPokemons() should return an array of pokemos greater than 0', (done) => {
    service.getAllPokemons().subscribe((result) => {
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });

  it('getPokemon(id:number) should return a pokemon', (done) => {
    service.getPokemon(25).subscribe((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });
});
