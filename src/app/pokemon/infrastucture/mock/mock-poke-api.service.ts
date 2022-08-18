import { Injectable } from '@angular/core';
import { filter, from, Observable, of } from 'rxjs';
import { PokemonEntity } from '../../domain/pokemon.entity';
import { PokemonRepository } from '../../domain/pokemon.repository';

@Injectable({
  providedIn: 'root',
})
export class MockPokeApiService implements PokemonRepository {
  private pokemons: PokemonEntity[] = [
    {
      id: 25,
      name: 'Pikachu',
      description: 'Es un Pikachu ...',
      height: 4,
      weight: 60,
      type: 'Eléctrico',
      image: new URL(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      ),
      stats: [],
    },
    {
      id: 26,
      name: 'Raichu',
      description: 'Es un Raichu ...',
      height: 8,
      weight: 300,
      type: 'Eléctrico',
      image: new URL(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'
      ),
      stats: [],
    },
  ];

  getAllPokemons(): Observable<PokemonEntity[]> {
    return of(this.pokemons);
  }
  getPokemon(id: number): Observable<PokemonEntity> {
    return from(this.pokemons).pipe(filter((p) => p.id === id));
  }

  getPokemonByName(name: string): Observable<PokemonEntity> {
    return from(this.pokemons).pipe(
      filter((p) => p.name.toLocaleLowerCase() === name.toLocaleLowerCase())
    );
  }
}
