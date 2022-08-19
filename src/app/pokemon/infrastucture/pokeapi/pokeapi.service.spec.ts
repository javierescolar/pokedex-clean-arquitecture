import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokeapiService } from './pokeapi.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

describe('PokeapiService', () => {
  let service: PokeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPokemon(id:number) should return a pokemon', (done) => {
    service.getPokemon(25).subscribe((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });

  it('getAllPokemons() should return an array of pokemos equal to 151', (done) => {
    service.getAllPokemons().subscribe((result) => {
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toEqual(151);
      done();
    });
  });

  it('getPokemon(99999) should returned HttpErrorResponse with statusCode 404', (done) => {
    service.getPokemon(99999).subscribe({
      error(err: HttpErrorResponse) {
        expect(err).toBeInstanceOf(HttpErrorResponse);
        expect(err.status).toEqual(404);
        done();
      },
    });
  });

  it('getPokemonByName(name:string) should return a pokemon', (done) => {
    service.getPokemonByName('ditto').subscribe((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });

  it('getPokemon("madeUpName") should returned HttpErrorResponse with statusCode 404', (done) => {
    service.getPokemonByName('madeUpName').subscribe({
      error(err: HttpErrorResponse) {
        expect(err).toBeInstanceOf(HttpErrorResponse);
        expect(err.status).toEqual(404);
        done();
      },
    });
  });
});
