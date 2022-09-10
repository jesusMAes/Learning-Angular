import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  buscar(termino:string){
    console.log(this.txtBuscar)
    this.txtBuscar.nativeElement.value=''
  }

}
