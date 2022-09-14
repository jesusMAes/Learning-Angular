import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable,of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( 
    private http:HttpClient) { }

    private baseUrl:string = environment.baseUrl
    private _auth: Auth | undefined;

    // verificaAutenticación ():Observable<boolean>{
    //   if(!localStorage.getItem('token') ){
    //     return of(false);
    //   }

      // return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      //                 .pipe(
      //                   map(auth => {
      //                     return of(true);
      //                   })
      //                 )
     
    // }

    get auth():Auth{
      return {...this._auth!}
    }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                    .pipe(
                      tap(auth => this._auth = auth),
                      tap(auth => localStorage.setItem('token', auth.id))
                      
                    )
  }
}
