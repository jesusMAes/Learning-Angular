import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService:AuthService,
    private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean  {

      return this.authService.verificaAutenticaciĆ³n()
                      .pipe(
                        tap( estaAutenticado => {
                          if( !estaAutenticado){
                            this.router.navigate(['./auth/login'])
                          }
                        } )
                      )

    //   if(this.authService.auth.id){
    //     return true
    //   }
      
    // console.log('Bloqueado por authguard - canActivate')
    // return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>   {
      return this.authService.verificaAutenticaciĆ³n()
      // if(this.authService.auth.id){
      //   return true
      // }

  // console.log('Bloqueado por authguard - canLoad')
  //   return false;
 }
}
