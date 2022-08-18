import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { PokemonEntity } from '../../domain/pokemon.entity';
import { PokemonRepository } from '../../domain/pokemon.repository';
import { ResponseAllPokemons } from './dto/allPokemons.dto';
import { PokemonPokeApiDto } from './dto/pokemon.dto';
import { MapperPokeapiService } from './mapper-pokeapi.service';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService implements PokemonRepository {
  private readonly urlBase: string = 'https://pokeapi.co/api/v2';
  constructor(
    private readonly http: HttpClient,
    private readonly mapper: MapperPokeapiService
  ) {}
  getPokemonByName(name: string): Observable<PokemonEntity> {
    return this.http
      .get<PokemonPokeApiDto>(`${this.urlBase}/pokemon/${name}`)
      .pipe(map(this.mapper.mapFrom));
  }

  getAllPokemons(): Observable<PokemonEntity[]> {
    return this.http
      .get<ResponseAllPokemons>(`${this.urlBase}/pokemon?limit=151`)
      .pipe(
        map((response) =>
          response.results.map((result) => this.mapper.mapFromResult(result))
        )
      );
  }
  getPokemon(id: number): Observable<PokemonEntity> {
    return this.http
      .get<PokemonPokeApiDto>(`${this.urlBase}/pokemon/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }
}
