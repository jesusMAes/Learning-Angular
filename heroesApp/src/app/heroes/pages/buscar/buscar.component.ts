import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  termino:string = '';
  heroes: Heroe[] = [];

  heroeSeleccionado: Heroe | undefined;

  buscando(){

    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe( heroes => this.heroes = heroes)
  }

  opcionSeleccionada (event:MatAutocompleteSelectedEvent) {
    if(event.option.value ==''){
      this.heroeSeleccionado = undefined
      return
    }
    const heroe: Heroe = event.option.value;

    this.termino = heroe.superhero
    this.heroesService.getHeroe(heroe.id! )
      .subscribe( heroe => this.heroeSeleccionado = heroe)
  }
}