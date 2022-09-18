import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string,
  marker?: mapboxgl.Marker,
  centro?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
   .mapa-container{
    width:100%;
    height:100vh;
    }
    .list-group{
      position:fixed;
      top:20px;
      right:20px;
      z-index:20;
    }
    li{cursor:pointer;}
  `]
})
export class MarcadoresComponent implements AfterViewInit, OnDestroy {

  constructor() { }


  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    })

    // const marker = new mapboxgl.Marker().setLngLat(this.center).addTo(this.mapa) 
    this.leerLocalStorage();
  }

  ngOnDestroy(): void {
     this.guardarMarcadoresLocalStorage()
   }

  mapa!: mapboxgl.Map;
  @ViewChild('mapa') divMapa!: ElementRef;
  zoomLevel: number = 15;
  center: [number, number] = [ -1.129887, 37.980064 ];

  //array de marcadores
  marcadores: MarcadorColor[] = [];


  agregarMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const nuevoMarcador = new mapboxgl.Marker({
      draggable:true,
      color: color
    }).setLngLat(this.center)
          .addTo(this.mapa);

    this.marcadores.push({marker:nuevoMarcador, color:color});

    this.guardarMarcadoresLocalStorage()
  }

  irMarcador(marcador :MarcadorColor){
   this.mapa.flyTo({
    center: marcador.marker!.getLngLat()
   })
  }

  guardarMarcadoresLocalStorage(){

   const lngLatArr: MarcadorColor[] = []
   
    this.marcadores.forEach( m => {
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat()

      lngLatArr.push({
        color:color,
        centro: [lng, lat]
      });
    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr))
  }

  leerLocalStorage(){

    if(!localStorage.getItem('marcadores')){
      return 
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!) 

    lngLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable:true,
      })
      .setLngLat(m.centro! )
      .addTo(this.mapa)

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      })
    })
  }

  borrarMarcador( i: number){
     this.marcadores[i].marker?.remove()
     this.marcadores.splice(i,1);
     this.guardarMarcadoresLocalStorage()
  }

}
