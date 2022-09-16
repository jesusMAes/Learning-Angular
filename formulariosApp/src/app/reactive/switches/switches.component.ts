import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset(this.persona)

    this.miFormulario.valueChanges.subscribe( form => {
      delete form.condiciones;
      this.persona = form
    })
  }

  miFormulario: FormGroup = this.fb.group({
    genero: ['M',Validators.required ],
    notificaciones: [ false, Validators.required ],
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  guardar(){
    
    const formValue = {...this.miFormulario.value}
    delete formValue.condiciones

    this.persona = formValue
    console.log(formValue)
  }
}
