import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent{
  pokemonList: Pokemon[] = POKEMONS;

  //Si pokemonSelected est de type Pokemon, il vaut true
  //Si pokemonSelected est de type undefined, il vaut false
  pokemonSelected: Pokemon|undefined; 

  selectPokemon(pokemon: Pokemon){

    const pokemonFound: Pokemon|undefined = this.pokemonList.find(pokemonFound => pokemonFound.id == +pokemon.id);

    if(pokemonFound){
      // équivalent à console.log("Vous avez cliqué sur le pokémon " + pokemonFound.name);  (ES5)
      console.log(`Vous avez cliqué sur le pokémon ${pokemonFound.name}`); 
      this.pokemonSelected = pokemonFound;
    }
    else{
      console.log(`Vous avez demandé un pokémon qui n'existe pas`); 
      this.pokemonSelected = pokemonFound;
    }
  }
}
