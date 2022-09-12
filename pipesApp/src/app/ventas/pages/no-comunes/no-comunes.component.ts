import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  nombre: string = 'susana';
  genero: string = 'femenino';
  inviteMap= {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nplural
  clientes: string[] = ['Maria', 'pedro', 'juan', 'eduardo','fernando']
  clientesMap ={
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'Actualemente tenemos 1 cliente esperando',
    '=2': 'Actualmente tenemos 2 clientes esperando',
    'other': 'Actualmente tenemos # clientes esperando'

  }
}
