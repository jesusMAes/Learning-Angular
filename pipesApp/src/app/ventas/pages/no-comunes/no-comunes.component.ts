import { Component, OnInit, NgModule } from '@angular/core';
import { interval } from 'rxjs';

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
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Actualemente tenemos 1 cliente esperando',
    '=2': 'Actualmente tenemos 2 clientes esperando',
    'other': 'Actualmente tenemos # clientes esperando'

  }

  cambiarCliente (){
    if(this.nombre === 'susana'){
      this.nombre= 'fernando';
      this.genero = 'masculino'
    }else{
      this.nombre = 'susana';
      this.genero = 'femenino'
    }
  }

  borrarCliente(){
    this.clientes.pop()
  }

  //keyvaluepair
  persona = {
    nombre: 'Fernando',
    edad: 35,
    dirección: 'Ottawa, Canadá'
  }

  //jsonpipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data de promise')
    }, 2000)
  });
}
