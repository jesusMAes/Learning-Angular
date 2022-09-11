import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor(private http: HttpClient){
    //get historial de busqueda del local storage
    this._historial=JSON.parse(localStorage.getItem('historial')!) || []
    
    //get resultados para pintarlos
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
    
  }

  private apiKey: string = 'Nw77jidkgketHBpXsk7CUWopM2D9hN4j';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = []

  public resultados: Gif[] = []
  
  get historial (){ 
    return [...this._historial];
  }

  buscarGifs (query: string){

    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10)
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)
    

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search?`,{params})
      .subscribe( (resp) => {

        this.resultados = resp.data;
        //guarda en local para persistencia
        localStorage.setItem('historial', JSON.stringify(this._historial))

        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      })
   
  }
  
}
