import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonStoreService } from 'src/app/pokemon/application/pokemon-store.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <input
        type="text"
        #search
        class="input-search"
        placeholder="Buscar pokemon..."
        (keydown.enter)="searchPokemon()"
      />
    </section>
  `,
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @ViewChild('search') input!: ElementRef;

  constructor(private store: PokemonStoreService) {}

  searchPokemon() {
    const value = this.input.nativeElement.value;
    if (value === '') return;
    this.store.getPokemonByName(value);
    this.input.nativeElement.value = '';
  }
}
