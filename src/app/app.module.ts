import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpErrorInterceptorProvider } from './core/interceptors/http-error.interceptor';
import { PokemonRepository } from './pokemon/domain/pokemon.repository';
import { PokeapiService } from './pokemon/infrastucture/pokeapi/pokeapi.service';
import { PokedexComponent } from './views/pokedex/pokedex.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PokedexComponent],
  providers: [
    HttpErrorInterceptorProvider,
    { provide: PokemonRepository, useClass: PokeapiService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
