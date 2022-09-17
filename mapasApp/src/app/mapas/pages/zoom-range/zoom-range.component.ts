import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
   .mapa-container{
    width:100%;
    height:100vh;
    }
    .row{
      background-color: white;
      position:fixed;
      bottom:50px;
      left:50px;
      padding:10px;
      border-radius:5px;
      z-index:99;
    }

 `]
})
export class ZoomRangeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
      this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -1.129887,37.980064 ],
      zoom: this.zoomLevel
    })

    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom()
    })
    this.mapa.on('zoomend', () => {
      if(this.mapa.getZoom() >18){
         this.mapa.zoomTo(18)
      }
    })
  }

  mapa!: mapboxgl.Map;
  @ViewChild('mapa') divMapa!: ElementRef;
  zoomLevel: number = 10

  zoomIn(){
    this.mapa.zoomIn()
  }

  zoomOut(){
    this.mapa.zoomOut()
  }

  zoomCambio(input:string){
    this.mapa.zoomTo(Number(input)) 
  }

}
