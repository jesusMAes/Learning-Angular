import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
})
export class LoginComponent {

  constructor( 
    private fb:FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  miFormulario: FormGroup =this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  login(){
    console.log(this.miFormulario.value)
    const {email, password} = this.miFormulario.value
    this.authService.login(email, password)
        .subscribe( ok => {
          if(ok === true){
            this.router.navigateByUrl('/dashboard')
          }else {
            //TODO mostrar mensaje de error
          }
        });
  }
}
