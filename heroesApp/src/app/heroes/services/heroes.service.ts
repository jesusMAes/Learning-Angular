import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http : HttpClient) { }

  private baseUrl:string = environment.baseUrl
  getHeroes (){
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroe(id:string){
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  }

  getSugerencias (termino: string) : Observable<Heroe[]> {

    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`)
  }

  agregarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe)
  }

  actualizarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe)
  }

  borrarHeroe( id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
  }


}
