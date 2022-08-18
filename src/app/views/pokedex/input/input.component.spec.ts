import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonStoreService } from 'src/app/pokemon/application/pokemon-store.service';
import { GetPokemonByNameUseCaseService } from 'src/app/pokemon/application/useCases/get-pokemon-by-name-use-case.service';
import { PokemonRepository } from 'src/app/pokemon/domain/pokemon.repository';
import { MockPokeApiService } from 'src/app/pokemon/infrastucture/mock/mock-poke-api.service';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
      providers: [
        PokemonStoreService,
        GetPokemonByNameUseCaseService,
        { provide: PokemonRepository, useClass: MockPokeApiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
