import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', 
})
export class RegisterComponent  {

  constructor(
    private fb:FormBuilder,
    private router:Router) { }

  miFormulario:FormGroup = this.fb.group({
    nombre: ['test2', [Validators.required]],
    email: ['test2@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  registro(){
    console.log(this.miFormulario.value)
    this.router.navigateByUrl('/dashboard')
  }

}
