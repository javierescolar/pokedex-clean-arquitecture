import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonStoreService } from 'src/app/pokemon/application/pokemon-store.service';
import { GetPokemonUseCaseService } from 'src/app/pokemon/application/useCases';
import { PokemonRepository } from 'src/app/pokemon/domain/pokemon.repository';
import { MockPokeApiService } from 'src/app/pokemon/infrastucture/mock/mock-poke-api.service';

import { PokedexComponent } from './pokedex.component';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;
  let service: PokemonStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexComponent],
      providers: [
        PokemonStoreService,
        GetPokemonUseCaseService,
        { provide: PokemonRepository, useClass: MockPokeApiService },
      ],
    }).compileComponents();
    service = TestBed.inject(PokemonStoreService);
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
