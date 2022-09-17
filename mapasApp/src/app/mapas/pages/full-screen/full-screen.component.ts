import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl' 

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
    #mapa{
      width:100%;
      height:100vh;
    }
  `]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ -1.129887,37.980064 ],
    zoom: 17
    });

  }

}
