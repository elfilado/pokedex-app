import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})

export class ListPokemonComponent implements OnInit{

  pokemonList: Pokemon[];
  
  //Si pokemonSelected est de type Pokemon, il vaut true
  //Si pokemonSelected est de type undefined, il vaut false
  pokemonSelected: Pokemon|undefined; 

  constructor(private router: Router, private pokemonService: PokemonService){}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }

  selectPokemon(pokemon: Pokemon) {

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
