import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html' 
})
export class RegistroComponent implements OnInit {

  constructor(
    private fb :FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
    })
  }





  miFormulario : FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern) ] ],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator] ],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required,Validators.minLength(6) ]],
    password2: ['', [Validators.required ] ],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  })

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && 
           this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){

    this.miFormulario.markAllAsTouched()
  }
}
