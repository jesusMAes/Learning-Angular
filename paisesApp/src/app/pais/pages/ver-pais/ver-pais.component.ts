import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  constructor(
     private activatedRoute: ActivatedRoute,
     private paisService: PaisService
     ) { }


  ngOnInit(): void { 
   this.activatedRoute.params.pipe(
    switchMap((params) => this.paisService.getPaisPorAlpha( params['id'])), tap(console.log)
   )
   .subscribe( resp => {
    console.log(resp)
    this.pais=resp
   })
  }

  pais!:Country;

}
