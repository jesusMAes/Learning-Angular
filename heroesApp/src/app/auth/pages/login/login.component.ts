import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor( 
    private router:Router,
    private authService: AuthService) { }

  login(){
    //ir al backend
    //un usuario
    this.authService.login()
        .subscribe(resp => {
          console.log(resp)

          if(resp.id){
            //navegar a la pantalla de heroes
            this.router.navigate(['./heroes'])
          }
        })


  }

}
