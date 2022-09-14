import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container {
    margin:10px;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor( 
    private router:Router,
    private authservice:AuthService) { }

  ngOnInit(): void {
  }

  get auth(){
    return this.authservice.auth
  }
  logout(){
    //ir al backend
    //un usuario

    //navegar a la pantalla de heroes
    this.router.navigate(['./auth'])
  }

}
