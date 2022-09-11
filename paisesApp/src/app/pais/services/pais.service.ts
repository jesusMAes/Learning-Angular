import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of} from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  constructor( private http:HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v2/'

  buscarPais(termino:string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`
    
    return this.http.get<Country[]>(url);
  }
}
