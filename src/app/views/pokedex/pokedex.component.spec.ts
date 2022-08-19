import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Observable } from 'rxjs';
import { PokemonStoreService } from 'src/app/pokemon/application/pokemon-store.service';
import { GetPokemonUseCaseService } from 'src/app/pokemon/application/useCases';
import { Pokemon } from 'src/app/pokemon/domain/pokemon.model';
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

  it('nextPokemon() toHaveBeenCalled when button.btn-next has clicked', fakeAsync(() => {
    component.pokemon = new Pokemon({});
    fixture.detectChanges();
    spyOn(component, 'nextPokemon');
    let button =
      fixture.debugElement.nativeElement.querySelector('button.btn-next');
    button.click();
    tick();
    expect(component.nextPokemon).toHaveBeenCalled();
  }));

  it('previusPokemon() toHaveBeenCalled when button.btn-previus has clicked', fakeAsync(() => {
    component.pokemon = new Pokemon({});
    component.idPokemon = 2;
    fixture.detectChanges();
    spyOn(component, 'previusPokemon');
    let button =
      fixture.debugElement.nativeElement.querySelector('button.btn-previus');
    button.click();
    tick();
    expect(component.previusPokemon).toHaveBeenCalled();
  }));

  it('when idPokemon === 151 button.btn-next disabled is true', () => {
    component.pokemon = new Pokemon({});
    component.idPokemon = 151;
    fixture.detectChanges();

    let button: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('button.btn-next');

    expect(button.disabled).toBeTruthy();
  });

  it('when idPokemon === 1 button.btn-previus disabled is true', () => {
    component.pokemon = new Pokemon({});
    component.idPokemon = 1;
    fixture.detectChanges();
    let button: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('button.btn-previus');
    expect(button.disabled).toBeTruthy();
  });

  it('when idPokemon === 26  previusPokemon() is called and store emit new value', (done) => {
    component.pokemon = new Pokemon({});
    component.idPokemon = 26;
    fixture.detectChanges();
    component.previusPokemon();
    service.select().subscribe((result) => {
      expect(result.idPokemon).toEqual(25);
      done();
    });
  });

  it('when idPokemon === 25  nextPokemon() is called and store emit new value', (done) => {
    component.pokemon = new Pokemon({});
    component.idPokemon = 25;
    fixture.detectChanges();
    component.nextPokemon();
    service.select().subscribe((result) => {
      expect(result.idPokemon).toEqual(26);
      done();
    });
  });
});
