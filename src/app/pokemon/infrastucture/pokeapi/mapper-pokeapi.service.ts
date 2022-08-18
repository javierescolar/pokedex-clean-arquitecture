import { Injectable } from '@angular/core';
import { Mapper } from 'src/app/core/base/mapper';
import { PokemonEntity } from '../../domain/pokemon.entity';
import { Pokemon } from '../../domain/pokemon.model';
import { Result } from './dto/allPokemons.dto';
import { PokemonPokeApiDto } from './dto/pokemon.dto';

@Injectable({
  providedIn: 'root',
})
export class MapperPokeapiService
  implements Mapper<PokemonPokeApiDto, PokemonEntity>
{
  mapFrom(input: PokemonPokeApiDto): PokemonEntity {
    return new Pokemon({
      id: input.id,
      height: input.height,
      weight: input.weight,
      name: input.name,
      type: input.types && input.types.map((type) => type.type.name).join('/'),
      image:
        input.sprites.other &&
        new URL(input.sprites.other?.['official-artwork'].front_default),
      stats: input.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
    });
  }

  mapFromResult(input: Result): PokemonEntity {
    return new Pokemon({
      name: input.name,
    });
  }
  mapTo(input: PokemonEntity): PokemonPokeApiDto {
    throw new Error('Method not implemented.');
  }
}
