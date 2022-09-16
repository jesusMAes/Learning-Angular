import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from '../../../../../ts-intro/src/ejercicios/06DesestructuraParametros';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('miFormulario') miFormulario!: NgForm ;

  initForm = {
    producto: 'rtx',
    precio: 10,
    existencias:10
  }

  guardar(){
    console.log('posteo exitoso')
    this.miFormulario.resetForm({
      producto: 'algo',
      precio: 0,
      existencias: 0
    })
  }

  nombreValido(){
    return this.miFormulario?.controls['producto']?.invalid &&
            this.miFormulario.controls['producto']?.touched
  }

  precioValido(): boolean{
    
    return this.miFormulario?.controls['precio']?.value < 0
  }

}
