import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent{
  constructor( private GifsService: GifsService){}
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  buscar(termino:string){
    if(termino.trim().length ===0 ){
      return
    }
    this.GifsService.buscarGifs(termino)
    this.txtBuscar.nativeElement.value=''
  }

}
