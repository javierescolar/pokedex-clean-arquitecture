import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  PokemonState,
  PokemonStoreService,
} from 'src/app/pokemon/application/pokemon-store.service';
import { Pokemon } from 'src/app/pokemon/domain/pokemon.model';
import { InputComponent } from './input/input.component';
import { NameComponent } from './name/name.component';
import { ScreenComponent } from './screen/screen.component';
import { StatsComponent } from './stats/stats.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ScreenComponent,
    InputComponent,
    StatsComponent,
    NameComponent,
  ],
})
export class PokedexComponent implements OnInit, OnDestroy {
  pokemon$!: Subscription;
  private idPokemon!: number;
  pokemon!: Pokemon;

  constructor(private readonly store: PokemonStoreService) {}
  ngOnDestroy(): void {
    this.pokemon$?.unsubscribe();
  }

  ngOnInit(): void {
    this.store.getPokemon(1);
    this.pokemon$ = this.store.select().subscribe((state) => {
      this.idPokemon = state.idPokemon;
      this.pokemon = state.pokemon!;
    });
  }

  nextPokemon() {
    if (this.idPokemon === 151) return;
    this.store.getPokemon(++this.idPokemon);
  }

  previusPokemon() {
    if (this.idPokemon === 1) return;
    this.store.getPokemon(--this.idPokemon);
  }
}
