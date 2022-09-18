import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html' 
})
export class AgregarComponent  {

  constructor(private fb:FormBuilder) { }

 

  miFormulario : FormGroup =this.fb.group({
    nombre: ['', Validators.required ]
  }) ;

  tieneError(campo:string){
    return this.miFormulario.get(campo)?.invalid
  }

}
