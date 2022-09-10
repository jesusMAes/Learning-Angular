import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];

  heroeBorrado:string = '';

  borrarHeroe(){
    let borra = this.heroes.shift()
    this.heroeBorrado= borra?.toString() || '';
    //si el retorno de tostring es undefined, le da un string vacío
  }

}
