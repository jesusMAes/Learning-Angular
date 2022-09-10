import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

  nombre:string = 'Ironman';
  edad:number = 45;

  get nombreCapitalizado (){
    return this.nombre.toUpperCase()
  }

  obtenerNombre ():string{
    return `${ this.nombre} - ${this.edad}`
  }

  cambiarNombre():void {
    this.nombre = 'Spiderman';
    //cambia la propiedad, esto se refleja en todos los sitios donde está esa propiedad
  }

  cambiarEdad ():void {
    this.edad = 30
  }
}