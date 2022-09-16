import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  constructor(private fb:FormBuilder) { }

  miFormulario:FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array( [
      ['metal gear'],
      ['Death Stranding']
    ], Validators.required )
  })

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  esValido(campo:string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }

    this.favoritosArr.push(new FormControl( this.nuevoFavorito.value, Validators.required));
    
    this.nuevoFavorito.reset()
  }

  borrar(i:number){
    this.favoritosArr.removeAt(i)
  }

  guardar(){
    
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }

    console.log(this.miFormulario.value)
  }
}
